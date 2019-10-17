<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Controller;

use CodeRhapsodie\DataflowBundle\Entity\Job;
use CodeRhapsodie\EzDataflowBundle\Form\CreateOneshotType;
use CodeRhapsodie\EzDataflowBundle\Gateway\JobGateway;
use eZ\Publish\Core\MVC\Symfony\Security\Authorization\Attribute;
use EzSystems\EzPlatformAdminUi\Notification\NotificationHandlerInterface;
use EzSystems\EzPlatformAdminUiBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Translation\TranslatorInterface;
use Symfony\Component\HttpFoundation\JsonResponse;

/**
 * @Route("/ezdataflow/job")
 */
class JobController extends Controller
{
    /** @var JobGateway */
    private $jobGateway;
    /** @var NotificationHandlerInterface */
    private $notificationHandler;
    /** @var TranslatorInterface */
    private $translator;

    public function __construct(
        JobGateway $jobGateway,
        NotificationHandlerInterface $notificationHandler,
        TranslatorInterface $translator
    ) {
        $this->jobGateway = $jobGateway;
        $this->notificationHandler = $notificationHandler;
        $this->translator = $translator;
    }

    /**
     * @Route("/details/{id}", name="coderhapsodie.ezdataflow.job.details")
     *
     * @param int $id
     *
     * @return Response
     */
    public function displayDetails(int $id): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'view'));

        return $this->render('@ezdesign/ezdataflow/Item/details.html.twig', [
            'item' => $this->jobGateway->find($id),
        ]);
    }

    /**
     * @Route("/create", name="coderhapsodie.ezdataflow.job.create", methods={"POST"})
     *
     * @param Request $request
     *
     * @return Response
     */
    public function create(Request $request): Response
    {
        $this->denyAccessUnlessGranted(new Attribute('ezdataflow', 'edit'));

        $newOneshot = new Job();
        $form = $this->createForm(CreateOneshotType::class, $newOneshot);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            /** @var Job $newOneshot */
            $newOneshot = $form->getData();
            $newOneshot->setStatus(Job::STATUS_PENDING);

            try {
                $this->jobGateway->save($newOneshot);
                $this->notificationHandler->success($this->translator->trans('coderhapsodie.ezdataflow.job.create.success'));
            } catch (\Exception $e) {
                $this->notificationHandler->error($this->translator->trans('coderhapsodie.ezdataflow.job.create.error',
                    ['message' => $e->getMessage()]));
            }

            return new JsonResponse([
                'redirect' => $this->generateUrl('coderhapsodie.ezdataflow.main', ['_fragment' => 'oneshot']),
            ]);
        }

        return new JsonResponse([
            'form' => $this->renderView('@ezdesign/ezdataflow/parts/schedule_form.html.twig', [
                'form' => $form->createView(),
                'type_action' => 'new',
                'mode' => 'oneshot',
            ]),
        ]);
    }
}
