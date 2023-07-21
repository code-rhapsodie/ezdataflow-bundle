<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Gateway;

use CodeRhapsodie\DataflowBundle\Entity\Job;
use CodeRhapsodie\DataflowBundle\Repository\JobRepository;
use Doctrine\DBAL\Query\QueryBuilder;

final class JobGateway
{
    public const FILTER_NONE = 0;
    public const FILTER_NON_EMPTY = 1;

    /** @var \CodeRhapsodie\DataflowBundle\Repository\JobRepository */
    private $jobRepository;

    public function __construct(JobRepository $jobRepository)
    {
        $this->jobRepository = $jobRepository;
    }

    public function find(int $id): ?Job
    {
        return $this->jobRepository->find($id);
    }

    public function getOneshotListQueryForAdmin(): QueryBuilder
    {
        return $this->jobRepository->createQueryBuilder('i')
            ->andWhere('i.scheduled_dataflow_id IS NULL')
            ->addOrderBy('i.requested_date', 'DESC');
    }

    public function getListQueryForAdmin(int $filter): QueryBuilder
    {
        $qb = $this->jobRepository->createQueryBuilder('w')
            ->addOrderBy('w.requested_date', 'DESC')
        ;

        if (self::FILTER_NON_EMPTY === $filter) {
            $qb->andWhere('w.count > 0');
        }

        return $qb;
    }

    public function getListQueryForScheduleAdmin(int $id): QueryBuilder
    {
        return $this->jobRepository->createQueryBuilder('w')
            ->where('w.scheduled_dataflow_id = :schedule_id')
            ->setParameter('schedule_id', $id)
            ->addOrderBy('w.requested_date', 'DESC');
    }

    public function save(Job $job)
    {
        $this->jobRepository->save($job);
    }
}
