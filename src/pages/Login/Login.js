import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Api"
import styles from './Login.module.css';
import medidor from '../../assets/img/Medidor.png';
import bcgEdge from '../../assets/img/backgroundEdge.png'

const Login = ({ setIsAuth }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.uid);
        alert("Logado com sucesso");
        localStorage.setItem('UserId', userCredential.user.uid);
        setIsAuth(true);
        navigate("/nps-report");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }

  return (
    <div ClassName={styles.ContainerLogin}>
      <div className={styles.quadro}>

        <div className={styles.login}>
          <span className={styles.Title}>Bem vindo!</span>
          <span className={styles.subTitle}>Um novo conceito em pesquisa.</span>
          <div className={styles.sublogin}>
            <p className={styles.pLogin}>Insira suas credencias de login </p>
            <input className={styles.inputLogin} type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}></input>
            <input className={styles.inputLogin} type="password" placeholder="Senha" onChange={(e) => { setPassword(e.target.value) }}></input>
          </div>
          <div className={styles.sublogin}>
            <button className={styles.btnLoginCadastroPage} onClick={handleLogin}>Entrar</button>
            <Link className={styles.Link} to="/sign-up"><button className={styles.btnLoginCadastroPage}>Cadastro</button></Link>
          </div>
        </div>
        <div className={styles.logo}>
          <img className={styles.imgLogin} src={medidor} />
        </div>
        <footer></footer>
        <img className={styles.bcgEdge} src={bcgEdge}/>
      </div>
    </div>
  );
}
export default Login;