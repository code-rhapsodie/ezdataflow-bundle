<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\FieldComparator;

use Ibexa\Contracts\Core\FieldType\Value;

class MapLocationFieldComparator extends AbstractFieldComparator
{
    protected function compareValues(Value $currentValue, Value $newValue): bool
    {
        return (string) $currentValue === (string) $newValue
            && (float) $currentValue->longitude === (float) $newValue->longitude
            && (float) $currentValue->latitude === (float) $newValue->latitude
        ;
    }
}
