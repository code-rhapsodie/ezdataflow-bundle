<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Content;

use CodeRhapsodie\EzDataflowBundle\Core\Field\ContentStructFieldFillerInterface;
use CodeRhapsodie\EzDataflowBundle\Exception\NoMatchFoundException;
use CodeRhapsodie\EzDataflowBundle\Model\ContentUpdateStructure;
use Ibexa\Contracts\Core\Repository\ContentService;
use Ibexa\Contracts\Core\Repository\ContentTypeService;
use Ibexa\Contracts\Core\Repository\Values\Content\Content;

class ContentUpdater implements ContentUpdaterInterface
{
    /** @var \Ibexa\Contracts\Core\Repository\ContentService */
    private $contentService;

    /** @var \Ibexa\Contracts\Core\Repository\ContentTypeService */
    private $contentTypeService;

    /** @var \CodeRhapsodie\EzDataflowBundle\Core\Field\ContentStructFieldFillerInterface */
    private $filler;

    public function __construct(ContentService $contentService, ContentTypeService $contentTypeService, ContentStructFieldFillerInterface $filler)
    {
        $this->contentService = $contentService;
        $this->contentTypeService = $contentTypeService;
        $this->filler = $filler;
    }

    /**
     * @throws \CodeRhapsodie\EzDataflowBundle\Exception\NoMatchFoundException
     * @throws \Ibexa\Contracts\Core\Repository\Exceptions\BadStateException
     * @throws \Ibexa\Contracts\Core\Repository\Exceptions\ContentFieldValidationException
     * @throws \Ibexa\Contracts\Core\Repository\Exceptions\ContentValidationException
     * @throws \Ibexa\Contracts\Core\Repository\Exceptions\InvalidArgumentException
     * @throws \Ibexa\Contracts\Core\Repository\Exceptions\NotFoundException
     * @throws \Ibexa\Contracts\Core\Repository\Exceptions\UnauthorizedException
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
