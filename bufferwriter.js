module.exports = function(){

    /**
     * Create a new BufferWriter
     * @constructor
     * @param {ArrayBuffer} buffer - An ArrayBuffer object for storing data
     * @param {Number} [offset=0] - The starting offset
     * @param {Boolean} [littleEndian=false] - Set endianness
     */
    function BufferWriter(buffer, offset, littleEndian){
        this.offset = offset || 0;
        this.littleEndian = littleEndian || false;
        this.buffer = new DataView(buffer);
        this.size = buffer.byteLength;
    }

    /**
     * Write a signed 8-bit integer at the current offset
     * @param {Number} value - The signed 8-bit integer to be written
     */
    BufferWriter.prototype.writeInt8 = function(value){
        this.buffer.setInt8(this.offset, value);
        this.offset += 1;
        return this;
    };

    /**
     * Write an unsigned 8-bit integer at the current offset
     * @param {Number} value - The unsigned 8-bit integer to be written
     */
    BufferWriter.prototype.writeUint8 = function(value){
        this.buffer.setUint8(this.offset, value);
        this.offset += 1;
        return this;
    };

    /**
     * Write a signed 16-bit integer at the current offset
     * @param {Number} value - The signed 16-bit integer to be written
     */
    BufferWriter.prototype.writeInt16 = function(value){
        this.buffer.setInt16(this.offset, value, this.littleEndian);
        this.offset += 2;
        return this;
    };

    /**
     * Write an unsigned 16-bit integer at the current offset
     * @param {Number} value - The unsigned 16-bit integer to be written
     */
    BufferWriter.prototype.writeUint16 = function(value){
        this.buffer.setUint16(this.offset, value, this.littleEndian);
        this.offset += 2;
        return this;
    };

    /**
     * Write a signed 32-bit integer at the current offset
     * @param {Number} value - The signed 32-bit integer to be written
     */
    BufferWriter.prototype.writeInt32 = function(value){
        this.buffer.setInt32(this.offset, value, this.littleEndian);
        this.offset += 4;
        return this;
    };

    /**
     * Write an unsigned 32-bit integer at the current offset
     * @param {Number} value - The unsigned 32-bit integer to be written
     */
    BufferWriter.prototype.writeUint32 = function(value){
        this.buffer.setUint32(this.offset, value, this.littleEndian);
        this.offset += 4;
        return this;
    };

    /**
     * Write a 32-bit float at the current offset
     * @param {Number} value - The 32-bit float to be written
     */
    BufferWriter.prototype.writeFloat32 = function(value){
        this.buffer.setFloat32(this.offset, value, this.littleEndian);
        this.offset += 4;
        return this;
    };

    /**
     * Write a 64-bit float at the current offset
     * @param {Number} value - The 64-bit float to be written
     */
    BufferWriter.prototype.writeFloat64 = function(value){
        this.buffer.setFloat64(this.offset, value, this.littleEndian);
        this.offset += 8;
        return this;
    };

    /**
     * Change to little endian
     */
    BufferWriter.prototype.useLittleEndian = function(){
        this.littleEndian = true;
        return this;
    };

    /**
     * Change to big endian
     */
    BufferWriter.prototype.useBigEndian = function(){
        this.littleEndian = false;
        return this;
    };

    /**
     * Returns true if using little endian
     * @returns {Boolean} is little endian
     */
    BufferWriter.prototype.isLittleEndian = function(){
        return this.littleEndian;
    };

    /**
     * Returns true if using big endian
     * @returns {Boolean} is big endian
     */
    BufferWriter.prototype.isBigEndian = function(){
        return !this.littleEndian;
    };

    /**
     * Returns size of the arraybuffer
     * @returns {Number} size of arraybuffer
     */
    BufferWriter.prototype.getSize = function(){
        return this.size;
    };

    /**
     * Returns the current offset
     * @returns {Number} the current offset
     */
    BufferWriter.prototype.getOffset = function(){
        return this.offset;
    };

    return BufferWriter;
};
