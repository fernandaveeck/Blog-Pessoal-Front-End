import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react"
import { ReactNode, useContext } from "react"
import { AuthContext } from "../../contexts/AuthContext"

function Footer() {
    let data = new Date().getFullYear()

    const { usuario } = useContext(AuthContext)

    let component: ReactNode
    if (usuario.token !== '') {
        component = (

            <>
                <footer className="flex justify-center bg-indigo-900 text-white">
                    <section className="container flex flex-col items-center py-4">

                        <p className="text-xl font-bold">
                            Blog Pessoal | Copyright: {data}
                        </p>

                        <p className="text-lg">Redes Sociais</p>

                        <nav className="flex gap-2">
                            <a href="https://www.linkedin.com/in/fernanda-silveira-veeck/" target="_blank">
                                <LinkedinLogoIcon size={48} weight="bold" />
                            </a>
                            <a href="https://www.instagram.com/fanixfunny?igsh=MWh6Nm5laHh6ZDF5aw==" target="_blank">
                                <InstagramLogoIcon size={48} weight="bold" />
                            </a>
                            <a href="https://github.com/fernandaveeck" target="_blank">
                                <GithubLogoIcon size={48} weight="bold" />
                            </a>
                        </nav>
                    </section>
                </footer>
            </>
        )
    }

    return (
        <>
            {component}
        </>
    )
}
export default Footer
