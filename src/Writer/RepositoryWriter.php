<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Writer;

use CodeRhapsodie\DataflowBundle\DataflowType\Writer\WriterInterface;
use CodeRhapsodie\EzDataflowBundle\UserSwitcher\UserSwitcherAwareInterface;
use CodeRhapsodie\EzDataflowBundle\UserSwitcher\UserSwitcherAwareTrait;

abstract class RepositoryWriter implements WriterInterface, UserSwitcherAwareInterface
{
    use UserSwitcherAwareTrait;

    public function prepare()
    {
        $this->userSwitcher->switchToAdmin();
    }

    public function finish()
    {
        $this->userSwitcher->switchBack();
    }
}
