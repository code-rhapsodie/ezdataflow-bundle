<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\UserSwitcher;

use eZ\Publish\API\Repository\PermissionResolver;
use eZ\Publish\API\Repository\UserService;
use eZ\Publish\API\Repository\Values\User\UserReference;

class UserSwitcher implements UserSwitcherInterface
{
    /** @var PermissionResolver */
    private $permissionResolver;

    /** @var UserService */
    private $userService;

    /** @var string|int */
    private $adminLoginOrId;

    /** @var UserReference[] */
    private $userStack;

    public function __construct(PermissionResolver $permissionResolver, UserService $userService, $adminLoginOrId)
    {
        $this->permissionResolver = $permissionResolver;
        $this->userService = $userService;
        $this->adminLoginOrId = $adminLoginOrId;
        $this->userStack = [];
    }

    public function switchTo($loginOrId): void
    {
        if (is_int($loginOrId)) {
            $user = $this->userService->loadUser($loginOrId);
        } else {
            $user = $this->userService->loadUserByLogin($loginOrId);
        }

        $this->userStack[] = $this->permissionResolver->getCurrentUserReference();
        $this->permissionResolver->setCurrentUserReference($user);
    }

    public function switchToAdmin(): void
    {
        $this->switchTo($this->adminLoginOrId);
    }

    public function switchBack(): void
    {
        if (empty($this->userStack)) {
            return;
        }

        $this->permissionResolver->setCurrentUserReference(array_pop($this->userStack));
    }
}
