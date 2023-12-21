import axios from 'axios';
import ServiceResponse from '../DTO/Response/ServiceResponse';
import LoginResponse from '../DTO/Response/LoginResponse';
import CreateProductionRequest from '../DTO/Request/CreateProductionModelRequest';
import ProductionModelResponse from '../DTO/Response/ProductionModelResponse';
//jwt authorization token
export default function api(token?: string) {
  return axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    headers: {
      Authorization: 'bearer ' + token,
    },
  });
}
export const postLogin = async (email: string, password: string) => {
  return await api().post<ServiceResponse<LoginResponse>>('/auth/login', {
    email,
    password,
  });
};
export const createProductionModel = async (
  token: string,
  entity: CreateProductionRequest,
) => {
  return await api(token).post<ServiceResponse<ProductionModelResponse>>(
    '/production-model',
    entity,
  );
};
export const getAllProductionModels = async (token: string) => {
  return await api(token).get<ServiceResponse<ProductionModelResponse>>(
    '/production-models',
  );
};
export const deleteProductionModel = async (token: string, id: number) => {
  return await api(token).delete<ServiceResponse<ProductionModelResponse>>(
    '/production-model/' + id,
  );
};
