<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\UserSwitcher;

interface UserSwitcherAwareInterface
{
    public function setUserSwitcher(UserSwitcherInterface $userSwitcher): void;
}
