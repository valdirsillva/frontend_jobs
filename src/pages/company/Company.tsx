import { CreateCompany } from "../../components/form/CreateCompany";
import { Header } from "../../components/header/Header";


export function Employee() {
  return (
    <div>
      <Header data={{
        label: 'Login',
        routerPath: 'create'
      }} />
      <CreateCompany />
    </div>
  )
}