function Home() {
    return (
        <>
            <main>
                <section style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    backgroundColor: "#b2d7ed"
                }}>
                    <article style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "white",
                    }}>
                        <h1 style={{
                            fontFamily: "Oswald, Arial, Sans-serif",
                            fontSize: "5vw",
                            fontWeight: "bold"
                        }}>Seja Bem Vindo!</h1>
                        <p style={{
                            fontFamily: "Oswald, Arial, Sans-serif",
                            fontSize: "2vw",
                            fontWeight: "400"
                        }}
                        >Expresse aqui seus pensamentos e opiniões</p>
                        <button style={{
                            background: "#b2d7ed",
                            border: "2px solid white",
                            color: "white",
                            borderRadius: "0.5rem",
                            padding: "0.5rem"
                        }}>
                            Nova postagem</button>
                    </article>
                    <figure>
                        <img src="public\neni.png" alt="Imagem página Home" width={"100%"} height={"100%"}/>
                    </figure>
                </section>
            </main>
        </>

    )
}
export default Home