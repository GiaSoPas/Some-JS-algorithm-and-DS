const defaultHashTableSize = 53

class HashTable {
    
    constructor(size = defaultHashTableSize) {
        this.storage = new Array(size);
    }

    numItems = 0;

    recise() {

        let newStorage = new Array(2 * this.storage.length);
        this.storage.forEach((item) => {
            if (item) {
                item.forEach(([key, value]) => {
                    let index = this.hash(key);
                    if (newStorage[index]) {
                        newStorage[index].push([key, value]);
                    } else {
                        newStorage[index] = [[key, value]];
                    }
                });
            }
        });

        this.storage = newStorage;
    }

    hash(key) {

        let hash = 17; // why?
        let PRIME = 31; // why?

        // But you may also use more sophisticated approaches like polynomial string hash to reduce the
        // number of collisions:
        //
        // hash = charCodeAt(0) * PRIME^(n-1) + charCodeAt(1) * PRIME^(n-2) + ... + charCodeAt(n-1)

        for (let i = 0; i < Math.min(key.length, 100); i++) {
            hash = (hash * PRIME * key.charCodeAt(i));
        }

        return hash % this.storage.length;
    }

    set(key, value) {

        this.numItems++;
        const factor = this.numItems / this.storage.length;

        if (factor > 0.8) {
            this.recise();
        }

        let index = this.hash(key);
        if (this.storage[index]) {
            this.storage[index].push([key, value]);
        } else {
            this.storage[index] = [[key, value]];
        }
    }

    get(key) {

        let index = this.hash(key);
        if (this.storage[index]) {
            for (let i = 0; i < this.storage[index].length; i++) {
                if (this.storage[index][i][0] === key) {
                    return this.storage[index][i][1];
                }
            }
        }

        return undefined;
    }

    remove(key) {
        let index = this.hash(key);
        if (this.storage[index].length == 1 && this.storage[index][0][0] === key) {
            delete this.storage[index];
        } else {
            for (let i = 0; i < this.storage.length; i++) {
                if (this.storage[index][i][0] === key) {
                    delete this.storage[index][i];
                }
            }
        }
    }
}

let hasht = new HashTable(12);
hasht.set("maroosdfsfn", "#800000")
hasht.set("yellow", "#FFFF00")
hasht.set("olive", "#808000")
hasht.set("salmon", "#FA8072")
hasht.set("lightcoral", "#F08080")
hasht.set("mediumvioletred", "#C71585")
hasht.set("plum", "#DDA0DD")
hasht.set("purple", "#DDA0DD")
hasht.set("violet", "#DDA0DD")

console.log(hasht.get("olive"));

console.log(hasht.get("violet"));

console.log(hasht.get("maroon"));

console.log(hasht.storage.length);

console.log(hasht.storage);
