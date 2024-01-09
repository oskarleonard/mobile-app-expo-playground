import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import axios from 'axios';

import HttpApiCallError from './HttpApiCallError';

import { getFormattedHttpReqError } from '~/connectivity/connectivityUtils';

export default function httpRequest(requestConfig: AxiosRequestConfig = {}) {
  return axios(requestConfig).then(
    (response: AxiosResponse) => {
      return response.data;
    },
    (responseError) => {
      const error = responseError?.response;
      const message = getFormattedHttpReqError(error);
      throw new HttpApiCallError(
        message,
        error?.status,
        error?.data,
        error?.data?.errorCode
      );
    }
  );
}
