<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Content;

use CodeRhapsodie\EzDataflowBundle\Core\Field\ContentStructFieldFillerInterface;
use CodeRhapsodie\EzDataflowBundle\Exception\NoMatchFoundException;
use CodeRhapsodie\EzDataflowBundle\Model\ContentUpdateStructure;
use eZ\Publish\API\Repository\ContentService;
use eZ\Publish\API\Repository\ContentTypeService;
use eZ\Publish\API\Repository\Values\Content\Content;

class ContentUpdater implements ContentUpdaterInterface
{
    /** @var ContentService */
    private $contentService;

    /** @var ContentTypeService */
    private $contentTypeService;

    /** @var ContentStructFieldFillerInterface */
    private $filler;

    public function __construct(ContentService $contentService, ContentTypeService $contentTypeService, ContentStructFieldFillerInterface $filler)
    {
        $this->contentService = $contentService;
        $this->contentTypeService = $contentTypeService;
        $this->filler = $filler;
    }

    /**
     * @throws NoMatchFoundException
     * @throws \eZ\Publish\API\Repository\Exceptions\BadStateException
     * @throws \eZ\Publish\API\Repository\Exceptions\ContentFieldValidationException
     * @throws \eZ\Publish\API\Repository\Exceptions\ContentValidationException
     * @throws \eZ\Publish\API\Repository\Exceptions\InvalidArgumentException
     * @throws \eZ\Publish\API\Repository\Exceptions\NotFoundException
     * @throws \eZ\Publish\API\Repository\Exceptions\UnauthorizedException
     */
    public function updateFromStructure(ContentUpdateStructure $structure): Content
    {
        if (null !== $structure->getId()) {
            $content = $this->contentService->loadContent($structure->getId());
        } elseif (null !== $structure->getRemoteId()) {
            $content = $this->contentService->loadContentByRemoteId($structure->getRemoteId());
        } else {
            throw new NoMatchFoundException('ContentUpdateStructure should either have their id or their remoteId set in order to match the content to update');
        }

        $contentUpdateStruct = $this->contentService->newContentUpdateStruct();
        $contentUpdateStruct->initialLanguageCode = $structure->getLanguageCode();
        $this->filler->fillFields(
            $this->contentTypeService->loadContentType($content->contentInfo->contentTypeId),
            $contentUpdateStruct,
            $structure->getFields()
        );

        $draft = $this->contentService->createContentDraft($content->contentInfo);
        $this->contentService->updateContent($draft->versionInfo, $contentUpdateStruct);

        return $this->contentService->publishVersion($draft->versionInfo);
    }
}
