<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Controller;

use CodeRhapsodie\EzDataflowBundle\Form\CreateScheduledType;
use CodeRhapsodie\EzDataflowBundle\Form\UpdateScheduledType;
use CodeRhapsodie\EzDataflowBundle\Gateway\ScheduledDataflowGateway;
use CodeRhapsodie\EzDataflowBundle\Gateway\JobGateway;
use CodeRhapsodie\DataflowBundle\Entity\ScheduledDataflow;
use eZ\Publish\Core\MVC\Symfony\Security\Authorization\Attribute;
use EzSystems\EzPlatformAdminUi\Notification\NotificationHandlerInterface;
use EzSystems\EzPlatformAdminUiBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Translation\TranslatorInterface;

/**
 * @Route("/ezdataflow/scheduled_workflow")
 */
class ScheduledDataflowController extends Controller
{
    /** @var JobGateway */
    private $jobGateway;
    /** @var NotificationHandlerInterface */
    private $notificationHandler;
    /** @var ScheduledDataflowGateway */
    private $scheduledDataflowGateway;
    /** @var TranslatorInterface */
    private $translator;

    public function __construct(JobGateway $jobGateway, NotificationHandlerInterface $notificationHandler, ScheduledDataflowGateway $scheduledDataflowGateway, TranslatorInterface $translator)
    {
        $this->jobGateway = $jobGateway;
        $this->notificationHandler = $notificationHandler;
        $this->scheduledDataflowGateway = $scheduledDataflowGateway;
        $this->translator = $translator;
    }

    /**
     * @Route("/create", name="coderhapsodie.ezdataflow.workflow.create", methods={"POST"})
     *
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'edit'));

        $newWorkflow = new ScheduledDataflow();
        $form = $this->createForm(CreateScheduledType::class, $newWorkflow);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            /** @var ScheduledDataflow $newWorkflow */
            $newWorkflow = $form->getData();

            try {
                $this->scheduledDataflowGateway->save($newWorkflow);
                $this->notificationHandler->success($this->translator->trans('coderhapsodie.ezdataflow.workflow.create.success'));
            } catch (\Exception $e) {
                $this->notificationHandler->error($this->translator->trans('coderhapsodie.ezdataflow.workflow.create.error', ['message' => $e->getMessage()]));
            }

            return new JsonResponse(['redirect' => $this->generateUrl('coderhapsodie.ezdataflow.main')]);
        }

        return new JsonResponse(['form' => $this->renderView('@ezdesign/ezdataflow/parts/schedule_form.html.twig', [
            'form' => $form->createView(),
            'type_action' => 'new',
        ])]);
    }

    /**
     * @Route("/{id}/delete", name="coderhapsodie.ezdataflow.workflow.delete", methods={"post"})
     *
     * @param int $id
     *
     * @return Response
     */
    public function delete(int $id): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'edit'));

        try {
            $this->scheduledDataflowGateway->delete($id);
            $this->notificationHandler->success($this->translator->trans('coderhapsodie.ezdataflow.workflow.delete.success'));

            return new JsonResponse(['code' => 200]);
        } catch (\Exception $e) {
            $this->notificationHandler->error($this->translator->trans('coderhapsodie.ezdataflow.workflow.delete.error', ['message' => $e->getMessage()]));

            return new JsonResponse(['code' => $e->getCode()]);
        }
    }

    /**
     * @Route("/{id}/edit", name="coderhapsodie.ezdataflow.workflow.edit")
     *
     * @param Request $request
     * @param int     $id
     *
     * @return Response
     */
    public function edit(Request $request, int $id): Response
    {
        $form = $this->createForm(UpdateScheduledType::class, $this->scheduledDataflowGateway->find($id), [
            'action' => $this->generateUrl('coderhapsodie.ezdataflow.workflow.edit', ['id' => $id]),
        ]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            /** @var ScheduledDataflow $editDataflow */
            $editDataflow = $form->getData();

            try {
                $this->scheduledDataflowGateway->save($editDataflow);
                $this->notificationHandler->success($this->translator->trans('coderhapsodie.ezdataflow.workflow.edit.success'));
            } catch (\Exception $e) {
                $this->notificationHandler->error($this->translator->trans('coderhapsodie.ezdataflow.workflow.edit.error', ['message' => $e->getMessage()]));
            }

            return new JsonResponse(['redirect' => $this->generateUrl('coderhapsodie.ezdataflow.main')]);
        }

        return new JsonResponse(['form' => $this->renderView('@ezdesign/ezdataflow/parts/schedule_form.html.twig', [
            'form' => $form->createView(),
            'type_action' => 'edit',
        ])]);
    }

    /**
     * @Route("/{id}/enable", name="coderhapsodie.ezdataflow.workflow.enable")
     *
     * @param int $id
     *
     * @return Response
     */
    public function enableDataflow(int $id): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'edit'));

        $this->changeDataflowStatus($id, true);

        return $this->redirectToRoute('coderhapsodie.ezdataflow.main');
    }

    /**
     * @Route("/{id}/disable", name="coderhapsodie.ezdataflow.workflow.disable")
     *
     * @param int $id
     *
     * @return Response
     */
    public function disableDataflow(int $id): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'edit'));

        $this->changeDataflowStatus($id, false);

        return $this->redirectToRoute('coderhapsodie.ezdataflow.main');
    }

    private function changeDataflowStatus(int $id, bool $status)
    {
        try {
            /** @var ScheduledDataflow $workflow */
            $workflow = $this->scheduledDataflowGateway->find($id);
            $workflow->setEnabled($status);
            $this->scheduledDataflowGateway->save($workflow);

            $this->notificationHandler->success(sprintf('Workflow "%s" updated successfully.', $workflow->getLabel()));
        } catch (\Exception $e) {
            $this->notificationHandler->error(sprintf('An error occured : "%s".', $e->getMessage()));
        }
    }
}
