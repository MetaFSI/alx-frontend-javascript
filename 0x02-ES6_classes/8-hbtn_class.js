class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Cast the object
  valueOf() {
    return this._size;
  }

  // Cast the object
  toString() {
    return this._location;
  }
}

export default HolbertonClass;
