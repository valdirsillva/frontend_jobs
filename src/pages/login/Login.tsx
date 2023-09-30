import axios from "axios";
import { ChangeEvent, FormEvent, useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth";

interface User {
    login: string;
    password: string;
}

export function Login() {
    const navigation = useNavigate();

    const { setAuthenticated } = useContext(AuthContext);
    const [formValues, setFormValues] = useState<User>({ login: "", password: "" })

    const handleChangeValues = (e: ChangeEvent<HTMLInputElement>): void => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormValues((current) => {
            return {
                ...current,
                [fieldName]: fieldValue,
            };
        });
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const user = {
                email: formValues.login,
                password: formValues.password
            }

            const response = await axios.post(`${process.env.REACT_APP_API}/login`, user)

            const token = response.data.token

            if (!token) return false;

            localStorage.setItem('@Auth:token', token)

            setAuthenticated(true)

            navigation('/jobs')

        } catch (err: any) {
            console.error(err.message)
        }
    }

    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-4/12 min-h-[80%] flex items-center justify-center flex-col bg-white p-5 rounded-md">
                <h2 className="text-gray-600 font-bold text-3xl">Entre com a sua conta</h2>
                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 p-10">
                    <div className="flex flex-col">
                        <label htmlFor="" className="w-20 font-medium text-gray-600 mb-1">Seu login</label>
                        <input
                            type="text"
                            name="login"
                            className="border-slate-200 bg-gray-100 p-3 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                            placeholder="Seu login"
                            value={formValues.login}
                            onChange={handleChangeValues}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="w-[1px] font-medium text-gray-600 mb-1">Senha</label>
                        <input
                            type="password"
                            name="password"
                            className="border-slate-[1px] bg-gray-100 p-3 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                            placeholder="Sua senha"
                            onChange={handleChangeValues}
                        />
                    </div>
                    <div className="flex flex-col mt-3">
                        <button type="submit" className="bg-violet-800 text-white rounded py-3">
                            ENTRAR
                        </button>
                        <div className="mt-5">
                            <span className=" font-medium text-gray-600">Não tem conta?
                                <a href="/company"> Sou empresa</a>
                            </span>
                        </div>
                        <div className="mt-5">
                            <span className=" font-medium text-gray-600">
                                <Link to="/candidate">Sou candidato</Link>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}