import AsyncStorage from '@react-native-community/async-storage';

const storage = {
  set: async (key, content) => {
    return await AsyncStorage.setItem(key, JSON.stringify(content));
  },
  get: async (key) => {
    return await AsyncStorage.getItem(key)
      .then((res) => JSON.parse(res))
      .catch(() => null);
  },
  delete: async (key) => {
    return await AsyncStorage.removeItem(key);
  },
};

export default storage;
