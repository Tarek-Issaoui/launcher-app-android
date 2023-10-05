import { createStore } from 'redux';
import myReducer from './reducers/myReducer';
import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
// import AsyncStorage from '@react-native-async-storage/async-storage';
import customMMKVStorage from './mmkv/index';
const persistConfig = {
    key: 'root',
    storage:customMMKVStorage,
    stateReconciler: hardSet,
}

  const persistedReducer = persistReducer(persistConfig, myReducer);

let store = createStore(persistedReducer)
let persistor = persistStore(store)
if (module.hot) {
  module.hot.accept('./reducers/myReducer', () => {
    // This fetch the new state of the above reducers.
    const nextRootReducer = require('./reducers/myReducer').default
    store.replaceReducer(
      persistReducer(persistConfig, nextRootReducer)
    )
  })
}

export default { store, persistor }

