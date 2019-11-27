<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Filter;

use CodeRhapsodie\EzDataflowBundle\Core\FieldComparator\FieldComparatorInterface;
use CodeRhapsodie\EzDataflowBundle\Model\ContentUpdateStructure;
use eZ\Publish\API\Repository\ContentService;

/**
 * Filters ContentUpdateStructure that would not result in any actual changes in the content.
 */
class NotModifiedContentFilter
{
    /** @var ContentService */
    private $contentService;

    /** @var FieldComparatorInterface */
    private $comparator;

    public function __construct(ContentService $contentService, FieldComparatorInterface $comparator)
    {
        $this->contentService = $contentService;
        $this->comparator = $comparator;
    }

    public function __invoke($data)
    {
        if (!$data instanceof ContentUpdateStructure) {
            return $data;
        }

        if ($data->getId()) {
            $content = $this->contentService->loadContent($data->getId(), [$data->getLanguageCode()]);
        } else {
            $content = $this->contentService->loadContentByRemoteId($data->getRemoteId(), [$data->getLanguageCode()]);
        }

        foreach ($data->getFields() as $identifier => $hash) {
            $field = $content->getField($identifier, $data->getLanguageCode());
            if ($field === null || !$this->comparator->compare($field, $hash)) {
                // At least one field is different, continue the dataflow.
                return $data;
            }
        }

        // All fields are identical, filter this item out.
        return false;
    }
}
