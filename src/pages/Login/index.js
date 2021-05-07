import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { login } from '../../controllers/sessionController';

import logo from '../../assets/logo.png'
import "./styles.css";

function Login(props){
    
    const [name, handleChangeNome] = useState('');
    const [password, handleChangeSenha] = useState('');
    const history = useHistory();

    function handleSubmit(event){
        event.preventDefault();

        login(name, password, () => {
            history.push('/List');
        });
    }

    function signUp(){
        history.push('/SignUp');
    }

        return(
            <form onSubmit={handleSubmit}>
                <fieldset>

                    <legend>Log In</legend>

                    <img className="logo" src={logo} alt="Logo"/>

                    <input className="input" 
                        type="text" 
                        value={name}
                        placeholder="Nome" 
                        onChange={e => handleChangeNome(e.target.value)} 
                        required
                    />
                    <br />

                    <input className="input" 
                        type="password" 
                        value={password} 
                        placeholder="Senha"
                        onChange={e => handleChangeSenha(e.target.value)} 
                        required
                    />
                    <br />

                    <input className="button" type="submit" value="Entrar"/>
                    <br />

                    <input className="button" type="button" value="Criar Usuário" onClick={signUp}/>
                </fieldset>
            </form>
        );
}

export default Login;