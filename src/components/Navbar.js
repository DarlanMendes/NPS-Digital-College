import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { signOut } from "firebase/auth";
import { auth } from '../Api';
import { useNavigate } from "react-router-dom";

const Navbar = ({isAuth,setIsAuth}) => {
    const LogOut = () => {
        signOut(auth).then(() => {
           alert("Usuário deslogado com sucesso");
           localStorage.clear();
           setIsAuth(false);
           console.log(isAuth);
           window.location.pathname= "/";
        }).catch((error) => {
            alert("Ocorreu um erro:  ", error)
        });
    }

    return (
        <div className={styles.Navbar}>
            <div className={styles.NavbarTitle}>
                NPS
            </div>
            <div className={styles.NavbarItems}>
                <ul>
                    <li><Link to="/partial-result" className={styles.Item}>Resultado Parcial</Link></li>
                    <li><Link to="/nps-report" className={styles.Item}>Relatório NPS</Link></li>
                    <li><Link to="" className={styles.item}>ADC Nota</Link></li>
                    <li onClick={LogOut}> Sair</li>
                </ul>
            </div>

        </div>

    );
}
export default Navbar