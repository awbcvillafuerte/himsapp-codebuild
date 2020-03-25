export interface IndexedDBHelperResponse {
    cbType: string,
    result: any
}

const db_version = 4;

export default class IndexedDbHelper {

    deleteDb = (namespace: string) => {
        let request = window.indexedDB.deleteDatabase(namespace);

        return new Promise<IndexedDBHelperResponse> ((resolve, reject) => {
    
            request.onerror = (event: any) => {
                console.log("Error deleting database.");
                reject(event);
            }
    
            request.onsuccess = (event: any) => {
                resolve(event);
            }
        });
    }

    openDb = (namespace: string) => {
        let request = window.indexedDB.open(namespace, db_version);

        return new Promise<IndexedDBHelperResponse> ((resolve, reject) => {

            let response: IndexedDBHelperResponse = {
                cbType: '',
                result: {}
            };

            request.onerror = () => {
                reject("Error opening database.");
            }

            request.onsuccess = (event: any) => {
                let result = event.target.result;

                response.cbType = event.type;
                response.result = result;
                resolve(response);
            }

            request.onupgradeneeded = (event: any) => {
                
                let result = event.target.result;
                
                response.cbType = event.type;
                response.result = result;
                resolve(response);
            }
        });
    }

    createStoreOnDb = (db: IDBDatabase, storeName: string, keyPath: string, indexes?: any[]) => {
        let store = db.createObjectStore(storeName, {keyPath, autoIncrement: false});

        return new Promise ((resolve, reject) => {
            if (indexes && indexes.length > 0) {
                indexes.forEach((index: any) => {
                    store.createIndex(index.name, index.keyPath, { unique: index.unique });
                })
            }
    
            store.transaction.onerror = () => {
                reject("error creating store object.");
            }
    
            store.transaction.oncomplete = (event: any) => {                
                resolve("store object successfully initialized.");
            }
        })
    }

    deleteObjectStore = (db: IDBDatabase, storeName: string) => {
        db.deleteObjectStore(storeName);
    }

    saveToStore = (db: IDBDatabase, storeName: string, entries: any) => {
        let transaction = db.transaction([storeName], 'readwrite');
        let store = transaction.objectStore(storeName);
        
        return new Promise<IndexedDBHelperResponse> ((resolve, reject) => {
            let response: IndexedDBHelperResponse = {
                cbType: '',
                result: {}
            };

            if (!entries || entries.length < 0) {
                reject({
                    type: 'error',
                    message: 'entries invalid'
                });
            }

            entries.forEach((entry: any) => {
                store.put(entry);
            });

            transaction.oncomplete = (event: any) => {
                response.cbType = event.type;
                response.result = "Saved complete.";
                resolve(response);
            }            
        })
    }

    getByKeyReturnValue = (db: IDBDatabase, storeName: string, keyPath: string) => {
        return new Promise<IndexedDBHelperResponse> ((resolve, reject) => {
            try {
                db.transaction(storeName, 'readonly');

                let request= db.transaction(storeName, 'readonly');
                let store = request.objectStore(storeName);

                let response: IndexedDBHelperResponse = {
                    cbType: '',
                    result: {}
                };

                let query = store.get(keyPath);

                query.onsuccess = (res: any) => {
                    let result = res.target.result;
                    if (result === undefined) {
                        response.cbType = 'error';
                        response.result = null;
                        
                        reject(response);
                    } else {
                        response.cbType = res.type;
                        response.result = result.value;
                        resolve(response);
                    }
                }
            } catch {
                reject('store not found.');
            }
        })
    }

    updateEntryByKey = (db: IDBDatabase, storeName: string, keyPath: string, newValue: string) => {
        return new Promise<IndexedDBHelperResponse> ((resolve, reject) => {
            try {
                db.transaction([storeName], 'readwrite');
                let request = db.transaction([storeName], 'readwrite');

                let store = request.objectStore(storeName);

                let response: IndexedDBHelperResponse = {
                    cbType: '',
                    result: {}
                };

                db.onerror = (storeEvt) => {
                    console.log(storeEvt);
                }
                
                let query = store.get(keyPath);

                query.onsuccess = (res: any) => {
                    let result = res.target.result;
                    
                    if (result !== undefined) {
                        result.value = newValue;
                        store.put(result).onsuccess = (updateRe) => {
                            response.cbType = updateRe.type;
                            response.result = {message: 'value updated.'};
                        }
                        resolve(response);
                    } else {
                        response.cbType = 'error';
                        response.result = {message: 'error updating value.'};
                        reject(response);
                    }
                }
            } catch {
                reject('store not found.')
            }
        })
    }

