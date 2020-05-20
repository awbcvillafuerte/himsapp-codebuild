import IndexedDBHelper, { IndexedDBHelperResponse } from '../Login/IndexedDbHelper';

const _indexedDb = new IndexedDBHelper();

export default function get (storeName: string, keyPath?: string){
    return _indexedDb.openDb('himsDb').then((db: IndexedDBHelperResponse) => {

        if (!keyPath) {
            return _indexedDb.getAll(db.result, storeName);
        } else {
            return _indexedDb.getByKeyReturnValue(db.result, storeName, keyPath);
        }
    })
}