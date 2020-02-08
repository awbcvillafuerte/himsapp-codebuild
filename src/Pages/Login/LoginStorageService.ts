import indexedDBHelper, { IndexedDBHelperResponse } from './IndexedDbHelper';


export default class LoginStorageService extends indexedDBHelper {
    DB_OBJECT: any;
    STORE_OBJECT: any;

    initStorage = (dbname: string) => {
        this.openDb(dbname).then((res: IndexedDBHelperResponse) => {
            this.DB_OBJECT = res.result;

            if (res.cbType === 'upgradeneeded') {
                this.createStoreOnDb(this.DB_OBJECT, 'user_data', 'key');
                this.createStoreOnDb(this.DB_OBJECT, 'icd10', 'key');
                this.createStoreOnDb(this.DB_OBJECT, 'cpt', 'key');
                this.createStoreOnDb(this.DB_OBJECT, 'icd10_list', 'key');
                this.createStoreOnDb(this.DB_OBJECT, 'cpt_list', 'key');
            }

        }).catch((err) => console.log(err));
    }

    saveEntry = (entries: any, storeName: string) => {
        return this.openDb('himsDb').then((db: IndexedDBHelperResponse) => {
            this.DB_OBJECT = db.result;

            return this.saveToStore(this.DB_OBJECT, storeName, entries);
        })
    }

    getSingleEntryByKeyReturnValue = (storeName: string, keyPath: string) => {
        return this.openDb('himsDb').then((db: IndexedDBHelperResponse) => {
            this.DB_OBJECT = db.result;

            return this.getByKeyReturnValue(this.DB_OBJECT, storeName, keyPath);
        });
    }

    getAllEntry = (storeName: string) => {
        return this.openDb('himsDb').then((db: IndexedDBHelperResponse) => {
            this.DB_OBJECT = db.result;
            
            return this.getAll(this.DB_OBJECT, storeName);
        });
    }

    updateEntry = (storeName: string, keyPath: string, newValue: string) => {
        return this.openDb('himsDb').then((db: IndexedDBHelperResponse) => {
            this.DB_OBJECT = db.result; 

            return this.updateEntryByKey(this.DB_OBJECT, storeName, keyPath, newValue);
        })
    }

    deleteEntry = (storeName: string, keyPath: string) => {
        return new Promise<any> ((resolve, reject) => {
            this.openDb('himsDb').then((db: IndexedDBHelperResponse) => {
                this.DB_OBJECT = db.result; 
    
                this.deleteEntryByKey(this.DB_OBJECT, storeName, keyPath).then((res) => {
                    resolve(res);
                }).catch((err) => reject(err));
            })
        })
    }

    validateStoreCount = (dbname: string, storeName: string) => {
        return this.openDb(dbname).then((db: IndexedDBHelperResponse) => {
            this.DB_OBJECT = db.result; 

            return this.getStoreCount(this.DB_OBJECT, storeName);
        })
    }
}


