import { useState } from "react"

export function CreateEmployee() { 
  const [cep, setCep] = useState<string>('')
  const handleCep = (e: any) => {
    e.preventDefault()
    setCep(e.target.value)
  }
  const getApiCep = (e: any) => {
    const apiCep = 'https://cdn.apicep.com/file/apicep/${cep}.json'
    console.log(cep)
  }

  return  (
    <div className="w-full relative flex flex-col justify-center items-center">
      <section className="w-6/12 p-5 rounded-md mt-24 ml-24">
        <div className="w-full">
            <h1 className="font-bold text-4xl my-10 text-indigo-600 ">Registrar minha empresa</h1>
        </div>
        <div className="flex bg-white rounded-lg">
            <form className="w-full flex flex-col gap-5 p-10">
              <div className="flex flex-col">
                  <input
                    type="text"
                    name="name"
                    className="border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                    placeholder="Nome da empresa*"
                    />
              </div>

              <div className="flex flex-row justify-between gap-5">
                  <input
                      type="text"
                      name="cnpj_empresa"
                      className="flex-1 border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                      placeholder="CNPJ*"
                  />
                  <input
                    type="text"
                    name="quantidade_funcionario"
                    className="border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                    placeholder="Quandidade funcionarios*"
                  />
              </div>

              <div className="flex flex-col">
                  <input
                    type="email"
                    name="email"
                    className="border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                    placeholder="E-mail*"
                  />
              </div>
              
              <div className="flex flex-row gap-2">
                <input
                    type="text"
                    name="cep"
                    onChange={handleCep}
                    className="flex-1 border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                    placeholder="CEP*"
                  />

                <input
                    type="text"
                    name="telefone"
                    className="flex-1 border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                    placeholder="Telefone*"
                  />
              </div>

              <div className="flex flex-row gap-2">

                 <input
                    type="text"
                    name="rua"
                    className="flex-1 border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                    placeholder="Rua*"
                  />
                  <input
                    type="text"
                    name="cidade"
                    className="border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                    placeholder="Cidade*"
                  />

                  <input
                    type="text"
                    name="estado"
                    className="border-slate-200 bg-gray-100 p-4 rounded placeholder-slate-400 focus:outline-none focus:border-violet-800 border-[1px]"
                    placeholder="Estado*"
                  />
              </div>

          
              <div className="flex flex-col mt-3 ">
                <button type="submit" className="bg-indigo-800 hover:bg-indigo-900 transition text-white rounded py-4 w-60">
                  CADASTRAR EMPRESA
                </button>
              </div>
            </form>
        </div>
      </section>
      </div>
  )
  }