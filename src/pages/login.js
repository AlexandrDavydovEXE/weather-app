import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';


const LoginPage =({history})=> {

    const submitBtn =(e)=> {
        e.preventDefault();
         if(name === '1' && password === '1'){
             history.push('/dashboard')
         }else{
             history.push('/error')
         }
    };

    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');

    return(
        <div className="wrapper fadeInDown">
            <div id="formContent">

                <div className="fadeIn first">
                    <img src="https://s.hdnux.com/photos/47/31/53/10328782/37/920x920.jpg" id="icon" alt="User Icon"/>
                </div>

                <form onSubmit={e=> submitBtn(e)}>
                    <h2> Login </h2>
                    <input type="text"  className="fadeIn second"
                           maxLength='100' value={ name }
                           name="login" autoComplete='on'
                           onChange={e=> setName(e.target.value)} required/>
                    <h2> Password </h2>
                    <input type="password" className="fadeIn third"
                           maxLength='100' value={ password }
                           autoComplete='on' name="login"
                           onChange={e=> setPassword(e.target.value)}
                           required/>
                    <button type="submit" className="fadeIn fourth btn btn-submit">
                        ENTER
                    </button>
                </form>

            </div>
        </div>
    )
};

export default withRouter(LoginPage);
