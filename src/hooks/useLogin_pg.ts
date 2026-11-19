import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

function useLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate();
    async function realizarLogin(evento: React.SubmitEvent<HTMLFormElement>) {
        evento.preventDefault();

        try {
            //Enviar os Dados para o Servidor
            const resposta = await axios.post(
                "http://localhost:3000/login",
                {
                    email,
                    senha
                }
            )

            setMensagem(resposta.data.mensagem)
            localStorage.setItem("usuarioLogado", "sim")
            localStorage.setItem(
                "admnistradorLogado",
                JSON.stringify(resposta.data.admnistrador)
            )

            setTimeout(() => {
                navigate("/adm")
            }, 2500);


        } catch (error) {
            if(axios.isAxiosError(error)) {
                setMensagem(
                    error.response?.data?.mensagem
                )
            }else{
                setMensagem("Erro Inesperado")
            }
        }

    }

    function realizarLogout() {
        localStorage.removeItem("usuarioLogado");
    }

    function verificarUsuarioLogado() {
        const usuarioLogado = localStorage.getItem("usuarioLogado")
        if (usuarioLogado != "sim") {
            navigate("/login")
        }
    }

    return (
        {
            email, setEmail,
            senha, setSenha,
            mensagem, setMensagem,
            realizarLogin,
            realizarLogout,
            verificarUsuarioLogado
        }
    )
}



export default useLogin;