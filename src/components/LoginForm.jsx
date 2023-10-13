import React, { useState } from 'react';

const LoginForm = () => { 
    
    const [prenom, setPrenom] = useState("")

    const HanddleSubmit = (event) => {
        event.preventDefault();

        alert(`Bonjour ${prenom}`)
        setPrenom("") 
    }

    const HanddleChange = (event) => {
        setPrenom(event.target.value)
    }


    return (
        <div>
            <form type="submit" onSubmit={HanddleSubmit}>
                <input type="text"  value={prenom} placeholder='Entrez votre prénom...' onChange={HanddleChange} required/>
                <button type='submit'   >Accéder à votre espace</button>
            </form>
        </div>
    );
};

export default LoginForm;