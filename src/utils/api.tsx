import axios from 'axios';
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
  return await api().post('/auth/login', {
    email,
    password,
  });
};
