<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Exception;

class UnknownFieldException extends \Exception
{
    /**
     * @return UnknownFieldException
     */
    public static function create(string $fieldIdentifier, string $contentTypeIdentifier): self
    {
        return new self(sprintf(
            'Unknown field %s in content type %s',
            $fieldIdentifier,
            $contentTypeIdentifier
        ));
    }
}
