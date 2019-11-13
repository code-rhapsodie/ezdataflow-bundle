# From v1.0 to v2.0

When you use Dataflow commands, use `--siteaccess` instead of `--connection`.

[BC] The return of `CodeRhapsodie\EzDataflowBundle\Gateway\JobGateway::findForScheduled` 
and `CodeRhapsodie\EzDataflowBundle\Gateway\ScheduledDataflowGateway::findAllOrderedByLabel` has been changed. 
The iterable contains an associative array instead of an object.

[BC] In classes `CodeRhapsodie\EzDataflowBundle\Gateway\JobGateway` and 
`CodeRhapsodie\EzDataflowBundle\Gateway\ScheduledDataflowGateway`, all methods return `Doctrine\ORM\Query` object has 
changed to return  now a `Doctrine\DBAL\Query\QueryBuilder` 

[BC] The return type of `CodeRhapsodie\EzDataflowBundle\Factory\ContentStructureFactory::transform` has been changed 
from `CodeRhapsodie\EzDataflowBundle\Model\ContentStructure` to `mixed`. In fact only `false` or 
`CodeRhapsodie\EzDataflowBundle\Model\ContentStructure` object will be returned.
