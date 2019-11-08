<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\DependencyInjection\Compiler;

use Symfony\Component\DependencyInjection\Compiler\CompilerPassInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Reference;
use CodeRhapsodie\DataflowBundle\Repository\ScheduledDataflowRepository;
use CodeRhapsodie\DataflowBundle\Repository\JobRepository;

/**
 * Registers dataflow types in the registry.
 *
 * @codeCoverageIgnore
 */
class DbalCompilerPass implements CompilerPassInterface
{
    /**
     * {@inheritdoc}
     */
    public function process(ContainerBuilder $container)
    {
        if (!$container->hasExtension('code_rhapsodie_dataflow')) {
            return;
        }

        $scheduleRepository = $container->findDefinition(ScheduledDataflowRepository::class);
        $scheduleRepository->replaceArgument(0, new Reference('ezpublish.persistence.connection'));

        $jobRepository = $container->findDefinition(JobRepository::class);
        $jobRepository->replaceArgument(0, new Reference('ezpublish.persistence.connection'));
    }
}
