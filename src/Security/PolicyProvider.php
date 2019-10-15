<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Security;

use eZ\Bundle\EzPublishCoreBundle\DependencyInjection\Security\PolicyProvider\PolicyProviderInterface;
use eZ\Bundle\EzPublishCoreBundle\DependencyInjection\Security\PolicyProvider\YamlPolicyProvider;

class PolicyProvider extends YamlPolicyProvider implements PolicyProviderInterface
{
    /**
     * {@inheritdoc}
     */
    protected function getFiles()
    {
        return [__DIR__.'/../Resources/config/policies.yaml'];
    }
}
