<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\FieldComparator;

use eZ\Publish\API\Repository\FieldTypeService;
use eZ\Publish\API\Repository\Values\Content\Field;
use eZ\Publish\Core\FieldType\Value;

abstract class AbstractFieldComparator implements FieldComparatorInterface
{
    /** @var FieldTypeService */
    private $fieldTypeService;

    public function __construct(FieldTypeService $fieldTypeService)
    {
        $this->fieldTypeService = $fieldTypeService;
    }

    public function compare(Field $field, $hash): bool
    {
        $newValue = $this->fieldTypeService->getFieldType($field->fieldTypeIdentifier)->fromHash($hash);

        return $this->compareValues($field->value, $newValue);
    }

    /**
     * Returns true if values are equals, false otherwise.
     */
    abstract protected function compareValues(Value $currentValue, Value $newValue): bool;
}
