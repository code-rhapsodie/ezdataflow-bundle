<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Field;

use Ibexa\Contracts\Core\Repository\Values\Content\ContentStruct;
use Ibexa\Contracts\Core\Repository\Values\ContentType\ContentType;

interface ContentStructFieldFillerInterface
{
    public function fillFields(ContentType $contentType, ContentStruct $contentStruct, array $fieldHashes): void;
}
