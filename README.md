# eZ Dataflow

The eZ Dataflow bundle is intent to manage external data sources import into your EZPlatform instance.

## Installation

### Step 1: Install the bundle via composer

```shell script
$ composer require code-rhapsodie/ezdataflow
```

### Step 2: Enable the bundle

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
# app/config/routing.yml

cr.dataflow:
    resource: '@CodeRhapsodieEzDataflowBundle/Resources/config/routing.yaml'
```

## Configuration

By default, the `ContentWriter` will publish contents using the `admin` user. If you want to use another user (with sufficient permissions), you can configure it like this:

```yaml
# app/config/config.yml

code_rhapsodie_ez_dataflow:
    # Integer values are assumed to be user ids, non-integer values are assumed to be user logins
    admin_login_or_id: webmaster
```
