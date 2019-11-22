<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Twig;

use Twig\Environment;
use Twig\TwigFunction;
use Twig\Extension\AbstractExtension;

class EzTabRenderExtension extends AbstractExtension
{

    public function getFunctions()
    {
        return [
            new TwigFunction(
                'cr_add_ez_tabs',
                [$this, 'crAddEzTabs'],
                ['needs_environment' => true, 'is_safe' => ['html']]
            ),
        ];
    }

    public function crAddEzTabs(Environment $twig, string $param1, array $options = [], string $template = '') {
        $function = $twig->getFunction('ez_platform_tabs');
        if ($function !== false) {
            return $function->getCallable()($param1, $options, $template);
            
        }
        $function = $twig->getFunction('ez_render_component_group');
        if ($function !== false) {
            return $function->getCallable()($param1, $options, $template);
        }

        throw new \LogicException('Unable to call ez_platform_tabs or ez_render_component_group');
    }


}
