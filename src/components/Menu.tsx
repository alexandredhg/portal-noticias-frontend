import { Link } from "react-router";
import useLogin from "../hooks/useLogin";

function Menu() {
    const { realizarLogout } = useLogin();
    return (
        <nav >
            <ul className="menu">
                <li>
                    <Link to="/" className="botao-menu">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to="/adm" className="botao-menu">
                        Administrador
                    </Link>
                </li>

                <li>
                    <Link to="/login" className="botao-menu">
                        Login
                    </Link>
                </li>

                <li>
                    <Link to="/login" className="botao-menu"
                        onClick={realizarLogout}>
                        Sair
                    </Link>
                </li>

            </ul>

        </nav>
    );

}

export default Menu