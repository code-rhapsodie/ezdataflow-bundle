<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Matcher;

use CodeRhapsodie\EzDataflowBundle\Exception\NoMatchFoundException;
use eZ\Publish\API\Repository\Exceptions\NotFoundException;
use eZ\Publish\API\Repository\LocationService;
use eZ\Publish\API\Repository\Values\Content\Location;

class LocationMatcher implements LocationMatcherInterface
{
    /** @var LocationService */
    private $locationService;

    public function __construct(LocationService $locationService)
    {
        $this->locationService = $locationService;
    }

    /**
     * @param mixed $valueToMatch
     *
     * @throws NoMatchFoundException
     * @throws \eZ\Publish\API\Repository\Exceptions\UnauthorizedException
     */
    public function matchLocation($valueToMatch): Location
    {
        if ($valueToMatch instanceof Location) {
            return $valueToMatch;
        }

        try {
            if (is_int($valueToMatch)) {
                return $this->locationService->loadLocation($valueToMatch);
            }

            if (is_string($valueToMatch)) {
                return $this->locationService->loadLocationByRemoteId($valueToMatch);
            }
        } catch (NotFoundException $e) {
            throw new NoMatchFoundException('No location matched provided value', 0, $e);
        }

        throw new NoMatchFoundException('No location matched provided value');
    }
}
