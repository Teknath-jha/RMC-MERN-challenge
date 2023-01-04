import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterPage from "./screens/RegisterScreen/RegisterScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyBookings from "./screens/MyBookings/MyBookings";
import AfterLogin from "./screens/AfterLogin/AfterLogin";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/login" element={<LoginScreen />} exact />
        <Route path="/register" element={<RegisterPage />} exact />
        <Route path="/afterLogedin" element={<AfterLogin />} exact />
        <Route path="/mybookings" element={<MyBookings />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
