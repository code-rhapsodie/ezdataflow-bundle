<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\DependencyInjection\Compiler;

use CodeRhapsodie\EzDataflowBundle\Core\FieldComparator\DelegatorFieldComparator;
use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;

class FieldComparatorCompilerPass implements CompilerPassInterface
{
    public function process(ContainerBuilder $container)
    {
        if (!$container->has(DelegatorFieldComparator::class)) {
            return;
        }

        $delegatorDef = $container->findDefinition(DelegatorFieldComparator::class);

        foreach ($container->findTaggedServiceIds('coderhapsodie.ezdataflow.field_comparator') as $id => $tags) {
            foreach ($tags as $attributes) {
                if (!isset($attributes['fieldType'])) {
                    throw new \InvalidArgumentException(sprintf('Service "%s" must define the "fieldType" attribute on "coderhapsodie.ezdataflow.field_comparator" tags.', $id));
                }

                $delegatorDef->addMethodCall(
                    'registerDelegateFieldComparator',
                    [new Reference($id), $attributes['fieldType']]
                );
            }
        }
    }
}
