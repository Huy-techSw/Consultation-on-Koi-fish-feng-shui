import { BrowserRouter } from "react-router-dom";
import "./App.css";
import "./index.css";

import { AuthProvider } from "./components/form/authContext";
import AppRoutes from "./routes/appRoutes";

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
