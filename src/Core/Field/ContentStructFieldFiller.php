<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Field;

use CodeRhapsodie\EzDataflowBundle\Exception\UnknownFieldException;
use CodeRhapsodie\EzDataflowBundle\Exception\UnsupportedFieldTypeException;
use Ibexa\Contracts\Core\FieldType\Value;
use Ibexa\Contracts\Core\Repository\Values\Content\ContentStruct;
use Ibexa\Contracts\Core\Repository\Values\ContentType\ContentType;

class ContentStructFieldFiller implements ContentStructFieldFillerInterface
{
    /** @var FieldValueCreatorInterface[] */
    private $fieldValueCreators;

    /**
     * ContentStructFieldFiller constructor.
     */
    public function __construct(iterable $fieldValueCreators)
    {
        $this->fieldValueCreators = $fieldValueCreators;
    }

    /**
     * {@inheritdoc}
     *
     * @throws \CodeRhapsodie\EzDataflowBundle\Exception\UnknownFieldException
     * @throws \CodeRhapsodie\EzDataflowBundle\Exception\UnsupportedFieldTypeException
     */
    public function fillFields(ContentType $contentType, ContentStruct $contentStruct, array $fieldHashes): void
    {
        foreach ($fieldHashes as $identifier => $hash) {
            $fieldDef = $contentType->getFieldDefinition($identifier);
            if (null === $fieldDef) {
                throw UnknownFieldException::create($identifier, $contentType->identifier);
            }

            $contentStruct->setField(
                $identifier,
                $this->createFieldValue($fieldDef->fieldTypeIdentifier, $hash)
            );
        }
    }

    /**
     * @param mixed $hash
     *
     * @throws \CodeRhapsodie\EzDataflowBundle\Exception\UnsupportedFieldTypeException
     */
    private function createFieldValue(string $fieldTypeIdentifier, $hash): Value
    {
        foreach ($this->fieldValueCreators as $creator) {
            if ($creator->supports($fieldTypeIdentifier)) {
                return $creator->createValue($fieldTypeIdentifier, $hash);
            }
        }

        throw UnsupportedFieldTypeException::create($fieldTypeIdentifier);
    }
}
