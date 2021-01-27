import CONFIG from "@config/index";
import AuthInteractor from "@useCases/auth";
import axios from "axios";

export interface IParamsHTTP {
    method?: "get" | "post" | "delete" | "put";
    path: string;
    payload?: any
    config?: {
        isPrivate?: boolean;
        isFormData?: boolean;
    };
}

class HTTPRepository {
    private service: any;

    constructor(baseURL?) {
        let service = axios.create({
            baseURL: baseURL || CONFIG.API_URL_BASE,
        });
        this.service = service;
    }

    private handleSuccess(response) {
        return Promise.resolve(response.data?.data);
    }

    private handleError(error) {
        let status = error.response?.status;
        switch (status) {
            case 400: {
                break
            }
            case 401: {
                // window.location.reload();
                // window.location.href = `/#/login`;
                break;
            }
            case 500: {
                break;
            }
            default: {
                break;
            }
        }
        return Promise.reject(error);
    }

    private preparePrivateHeaderConfig() {
        const token = new AuthInteractor().getToken()

        return {
            token: `${token}`,
        };
    }

    private getDefaultConfig({ isPrivate, isFormData }: any = {}) {
        const config = {
            headers: {},
        };

        if (isPrivate) {
            const privateHeaderConfig = this.preparePrivateHeaderConfig();
            Object.assign(config.headers, privateHeaderConfig);
        }

        if (isFormData) {
            Object.assign(config.headers, {
                "Content-Type": "multipart/form-data",
            });
        }

        return config;
    }

    async execute({
        method = "get",
        path = "",
        payload,
        config = {},
    }: IParamsHTTP) {
        let arg: Array<any>;
        const { isPrivate = true, isFormData = false } = config;

        if (payload) {
            arg = [path, payload, this.getDefaultConfig({ isPrivate, isFormData })];
        } else {
            arg = [path, this.getDefaultConfig({ isPrivate, isFormData })];
        }

        return await this.service[method](...arg)
            .then((response) => this.handleSuccess(response))
            .catch((error) => this.handleError(error));
    }
}

const httpRepository = new HTTPRepository()

export default httpRepository