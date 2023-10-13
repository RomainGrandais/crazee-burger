import React, { useState } from 'react';

const LoginForm = () => { 
    
    const [prenom, setPrenom] = useState("")

    const HanddleSubmit = (event) => {
    const nom = "Bonjour " + prenom;

    if (prenom != "") {
        alert(nom)
        setPrenom("")
        }

  
    }

    const HanddleChange = (event) => {
        setPrenom(event.target.value)
    }


    return (
        <div>
            <form type="submit">
                <input type="text"  value={prenom} placeholder='Entrez votre prénom...' onChange={HanddleChange} required/>
                <button type='submit'  onClick={HanddleSubmit} >Accéder à votre espace</button>
            </form>
        </div>
    );
};

export default LoginForm;