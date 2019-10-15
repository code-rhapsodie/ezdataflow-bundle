<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Core\Content;

use CodeRhapsodie\EzDataflowBundle\Model\ContentCreateStructure;
use eZ\Publish\API\Repository\Values\Content\Content;

interface ContentCreatorInterface
{
    public function createFromStructure(ContentCreateStructure $structure): Content;
}
