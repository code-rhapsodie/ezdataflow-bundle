<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Field;

use eZ\Publish\API\Repository\FieldTypeService;
use eZ\Publish\Core\FieldType\Value;

class DefaultFieldValueCreator implements FieldValueCreatorInterface
{
    /** @var FieldTypeService */
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
