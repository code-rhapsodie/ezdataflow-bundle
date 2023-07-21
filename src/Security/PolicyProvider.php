<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Security;

use Ibexa\Bundle\Core\DependencyInjection\Security\PolicyProvider\PolicyProviderInterface;
use Ibexa\Bundle\Core\DependencyInjection\Security\PolicyProvider\YamlPolicyProvider;

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
