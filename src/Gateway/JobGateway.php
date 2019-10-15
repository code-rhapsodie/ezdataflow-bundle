<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Gateway;

use CodeRhapsodie\DataflowBundle\Entity\Job;
use CodeRhapsodie\DataflowBundle\Repository\JobRepository;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Query;

class JobGateway
{
    /** @var EntityManagerInterface */
    private $em;
    /** @var JobRepository */
    private $jobRepository;

    public function __construct(EntityManagerInterface $em, JobRepository $jobRepository)
    {
        $this->em = $em;
        $this->jobRepository = $jobRepository;
    }

    public function find(int $id): Job
    {
        return $this->jobRepository->find($id);
    }

    public function findForScheduled(int $id): iterable
    {
        return $this->jobRepository->findBy(['scheduledDataflow' => $id], ['requestedDate' => 'desc'], 20);
    }

    public function getOneshotListQueryForAdmin(): Query
    {
        $query = $this->jobRepository->createQueryBuilder('i')
            ->andWhere('i.scheduledDataflow IS NULL')
            ->addOrderBy('i.requestedDate', 'DESC');

        return $query->getQuery();
    }

    public function getListQueryForAdmin(): Query
    {
        $query = $this->jobRepository->createQueryBuilder('w')
            ->addOrderBy('w.requestedDate', 'DESC');

        return $query->getQuery();
    }

    public function getListQueryForScheduleAdmin(int $id): Query
    {
        $query = $this->jobRepository->createQueryBuilder('w')
            ->where('w.scheduledDataflow = :schedule_id')
            ->setParameter('schedule_id', $id)
            ->addOrderBy('w.requestedDate', 'DESC');

        return $query->getQuery();
    }

    /**
     * @param Job $job
     *
     * @throws \Doctrine\ORM\ORMException
     * @throws \Doctrine\ORM\OptimisticLockException
     */
    public function save(Job $job)
    {
        $this->em->persist($job);
        $this->em->flush();
    }
}
