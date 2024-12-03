import { createContext, ReactNode, useContext, useState } from 'react';

// Define the shape of the user data returned from the login API
interface UserData {
  userId: string;
  accessToken: string;
  refreshToken: string;
  role: string;
  email: string;
  fullname: string;
  expiredAt: string;
}

// Define the shape of the authentication context
interface AuthContextType {
  user: UserData | null;
  isAuthenticated: boolean;
  login: (userData: UserData) => void;
  logout: () => void;
}

// Create the context with an initial undefined value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Custom hook to access the AuthContext
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// The provider component that manages the auth state
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<UserData | null>(null);

  const isAuthenticated = !!user;

  // Implement the login function to set user data
  const login = (userData: UserData) => {
    setUser(userData);
    // Optionally, store tokens in localStorage for persistence
    localStorage.setItem('accessToken', userData.accessToken);
    localStorage.setItem('refreshToken', userData.refreshToken);
  };

  // Implement the logout function
  const logout = () => {
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
