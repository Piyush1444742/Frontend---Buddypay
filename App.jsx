import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./components/AuthPage";
import SignupRole from "./pages/SignupRole";
import ParentSignup from "./pages/ParentSignup";
import ChildSignup from "./pages/ChildSignup";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/signup-role" element={<SignupRole />} />
      <Route path="/signup/parent" element={<ParentSignup />} />
<Route path="/signup/child" element={<ChildSignup />} />

    </Routes>
  );
}
