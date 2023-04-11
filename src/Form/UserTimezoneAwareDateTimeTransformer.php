<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Form;

use eZ\Publish\API\Repository\Exceptions\NotFoundException;
use eZ\Publish\API\Repository\UserPreferenceService;
use Symfony\Component\Form\DataTransformerInterface;

class UserTimezoneAwareDateTimeTransformer implements DataTransformerInterface
{
    /** @var UserPreferenceService */
    private $userPreferenceService;

    public function __construct(UserPreferenceService $userPreferenceService)
    {
        $this->userPreferenceService = $userPreferenceService;
    }

    public function transform($value)
    {
        if (!$value instanceof \DateTimeInterface) {
            return $value;
        }

        return (new \DateTime('now', $this->userTimezone()))->setTimestamp($value->getTimestamp());
    }

    public function reverseTransform($value)
    {
        if (!$value instanceof \DateTimeInterface) {
            return $value;
        }

        $dateTimeWithUserTimeZone = new \DateTime($value->format('Y-m-d H:i:s'), $this->userTimezone());

        return (new \DateTime())->setTimestamp($dateTimeWithUserTimeZone->getTimestamp());
    }

    private function userTimezone(): \DateTimeZone
    {
        try {
            $tz = $this->userPreferenceService->getUserPreference('timezone')->value ?? 'UTC';
        } catch (NotFoundException $e) {
            $tz = 'UTC';
        }

        return new \DateTimeZone($tz);
    }
}
