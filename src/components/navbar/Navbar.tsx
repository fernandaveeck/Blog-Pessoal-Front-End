import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"

function Navbar() {

    const navigate = useNavigate()
    const { handleLogout } = useContext(AuthContext)

    function sair() {
        handleLogout()
        navigate('/')
    }
    return (
        <>
            <header className="w-full flex justify-between py-4 bg-indigo-900 text-white">
                <nav className="conteiner flex justify-between text-lg mx-8">
                    <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>
                </nav>
                <menu className="flex gap-6 mx-8">
                    <span>Postagens</span>
                    <Link to={'/temas'} className="hover:underline"> <span>Temas</span> </Link>
                    <span>Cadastrar Temas</span>
                    <span>Perfil</span>
                    <Link to='' onClick={sair} className="hover:underline"> <span>Sair</span> </Link>
                </menu>

            </header>
        </>
    )
}

export default Navbar


