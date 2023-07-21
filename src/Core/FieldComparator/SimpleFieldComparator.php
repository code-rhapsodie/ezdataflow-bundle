<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\FieldComparator;

use Ibexa\Contracts\Core\FieldType\Value;

class SimpleFieldComparator extends AbstractFieldComparator
{
    protected function compareValues(Value $currentValue, Value $newValue): bool
    {
        return (string) $currentValue === (string) $newValue;
    }
}
