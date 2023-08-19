import { CreateCandidate } from "../../components/form/CreateCandidate";
import { Header } from "../../components/header/Header";

export function Candidate() {
    return (
        <div>
            <Header data={{
                label: 'Login',
                routerPath: 'create'
            }} />

            <CreateCandidate />
        </div>
    )
}