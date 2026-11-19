import { useLocation } from "react-router";
import MenuAdm from "../components/MenuAdm";
import { useAdm } from "../hooks/useAdm";
import { useEffect } from "react";
import useLogin from "../hooks/useLogin";
import { useNoticia } from "../hooks/useNoticia";

function TelaCadastroNoticia() {

    const { verificarUsuarioLogado } = useLogin()

    const {
        id,
        titulo,
        conteudo,
        data,
        mensagem,
        setId,
        setTitulo,
        setConteudo,
        setData,
        cadastrarNoticia,
        alterarNoticia
    } = useNoticia();

    const location = useLocation();

    const noticia = location.state?.noticia;

    useEffect(() => {
        verificarUsuarioLogado()

        if (noticia) {
            setId(noticia.id);
            setTitulo(noticia.titulo);
            setConteudo(noticia.conteudo);
            setData(noticia.data);
        }
        else {
            setId("");
            setTitulo("");
            setConteudo("");
            setData("");
        }
    }, [noticia]);

    return (
        <>
            <MenuAdm />
            <h1 >
                {
                    noticia ? "Tela Alteração de Notícia "
                        : "Tela de Cadastro de Notícia"

                }
            </h1>
            <main className="conteudoPrincipal">

                <div id="divMensagem" role="alert">
                    {mensagem}
                </div>

                <form  id="forCadAdm"
                    onSubmit={(evento) => {
                        noticia ? alterarNoticia(evento, noticia.id) : cadastrarNoticia(evento)
                    }}>

                    <div>
                        <input
                            type="hidden"
                            id="txtId"
                            value={id}
                            onChange={(evento) => {
                                setId(evento.target.value)
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="txtTitulo">
                            Titulo
                        </label>
                        <br />
                        <input
                            type="text"
                            id="txtTitulo"
                            required
                            value={titulo}
                            onChange={(evento) => {
                                setTitulo(evento.target.value)
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="txtConteudo">
                            Conteudo
                        </label>
                        <br />
                        <input
                            type="text"
                            id="txtConteudo"
                            required
                            value={conteudo}
                            onChange={(evento) => {
                                setConteudo(evento.target.value)
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="txtData">
                            Data
                        </label>
                        <br />
                        <input
                            type="date"
                            id="txtData"
                            required
                            value={data}
                            onChange={(evento) => {
                                setData(evento.target.value)
                            }}
                        />
                    </div>

                    <div>
                        <button type="submit">
                            {noticia ? "Alterar" : "Cadastrar"}
                        </button>

                    </div>

                </form>

            </main>

        </>

    );

};

export default TelaCadastroNoticia;
