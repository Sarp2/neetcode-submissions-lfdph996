class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    // Create a hash map
    mapper = new Map();

    // Crate two dummy node
    start = new Node();
    end = new Node();
    
    constructor(capacity) {
        this.capacity = capacity;
        this.start.next = this.end;
        this.end.prev = this.start;
    }

    /**
     * @param {number} key
     * @return {number}
     */
    get(key) {
        if (this.mapper.has(key)) {
            this.remove(this.mapper.get(key));
            this.insert(this.mapper.get(key));
            return this.mapper.get(key).val;
        } else {
            return -1;
        }
    }

    /**
     * @param {number} key
     * @param {number} value
     * @return {void}
     */
    put(key, value) {
        if (this.mapper.has(key)) {
            this.mapper.get(key).val = value;
            this.remove(this.mapper.get(key));
            this.insert(this.mapper.get(key));
        } else {
            if (this.mapper.size >= this.capacity) {
                this.mapper.delete(this.start.next.key);
                this.remove(this.start.next);
            }
            
            const node = new Node(key, value);
            this.mapper.set(key, node);
            this.insert(node);  
        }
    }

    remove(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
    }

    insert(node) {
        node.prev = this.end.prev;
        node.next = this.end;
        this.end.prev.next = node;
        this.end.prev = node;
    }
}
