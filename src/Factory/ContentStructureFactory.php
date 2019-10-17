<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Factory;

use CodeRhapsodie\EzDataflowBundle\Model\ContentCreateStructure;
use CodeRhapsodie\EzDataflowBundle\Model\ContentStructure;
use CodeRhapsodie\EzDataflowBundle\Model\ContentUpdateStructure;
use eZ\Publish\API\Repository\ContentService;
use eZ\Publish\API\Repository\Exceptions\NotFoundException;

class ContentStructureFactory
{
    /**
     * @var ContentService
     */
    private $contentService;

    /**
     * ContentStructureFactory constructor.
     *
     * @param ContentService $contentService
     */
    public function __construct(ContentService $contentService)
    {
        $this->contentService = $contentService;
    }

    /**
     * @param array     $data
     * @param string    $remoteId
     * @param string    $language
     * @param string    $contentType
     * @param int|int[] $parentLocationId
     *
     * @return ContentStructure
     *
     * @throws \CodeRhapsodie\EzDataflowBundle\Exception\InvalidArgumentTypeException
     * @throws \eZ\Publish\API\Repository\Exceptions\UnauthorizedException
     */
    public function transform(array $data, string $remoteId, string $language, string $contentType, $parentLocationId): ContentStructure
    {
        try {
            $content = $this->contentService->loadContentByRemoteId($remoteId);

            return ContentUpdateStructure::createForContentId($content->id, $language, $data);
        } catch (NotFoundException $e) {
            //Ignore error
        }

        return new ContentCreateStructure(
            $contentType,
            $language,
            (is_array($parentLocationId)) ? $parentLocationId : [$parentLocationId],
            $data,
            $remoteId
        );
    }
}
