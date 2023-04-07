<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Tab;

use CodeRhapsodie\EzDataflowBundle\Controller\DashboardController;
use EzSystems\EzPlatformAdminUi\Tab\AbstractControllerBasedTab;
use EzSystems\EzPlatformAdminUi\Tab\OrderedTabInterface;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

class HistoryTab extends AbstractControllerBasedTab implements OrderedTabInterface
{
    /**
     * {@inheritdoc}
     */
    public function getControllerReference(array $parameters): ControllerReference
    {
        return new ControllerReference(DashboardController::class.'::history', [], $parameters);
    }

    /**
     * {@inheritdoc}
     */
    public function getOrder(): int
    {
        return 20;
    }

    /**
     * {@inheritdoc}
     */
    public function getIdentifier(): string
    {
        return 'code-rhapsodie-ezdataflow-history';
    }

    /**
     * {@inheritdoc}
     */
    public function getName(): string
    {
        return $this->translator->trans('coderhapsodie.ezdataflow.history');
    }
}
