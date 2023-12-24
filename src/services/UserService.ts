import LoginResponse from '../dto/Response/LoginResponse';
import ProductionModelResponse from '../dto/Response/ProductionModelResponse';
import ServiceResponse from '../dto/Response/ServiceResponse';
import api from './Api';

export const postLogin = async (email: string, password: string) => {
  return await api().post<ServiceResponse<LoginResponse>>('/auth/login', {
    email,
    password,
  });
};

export const updateActiveProductionModelToUser = async (id: number) => {
  return await api().put<ServiceResponse<ProductionModelResponse>>(
    '/user/active-productionmodel/' + id,
  );
};
