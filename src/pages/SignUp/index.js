import { useState } from "react";
import {auth} from "../../Api";
import {createUserWithEmailAndPassword} from 'firebase/auth';
import { useNavigate } from "react-router-dom";
const SignUp = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
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
                alert("Ocorreu um erro ao cadastrar o usuário. Sua senha deve conter no mínimo 6 dígitos")
            });

    }

    return (
        <> <input type="email" placeholder="Digite seu email" onChange={(e) => { setEmail(e.target.value) }}></input>
            <input type="password" placeholder="Digite sua senha" onChange={(e) => { setPassword(e.target.value) }}></input>
            <button disabled={password.length<6 ||email.length===0} onClick={handleSignUp}> Cadastrar</button>
        </>
    );
}
export default SignUp;