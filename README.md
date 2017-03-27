# ArrayBuffer-Utils

Make writing and reading data from the standard built-in object ArrayBuffer easier

## Installation

`$ npm install arraybuffer-utils`

## Basic feature list
* Chainable functions
* Remembers offset
* Remembers endianness

## Example Usage

### Importing the module

```javascript
var ArrayBufferUtils = require('arraybuffer-utils');
var BufferWriter = ArrayBufferUtils.BufferWriter();
var BufferReader = ArrayBufferUtils.BufferReader();
```

### Write to ArrayBuffer using BufferWriter
`BufferWriter(buffer, offset = 0, isLittleEndian = false)`
```javascript
function write(){
	var arrayBuffer = new ArrayBuffer(30);
    var bufferWriter = new BufferWriter(arrayBuffer); //second and third parameters are optional
    var bufferWriter = new BufferWriter(arrayBuffer, 0); 
    var bufferWriter = new BufferWriter(arrayBuffer, 0, false);
    
    //chainable functions
    bufferWriter
    	.writeInt8(1)		//offset is now 1
        .writeUint8(2)		//offset is now 2
        	.useLittleEndian()		//change to little endian
        .writeInt16(3)		//offset is now 4
        .writeUint16(4)		//offset is now 6
        .writeInt32(5)		//offset is now 10
        	.useBigEndian()			//change to big endian
        .writeUint32(6)		//offset is now 14
        .writeFloat32(7)	//offset is now 18
        .writeFloat64(8);	//offset is now 26
        
   	var offset = bufferWriter.getOffset(); 	//returns current offset
    var size = bufferWriter.getSize(); 		//returns size of arraybuffer in bytes
    
    var littleEndian = bufferWriter.isLittleEndian(); 	//returns true if currently using little endian
    var bigEndian = bufferWriter.isBigEndian();			//returns true if currently using big endian
}
```

### Read from ArrayBuffer using BufferReader
`BufferReader(buffer, offset = 0, isLittleEndian = false)`
```javascript
function write(){
	var arrayBuffer = new ArrayBuffer(30);
    var bufferReader = new BufferReader(arrayBuffer); //second and third parameters are optional
    var bufferReader = new BufferReader(arrayBuffer, 0); 
    var bufferReader = new BufferReader(arrayBuffer, 0, false);
   	
    var int8 = bufferReader.readInt8();			//offset is now 1
    var uInt8 = bufferReader.readUint8();		//offset is now 2
    var int16 = bufferReader.readInt16();		//offset is now 4
    var uInt16 = bufferReader.readUint16();		//offset is now 6
    var int32 = bufferReader.readInt32();		//offset is now 10
    var uInt32 = bufferReader.readUint32();		//offset is now 14
    var float32 = bufferReader.readFloat32();	//offset is now 18
    var float64 = bufferReader.readFloat64();	//offset is now 26
        
   	var offset = bufferReader.getOffset(); 	//returns current offset
    var size = bufferReader.getSize(); 		//returns size of arraybuffer in bytes
    
    bufferReader.useLittleEndian(); 	//change to little endian
    bufferReader.useBigEndian();		//change to big endian
    
    var littleEndian = bufferReader.isLittleEndian(); 	//returns true if currently using little endian
    var bigEndian = bufferReader.isBigEndian();			//returns true if currently using big endian
}
```
