import { CreateEmployee } from "../../components/form/CreateEmployee";
import { Header } from "../../components/header/Header";


export function Employee() {
   return (
      <div>
        <Header data={{
          label: 'Login',
          routerPath: 'create'
        }} />
        <CreateEmployee />
      </div>
   )
}