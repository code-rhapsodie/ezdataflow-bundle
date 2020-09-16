<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\UserSwitcher;

trait UserSwitcherAwareTrait
{
    /** @var UserSwitcherInterface */
    protected $userSwitcher;

    public function setUserSwitcher(UserSwitcherInterface $userSwitcher): void
    {
        $this->userSwitcher = $userSwitcher;
    }
}
