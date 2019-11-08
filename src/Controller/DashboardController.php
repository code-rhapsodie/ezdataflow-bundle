<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Controller;

use CodeRhapsodie\EzDataflowBundle\Form\CreateOneshotType;
use CodeRhapsodie\EzDataflowBundle\Form\CreateScheduledType;
use CodeRhapsodie\EzDataflowBundle\Gateway\JobGateway;
use CodeRhapsodie\EzDataflowBundle\Gateway\ScheduledDataflowGateway;
use CodeRhapsodie\DataflowBundle\Entity\Job;
use CodeRhapsodie\DataflowBundle\Entity\ScheduledDataflow;
use Doctrine\DBAL\Query\QueryBuilder;
use eZ\Publish\Core\MVC\Symfony\Security\Authorization\Attribute;
use EzSystems\EzPlatformAdminUi\Notification\NotificationHandlerInterface;
use EzSystems\EzPlatformAdminUiBundle\Controller\Controller;
use Pagerfanta\Adapter\DoctrineDbalAdapter;
use Pagerfanta\Pagerfanta;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/ezdataflow")
 */
class DashboardController extends Controller
{
    /** @var JobGateway */
    private $jobGateway;
    /** @var NotificationHandlerInterface */
    private $notificationHandler;
    /** @var ScheduledDataflowGateway */
    private $scheduledDataflowGateway;

    public function __construct(JobGateway $jobGateway, NotificationHandlerInterface $notificationHandler, ScheduledDataflowGateway $scheduledDataflowGateway)
    {
        $this->jobGateway = $jobGateway;
        $this->notificationHandler = $notificationHandler;
        $this->scheduledDataflowGateway = $scheduledDataflowGateway;
    }

    /**
     * @Route("/", name="coderhapsodie.ezdataflow.main")
     *
     * @return Response
     */
    public function main(): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'view'));

        return $this->render('@ezdesign/ezdataflow/Dashboard/main.html.twig');
    }

    public function repeating(Request $request): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'view'));

        $newWorkflow = new ScheduledDataflow();
        $newWorkflow->setNext((new \DateTimeImmutable())->add(new \DateInterval('PT1H')));
        $form = $this->createForm(CreateScheduledType::class, $newWorkflow, [
            'action' => $this->generateUrl('coderhapsodie.ezdataflow.workflow.create'),
        ]);

        return $this->render('@ezdesign/ezdataflow/Dashboard/repeating.html.twig', [
            'pager' => $this->getPager($this->scheduledDataflowGateway->getListQueryForAdmin(), $request),
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/repeating", name="coderhapsodie.ezdataflow.repeating")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function getRepeatingPage(Request $request): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'view'));

        return $this->render('@ezdesign/ezdataflow/Dashboard/repeating.html.twig', [
            'pager' => $this->getPager($this->scheduledDataflowGateway->getListQueryForAdmin(), $request),
        ]);
    }

    public function oneshot(Request $request): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'view'));

        $newOneshotJob = new Job();
        $newOneshotJob->setRequestedDate((new \DateTime())->add(new \DateInterval('PT1H')));
        $form = $this->createForm(CreateOneshotType::class, $newOneshotJob, [
            'action' => $this->generateUrl('coderhapsodie.ezdataflow.job.create'),
        ]);

        return $this->render('@ezdesign/ezdataflow/Dashboard/oneshot.html.twig', [
            'pager' => $this->getPager($this->jobGateway->getOneshotListQueryForAdmin(), $request),
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/oneshot", name="coderhapsodie.ezdataflow.oneshot")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function getOneshotPage(Request $request): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'view'));

        return $this->render('@ezdesign/ezdataflow/Dashboard/oneshot.html.twig', [
            'pager' => $this->getPager($this->jobGateway->getOneshotListQueryForAdmin(), $request),
        ]);
    }

    public function history(Request $request): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'view'));

        return $this->render('@ezdesign/ezdataflow/Dashboard/history.html.twig', [
            'pager' => $this->getPager($this->jobGateway->getListQueryForAdmin(), $request),
        ]);
    }

    /**
     * @Route("/history", name="coderhapsodie.ezdataflow.history")
     *
     * @param Request $request
     *
     * @return Response
     */
    public function getHistoryPage(Request $request): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'view'));

        return $this->render('@ezdesign/ezdataflow/Dashboard/history.html.twig', [
            'pager' => $this->getPager($this->jobGateway->getListQueryForAdmin(), $request),
        ]);
    }

    /**
     * @Route("/history/schedule/{id}", name="coderhapsodie.ezdataflow.history.workflow")
     *
     * @param Request $request
     * @param int     $id
     *
     * @return Response
     */
    public function getHistoryForScheduled(Request $request, int $id): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'view'));

        return $this->render('@ezdesign/ezdataflow/Dashboard/schedule_history.html.twig', [
            'id' => $id,
            'pager' => $this->getPager($this->jobGateway->getListQueryForScheduleAdmin($id), $request),
        ]);
    }

    private function getPager(QueryBuilder $query, Request $request): Pagerfanta
    {
        $pager = new Pagerfanta(new DoctrineDbalAdapter($query, function ($queryBuilder) {
            return $queryBuilder->select('COUNT(DISTINCT id) AS total_results')
                ->setMaxResults(1);
        }));
        $pager->setMaxPerPage(20);
        $pager->setCurrentPage($request->query->get('page', 1));

        return $pager;
    }
}
