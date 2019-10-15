<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Exception;

class InvalidArgumentTypeException extends \Exception
{
    /**
     * @param string|array $expectedTypes
     * @param mixed        $received
     *
     * @return InvalidArgumentTypeException
     */
    public static function create($expectedTypes, $received): self
    {
        if (!is_array($expectedTypes)) {
            $expectedTypes = [$expectedTypes];
        }

        if (count($expectedTypes) > 1) {
            $last = array_pop($expectedTypes);
            $expectedString = implode(', ', $expectedTypes).' or '.$last;
        } else {
            $expectedString = reset($expectedTypes);
        }

        return new self(sprintf(
            'Expected argument of type %s, %s received instead',
            $expectedString,
            is_object($received) ? get_class($received) : gettype($received)
        ));
    }
}
