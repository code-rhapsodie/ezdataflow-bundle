<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Writer;

use CodeRhapsodie\EzDataflowBundle\UserSwitcher\UserSwitcherAwareInterface;
use CodeRhapsodie\EzDataflowBundle\UserSwitcher\UserSwitcherAwareTrait;
use CodeRhapsodie\DataflowBundle\DataflowType\Writer\WriterInterface;

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
