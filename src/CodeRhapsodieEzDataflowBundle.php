<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle;

use CodeRhapsodie\EzDataflowBundle\DependencyInjection\CodeRhapsodieEzDataflowExtension;
use CodeRhapsodie\EzDataflowBundle\DependencyInjection\Compiler\FieldComparatorCompilerPass;
use CodeRhapsodie\EzDataflowBundle\Security\PolicyProvider;
use eZ\Bundle\EzPublishCoreBundle\DependencyInjection\EzPublishCoreExtension;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpKernel\Bundle\Bundle;

class CodeRhapsodieEzDataflowBundle extends Bundle
{
    protected $name = 'CodeRhapsodieEzDataflowBundle';

    public function getContainerExtension()
    {
        return new CodeRhapsodieEzDataflowExtension();
    }

    public function build(ContainerBuilder $container)
    {
        parent::build($container);

        $container->addCompilerPass(new FieldComparatorCompilerPass());

        /** @var EzPublishCoreExtension $eZExtension */
        $eZExtension = $container->getExtension('ezpublish');
        $eZExtension->addPolicyProvider(new PolicyProvider());
    }
}
