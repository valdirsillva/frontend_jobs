import { Fragment, useEffect, useState } from "react";
// import { jobs } from "../../services/dataset";
import { Stack } from "../../components/jobs/stacks/Stack";
import { Description } from "../../components/jobs/description/Description";
import { Search } from "../../components/jobs/search/Search";
import { Header } from "../../components/header/Header";
import { ApiService } from "../../services/ApiService";

export function Home() {
  const [listJobs, setListJobs] = useState([] as any[])

  const fetchData = async () => {
    try {
      const api = new ApiService
      const response = await api.get('/jobs')
      // console.log(response.data.jobs)

      setListJobs(response.data.jobs)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Fragment>
      <Header  data={{
          label: 'Login',
          routerPath: 'login'
        }} />
      <section className="w-full relative mt-24">
        <div className="bg-topo flex items-center justify-center">
          <h2 className="font-bold text-4xl text-indigo-600 bg-white opacity-80 to-transparent p-10 rounded">
            Encontre aqui as melhores vagas de tecnologia. Voe alto! 🚀
          </h2>
        </div>

        <div className="w-full flex flex-row gap-5">
          <aside className="w-3/12 ml-10 mt-20 p-10 bg-white border-2 rounded-xl">
            <h3 className="font-medium text-2xl mb-2">Filtre sua vaga</h3>
            <div className="flex flex-col gap-3">
              <Search />
            </div>
          </aside>

          <div className="w-8/12 flex flex-col mt-20">
            <span className="font-bold text-3xl text-gray-600 mb-5">
              Total de vagas encontradas: {listJobs.length}
            </span>

            {listJobs.map(({ id, job_title, job_quantity, seniority, salary, modality, technologies, requirements}) => {
              return (
                <section className="w-full mb-5 p-10 bg-white border-2 rounded-xl">
                  <div className="flex flex-col">
                    <span className="font-bold text-4xl text-indigo-600 ">
                      {job_title}
                    </span>

                    <div className="flex flex-row items-center gap-12 mt-2 ">
                      <Stack data={technologies.split(",")} />
                    </div>

                    <div className="flex flex-row items-center gap-12 m-2">
                       <span className="font-bold text-gray-900">
                         R$ {salary}
                       </span>
                       <span className="font-bold text-gray-900">
                        senioridade: {seniority}
                      </span>
                    </div>

                    <div className="w-8/12 flex flex-col p-1 mt-10">
                      <Description data={requirements.split(";")} />
                    </div>

                    <div className="mt-10">
                      <a
                        href={`detalhe/${id}`}
                        className="w-30 h-10 bg-indigo-600 hover:bg-indigo-700 transition px-8 py-3 text-white rounded"
                      >
                        VER DETALHES
                      </a>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
