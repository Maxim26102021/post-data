import axios, { AxiosInstance } from 'axios';
import { formFields } from './types/form';

class Client {
    protected api: AxiosInstance
    protected timeout: number
    private readonly apiPath: string


    constructor() {
        this.apiPath = 'http://hh.autodrive-agency.ru/test-tasks/front/task-7/';
        this.timeout = 1000;

        this.api = axios.create({
            baseURL: this.apiPath,
            timeout: this.timeout
        })
    }

    async makeRequest(payload: formFields): Promise<void> {
        try {
            await this.api.post(this.apiPath, payload, {
            });

        } catch (error) {
            console.log(error)
        }
    }
}


export const service = new Client();