import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {auth} from "../../Api"



const Login=({setIsAuth})=>{
    let navigate = useNavigate();
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    
    const handleLogin=()=>{
       
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

    return(
        <>
        <input type="email" placeholder="Digite seu email" onChange={(e)=>{setEmail(e.target.value)}}></input>
        <input type="password" placeholder="Digite sua senha" onChange={(e)=>{setPassword(e.target.value)}}></input>
        <button onClick={handleLogin}> Fazer login</button>
        <Link to="/sign-up">Não possui cadastro ainda? Clique aqui e faça seu cadastro</Link>
        </>
    );
}
export default Login;