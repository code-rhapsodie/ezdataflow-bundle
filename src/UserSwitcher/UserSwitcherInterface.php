<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\UserSwitcher;

interface UserSwitcherInterface
{
    public function switchToAdmin(): void;

    public function switchTo($loginOrId): void;

    public function switchBack(): void;
}
