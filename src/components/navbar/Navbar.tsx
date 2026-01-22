import { ReactNode, useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { ToastAlerta } from "../../utils/ToastAlerta"

function Navbar() {

    const navigate = useNavigate()
    const { usuario, handleLogout } = useContext(AuthContext)

    function sair() {
        handleLogout()
        ToastAlerta("Logout realizado com sucesso!", 'info')
        navigate('/')
    }

    let component: ReactNode
    if (usuario.token !== '') {
        component = (
            <>
                <header className="w-full flex justify-between py-4 bg-indigo-900 text-white">
                    <nav className="conteiner flex justify-between text-lg mx-8">
                        <Link to="/home" className="text-2xl font-bold">Blog Pessoal</Link>
                    </nav>
                    <menu className="flex gap-6 mx-8">
                        <Link to='/postagens' className='hover:underline'> <span>Postagens</span> </Link>
                        <Link to={'/temas'} className="hover:underline"> <span>Temas</span> </Link>
                        <Link to='/cadastrartema' className='hover:underline'> <span>Cadastrar tema</span> </Link>
                        <Link to='/perfil' className="hover:underline"> <span>Perfil</span> </Link>
                        <Link to='' onClick={sair} className="hover:underline"> <span>Sair</span> </Link>
                    </menu>

                </header>
            </>
        )
    }

    return (
        <>
            {component}
        </>
    )
}

export default Navbar


