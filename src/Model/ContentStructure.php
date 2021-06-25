<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Model;

abstract class ContentStructure
{
    /** @var string|null */
    protected $remoteId;

    /** @var string */
    protected $languageCode;

    /** @var array */
    protected $fields;

    public function getRemoteId(): ?string
    {
        return $this->remoteId;
    }

    public function getLanguageCode(): string
    {
        return $this->languageCode;
    }

    public function getFields(): array
    {
        return $this->fields;
    }
}
