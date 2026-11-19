import { useState } from "react";
import type Administrador from "../interfaces/Administrador";
import { useNavigate } from "react-router";
import axios from "axios";

export function useAdm() {

    const [id, setId] = useState("");
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const navigate = useNavigate();


    //Endereço da Api
    const API = "http://localhost:3000/administradores";

    async function cadastrarAdm(evento: React.SubmitEvent<HTMLFormElement>) {
        evento.preventDefault();

        try {
            const resposta = await axios.post(API, {
                nome, email, senha
            });
            setMensagem(resposta.data.mensagem)
            setTimeout(() => {
                limparCampos()
            }, 2000);

        } catch (error) {
            console.log(error);
            setMensagem("Erro ao Cadastrar Administrador: " + error);

        }

    }



    function limparCampos() {
        setId("");
        setNome("");
        setEmail("");
        setSenha("");
        setMensagem("");
    }

    async function buscarAdministradores(): Promise<Administrador[]> {

        try {
            const resposta = await axios.get(API);
            return resposta.data
        } catch (error) {
            console.log(error)
            setMensagem("Erro ao Listar Adnimistradores:" + error)
            return []

        }

    }

    async function excluirAdministrador(id: string) {

        try {
            const resposta = await axios.delete(API + "/" + id);
            setMensagem(resposta.data.mensagem)
        } catch (error) {
            console.log(error);
            setMensagem("Erro ao Excluir Administrador: " + error);

        }

    }



    async function alterarAdministrador(
        evento: React.SubmitEvent<HTMLFormElement>,
        id: string) {
        evento.preventDefault();

        try {
            const resposta = await axios.put(API + "/" + id, {
                nome, email, senha
            });
            setMensagem(resposta.data.mensagem);
            setTimeout(() => {
                navigate("/telaListaAdm")
            }, 2000);
        } catch (error) {
            console.log(error);
            setMensagem("Erro ao Alterar Administrador: " + error);
        }

    }





    return ({
        id, setId,
        nome, setNome,
        email, setEmail,
        senha, setSenha,
        mensagem, setMensagem,
        cadastrarAdm,
        buscarAdministradores,
        excluirAdministrador,
        alterarAdministrador
    })

}

