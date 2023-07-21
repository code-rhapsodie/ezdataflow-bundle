# Version 4.0.0

* Add compatibility with Ibexa 4.0+ and drop compatibility for eZPlatform 2 and Ibexa 3 

# Version 3.2.0

* Fixed History page pagination is hidden by footer on Ibexa 3.3 #38
* Added filter on history page to filter out jobs with 0 items
* Date and times will now be displayed using the user defined timezone, and stored using php timezone 

# Version 3.1.0

* Allow `LocationCreateStruct` objects inside the `$locations` argument of `ContentCreateStructure` to have more control over the created locations.

# Version 3.0.1

* Bump minimum PHP version to PHP 7.3 like code-rhapsodie/dataflow-bundle dependency.
* Allow PHP 8.x.
* Add GitHub Action to run tests.

# Version 3.0.0

* Add compatibility with Ibexa Content 3.3
* Add compatibility with Symfony 5.x

# Version 2.3.0

* Added a button to display exceptions / log in a modal
* Add log in `CodeRhapsodie\EzDataflowBundle\Filter\NotModifiedContentFilter` and `CodeRhapsodie\EzDataflowBundle\Writer\ContentWriter`

# Version 2.2.0

* Added `NotModifiedContentFilter` and a bunch of `FieldComparator` classes

# version 2.1.0

* ContentWriter return created content

# version 2.0.1

* Enclosure js code into anonymous function

# version 2.0.0

* Update to use Dataflow v2.0+
* Add compiler pass to change the Dataflow DBAL connection factory
* Use the DBAL connection from siteaccess
* Add `mode` argument on `ContentStructureFactory::transform()` function
* Add `CodeRhapsodie\EzDataflowBundle\Factory\ContentStructureFactoryInterface`

# version 1.0.0

* Initial version to use Dataflow v1.0+ into eZ Platform
* Add Admin UI
* Add content writer
* Add content structure
