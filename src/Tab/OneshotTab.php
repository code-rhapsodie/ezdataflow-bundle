<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Tab;

use CodeRhapsodie\EzDataflowBundle\Controller\DashboardController;
use EzSystems\EzPlatformAdminUi\Tab\AbstractControllerBasedTab;
use EzSystems\EzPlatformAdminUi\Tab\OrderedTabInterface;
use Symfony\Component\HttpKernel\Controller\ControllerReference;

class OneshotTab extends AbstractControllerBasedTab implements OrderedTabInterface
{
    /**
     * {@inheritdoc}
     */
    public function getControllerReference(array $parameters): ControllerReference
    {
        return new ControllerReference(DashboardController::class.'::oneshot');
    }

    /**
     * {@inheritdoc}
     */
    public function getOrder(): int
    {
        return 10;
    }

    /**
     * {@inheritdoc}
     */
    public function getIdentifier(): string
    {
        return 'code-rhapsodie-ezdataflow-oneshot';
    }

    /**
     * {@inheritdoc}
     */
    public function getName(): string
    {
        return $this->translator->trans('coderhapsodie.ezdataflow.oneshot');
    }
}
