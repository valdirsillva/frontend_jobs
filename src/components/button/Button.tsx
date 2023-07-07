import { Link } from "react-router-dom"


export function Button() {
  return (
    <Link to="login">
      <button className="bg-indigo-600 hover:bg-indigo-700 transition w-36 text-white p-2 rounded-full">
        Cadastrar
      </button>
    </Link>

  )
}