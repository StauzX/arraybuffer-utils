module.exports = function(){

    /**
     * Create a new BufferReader
     * @constructor
     * @param {ArrayBuffer} buffer - An ArrayBuffer object for storing data
     * @param {Number} [offset=0] - The starting offset
     * @param {Boolean} [littleEndian=false] - Set endianness
     */
    function BufferReader(buffer, offset, littleEndian){
        this.offset = offset || 0;
        this.littleEndian = littleEndian || false;
        this.buffer = new DataView(buffer);
        this.size = buffer.byteLength;
    }

    /**
     * Read a signed 8-bit integer at the current offset
     * @returns {Number} The signed 8-bit integer read
     */
    BufferReader.prototype.readInt8 = function(){
        var result = this.buffer.getInt8(this.offset);
        this.offset += 1;
        return result;
    };

    /**
     * Read an unsigned 8-bit integer at the current offset
     * @returns {Number} The unsigned 8-bit integer read
     */
    BufferReader.prototype.readUint8 = function(){
        var result = this.buffer.getUint8(this.offset);
        this.offset += 1;
        return result;
    };

    /**
     * Read a signed 16-bit integer at the current offset
     * @returns {Number} The signed 16-bit integer read
     */
    BufferReader.prototype.readInt16 = function(){
        var result = this.buffer.getInt16(this.offset, this.littleEndian);
        this.offset += 2;
        return result;
    };

    /**
     * Read an unsigned 16-bit integer at the current offset
     * @returns {Number} The unsigned 16-bit integer read
     */

    BufferReader.prototype.readUint16 = function(){
        var result = this.buffer.getUint16(this.offset, this.littleEndian);
        this.offset += 2;
        return result;
    };

    /**
     * Read a signed 32-bit integer at the current offset
     * @returns {Number} The signed 32-bit integer read
     */
    BufferReader.prototype.readInt32 = function(){
        var result = this.buffer.getInt32(this.offset, this.littleEndian);
        this.offset += 4;
        return result;
    };

    /**
     * Read an unsigned 32-bit integer at the current offset
     * @returns {Number} The unsigned 32-bit integer read
     */
    BufferReader.prototype.readUint32 = function(){
        var result = this.buffer.getUint32(this.offset, this.littleEndian);
        this.offset += 4;
        return result;
    };

    /**
     * Read a 32-bit float at the current offset
     * @returns {Number} The 32-bit float read
     */
    BufferReader.prototype.readFloat32 = function(){
        var result = this.buffer.getFloat32(this.offset, this.littleEndian);
        this.offset +=4;
        return result;
    };

    /**
     * Read a 64-bit float at the current offset
     * @returns {Number} The 64-bit float read
     */
    BufferReader.prototype.readFloat64 = function(){
        var result = this.buffer.getFloat64(this.offset, this.littleEndian);
        this.offset += 8;
        return result;
    };

    /**
     * Change to little endian
     */
    BufferReader.prototype.useLittleEndian = function(){
        this.littleEndian = true;
        return this;
    };

    /**
     * Change to big endian
     */
    BufferReader.prototype.useBigEndian = function(){
        this.littleEndian = false;
        return this;
    };

    /**
     * Returns true if using little endian
     * @returns {Boolean} is little endian
     */
    BufferReader.prototype.isLittleEndian = function(){
        return this.littleEndian;
    };

    /**
     * Returns true if using big endian
     * @returns {Boolean} is big endian
     */
    BufferReader.prototype.isBigEndian = function(){
        return !this.littleEndian;
    };

    /**
     * Returns size of the arraybuffer
     * @returns {Number} size of arraybuffer
     */
    BufferReader.prototype.getSize = function(){
        return this.size;
    };

    /**
     * Returns the current offset
     * @returns {Number} the current offset
     */
    BufferReader.prototype.getOffset = function(){
        return this.offset;
    };

    return BufferReader;
};
