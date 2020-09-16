<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Model;

class ContentUpdateStructure extends ContentStructure
{
    /** @var int|null */
    protected $id;

    private function __construct(string $languageCode, array $fields)
    {
        $this->languageCode = $languageCode;
        $this->fields = $fields;
    }

    /**
     * @return ContentUpdateStructure
     */
    public static function createForContentId(int $id, string $languageCode, array $fields): self
    {
        $struct = new self($languageCode, $fields);
        $struct->id = $id;

        return $struct;
    }

    /**
     * @return ContentUpdateStructure
     */
    public static function createForContentRemoteId(string $remoteId, string $languageCode, array $fields): self
    {
        $struct = new self($languageCode, $fields);
        $struct->remoteId = $remoteId;

        return $struct;
    }

    public function getId(): ?int
    {
        return $this->id;
    }
}
