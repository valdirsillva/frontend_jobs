import { Login } from "../pages/login/Login";
import { Home } from "../pages/home/Home"
import { Routes, Route } from "react-router-dom";
import { Company } from "../pages/company/Company";
import { Candidate } from "../pages/candidate/Candidate";

export function Router() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/candidate" element={<Candidate />} />
            <Route path="/company" element={<Company />} />
        </Routes>
    )
}