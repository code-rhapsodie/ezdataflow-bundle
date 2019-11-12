# From v1.0 to v2.0

When you use Dataflow commands, use `--siteaccess` instead of `--connection`.

[BC] The return of `CodeRhapsodie\EzDataflowBundle\Gateway\JobGateway::findForScheduled` and `CodeRhapsodie\EzDataflowBundle\Gateway\ScheduledDataflowGateway::findAllOrderedByLabel` has been changed. The iterable contains an associative array instead of an object.
