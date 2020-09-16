<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Gateway;

use CodeRhapsodie\DataflowBundle\Entity\ScheduledDataflow;
use CodeRhapsodie\DataflowBundle\Repository\ScheduledDataflowRepository;
use Doctrine\DBAL\Query\QueryBuilder;

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

    public function getListQueryForAdmin(): QueryBuilder
    {
        return $this->scheduledDataflowRepository->createQueryBuilder('s')
            ->addOrderBy('s.label', 'ASC');
    }

    public function save(ScheduledDataflow $scheduledDataflow)
    {
        $this->scheduledDataflowRepository->save($scheduledDataflow);
    }

    /**
     * @throws \Throwable
     */
    public function delete(int $id): void
    {
        $this->scheduledDataflowRepository->delete($id);
    }
}
