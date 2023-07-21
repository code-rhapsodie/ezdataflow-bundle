<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Field;

use Ibexa\Contracts\Core\FieldType\Value;
use Ibexa\Contracts\Core\Repository\FieldTypeService;

class DefaultFieldValueCreator implements FieldValueCreatorInterface
{
    /** @var \Ibexa\Contracts\Core\Repository\FieldTypeService */
    private $fieldTypeService;

    public function __construct(FieldTypeService $fieldTypeService)
    {
        $this->fieldTypeService = $fieldTypeService;
    }

    public function supports(string $fieldTypeIdentifier): bool
    {
        return true;
    }

    public function createValue(string $fieldTypeIdentifier, $hash): Value
    {
        return $this->fieldTypeService->getFieldType($fieldTypeIdentifier)->fromHash($hash);
    }
}
