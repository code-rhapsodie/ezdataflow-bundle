<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\FieldComparator;

use Ibexa\Contracts\Core\FieldType\Value;
use Ibexa\Contracts\Core\Repository\FieldTypeService;
use Ibexa\Contracts\Core\Repository\Values\Content\Field;

abstract class AbstractFieldComparator implements FieldComparatorInterface
{
    /** @var \Ibexa\Contracts\Core\Repository\FieldTypeService */
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
