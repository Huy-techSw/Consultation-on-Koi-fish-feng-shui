import { LoginRequest } from "../interfaces/loginRequest";
import axiosClient from "./axiosClient";

const authApi = {
    login(loginRequest: LoginRequest) {
        const url = "/v1/auth/login";
        return axiosClient.post(url, loginRequest);
      },
}

export default authApi;