var expect = require('chai').expect;

var ArrayBufferUtils = require('..');
var BufferWriter = ArrayBufferUtils.BufferWriter;
var BufferReader = ArrayBufferUtils.BufferReader;

describe('core functions', function(){
    it('bufferreader constructor 1', function(){
        var arrayBuffer = new ArrayBuffer(20);
        var bufferReader = new BufferReader(arrayBuffer, 10, true);
        expect(bufferReader.getSize()).to.equal(20);
        expect(bufferReader.getOffset()).to.equal(10);
        expect(bufferReader.isLittleEndian()).to.equal(true);
        expect(bufferReader.isBigEndian()).to.equal(false);
    });

    it('bufferreader constructor 2', function(){
        var arrayBuffer = new ArrayBuffer(30);
        var bufferReader = new BufferReader(arrayBuffer, 5);
        expect(bufferReader.getSize()).to.equal(30);
        expect(bufferReader.getOffset()).to.equal(5);
        expect(bufferReader.isLittleEndian()).to.equal(false);
        expect(bufferReader.isBigEndian()).to.equal(true);
    });

    it('bufferwriter constructor 1', function(){
        var arrayBuffer = new ArrayBuffer(20);
        var bufferWriter = new BufferWriter(arrayBuffer, 10, true);
        expect(bufferWriter.getSize()).to.equal(20);
        expect(bufferWriter.getOffset()).to.equal(10);
        expect(bufferWriter.isLittleEndian()).to.equal(true);
        expect(bufferWriter.isBigEndian()).to.equal(false);
    });

    it('bufferwriter constructor 2', function(){
        var arrayBuffer = new ArrayBuffer(30);
        var bufferWriter = new BufferWriter(arrayBuffer, 5);
        expect(bufferWriter.getSize()).to.equal(30);
        expect(bufferWriter.getOffset()).to.equal(5);
        expect(bufferWriter.isLittleEndian()).to.equal(false);
        expect(bufferWriter.isBigEndian()).to.equal(true);
    });

    it("writing and reading buffer", function(){
        var arrayBuffer = new ArrayBuffer(50);
        var bufferWriter = new BufferWriter(arrayBuffer);
        bufferWriter.writeInt8(1).writeUint8(2).writeInt16(3).writeUint16(4).writeInt32(5).writeUint32(6).writeFloat32(7).writeFloat64(8);

        var bufferReader = new BufferReader(arrayBuffer);
        var int8 = bufferReader.readInt8();
        var uInt8 = bufferReader.readUint8();
        var int16 = bufferReader.readInt16();
        var uInt16 = bufferReader.readUint16();
        var int32 = bufferReader.readInt32();
        var uInt32 = bufferReader.readUint32();
        var float32 = bufferReader.readFloat32();
        var float64 = bufferReader.readFloat64();
        expect(int8).to.equal(1);
        expect(uInt8).to.equal(2);
        expect(int16).to.equal(3);
        expect(uInt16).to.equal(4);
        expect(int32).to.equal(5);
        expect(uInt32).to.equal(6);
        expect(float32).to.equal(7);
        expect(float64).to.equal(8);
    });

    it("endianness", function(){
        var arrayBuffer = new ArrayBuffer(50);
        var bufferWriter = new BufferWriter(arrayBuffer);
        bufferWriter.writeInt8(1).writeUint8(2).writeInt16(3).writeUint16(4).useLittleEndian().writeInt32(5000000).writeUint32(6000000).writeFloat32(7000000).writeFloat64(8000000);

        var bufferReader = new BufferReader(arrayBuffer);
        var int8 = bufferReader.readInt8();
        var uInt8 = bufferReader.readUint8();
        var int16 = bufferReader.readInt16();
        var uInt16 = bufferReader.readUint16();
        bufferReader.useLittleEndian();
        var int32 = bufferReader.readInt32();
        var uInt32 = bufferReader.readUint32();
        var float32 = bufferReader.readFloat32();
        var float64 = bufferReader.readFloat64();
        expect(int8).to.equal(1);
        expect(uInt8).to.equal(2);
        expect(int16).to.equal(3);
        expect(uInt16).to.equal(4);
        expect(int32).to.equal(5000000);
        expect(uInt32).to.equal(6000000);
        expect(float32).to.equal(7000000);
        expect(float64).to.equal(8000000);
    });
});
