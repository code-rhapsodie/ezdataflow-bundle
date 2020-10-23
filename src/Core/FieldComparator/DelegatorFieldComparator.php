<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\FieldComparator;

use eZ\Publish\API\Repository\Values\Content\Field;

class DelegatorFieldComparator implements FieldComparatorInterface
{
    /** @var FieldComparatorInterface[] */
    private $delegates;

    /**
     * FieldComparator constructor.
     */
    public function __construct()
    {
        $this->delegates = [];
    }

    public function compare(Field $field, $hash): bool
    {
        if (isset($this->delegates[$field->fieldTypeIdentifier])) {
            return $this->delegates[$field->fieldTypeIdentifier]->compare($field, $hash);
        }

        // No comparator to handle this field type, we assume the value is different.
        return false;
    }

    public function registerDelegateFieldComparator(FieldComparatorInterface $typedFieldComparator, string $fieldTypeIdentifier): void
    {
        $this->delegates[$fieldTypeIdentifier] = $typedFieldComparator;
    }
}
