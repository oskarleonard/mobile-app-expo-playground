function getBaseRequestConfig(
  accessToken?: string,
  contentType = 'application/json',
  timeout = 14000
) {
  const config: Request = {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Content-Type': contentType,
    },
    timeout,
  };

  if (accessToken) {
    config.headers['Access-Token-Employee'] = `${accessToken}`;
  }

  if (process.env.SERVER) {
    config.headers['Accept-Encoding'] = 'gzip';
  }

  return config;
}

interface Request {
  headers: Record<string, string>;
  method: string;
  mode: string;
  timeout: number;
}

const API_URL = 'https://testnet-service.lisk.com';
const API_V3 = `${API_URL}/api/v3`;

export { getBaseRequestConfig, API_V3 };
