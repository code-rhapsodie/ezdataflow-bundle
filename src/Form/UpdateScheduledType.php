<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Form;

use CodeRhapsodie\DataflowBundle\Entity\ScheduledDataflow;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class UpdateScheduledType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('label', TextType::class, [
                'label' => 'coderhapsodie.dataflow.label',
            ])
            ->add('options', YamlType::class, [
                'required' => false,
                'attr' => [
                    'title' => 'coderhapsodie.dataflow.options.title',
                ],
                'label' => 'coderhapsodie.dataflow.options',
            ])
            ->add('frequency', FrequencyType::class, [
                'attr' => [
                    'title' => 'coderhapsodie.dataflow.frequency.title',
                ],
                'label' => 'coderhapsodie.dataflow.frequency',
            ])
            ->add('next', UserTimezoneAwareDateTimeType::class, [
                'years' => range(date('Y'), date('Y') + 5),
                'label' => 'coderhapsodie.dataflow.update.next',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => ScheduledDataflow::class,
        ]);
    }
}
