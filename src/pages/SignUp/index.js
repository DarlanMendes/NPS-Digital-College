import { useState } from "react";
import {auth} from "../../Api";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
import './index.css';
const SignUp = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    
    
    const VerifyPassword=()=>{
        if(password ===password2 && email.length>0){
            handleSignUp();
        }else{
            alert("Atenção:Email incompleto ou senha distintas . Por favor, confira a senha digitada nos dois campos")
        }
    }
    
    
    
    const handleSignUp = () => {
        
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                //const user = userCredential.user;
                
                console.log(userCredential);
                navigate("/");
                alert('Usuário cadastrado com sucesso');
            })
            .catch((error) => {
                //const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.log(errorMessage);
                alert("Ocorreu um erro ao cadastrar o usuário."+errorMessage)
            });

    }

    return (
        <>  
            <input type="email" placeholder="Digite seu email" onChange={(e) => { setEmail(e.target.value) }}></input>
            <input type="password" placeholder="Digite sua senha" onChange={(e) => { setPassword(e.target.value) }}></input>
            <input type="password" placeholder="Digite sua senha" onChange={(e) => { setPassword2(e.target.value) }}></input>
            <button className=".btn-login-cadastro-page" disabled={password.length<6 ||email.length===0} onClick={VerifyPassword}> Cadastrar</button>
        </>
    );
}
export default SignUp;