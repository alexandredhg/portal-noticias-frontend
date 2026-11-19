import { useState } from "react";
import { useNavigate } from "react-router";

function useLogin() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    const navigate = useNavigate();
    function realizarLogin(evento: any) {
        evento.preventDefault();

        const listaAdministradores = JSON.parse(localStorage.getItem("listaAdministradores") || "[]")


        {/*const administrador = listaAdministradores.find(
            (adm: Administrador) => (adm.email === email && adm.senha === senha)
        );

        if (administrador) {*/}


            if (email === "adm@gmail.com" && senha === "123") {
                
            setMensagem("Login realizado com sucesso!");
            localStorage.setItem("usuarioLogado", "sim");
            setTimeout(() => {
                navigate("/adm");
            }, 5000);
        }
        else {
            setMensagem("E-mail ou Senha incorretos");
        }




        {/*if(administrador) {
setMensagem("Login realizado com sucesso!");
localStorage.setItem("usuarioLogado", "sim");
setTimeout(() => {
    navigate("/adm");
}, 1000);
        }*/}



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