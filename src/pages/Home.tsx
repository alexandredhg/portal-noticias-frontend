import { useNoticia } from "../hooks/useNoticia";


function Home() {

    const { buscarNoticias } = useNoticia();
    const listaNoticias = buscarNoticias();


    return (
        <>
            <h1>
                Página de Notícias
            </h1>
            <main id="conteudoPrincipal">
                <h2 className="destaque">
                    Notícias
                </h2>

                <table>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Conteúdo</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaNoticias.map(
                                (noticia) => {
                                    // Extrai apenas os 3 atributos desejados
                                    const { titulo, conteudo, data } = noticia;

                                    return (
                                        <tr key={titulo + data}>
                                            <td>{titulo}</td>
                                            <td>{conteudo}</td>
                                            <td>{data}</td>
                                        </tr>
                                    );
                                }
                            )
                        }
                    </tbody>
                </table>

            </main >
        </>
    );
}

export default Home;