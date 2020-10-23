<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\FieldComparator;

use eZ\Publish\Core\FieldType\Value;

class MatrixFieldComparator extends AbstractFieldComparator
{
    protected function compareValues(Value $currentValue, Value $newValue): bool
    {
        if (count($currentValue->rows) !== count($newValue->rows)) {
            return false;
        }

        foreach ($newValue->rows as $index => $row) {
            if (count($currentValue->rows[$index]->getCells()) !== count($row->getCells())) {
                return false;
            }

            if (!empty(array_diff_assoc($currentValue->rows[$index]->getCells(), $row->getCells()))) {
                return false;
            }
        }

        return true;
    }
}
