import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUp } from '../../controllers/usersController';

import logo from '../../assets/logo.png'
import Load from '../Load'
import "./styles.css";


function SignUp(props){
    
    const [name, handleChangeNome] = useState('');
    const [password, handleChangeSenha] = useState('');
    const [load, changeLoad] = useState(false);
    const history = useHistory();

    function handleSubmit(event){
        event.preventDefault();

        changeLoad(true);
        signUp(name, password, (data) => {
          if(data)
            history.push('/List');
          else
            changeLoad(false);
        });
    }

    function login(){
        history.push('/');
    }

        return(
          <div className="loginContainer">
          {!(load) ?
            <form onSubmit={handleSubmit}>
                <fieldset>

                    <legend>Sign Up</legend>

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

                    <input className="button" type="submit" value="Criar Usuário"/>
                    <br />

                    <input className="button" type="button" value="Voltar" onClick={login}/>
                </fieldset>
            </form>
            :
            <Load />
          }
          </div>
        );
}

export default SignUp;