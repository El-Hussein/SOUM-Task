import axios from 'axios';
import NetInfo from '@react-native-community/netinfo';
import { API_URL } from '../../env.json';
import { CONNECTION_ERROR } from '@constants/STORAGE_KEYS';
import { retrieveAuthToken } from './Storage';
import store from '../store';

let userToken;

export const makePostRequest = async ({
  url,
  data = null,
  params = null,
  headers = null,
}: any) => {
  const response = await makeRequest(url, data, params, headers, 'post');
  return response;
};

export const makeGetRequest = async ({
  url,
  data = null,
  params = null,
  headers = null,
}: any) => {
  const response = await makeRequest(url, data, params, headers, 'get');
  return response;
};

export const makePutRequest = async ({
  url,
  data = null,
  params = null,
  headers = null,
}: any) => {
  const response = await makeRequest(url, data, params, headers, 'put');
  return response;
};

export const makeDeleteRequest = async ({
  url,
  data = null,
  params = null,
  headers = null,
}: any) => {
  const response = await makeRequest(url, data, params, headers, 'delete');
  return response;
};

export const makeRequest = async (
  url: string,
  data: any = null,
  params: any = null,
  headers: any = null,
  method: string = 'get',
) => {
  const config: any = {
    url: `${API_URL}${url}`,
    method,
  };
  if (headers?.Authorization) {
    config.headers = headers;
  } else {
    if (userToken === undefined || userToken === null || params?.refreshToken)
      userToken = await retrieveAuthToken();
    if (userToken) {
      config.headers = headers
        ? { Authorization: `Bearer ${userToken}`, ...headers }
        : { Authorization: `Bearer ${userToken}` };
    } else {
      config.headers = headers ? { ...headers } : null;
    }
  }
  config.headers = {
    ...config.headers,
    Lang: store.getState()?.newState?.user?.user?.userData?.language || 'en',
  };
  if (params) {
    config.params = params;
  }
  if (data) {
    config.data = data;
  }

  NetInfo.fetch().then((state) => {
    if (!state.isConnected) {
      throw new Error(CONNECTION_ERROR);
    }
  });
  const response = await axios.request({ ...config, timeout: 15000 });
  if (response?.data?.data?.auth_token)
    userToken = response.data.data.auth_token;
  return response;
};
