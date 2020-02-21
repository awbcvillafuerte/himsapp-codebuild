export interface IndexedDBHelperResponse {
    cbType: string,
    result: any
}

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
        let request = window.indexedDB.open(namespace, 3);

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

    createStoreOnDb = (db: IDBDatabase, name: string, keyPath: string) => {
        let store = db.createObjectStore(name, {keyPath, autoIncrement: false});

        return new Promise<IndexedDBHelperResponse> ((resolve, reject) => {
            let response: IndexedDBHelperResponse = {
                cbType: '',
                result: {}
            };

            store.transaction.onerror = () => {
                reject("error creating store on db.")
            }

            store.transaction.oncomplete = (event: any) => {
                let result = event.target.result;
                
                response.cbType = event.type;
                response.result = result;
                resolve(response);
            }
        })
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

    clearStore = (db: IDBDatabase, storeName: string) => {
        return new Promise<any> ((resolve, reject) => {
            let transaction = db.transaction(storeName, 'readwrite');
            let objectStore = transaction.objectStore(storeName);

            let request = objectStore.clear();
            
            request.onerror = () => {reject("error clearing store")}
            request.onsuccess = ()=> {resolve("store cleared")}
        })
    }
}


