<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\DependencyInjection;

use CodeRhapsodie\EzDataflowBundle\Core\Field\FieldValueCreatorInterface;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\Extension\Extension;
use Symfony\Component\DependencyInjection\Loader\YamlFileLoader;

class CodeRhapsodieEzDataflowExtension extends Extension
{
    public function load(array $configs, ContainerBuilder $container)
    {
        $configuration = new Configuration();
        $config = $this->processConfiguration($configuration, $configs);

        $container->setParameter('coderhapsodie.ezdataflow.admin_login_or_id', $config['admin_login_or_id']);

        $loader = new YamlFileLoader($container, new FileLocator(__DIR__.'/../Resources/config'));
        $loader->load('services.yaml');

        $container
            ->registerForAutoconfiguration(FieldValueCreatorInterface::class)
            ->addTag('coderhapsodie.ezdataflow.field_value_creator')
        ;
    }
}