    getAll = (db: IDBDatabase, storeName: string) => {
        return new Promise<IndexedDBHelperResponse> ((resolve, reject) => {
            let objectStore = db.transaction(storeName, 'readonly').objectStore(storeName);
            let request = objectStore.getAll();

            request.onerror = () => {reject("Error getting all data.")}

            request.onsuccess = (event: any) => {resolve(event.target.result);}
        })
    }

    deleteEntryByKey = (db: IDBDatabase, storeName: string, keyPath: string) => {
        return new Promise<IndexedDBHelperResponse> ((resolve, reject) => {
            let transaction= db.transaction(storeName, 'readwrite');
            let objectStore = transaction.objectStore(storeName);

            let response: IndexedDBHelperResponse = {
                cbType: '',
                result: {}
            };

            let request = objectStore.delete(keyPath);

            request.onsuccess = (res: any) => {
                let result = res.target.result;

                if (result === undefined) {
                    response.cbType = 'error';
                    response.result = null;
                    reject(response)
                } else {
                    response.cbType = res.type;
                    response.result = "entry deleted";
                    resolve(response);
                }
            }
        })
    }

    getStoreCount = (db: IDBDatabase, storeName: string) => {
        return new Promise<any> ((resolve, reject) => {
            let transaction = db.transaction(storeName, 'readwrite');
            let objectStore = transaction.objectStore(storeName);

            let request = objectStore.count();

            request.onerror = () => {reject("error getting store count.")}
            request.onsuccess = (ev: any)=> {resolve(ev.target.result)}
        })
    }

    filterBy = (
        db: IDBDatabase,
        storeName: string,
        keyPath: string,
        value: string,
        mode?: string) => {
        return new Promise<any> ((resolve, reject) => {
            let transaction = db.transaction(storeName, 'readwrite');
            let objectStore = transaction.objectStore(storeName);
            let index = objectStore.index(keyPath);

            if (value.length !== 0) {
                let request = index.openCursor();
                let results: any[] = [];

                request.onerror = () => {reject("error filter")}

                request.onsuccess = (ev: any)=> {
                    let cursor = ev.target.result;
                    if (cursor) {
                        switch (mode) {
                            case 'startsWith':
                                if (cursor.value[keyPath].toLowerCase().startsWith(value.toLowerCase())) {
                                    results.push(cursor.value);
                                }
                                break;
                            case 'match':
                                if (cursor.value[keyPath].toLowerCase().match(value.toLowerCase())) {
                                    results.push(cursor.value);
                                }
                                break;
                            default:
                                if (cursor.value[keyPath].toLowerCase().startsWith(value.toLowerCase())) {
                                    results.push(cursor.value);
                                }
                                break;
                        }
                        
                        cursor.continue();
                    } else {
                        resolve(results);
                    }
                }
            } else {
                resolve([]);
            }
        })
    }

    clearStore = (db: IDBDatabase, storeName: string) => {
        return new Promise<any> ((resolve, reject) => {
            let transaction = db.transaction(storeName, 'readwrite');
            let objectStore = transaction.objectStore(storeName);

            let request = objectStore.clear();
            
            request.onerror = () => {reject("error clearing store")}
            request.onsuccess = ()=> {resolve("store cleared")}
        })
    }

    clearList = (db: IDBDatabase, storeName: string) => {
        return new Promise<any> ((resolve, reject) => {
            let transaction = db.transaction(storeName, 'readwrite');
            let objectStore = transaction.objectStore(storeName);

            let request = objectStore.clear();
            
            request.onerror = () => {reject("error clearing store")}
            request.onsuccess = ()=> {resolve("store cleared")}
        })
    }
}






