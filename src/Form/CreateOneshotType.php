<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Form;

use CodeRhapsodie\DataflowBundle\Entity\Job;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\DateTimeType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class CreateOneshotType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('label', TextType::class, [
                'label' => 'coderhapsodie.dataflow.label',
            ])
            ->add('dataflowType', DataflowTypeChoiceType::class, [
                'label' => 'coderhapsodie.dataflow.dataflowType',
            ])
            ->add('options', YamlType::class, [
                'label' => 'coderhapsodie.dataflow.options',
                'required' => false,
                'attr' => [
                    'title' => 'coderhapsodie.dataflow.options.title',
                    'placeholder' => 'coderhapsodie.dataflow.options.placeholder',
                ],
            ])
            ->add('requestedDate', DateTimeType::class, [
                'label' => 'coderhapsodie.dataflow.requestedDate',
                'years' => range(date('Y'), date('Y') + 5),
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Job::class,
        ]);
    }
}
