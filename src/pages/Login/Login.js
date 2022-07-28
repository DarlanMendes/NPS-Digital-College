import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Api"
import styles from './Login.module.css';
import medidor from '../../assets/img/Medidor.png';
import bcgEdge from '../../assets/img/backgroundEdge.png'

const Login = ({ isAuth, setIsAuth, setRegisterAllowed }) => {
  let navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user.uid);
        alert("Logado com sucesso");
        localStorage.setItem('UserId', userCredential.user.uid);
        localStorage.setItem('UserEmail',userCredential.user.email);
        
        setIsAuth(true);
        navigate("/nps-report");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  }
  const handleAllowSignUp =()=>{
    
    let allowance = window.prompt("O cadastro só é permitido aos funcionários da Digital College.Digite a senha para acessar a tela de cadastro");
    if(allowance==="DLA software - Sua solução está aqui"){
      setRegisterAllowed(true);
      window.location.pathname="/sign-up";
     
    }else{
      window.alert("Senha inválida");
    }
  }
  useEffect(() => {
    
    if(localStorage.getItem("UserId")) {
      window.location.pathname ="/nps-report";
    }
  }, [isAuth])
  return (
    <div className={styles.ContainerLogin}>
      <div className={styles.quadro}>

        <div className={styles.login}>
          <span className={styles.Title}>Bem vindo!</span>
          <span className={styles.subTitle}>Um novo conceito em pesquisa.</span>
          <div className={styles.sublogin}>
            <p className={styles.pLogin}>Insira suas credencias de login </p>
            <input className={styles.inputLogin} type="email" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }}></input>
            <input className={styles.inputLogin} type="password" placeholder="Senha" onChange={(e) => { setPassword(e.target.value) }}></input>
          </div>
          <div className={styles.inpt}>
            <button className={styles.btn2} onClick={handleLogin}>Entrar</button>
            <button className={styles.btn2} onClick={handleAllowSignUp}>Cadastro</button>
          </div>
        </div>
        <div className={styles.logo}>
          <img className={styles.imgLogin} src={medidor} />
        </div>
        <footer></footer>
        <img className={styles.bcgEdge} src={bcgEdge} />
      </div>
    </div>
  );
}
export default Login;