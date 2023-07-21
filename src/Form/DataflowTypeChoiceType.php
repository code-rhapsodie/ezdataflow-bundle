<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Form;

use CodeRhapsodie\DataflowBundle\Registry\DataflowTypeRegistryInterface;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\OptionsResolver\OptionsResolver;

class DataflowTypeChoiceType extends AbstractType
{
    /** @var \CodeRhapsodie\DataflowBundle\Registry\DataflowTypeRegistryInterface */
    private $registry;

    public function __construct(DataflowTypeRegistryInterface $registry)
    {
        $this->registry = $registry;
    }

    public function getParent()
    {
        return ChoiceType::class;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $choices = [];
        foreach ($this->registry->listDataflowTypes() as $fqcn => $dataflowType) {
            $choices[$dataflowType->getLabel()] = $fqcn;
        }

        $resolver->setDefaults([
            'choices' => $choices,
        ]);
    }
}
