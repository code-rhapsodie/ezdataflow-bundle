<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\EventSubscriber;

use EzSystems\EzPlatformAdminUi\Menu\Event\ConfigureMenuEvent;
use EzSystems\EzPlatformAdminUi\Menu\MainMenuBuilder;
use Knp\Menu\ItemInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class MenuSubscriber implements EventSubscriberInterface
{
    /**
     * {@inheritdoc}
     */
    public static function getSubscribedEvents()
    {
        return [ConfigureMenuEvent::MAIN_MENU => 'onConfigureMenu'];
    }

    public function onConfigureMenu(ConfigureMenuEvent $event)
    {
        /** @var ItemInterface $menu */
        $menu = $event->getMenu();
        if (!isset($menu[MainMenuBuilder::ITEM_ADMIN])) {
            return;
        }

        $menu[MainMenuBuilder::ITEM_ADMIN]->addChild(
            'ezdataflow_dashboard',
            [
                'label' => 'coderhapsodie.ezdataflow',
                'route' => 'coderhapsodie.ezdataflow.main',
            ]
        );
    }
}
