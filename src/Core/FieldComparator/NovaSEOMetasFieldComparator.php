<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\FieldComparator;

use Ibexa\Contracts\Core\FieldType\Value;

class NovaSEOMetasFieldComparator extends AbstractFieldComparator
{
    protected function compareValues(Value $currentValue, Value $newValue): bool
    {
        $map = [];
        foreach ($currentValue->metas as $meta) {
            $map[$meta->getName()] = $meta->getContent();
        }

        foreach ($newValue->metas as $meta) {
            if (!isset($map[$meta->getName()]) || $map[$meta->getName()] !== $meta->getContent()) {
                return false;
            }
        }

        return count($currentValue->metas) === count($newValue->metas);
    }
}
