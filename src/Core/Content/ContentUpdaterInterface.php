<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Content;

use CodeRhapsodie\EzDataflowBundle\Model\ContentUpdateStructure;
use Ibexa\Contracts\Core\Repository\Values\Content\Content;

interface ContentUpdaterInterface
{
    public function updateFromStructure(ContentUpdateStructure $structure): Content;
}
