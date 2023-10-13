import React, { useState } from 'react';

const LoginForm = () => { 
    
    const [prenom, setPrenom] = useState("")

    const HandleSubmit = (event) => {
        event.preventDefault();

        alert(`Bonjour ${prenom}`)
        setPrenom("") 
    }

    const HandleChange = (event) => {
        setPrenom(event.target.value)
    }


    return (
        <div>
            <form type="submit" onSubmit={HandleSubmit}>
                <input type="text"  value={prenom} placeholder='Entrez votre prénom...' onChange={HandleChange} required/>
                <button type='submit'   >Accéder à votre espace</button>
            </form>
        </div>
    );
};

export default LoginForm;