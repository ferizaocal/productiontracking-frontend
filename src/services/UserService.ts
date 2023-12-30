import CreateUserRequest from '../dto/Request/CreateUserRequest';
import LoginResponse from '../dto/Response/LoginResponse';
import ProductionModelResponse from '../dto/Response/ProductionModelResponse';
import ServiceResponse from '../dto/Response/ServiceResponse';
import UserResponse from '../dto/Response/UserResponse';
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

export const createUser = async (entity: CreateUserRequest) => {
  return await api().post<ServiceResponse<UserResponse>>('/user', entity);
};

export const getUserByRole = async (id: number) => {
  return await api().get<ServiceResponse<UserResponse>>('/user/role/' + id);
};
