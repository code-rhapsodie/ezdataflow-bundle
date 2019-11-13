<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Factory;

interface ContentStructureFactoryInterface
{
    public const MODE_INSERT_OR_UPDATE = 1;
    public const MODE_INSERT_ONLY = 2;
    public const MODE_UPDATE_ONLY = 3;

    public function transform(array $data, string $remoteId, string $language, string $contentType, $parentLocations, int $mode = ContentStructureFactoryInterface::MODE_INSERT_OR_UPDATE);
}
