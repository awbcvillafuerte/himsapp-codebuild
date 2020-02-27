import indexedDBHelper, { IndexedDBHelperResponse } from './IndexedDbHelper';

const stores = [
    {
        name: 'user_data',
        keyPath: 'key' 
    },
    {
        name: 'icd10',
        keyPath: 'key' 
    },
    {
        name: 'cpt',
        keyPath: 'key' 
    },
    {
        name: 'icd10_list',
        keyPath: '_id'
    },
    {
        name: 'cpt_list',
        keyPath: '_id'
    },
    {
        name: 'tmp',
        keyPath: 'key'
    },
    {
        name: 'config',
        keyPath: 'key'
    }
]

export default class LoginStorageService extends indexedDBHelper {
    DB_OBJECT: any;
    STORE_OBJECT: any;

    initStorage = (dbname: string) => {
        this.openDb(dbname).then((res: IndexedDBHelperResponse) => {
            this.DB_OBJECT = res.result;
            let db_object_stores = [...this.DB_OBJECT.objectStoreNames];

            if (res.cbType === 'upgradeneeded') {  
                stores.forEach(store => {
                    if (db_object_stores.includes(store.name)) {
                        this.deleteObjectStore(this.DB_OBJECT, store.name);
                        this.initStores(store);
                    } else {
                        this.initStores(store);
                    }
                })
            }

            if (res.cbType === 'success') {
                if (db_object_stores.includes('user_data')) {
                    this.clearUser('himsDb').then((resp) => {
                        console.log(resp);
                    });
                }
            }

        }).catch((err) => console.log(err));
    }

    initStores = (store: any) => {
        if (store.name === 'cpt_list') {
            let cptIndex = [
                {
                    name: 'label',
                    keyPath: 'label',
                    unique: false
                }
            ]
            this.createStoreOnDb(this.DB_OBJECT, store.name, store.keyPath, cptIndex);
        } else if (store.name === 'icd10_list') {
            let icd10Index = [
                {
                    name: 'full_code',
                    keyPath: 'full_code',
                    unique: false
                },{
                    name: 'full_description',
                    keyPath: 'full_description',
                    unique: false
                }
            ]
            this.createStoreOnDb(this.DB_OBJECT, store.name, store.keyPath, icd10Index);
        } else {
            this.createStoreOnDb(this.DB_OBJECT, store.name, store.keyPath);
        }
    }

    saveEntry = (entries: any, storeName: string) => {
        return this.openDb('himsDb').then((db: IndexedDBHelperResponse) => {
            this.DB_OBJECT = db.result;

            return this.saveToStore(this.DB_OBJECT, storeName, entries);
        })
    }

    getSingleEntryByKeyReturnValue = (storeName: string, keyPath: string) => {
        return this.getByKeyReturnValue(this.DB_OBJECT, storeName, keyPath);
    }

    getAllEntry = (storeName: string) => {
        return this.getAll(this.DB_OBJECT, storeName);
    }

    updateEntry = (storeName: string, keyPath: string, newValue: string) => {
        return this.updateEntryByKey(this.DB_OBJECT, storeName, keyPath, newValue);
    }

    deleteEntry = (storeName: string, keyPath: string) => {
        return this.deleteEntryByKey(this.DB_OBJECT, storeName, keyPath);
    }

    validateStoreCount = (dbname: string, storeName: string) => {
        return this.getStoreCount(this.DB_OBJECT, storeName);
    }

    clearUser = (dbname: string) => {
        return  this.clearStore(this.DB_OBJECT, 'user_data');
    }

}






