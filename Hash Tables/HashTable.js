class HashTable {
  constructor(size) {
    this.data = new Array(size)
    this.size = size
  }

  _hash(key) {
    let hashedKey = 0
    key.split('').forEach((ch, i) => {
      hashedKey = (hashedKey + key.charCodeAt(i)) % this.size
    })
    return hashedKey
  }

  set(key, value) {
    let index = this._hash(key)
    if (!this.data[index]) this.data[index] = []
    this.data[index].forEach(pair => {
      if (pair[0] === key) {
        pair[1] = value
        return
      }
    })
    this.data[index].push([key, value])
    return
  }

  get(key) {
    let index = this._hash(key)
    let value = undefined
    if (this.data[index]) {
      this.data[index].forEach(pair => {
        if (pair[0] === key) value = pair[1]
      })
    }
    return value
  }

  keys() {
    return this.data.
      filter(pair => pair !== undefined).
      flat().map(pair => pair[0])
  }
}

let hash = new HashTable(2)
hash.set('lemonade', 10)
hash.set('grape', 50)
console.log(hash.get('apple'))
console.log(hash.get('lemonade'))
console.log(hash.get('grape'))
console.log(hash.keys())