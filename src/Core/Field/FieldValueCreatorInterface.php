<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Field;

use eZ\Publish\Core\FieldType\Value;

interface FieldValueCreatorInterface
{
    /**
     * @param string $fieldTypeIdentifier
     *
     * @return bool
     */
    public function supports(string $fieldTypeIdentifier): bool;

    /**
     * @param string $fieldTypeIdentifier
     * @param mixed  $hash
     *
     * @return Value
     */
    public function createValue(string $fieldTypeIdentifier, $hash): Value;
}
