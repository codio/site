/* global md5, $, monster, ga, Intercom, _ */

const STORAGE_PREFIX = 'AC_SITE_LOCAL_STORAGE';

// Turn a given string into an JavaScript object.
//
// text - The content to be parsed.
//
// Returns the new JavaScript object.
const objectify = text => {
    if (_.isEmpty(text)) {
        return
    }

    try {
        return JSON.parse(text)
    } catch (e) {
        console.log('Objectify Error', e)
    }
}

// Turn a given object into a serialized string.
//
// obj - The object to be serialized.
//
// Returns a serialized string.
const stringify = obj => {
    if (_.isUndefined(obj)) {
        return ''
    }

    try {
        return JSON.stringify(obj)
    } catch (e) {
        console.log('Stringify Erorr', e)
    }
}

// Add `STORAGE_PREFIX` to a given string.
//
// str - The string to be prefixed.
//
// Returns a prefixed string.
const prefix = str => {
    return STORAGE_PREFIX + '-' + str
}

// Filter function `_.filter` to filer for the `STORAGE_PREFIX`.
//
// key - The key to check.
const forPrefix = key => {
    return key.indexOf(STORAGE_PREFIX) === 0
}

class Store {
    constructor(type) {
        let fail
        let uid

        // Detect if storage is available. Technique taken from:
        // http://mathiasbynens.be/notes/localstorage-pattern
        try {
            uid = new Date()
            this.storage = window[type + 'Storage']
            this.storage.setItem(uid, uid)
            fail = this.storage.getItem(uid) !== uid.toString()
            this.storage.removeItem(uid)
            fail && (this.storage = false)
        } catch (e) {}  // eslint-disable-line no-empty
    }

    // Save a given JavaScript object into localStorage.
    //
    // key   - Identifier for later lookups. Will be prefixed with the `STORAGE_PREFIX
    // value - The object to be saved.
    set(key, value) {
        return this.storage.setItem(prefix(key), stringify(value))
    }

    // Clear the complete store!
    clear() {
        _(this.storage).filter(forPrefix).forEach(this._removeItem)
    }

    // Return a value from the localStorage.
    //
    // key - The identifier of the object to return.
    get(key) {
        return objectify(this._getItem(prefix(key)))
    }

    // Delete an item
    //
    // key - The key of the item to be deleted.
    remove(key) {
        return this._removeItem(prefix(key))
    }

    // Return a value from the localStorage.
    //
    // key - The identifier of the object to return.
    _getItem(key) {
        return this.storage ? this.storage.getItem(key) : null
    }

    // Delete an item
    //
    // key - The key of the item to be deleted.
    _removeItem(key) {
        this.storage.removeItem(key)
    }
}

const localStorageStore = new Store('local');
