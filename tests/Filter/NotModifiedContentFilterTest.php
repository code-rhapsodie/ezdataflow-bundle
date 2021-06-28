<?php

declare(strict_types=1);

namespace CodeRhapsodie\EzDataflowBundle\Tests\Filter;

use CodeRhapsodie\EzDataflowBundle\Core\FieldComparator\FieldComparatorInterface;
use CodeRhapsodie\EzDataflowBundle\Filter\NotModifiedContentFilter;
use CodeRhapsodie\EzDataflowBundle\Model\ContentUpdateStructure;
use eZ\Publish\API\Repository\ContentService;
use eZ\Publish\API\Repository\Values\Content\Field;
use eZ\Publish\Core\Repository\Values\Content\Content;
use PHPUnit\Framework\MockObject\MockObject;
use PHPUnit\Framework\TestCase;

class NotModifiedContentFilterTest extends TestCase
{
    /** @var ContentService|MockObject */
    private $contentServiceMock;

    /** @var FieldComparatorInterface|MockObject */
    private $comparatorMock;

    /** @var NotModifiedContentFilter */
    private $notModifiedContentFilter;

    protected function setUp(): void
    {
        $this->contentServiceMock = $this->createMock(ContentService::class);
        $this->comparatorMock = $this->createMock(FieldComparatorInterface::class);
        $this->notModifiedContentFilter = new NotModifiedContentFilter($this->contentServiceMock, $this->comparatorMock);
    }

    public function testNotContentUpdateStructure()
    {
        $data = 'notAStruct';
        $returnValue = ($this->notModifiedContentFilter)($data);

        $this->assertSame($data, $returnValue);
    }

    public function testIdenticalContent()
    {
        $id = 10;
        $field1 = 'field1';
        $value1 = 'value1';
        $field2 = 'field2';
        $value2 = 'value2';
        $contentField1 = new Field();
        $contentField2 = new Field();
        $data = ContentUpdateStructure::createForContentId($id, 'lang', [
            $field1 => $value1,
            $field2 => $value2,
        ]);
        $content = $this->createMock(Content::class);

        $content
            ->expects($this->exactly(2))
            ->method('getField')
            ->withConsecutive([$field1], [$field2])
            ->willReturnOnConsecutiveCalls($contentField1, $contentField2)
        ;
        $this->contentServiceMock
            ->expects($this->once())
            ->method('loadContent')
            ->with($id)
            ->willReturn($content)
        ;
        $this->comparatorMock
            ->expects($this->exactly(2))
            ->method('compare')
            ->withConsecutive([$contentField1, $value1], [$contentField2, $value2])
            ->willReturn(true)
        ;

        $return = ($this->notModifiedContentFilter)($data);

        $this->assertFalse($return);
    }

    public function testDifferentContent()
    {
        $id = 10;
        $field1 = 'field1';
        $value1 = 'value1';
        $field2 = 'field2';
        $value2 = 'value2';
        $field3 = 'field3';
        $value3 = 'value3';
        $contentField1 = new Field();
        $contentField2 = new Field();
        $data = ContentUpdateStructure::createForContentId($id, 'lang', [
            $field1 => $value1,
            $field2 => $value2,
            $field3 => $value3,
        ]);
        $content = $this->createMock(Content::class);

        $content
            ->expects($this->exactly(2))
            ->method('getField')
            ->withConsecutive([$field1], [$field2])
            ->willReturnOnConsecutiveCalls($contentField1, $contentField2)
        ;
        $this->contentServiceMock
            ->expects($this->once())
            ->method('loadContent')
            ->with($id)
            ->willReturn($content)
        ;
        $this->comparatorMock
            ->expects($this->exactly(2))
            ->method('compare')
            ->withConsecutive([$contentField1, $value1], [$contentField2, $value2])
            ->willReturnOnConsecutiveCalls(true, false)
        ;

        $return = ($this->notModifiedContentFilter)($data);

        $this->assertSame($data, $return);
    }

    public function testLoadEmptyByRemoteId()
    {
        $remoteId = 'abc';
        $data = ContentUpdateStructure::createForContentRemoteId($remoteId, 'lang', []);

        $this->contentServiceMock
            ->expects($this->once())
            ->method('loadContentByRemoteId')
            ->with($remoteId)
            ->willReturn(new Content())
        ;
        $return = ($this->notModifiedContentFilter)($data);

        $this->assertFalse($return);
    }
}
