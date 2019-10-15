<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Content;

use CodeRhapsodie\EzDataflowBundle\Core\Field\ContentStructFieldFillerInterface;
use CodeRhapsodie\EzDataflowBundle\Matcher\LocationMatcherInterface;
use CodeRhapsodie\EzDataflowBundle\Model\ContentCreateStructure;
use eZ\Publish\API\Repository\ContentService;
use eZ\Publish\API\Repository\ContentTypeService;
use eZ\Publish\API\Repository\Values\Content\Content;
use eZ\Publish\API\Repository\Values\Content\LocationCreateStruct;

class ContentCreator implements ContentCreatorInterface
{
    /** @var ContentService */
    private $contentService;

    /** @var ContentTypeService */
    private $contentTypeService;

    /** @var ContentStructFieldFillerInterface */
    private $filler;

    /** @var LocationMatcherInterface */
    private $matcher;

    public function __construct(ContentService $contentService, ContentTypeService $contentTypeService, ContentStructFieldFillerInterface $filler, LocationMatcherInterface $matcher)
    {
        $this->contentService = $contentService;
        $this->contentTypeService = $contentTypeService;
        $this->filler = $filler;
        $this->matcher = $matcher;
    }

    /**
     * @param ContentCreateStructure $structure
     *
     * @return Content
     *
     * @throws \eZ\Publish\API\Repository\Exceptions\BadStateException
     * @throws \eZ\Publish\API\Repository\Exceptions\ContentFieldValidationException
     * @throws \eZ\Publish\API\Repository\Exceptions\ContentValidationException
     * @throws \eZ\Publish\API\Repository\Exceptions\InvalidArgumentException
     * @throws \eZ\Publish\API\Repository\Exceptions\NotFoundException
     * @throws \eZ\Publish\API\Repository\Exceptions\UnauthorizedException
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
     * @param array $locations
     *
     * @return LocationCreateStruct[]
     */
    private function getLocationCreateStructs(array $locations): array
    {
        $locationCreateStructs = [];

        foreach ($locations as $locationOrIdOrRemoteId) {
            $locationCreateStructs[] = new LocationCreateStruct([
                'parentLocationId' => $this->matcher->matchLocation($locationOrIdOrRemoteId)->id,
            ]);
        }

        return $locationCreateStructs;
    }
}
