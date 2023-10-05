// import MMKVStorage from 'react-native-mmkv-storage';
import { MMKV } from "react-native-mmkv";

// const mmkv = new MMKVStorage.Loader().initialize();
const mmkv = new MMKV();


const customMMKVStorage= {
  getItem: async (key) => {
    const value=mmkv.getString(key);
    return  Promise.resolve(value)
  },
  setItem: async (key, value) => {
    mmkv.set(key, value);
    return  Promise.resolve(true)
  },
  removeItem: async (key) => {
    mmkv.removeItem(key);
    return  Promise.resolve()
  },
};

export default customMMKVStorage;