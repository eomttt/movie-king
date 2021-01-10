import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios';

const BASE_URL = 'https://45w5vsjd0b.execute-api.ap-northeast-2.amazonaws.com/v1/movieCrawling';

class Api {
  private request: AxiosInstance;

  constructor(url: string) {
    // axios.defaults.headers.common['x-api-key'] = key;
    this.request = axios.create({
      baseURL: url,
      responseType: 'json',
    });
    this.request.defaults.headers.common['x-api-key'] = 'pOP8I9qLeQ6ZCzd3W7tYx5fEcaWqxjb77ZxF4YxD';
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
