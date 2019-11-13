<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Factory;

use CodeRhapsodie\EzDataflowBundle\Model\ContentCreateStructure;
use CodeRhapsodie\EzDataflowBundle\Model\ContentStructure;
use CodeRhapsodie\EzDataflowBundle\Model\ContentUpdateStructure;
use eZ\Publish\API\Repository\ContentService;
use eZ\Publish\API\Repository\Exceptions\NotFoundException;

final class ContentStructureFactory
{
    public const MODE_INSERT_OR_UPDATE = 1;
    public const MODE_INSERT_ONLY = 2;
    public const MODE_UPDATE_ONLY = 3;
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
     * @param array  $data
     * @param string $remoteId
     * @param string $language
     * @param string $contentType
     * @param mixed  $parentLocations
     * @param int    $mode            One of the constant ContentStructureFactory::MODE_*
     *
     * @return false|ContentStructure
     *
     * @throws \CodeRhapsodie\EzDataflowBundle\Exception\InvalidArgumentTypeException
     * @throws \eZ\Publish\API\Repository\Exceptions\UnauthorizedException
     */
    public function transform(array $data, string $remoteId, string $language, string $contentType, $parentLocations, int $mode = ContentStructureFactory::MODE_INSERT_OR_UPDATE)
    {
        try {
            $content = $this->contentService->loadContentByRemoteId($remoteId);
            if ($mode === static::MODE_INSERT_ONLY) {
                return false;
            }

            return ContentUpdateStructure::createForContentId($content->id, $language, $data);
        } catch (NotFoundException $e) {
            // The content doesn't exist yet, so it will be created.
        }

        if ($mode === static::MODE_UPDATE_ONLY) {
            return false;
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
