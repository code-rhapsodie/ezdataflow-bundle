<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Gateway;

use CodeRhapsodie\DataflowBundle\Entity\ScheduledDataflow;
use CodeRhapsodie\DataflowBundle\Repository\ScheduledDataflowRepository;

final class ScheduledDataflowGateway
{
    /** @var ScheduledDataflowRepository */
    private $scheduledDataflowRepository;

    public function __construct(ScheduledDataflowRepository $scheduledDataflowRepository)
    {
        $this->scheduledDataflowRepository = $scheduledDataflowRepository;
    }

    public function find(int $id): ?ScheduledDataflow
    {
        return $this->scheduledDataflowRepository->find($id);
    }

    public function findAllOrderedByLabel(): iterable
    {
        $qb = $this->scheduledDataflowRepository->createQueryBuilder();
        $qb->orderBy('label', 'asc');

        $stmt = $qb->execute();
        if (0 === $stmt->rowCount()) {
            return [];
        }

        return $stmt->fetchAll(\PDO::FETCH_ASSOC);
    }

    /**
     * @param ScheduledDataflow $scheduledDataflow
     */
    public function save(ScheduledDataflow $scheduledDataflow)
    {
        $this->scheduledDataflowRepository->save($scheduledDataflow);
    }

    /**
     * @param int $id
     *
     * @throws \Throwable
     */
    public function delete(int $id): void
    {
        $this->scheduledDataflowRepository->delete($id);
    }
}
