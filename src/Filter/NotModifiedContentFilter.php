<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Filter;

use CodeRhapsodie\EzDataflowBundle\Core\FieldComparator\FieldComparatorInterface;
use CodeRhapsodie\EzDataflowBundle\Model\ContentUpdateStructure;
use eZ\Publish\API\Repository\ContentService;
use Psr\Log\LoggerAwareTrait;

/**
 * Filters ContentUpdateStructure that would not result in any actual changes in the content.
 */
class NotModifiedContentFilter
{
    use LoggerAwareTrait;

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
            if (null === $field || !$this->comparator->compare($field, $hash)) {
                // At least one field is different, continue the dataflow.
                return $data;
            }
        }

        // All fields are identical, filter this item out.
        $this->log('info', 'Not modified content skipped', ['id' => $data->getId(), 'remote_id' => $data->getRemoteId()]);

        return false;
    }

    private function log(string $level, string $message, array $context = [])
    {
        if (null === $this->logger) {
            return;
        }
        $this->logger->log($level, $message, $context);
    }
}
