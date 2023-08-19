import CryptoJS from "crypto-js"
import { useState, ChangeEvent, FormEvent } from "react";
import { ApiService } from "../../services/ApiService";

interface Candidate {
    name: string;
    email: string;
    password: string;
}

export function CreateCandidate() {
    const [fieldValues, setFieldValues] = useState<Candidate>({
        name: '',
        email: '',
        password: ''
    })

    const cyptoPassword = (secretKey: string) => {
        const originalText = process.env.REACT_APP_PHRASE_SECRET ?? 'xmbb12'
        const passwordHash = CryptoJS.AES.encrypt(
            originalText,
            secretKey
        ).toString()
        return passwordHash;
    }

    const handleChangeValues = (e: ChangeEvent<HTMLInputElement>) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFieldValues((current) => {
            return {
                ...current,
                [fieldName]: fieldValue,
            };
        });
    }

    const formSubmitCompany = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const api = new ApiService()
            const hash = cyptoPassword(fieldValues.password)

            const newCandidate = {
                name: fieldValues.name,
                email: fieldValues.email,
                password: hash,
            }

            await api.post('/candidate', newCandidate)

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <div className="w-full relative flex flex-col justify-center items-center">
            <section className="w-6/12 p-5 rounded-md mt-24 ml-24">
                <div className="w-full">
                    <h1 className="font-bold text-4xl my-10 text-indigo-600 ">Encontre seu melhor emprego aqui!</h1>
                </div>
                <div className="flex bg-white rounded-lg">
                    <form className="w-full flex flex-col gap-5 p-10" onSubmit={formSubmitCompany}>
                        <div className="flex flex-col">
                            <input
                                type="text"
                                name="name"
                                onChange={handleChangeValues}
                                className="border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                                placeholder="Seu nome"
                            />
                        </div>

                        <div className="flex flex-row justify-between gap-5">
                            <input
                                type="text"
                                name="email"
                                onChange={handleChangeValues}
                                className="flex-1 border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                                placeholder="Seu email"
                            />
                            <input
                                type="password"
                                name="password"
                                onChange={handleChangeValues}
                                className="border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                                placeholder="Sua senha"
                            />
                        </div>

                        <div className="flex flex-col mt-3 ">
                            <button type="submit" className="bg-indigo-800 hover:bg-indigo-900 transition text-white rounded py-4 w-60">
                                CADASTRAR-SE
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}