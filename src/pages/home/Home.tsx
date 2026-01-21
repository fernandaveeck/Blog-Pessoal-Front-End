import ListaPostagens from "../../components/postagem/listapostagens/ListaPostagens";

function Home() {
  return (
    <>
      <main className="bg-indigo-900 flex justify-center">
        <section className="container grid grid-cols-2 text-white">
          <article className="flex flex-col gap-4 items-center justify-center py-4">
            <h1 className="text-5xl font-bold">Seja Bem Vindo!</h1>
            <p className="text-xl">Expresse aqui seus pensamentos e opiniões</p>
            <button className="flex justify-around gap-4 rounded text-white border-white border-solid border-2 py-2 px-4">
              Nova Postagem
            </button>
          </article>
          <figure className="flex justify-center w-2/3">
            <img src="https://i.imgur.com/fyfri1v.png" alt="Imagem página Home" />
          </figure>
        </section>
      </main>

      <ListaPostagens />
    </>
  );
}
export default Home;