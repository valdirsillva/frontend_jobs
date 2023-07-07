import { Login } from "../pages/login/Login";
import { Home } from "../pages/home/Home"
import { Routes, Route } from "react-router-dom";

export function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
        </Routes>
    )
}