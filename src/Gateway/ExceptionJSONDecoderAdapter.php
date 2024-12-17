<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Gateway;

use Pagerfanta\Adapter\AdapterInterface;

class ExceptionJSONDecoderAdapter implements AdapterInterface
{
    /** @var AdapterInterface */
    private $adapter;

    public function __construct(AdapterInterface $adapter)
    {
        $this->adapter = $adapter;
    }

    public function getNbResults()
    {
        return $this->adapter->getNbResults();
    }

    public function getSlice($offset, $length)
    {
        $slice = $this->adapter->getSlice($offset, $length);
        array_walk($slice, static function (&$value) {
            if (isset($value['exceptions'])) {
                $value['exceptions'] = json_decode($value['exceptions'], true, 512, JSON_THROW_ON_ERROR);
            }
        });

        return $slice;
    }
}
