export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  success: boolean;
  status: number;
  data: {
    userId: string;
    accessToken: string;
    refreshToken: string;
    expiredAt: string;
    role: string;
  };
  message: string;
}
