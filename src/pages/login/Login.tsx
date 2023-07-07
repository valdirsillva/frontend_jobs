
export function Login() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-5/12 min-h-[50%] flex items-center justify-center flex-col bg-white p-5 rounded-md">
                <h2 className="text-gray-600 font-bold text-3xl">Entre com a sua conta</h2>
                <form className="w-full flex flex-col gap-5 p-10">
                    <div className="flex flex-col">
                        <label htmlFor="" className="w-20 font-medium text-gray-600 mb-1">Login *</label>
                        <input
                            type="text"
                            name="login"
                            className="border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400"
                            placeholder="Seu login"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="" className="w-20 font-medium text-gray-600 mb-1">Senha *</label>
                        <input
                            type="password"
                            name="password"
                            className="border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400"
                            placeholder="Sua senha"
                        />
                    </div>
                    <div className="flex flex-col mt-3">
                        <button type="submit" className="bg-violet-800 text-white rounded py-4">
                            ENTRAR
                        </button>
                        <div className="mt-5">
                            <span className=" font-medium text-gray-600">Não tem conta?
                                <a href="#"> Cadastrar</a>
                            </span>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}