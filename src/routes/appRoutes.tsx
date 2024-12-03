import { Route, Routes } from "react-router-dom";
import AdminPage from "../pages/adminPage";
import BlogPage from "../pages/blogPage";
import CategoryPage from "../pages/categoryPage";
import ConsultingPage from "../pages/consultingPage";
import ContactPage from "../pages/contactPage";
import SignInPage from "../pages/FormPage/signInPage";
import SignUpPage from "../pages/FormPage/signUpPage";
import HomePage from "../pages/homePage";
import LearnMorePage from "../pages/learnMorePage";
import ResultConsultPage from "../pages/resultConsultPage";
import ProfilePage from "../pages/profilePage";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/blog" element={<BlogPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/learnmore" element={<LearnMorePage/>} />
      <Route path="/category" element={<CategoryPage/>} />
      <Route path="/consulting" element={<ConsultingPage />} />
      <Route path="/consulting/result" element={<ResultConsultPage/>} />
      <Route path="/dashboard" element={<AdminPage/>} />

      <Route path="/profile" element={<ProfilePage/>} />


      <Route path="/signIn" element={<SignInPage />} />
      <Route path="/signUp" element={<SignUpPage />} />
    </Routes>
  );
};

export default AppRoutes;
