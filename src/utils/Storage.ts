import { AUTH_TOKEN, LOCALE } from '@constants/STORAGE_KEYS';
import { getFromLocalStorage } from './async-storage.helpers';

export const retrieveAuthToken = async () => await getFromLocalStorage(AUTH_TOKEN);
export const retrieveAppLocale = async () => await getFromLocalStorage(LOCALE);
