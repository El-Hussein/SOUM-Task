import AsyncStorage from '@react-native-community/async-storage';

/**
 * get an item from the device storage asynchronously
 * @param key
 * @returns {Promise<*>}
 */
export const getFromLocalStorage = async (key) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(error);
  }
};

/**
 * set an item to the device storage asynchronously
 * @param key
 * @param value
 * @returns {Promise<R>}
 */
export const saveInLocalStorage = async (key, value) => {
  try {
    return await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};
