<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\FieldComparator;

use Ibexa\Contracts\Core\Repository\Values\Content\Field;

interface FieldComparatorInterface
{
    /**
     * @return bool true if identical, false otherwise
     */
    public function compare(Field $field, $hash): bool;
}
