<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Field;

use eZ\Publish\API\Repository\FieldType;
use eZ\Publish\API\Repository\FieldTypeService;
use eZ\Publish\Core\FieldType\Value;

class DefaultFieldValueCreator implements FieldValueCreatorInterface
{
    /** @var FieldTypeService */
    private $fieldTypeService;

    /** @var FieldType[] */
    private $fieldTypes = [];

    public function __construct(FieldTypeService $fieldTypeService)
    {
        $this->fieldTypeService = $fieldTypeService;
    }

    public function supports(string $fieldTypeIdentifier): bool
    {
        return true;
    }

    public function createValue(string $fieldTypeIdentifier, $hash): Value
    {
        return $this->getFieldType($fieldTypeIdentifier)->fromHash($hash);
    }

    /**
     * @param string $fieldTypeIdentifier
     *
     * @return FieldType
     *
     * @throws \eZ\Publish\API\Repository\Exceptions\NotFoundException
     */
    private function getFieldType(string $fieldTypeIdentifier): FieldType
    {
        if (!isset($this->fieldTypes[$fieldTypeIdentifier])) {
            $this->fieldTypes[$fieldTypeIdentifier] = $this->fieldTypeService->getFieldType($fieldTypeIdentifier);
        }

        return $this->fieldTypes[$fieldTypeIdentifier];
    }
}
