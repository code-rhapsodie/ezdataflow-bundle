<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Model;

use CodeRhapsodie\EzDataflowBundle\Exception\InvalidArgumentTypeException;
use eZ\Publish\API\Repository\Values\Content\Location;

class ContentCreateStructure extends ContentStructure
{
    /** @var string */
    protected $contentTypeIdentifier;

    /** @var array */
    protected $locations;

    /**
     * ContentCreateStructure constructor.
     *
     * @param array $locations
     *                         A location can be any of the following:
     *                         <ul>
     *                         <li>an integer, the id of the Location object</li>
     *                         <li>a string, the remote id of the Location object</li>
     *                         <li>a Location object</li>
     *                         </ul>
     *
     * @throws InvalidArgumentTypeException
     */
    public function __construct(string $contentTypeIdentifier, string $languageCode, array $locations, array $fields, ?string $remoteId = null)
    {
        $this->contentTypeIdentifier = $contentTypeIdentifier;
        $this->languageCode = $languageCode;
        $this->setLocations($locations);
        $this->fields = $fields;
        $this->remoteId = $remoteId;
    }

    public function getContentTypeIdentifier(): string
    {
        return $this->contentTypeIdentifier;
    }

    public function getLocations(): array
    {
        return $this->locations;
    }

    /**
     * @throws InvalidArgumentTypeException
     */
    private function setLocations(array $locations)
    {
        foreach ($locations as $locationOrIdOrRemoteId) {
            if (!is_int($locationOrIdOrRemoteId)
                && !is_string($locationOrIdOrRemoteId)
                && !$locationOrIdOrRemoteId instanceof Location
            ) {
                throw InvalidArgumentTypeException::create(['int', 'string', Location::class], $locationOrIdOrRemoteId);
            }
        }

        $this->locations = $locations;
    }
}
