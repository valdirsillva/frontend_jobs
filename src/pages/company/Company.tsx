import { CreateCompany } from "../../components/form/CreateCompany";
import { Header } from "../../components/header/Header";

export function Company() {
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