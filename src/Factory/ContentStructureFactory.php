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
     * @param mixed $parentLocations
     *
     * @return ContentStructure
     *
     * @throws \CodeRhapsodie\EzDataflowBundle\Exception\InvalidArgumentTypeException
     * @throws \eZ\Publish\API\Repository\Exceptions\UnauthorizedException
     */
    public function transform(array $data, string $remoteId, string $language, string $contentType, $parentLocations): ContentStructure
    {
        try {
            $content = $this->contentService->loadContentByRemoteId($remoteId);

            return ContentUpdateStructure::createForContentId($content->id, $language, $data);
        } catch (NotFoundException $e) {
            // The content doesn't exist yet, so it will be created.
        }

        return new ContentCreateStructure(
            $contentType,
            $language,
            is_array($parentLocations) ? $parentLocations : [$parentLocations],
            $data,
            $remoteId
        );
    }
}
