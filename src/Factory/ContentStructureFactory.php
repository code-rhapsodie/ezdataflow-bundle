<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Factory;

use CodeRhapsodie\EzDataflowBundle\Model\ContentCreateStructure;
use CodeRhapsodie\EzDataflowBundle\Model\ContentUpdateStructure;
use Ibexa\Contracts\Core\Repository\ContentService;
use Ibexa\Contracts\Core\Repository\Exceptions\NotFoundException;

final class ContentStructureFactory implements ContentStructureFactoryInterface
{
    /**
     * @var \Ibexa\Contracts\Core\Repository\ContentService
     */
    private $contentService;

    /**
     * ContentStructureFactory constructor.
     */
    public function __construct(ContentService $contentService)
    {
        $this->contentService = $contentService;
    }

    /**
     * @param mixed $parentLocations
     * @param int   $mode            One of the constant ContentStructureFactoryInterface::MODE_*
     *
     * @return false|\CodeRhapsodie\EzDataflowBundle\Model\ContentStructure
     *
     * @throws \CodeRhapsodie\EzDataflowBundle\Exception\InvalidArgumentTypeException
     * @throws \Ibexa\Contracts\Core\Repository\Exceptions\UnauthorizedException
     */
    public function transform(array $data, string $remoteId, string $language, string $contentType, $parentLocations, int $mode = ContentStructureFactoryInterface::MODE_INSERT_OR_UPDATE)
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

        if (self::MODE_UPDATE_ONLY === $mode) {
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
