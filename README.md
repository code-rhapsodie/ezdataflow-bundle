# Code Rhapsodie eZ Dataflow Bundle

EzDataflowBundle is a bundle integrating [Code Rhapsodie Dataflow bundle](https://github.com/code-rhapsodie/dataflow-bundle) into eZ Platfom 2.0+.
Dataflows can be piloted from an interface integrated in eZ Platform backoffice.
EzDataflow bundle is intended to manage content imports from external data sources.

> Note: before using this bundle, please read the [Code Rhapsodie Dataflow bundle documentation](https://github.com/code-rhapsodie/dataflow-bundle/blob/master/README.md).

> Command line notice: When you use Dataflow commands, **use `--siteaccess` instead of `--connection`** expect for `code-rhapsodie:dataflow:dump-schema` command.

## User Interface (UI)

The UI lets you create workflow processes from any defined `DataflowTypes`, and set options to each.

Processes can be set to run either:
- only once, at a given date and time
- regularly, by defining the first run date and time, and the interval between subsequent runs

## Installation

### Step 1: Install the bundle via composer

```shell script
$ composer require code-rhapsodie/ezdataflow-bundle
```

### Step 2: Enable the bundle

#### Symfony 4 (new tree)

For Symfony 4, add those two lines in the `config/bundles.php` file:

```php
<?php

return [
     // ...
    CodeRhapsodie\DataflowBundle\CodeRhapsodieDataflowBundle::class => ['all' => true],
    CodeRhapsodie\EzDataflowBundle\CodeRhapsodieEzDataflowBundle::class => ['all' => true],
    // ...
];
```

#### Symfony 3.4 (old tree)

For Symfony 3.4, add those two lines in the `app/AppKernel.php` file:

```php
<?php
// app/AppKernel.php

public function registerBundles()
{
    $bundles = [
        // ...
        new CodeRhapsodie\DataflowBundle\CodeRhapsodieDataflowBundle(),
        new CodeRhapsodie\EzDataflowBundle\CodeRhapsodieEzDataflowBundle(),
        // ...
    ];
}
```

### Step 3: Import bundle routing file

```yaml
# app/config/routing.yml or config/routing.yaml

_cr.dataflow:
    resource: '@CodeRhapsodieEzDataflowBundle/Resources/config/routing.yaml'
```

### Step 4: Update the database schema

Please refer to the [Code-Rhapsodie Dataflow Bundle installation guide](https://github.com/code-rhapsodie/dataflow-bundle#update-the-database).

### Step 5: Schedule the job runner

Please refer to the [Code-Rhapsodie Dataflow Bundle Queue section](https://github.com/code-rhapsodie/dataflow-bundle#queue).

## Configuration

By default, the `ContentWriter` will publish contents using the `admin` user. If you want to use another user (with sufficient permissions), you can configure it like this:

```yaml
# app/config/config.yml or config/packages/code_rhapsodie_ez_dataflow.yaml

code_rhapsodie_ez_dataflow:
    # Integer values are assumed to be user ids, non-integer values are assumed to be user logins
    admin_login_or_id: webmaster
```

## Define your Dataflow

Before using the admin UI to manage your dataflows, you need to define them. Please refer to [Code-Rhapsodie Dataflow type documentation](https://github.com/code-rhapsodie/dataflow-bundle#define-a-dataflow-type).

## Use the ContentWriter

To add or update eZ Platform contents, you can use the `CodeRhapsodie\EzDataflowBundle\Writer\ContentWriter` writer.

### Step 1: Inject the dependencies and add the writer

Inject the `ContentWriter` service into the constructor of your DataflowType and add the content writer into the writer list like this:

```php
// In your DataflowType

use CodeRhapsodie\EzDataflowBundle\Writer\ContentWriter;
use CodeRhapsodie\DataflowBundle\DataflowType\AbstractDataflowType;
[...]

class MyDataflowType extends AbstractDataflowType
{
    //[...]
    /**
     * @var ContentWriter
     */
    private $contentWriter;

    public function __construct(ContentWriter $contentWriter)
    {
        $this->contentWriter = $contentWriter;
    }
    //[...]
    protected function buildDataflow(DataflowBuilder $builder, array $options): void
    {
        //[...]
        $builder->addWriter($this->contentWriter);
    }
}
```

### Step 2: Add a step for prepare the content

To process eZ Platform content into your Dataflow, you need to transform the data into `ContentCreateStructure` or `ContentUpdateStructure` objects.
in order to respectively create or update contents.

But, in order to determine if the content already exists or not, you first need to look up for it.

One way is to use the remote id to search for the content.

In the following example, the remote id pattern is `article-<id>` with the `<id>` replaced by the data id provided by the reader.
To check if the content exists or not, I use the service `ContentService` provided by eZ Platform.

The step is added as an anonymous function and has 3 types of return values:

* When the step returns `false`, the data is dropped.
* When the step returns a `ContentCreateStructure`, the data will be saved into a new eZ Platform content.
* When the step returns a `ContentUpdateStructure`, the existing eZ Platform content will be updated by overwriting all defined fields in the data.

For the new content, you must provide one or more "parent location id" as the 3rd argument of the `ContentCreateStructure` constructor.

In this example, I have added a new folder to store all articles.

To get the location id of the parent eZ Platform content, go to the admin UI and select the future parent content, click on the details tabs, and read the "Location id" like this:

![parent folder](src/Resources/doc/dest_folder.jpg)

> Note: the best practice is to define this parent id in your `parameters.yml` file or your `.env.local` file for each execution environment.

```php
// In your DataflowType

use CodeRhapsodie\EzDataflowBundle\Factory\ContentStructureFactory;
use CodeRhapsodie\EzDataflowBundle\Writer\ContentWriter;
use CodeRhapsodie\DataflowBundle\DataflowType\AbstractDataflowType;
[...]

class MyDataflowType extends AbstractDataflowType
{
    //[...]
    /**
     * @var ContentWriter
     */
    private $contentWriter;

    /**
     * @var ContentStructureFactory
     */
    private contentStructureFactory;

    public function __construct(ContentWriter $contentWriter, ContentStructureFactory $contentStructureFactory)
    {
        $this->contentWriter = $contentWriter;
        $this->contentStructureFactory = $contentStructureFactory;
    }
    //[...]
    protected function buildDataflow(DataflowBuilder $builder, array $options): void
    {
        //[...]
        $builder->addStep(function ($data) {
            if (!isset($data['id'])) {
                return false;
            }

            $remoteId = sprintf('article-%d', $data['id']);
            unset($data['id']);

            return $this->contentStructureFactory->transform(
                    $data,
                    $remoteId,
                    'eng-GB',
                    'article2',
                    54, //Parent location id
                    ContentStructureFactory::MODE_INSERT_OR_UPDATE //Optional value. Other choice : ContentStructureFactory::MODE_INSERT_ONLY or ContentStructureFactory::MODE_UPDATE_ONLY
                );
        });
        $builder->addWriter($this->contentWriter);
    }
}
```

This example uses `ContentStructureFactory` to check if the content exists and returns the adequate `ContentStrucure` to pass to the content writer.

# Admin UI

## Access to the eZ Dataflow UI

You can access the eZ Dataflow administration UI from your eZ Platform admin back-office.

![Admin menu](src/Resources/doc/ez_dataflow_admin_menu.jpg)

1. Click to "Admin"
1. Click to "eZ Dataflow"

## Scheduled dataflow list

When you access to the eZ Dataflow administration UI, you going here:

![Scheduled dataflow list](src/Resources/doc/scheduled_list.jpg)

1. Scheduled dataflow list
1. Button to add a new scheduled dataflow
1. Tools available for each scheduled dataflow. In order from left to right :
   1. Display the history for this dataflow schedule
   1. Edit this dataflow schedule
   1. Enable/Disable this dataflow schedule
   1. Delete this dataflow schedule

> Note: You can define more than one schedule for any given dataflow.

## Add a new schedule

Go to the eZ Dataflow admin, and click on the "+" orange button. 

In the new popin, fill in the fields:

![Add a new schedule](src/Resources/doc/add_new_schedule.jpg)

1. Type the Dataflow schedule name
1. Select the Dataflow type. The list is automatically generated from the list of Symfony services with the tags `coderhapsodie.dataflow.type`. If your dataflow type is not present, [check the configuration](https://github.com/code-rhapsodie/dataflow-bundle#check-if-your-dataflowtype-is-ready)
1. Type here the Dataflow options. Basic expected format: one option per line and option name and value separated with `: `. For more complex options, the whole YAML format is supported.
1. Type here the frequency. The value must be compatible with the the PHP [strtotime](https://www.php.net/manual/en/function.strtotime.php) function.
1. Choose the date and time of the first job.
1. Check if you want to run this Dataflow.

Finally, click on the "Create" button.

## Read the history

When you click on the "History" tab in the eZ Dataflow admin UI, the job history for all Dataflow configured and executed is displayed.

![History list](src/Resources/doc/history_list.jpg)

1. The history list
1. This column shows the number of objects that have been processed.
1. Click on the question mark to display the job details.

Details of one scheduled job:

![Job execution details](src/Resources/doc/job_successful.jpg)

## One-shot job

If you don't want to run a Dataflow periodically, you can add a single execution at the time and date that you want.

Go to the eZ Dataflow admin UI and click on the "Oneshot" tab.

![Oneshot list](src/Resources/doc/oneshot_list.jpg)

1. This button allows you to define the one-shot job (see below).
1. This column shows the number of objects that have been processed.
1. Click on the question mark to display the job details.

Details of one-shot job:

![onshot details](src/Resources/doc/job_fail.jpg)

Here the job has fail.

## Add a one-shot job

Go to the eZ Dataflow admin UI and click on the "Oneshot" tab. Click on the "+" orange button to open the adding popin.

![The add one-shot popin](src/Resources/doc/one_shot_job.jpg)

1. Type the Dataflow job name
1. Select the Dataflow type. The list is automatically generated from the list of Symfony services with the tags `coderhapsodie.dataflow.type`. If your dataflow type is not present, [check the configuration](https://github.com/code-rhapsodie/dataflow-bundle#check-if-your-dataflowtype-is-ready)
1. Type here the Dataflow options. Basic expected format: one option per line and option name and value separated with `: `. For more complex options, the whole YAML format is supported.
1. Choose the date and time of the first job.

Finally, click on the "Create" button.

# Issues and feature requests

Please report issues and request features at https://github.com/code-rhapsodie/ezdataflow-bundle/issues.

# Contributing

Contributions are very welcome. Please see [CONTRIBUTING.md](CONTRIBUTING.md) for
details. Thanks to [everyone who has contributed](https://github.com/code-rhapsodie/ezdataflow-bundle/graphs/contributors)
already.

# License

This package is licensed under the [MIT license](LICENSE).

