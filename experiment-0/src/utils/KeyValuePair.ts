export default class KeyValuePair<K,V> {

    key: K;
    value: V;

    constructor(key: K, value: V) {
        this.key = key;
        this.value = value;
    }

    asArray(): [K, V] {
        return [this.key, this.value];
    }
}
