<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Exception;

class UnsupportedFieldTypeException extends \Exception
{
    public static function create(string $fieldTypeIdentifier): self
    {
        return new self(sprintf(
            'No FieldValueCreator able to support field type %s was found.',
            $fieldTypeIdentifier
        ));
    }
}
