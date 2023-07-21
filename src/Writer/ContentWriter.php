<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Writer;

use CodeRhapsodie\DataflowBundle\DataflowType\Writer\DelegateWriterInterface;
use CodeRhapsodie\EzDataflowBundle\Core\Content\ContentCreatorInterface;
use CodeRhapsodie\EzDataflowBundle\Core\Content\ContentUpdaterInterface;
use CodeRhapsodie\EzDataflowBundle\Model\ContentCreateStructure;
use CodeRhapsodie\EzDataflowBundle\Model\ContentStructure;
use CodeRhapsodie\EzDataflowBundle\Model\ContentUpdateStructure;
use Psr\Log\LoggerAwareTrait;

class ContentWriter extends RepositoryWriter implements DelegateWriterInterface
{
    use LoggerAwareTrait;

    /** @var \CodeRhapsodie\EzDataflowBundle\Core\Content\ContentCreatorInterface */
    private $creator;

    /** @var \CodeRhapsodie\EzDataflowBundle\Core\Content\ContentUpdaterInterface */
    private $updater;

    public function __construct(ContentCreatorInterface $creator, ContentUpdaterInterface $updater)
    {
        $this->creator = $creator;
        $this->updater = $updater;
    }

    /**
     * @param \CodeRhapsodie\EzDataflowBundle\Model\ContentStructure $item
     */
    public function write($item)
    {
        if (!$item instanceof ContentStructure) {
            $this->log('warning', 'Data is not a ContentStucture');

            return;
        }

        if ($item instanceof ContentCreateStructure) {
            $this->log('info', 'Save content', [
                'content_type' => $item->getContentTypeIdentifier(),
                'content_location' => $item->getLocations(),
            ]);
            $this->creator->createFromStructure($item);

            return;
        }

        if ($item instanceof ContentUpdateStructure) {
            $this->log('info', 'Update content', ['id' => $item->getId(), 'remote_id' => $item->getRemoteId()]);
            $this->updater->updateFromStructure($item);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function supports($item): bool
    {
        return $item instanceof ContentStructure;
    }

    private function log(string $level, string $message, array $context = [])
    {
        if (null === $this->logger) {
            return;
        }
        $this->logger->log($level, $message, $context);
    }
}
