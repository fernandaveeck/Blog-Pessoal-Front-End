function Navbar() {
    return (
        <>
            <header className="w-full flex justify-between py-4 bg-indigo-900 text-white">
                <nav className="conteiner flex justify-between text-lg mx-8">
                    Blog Pessoal
                </nav>
                <menu className="flex gap-6 mx-8">
                   <span>Postagens</span> 
                   <span>Temas</span> 
                   <span>Cadastrar Temas</span> 
                   <span>Perfil</span> 
                   <span>Sair</span>    
                </menu>

            </header>
        </>
    )
}

export default Navbar
