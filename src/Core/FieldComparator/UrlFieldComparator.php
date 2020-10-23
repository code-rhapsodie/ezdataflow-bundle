<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\FieldComparator;

use eZ\Publish\Core\FieldType\Value;

class UrlFieldComparator extends AbstractFieldComparator
{
    protected function compareValues(Value $currentValue, Value $newValue): bool
    {
        return $currentValue->link === $newValue->link && $currentValue->text === $newValue->text;
    }
}
