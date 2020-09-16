<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Field;

use eZ\Publish\API\Repository\Values\Content\ContentStruct;
use eZ\Publish\API\Repository\Values\ContentType\ContentType;

interface ContentStructFieldFillerInterface
{
    public function fillFields(ContentType $contentType, ContentStruct $contentStruct, array $fieldHashes): void;
}
