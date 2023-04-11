<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Form;

use eZ\Publish\API\Repository\UserPreferenceService;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\FormBuilderInterface;

class UserTimezoneAwareDateTimeType extends AbstractType
{
    /** @var UserPreferenceService */
    private $userPreferenceService;

    public function __construct(UserPreferenceService $userPreferenceService)
    {
        $this->userPreferenceService = $userPreferenceService;
    }

    public function getParent()
    {
        return DateTimeType::class;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->addModelTransformer(new UserTimezoneAwareDateTimeTransformer($this->userPreferenceService));
    }
}
