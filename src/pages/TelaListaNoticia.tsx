import { useEffect, useState } from "react";
import MenuAdm from "../components/MenuAdm";
import { useAdm } from "../hooks/useAdm";
import { useNavigate } from "react-router";
import useLogin from "../hooks/useLogin";
import { useNoticia } from "../hooks/useNoticia";

export function TelaListaNoticia() {

    const { verificarUsuarioLogado } = useLogin()

    const { buscarNoticias, excluirNoticia } = useNoticia()

    const [listaNoticias, setListaNoticias] = useState(buscarNoticias());

    const navigate = useNavigate();

    useEffect(() => {
        verificarUsuarioLogado()
    })

    return (
        <>
            <MenuAdm />
            <main id="conteudoPrincipal">
                <h1 >
                    Tela de listagem de Notícias
                </h1>
                <table>
                    <thead>

                        <tr>
                            <th>
                                Titulo
                            </th>
                            <th>
                                Data
                            </th>
                            <th colSpan={2}>
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaNoticias.map(
                                (noticia) => (
                                    <tr key={noticia.id}>
                                        <td>
                                            {noticia.titulo}
                                        </td>
                                        <td>
                                            {noticia.data}
                                        </td>
                                        <td>
                                            <button onClick={() => {
                                                navigate("/telaCadastroNoticia", {
                                                    state: { noticia }
                                                });
                                            }}>
                                                Alterar
                                            </button>
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => {
                                                    const confirmar = window.confirm(
                                                        "Deseja Excluir Realmente a Notícia "
                                                        + noticia.titulo + "?");

                                                    if (confirmar) {
                                                        excluirNoticia(noticia.id);

                                                        setListaNoticias(buscarNoticias());
                                                    }
                                                }}>
                                                Excluir
                                            </button>
                                        </td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </main>
        </>
    )
};