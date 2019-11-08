<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Gateway;

use CodeRhapsodie\DataflowBundle\Entity\Job;
use CodeRhapsodie\DataflowBundle\Repository\JobRepository;
use Doctrine\DBAL\Query\QueryBuilder;
use function Doctrine\DBAL\Query\QueryBuilder;

class JobGateway
{
    /** @var JobRepository */
    private $jobRepository;

    public function __construct(JobRepository $jobRepository)
    {
        $this->jobRepository = $jobRepository;
    }

    public function find(int $id): ?Job
    {
        return $this->jobRepository->find($id);
    }

    public function findForScheduled(int $id): iterable
    {
        $qb = $this->jobRepository->createQueryBuilder();
        $qb->andWhere($qb->expr()->eq('scheduled_dataflow_id', $qb->createNamedParameter($id, \PDO::PARAM_INT)))
            ->orderBy('requested_date', 'desc')
            ->setMaxResults(20)
        ;
        $stmt = $qb->execute();
        while (false !== ($row = $stmt->fetch(\PDO::FETCH_ASSOC))) {
            yield $row;
        }
    }

    public function getOneshotListQueryForAdmin(): QueryBuilder
    {
        return $this->jobRepository->createQueryBuilder('i')
            ->andWhere('i.scheduled_dataflow_id IS NULL')
            ->addOrderBy('i.requested_date', 'DESC');
    }

    public function getListQueryForAdmin(): QueryBuilder
    {
        return $this->jobRepository->createQueryBuilder('w')
            ->addOrderBy('w.requested_date', 'DESC');
    }

    public function getListQueryForScheduleAdmin(int $id): QueryBuilder
    {
        return $this->jobRepository->createQueryBuilder('w')
            ->where('w.scheduled_dataflow_id = :schedule_id')
            ->setParameter('schedule_id', $id)
            ->addOrderBy('w.requested_date', 'DESC');
    }

    /**
     * @param Job $job
     */
    public function save(Job $job)
    {
        $this->jobRepository->save($job);
    }
}
