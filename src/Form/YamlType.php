<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\CallbackTransformer;
use Symfony\Component\Form\Exception\TransformationFailedException;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Yaml\Exception\ParseException;
use Symfony\Component\Yaml\Yaml;

/**
 * Textarea handling array data as YAML text.
 */
class YamlType extends AbstractType
{
    public function getParent()
    {
        return TextareaType::class;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->addModelTransformer(new CallbackTransformer(
            function ($optionsAsArray) {
                if (empty($optionsAsArray)) {
                    return '';
                }

                return Yaml::dump($optionsAsArray);
            },
            function ($optionsAsString) {
                if (empty(trim((string) $optionsAsString))) {
                    return [];
                }

                try {
                    $val = Yaml::parse($optionsAsString);
                    if (!is_array($val)) {
                        throw new ParseException('Result is not a array');
                    }

                    return $val;
                } catch (ParseException $e) {
                    throw new TransformationFailedException('Invalid YAML format', 0, $e);
                }
            }
        ));
    }

    public function getBlockPrefix()
    {
        return 'coderhapsodie_port_yaml';
    }
}
