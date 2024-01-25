import axios, { AxiosInstance } from 'axios';
import { formatObject } from './types/form';
import { State, Store } from './types/store';
import useStore from '@/store';

class Client {
  protected api: AxiosInstance;
  protected timeout: number;
  private readonly apiPath: string;
  protected store: Store<State> | null;

  constructor() {
    this.apiPath = 'http://hh.autodrive-agency.ru/test-tasks/front/task-7/';
    this.timeout = 1000;

    this.api = axios.create({
      baseURL: this.apiPath,
      timeout: this.timeout,
    });

    this.store = useStore;
  }

  async makeRequest(payload: formatObject): Promise<void> {
    try {
      const { data } = await this.api.post(this.apiPath, payload);

      this.store?.commit('SET_ITEM', { key: 'htmlBlock', value: data });
    } catch (error) {
      console.log(error);
    }
  }
}

export const service = new Client();
