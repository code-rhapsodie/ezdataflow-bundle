<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Gateway;

use CodeRhapsodie\DataflowBundle\Entity\ScheduledDataflow;
use CodeRhapsodie\DataflowBundle\Repository\ScheduledDataflowRepository;
use Doctrine\ORM\EntityManagerInterface;

class ScheduledDataflowGateway
{
    /** @var EntityManagerInterface */
    private $em;
    /** @var ScheduledDataflowRepository */
    private $scheduledDataflowRepository;

    public function __construct(EntityManagerInterface $em, ScheduledDataflowRepository $scheduledDataflowRepository)
    {
        $this->em = $em;
        $this->scheduledDataflowRepository = $scheduledDataflowRepository;
    }

    public function find(int $id): ScheduledDataflow
    {
        return $this->scheduledDataflowRepository->find($id);
    }

    public function findAllOrderedByLabel(): iterable
    {
        return $this->scheduledDataflowRepository->findBy([], ['label' => 'asc']);
    }

    /**
     * @param ScheduledDataflow $scheduledDataflow
     *
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function save(ScheduledDataflow $scheduledDataflow)
    {
        $this->em->persist($scheduledDataflow);
        $this->em->flush();
    }

    /**
     * @param int $id
     *
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function delete(int $id): void
    {
        $workflow = $this->find($id);

        $this->em->remove($workflow);
        $this->em->flush();
    }
}
