<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Content;

use CodeRhapsodie\EzDataflowBundle\Model\ContentUpdateStructure;
use eZ\Publish\API\Repository\Values\Content\Content;

interface ContentUpdaterInterface
{
    public function updateFromStructure(ContentUpdateStructure $structure): Content;
}
