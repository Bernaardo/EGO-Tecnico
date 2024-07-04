import axios from "axios"
import { MODELS_PATH } from "../config"
import { Modelo } from "../interfaces/interfaces";

export const getAllModels = (filter?:string | null, order?: string | null ) =>{
    let url = MODELS_PATH;
    if (filter || order) {
        url += '?';
        if (filter) url += `segment=${filter}`;
        if (filter && order) url += '&';
        if (order) url += `ordering=${order}`;
    }
    return axios.get<Modelo[]>(`${url}`);
}

export const getModel = (id: string) => {
    return axios.get(`${MODELS_PATH}/${id}`);
}

export {};