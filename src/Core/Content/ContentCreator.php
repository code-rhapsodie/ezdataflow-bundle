<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Content;

use CodeRhapsodie\EzDataflowBundle\Core\Field\ContentStructFieldFillerInterface;
use CodeRhapsodie\EzDataflowBundle\Matcher\LocationMatcherInterface;
use CodeRhapsodie\EzDataflowBundle\Model\ContentCreateStructure;
use Ibexa\Contracts\Core\Repository\ContentService;
use Ibexa\Contracts\Core\Repository\ContentTypeService;
use Ibexa\Contracts\Core\Repository\Values\Content\Content;
use Ibexa\Contracts\Core\Repository\Values\Content\LocationCreateStruct;

class ContentCreator implements ContentCreatorInterface
{
    /** @var \Ibexa\Contracts\Core\Repository\ContentService */
    private $contentService;

    /** @var \Ibexa\Contracts\Core\Repository\ContentTypeService */
    private $contentTypeService;

    /** @var \CodeRhapsodie\EzDataflowBundle\Core\Field\ContentStructFieldFillerInterface */
    private $filler;

    /** @var \CodeRhapsodie\EzDataflowBundle\Matcher\LocationMatcherInterface */
    private $matcher;

    public function __construct(ContentService $contentService, ContentTypeService $contentTypeService, ContentStructFieldFillerInterface $filler, LocationMatcherInterface $matcher)
    {
        $this->contentService = $contentService;
        $this->contentTypeService = $contentTypeService;
        $this->filler = $filler;
        $this->matcher = $matcher;
    }

    /**
     * @throws \Ibexa\Contracts\Core\Repository\Exceptions\BadStateException
     * @throws \Ibexa\Contracts\Core\Repository\Exceptions\ContentFieldValidationException
     * @throws \Ibexa\Contracts\Core\Repository\Exceptions\ContentValidationException
     * @throws \Ibexa\Contracts\Core\Repository\Exceptions\InvalidArgumentException
     * @throws \Ibexa\Contracts\Core\Repository\Exceptions\NotFoundException
     * @throws \Ibexa\Contracts\Core\Repository\Exceptions\UnauthorizedException
     */
    public function createFromStructure(ContentCreateStructure $structure): Content
    {
        $contentType = $this->contentTypeService->loadContentTypeByIdentifier($structure->getContentTypeIdentifier());
        $contentCreateStruct = $this->contentService->newContentCreateStruct($contentType, $structure->getLanguageCode());
        $contentCreateStruct->remoteId = $structure->getRemoteId();
        $this->filler->fillFields($contentType, $contentCreateStruct, $structure->getFields());
        $content = $this->contentService->createContent($contentCreateStruct, $this->getLocationCreateStructs($structure->getLocations()));

        return $this->contentService->publishVersion($content->versionInfo);
    }

    /**
     * @return \Ibexa\Contracts\Core\Repository\Values\Content\LocationCreateStruct[]
     */
    private function getLocationCreateStructs(array $locations): array
    {
        $locationCreateStructs = [];

        foreach ($locations as $locationOrIdOrRemoteIdOrStruct) {
            if ($locationOrIdOrRemoteIdOrStruct instanceof LocationCreateStruct) {
                $locationCreateStructs[] = $locationOrIdOrRemoteIdOrStruct;

                continue;
            }

            $locationCreateStructs[] = new LocationCreateStruct([
                'parentLocationId' => $this->matcher->matchLocation($locationOrIdOrRemoteIdOrStruct)->id,
            ]);
        }

        return $locationCreateStructs;
    }
}
