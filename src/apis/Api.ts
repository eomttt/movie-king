import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = 'https://kb26nrwva5.execute-api.ap-northeast-2.amazonaws.com/dev/movie-crawl';

class Api {
  private request: AxiosInstance;

  constructor(url: string, headers?: any) {
    // axios.defaults.headers.common['x-api-key'] = key;
    this.request = axios.create({
      baseURL: url,
      responseType: 'json',
    });

    if (headers) {
      this.request.defaults.headers = { ...headers };
    }
  }

  private handleResponse = <R>(response: AxiosResponse<R>): R | null => {
    const { data } = response;
    if (data) {
      return data;
    }
    return undefined;
  };

  private handleError = (error: AxiosError) => {
    console.error('Api error', error);
    throw new Error();
  };

  async get<P, R = undefined>(params?: P): Promise<R | null> {
    try {
      const response: AxiosResponse<R> = await this.request.get('', {
        params,
      });
      return this.handleResponse<R>(response);
    } catch (error) {
      this.handleError(error);
    }
    return null;
  }
}

export const MovieApi = new Api(BASE_URL);
