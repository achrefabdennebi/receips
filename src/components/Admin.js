import React, { Component } from 'react'
import AjouterRecette from './AjouterRecette'
import AdminForm from './AdminForm'
import Login from './Login'

import firebase from 'firebase/app'
import 'firebase/auth'
import base, {firebaseApp} from '../base'
class Admin extends Component {
    state = {
        uid: null,
        chef: null
    }

    authenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider();
    
        firebaseApp
            .auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }

    handleAuth = authData => {
        console.log(authData);
    }

    render () {
        const { recettes, ajouterRecette, majRecette, chargerExemple, supprimerRecette } = this.props
        
        // Si l'utilisateur n'est pas connecté
        if (!this.state.uid) {
            return <Login authenticate={this.authenticate} />
        }
        
        return (
            <div className="cards">
                <AjouterRecette ajouterRecette={ajouterRecette}></AjouterRecette>
                {
                    Object.keys(recettes).map(key  => 
                    <AdminForm  key={key}
                                id={key}
                                majRecette={majRecette}
                                supprimerRecette={supprimerRecette}
                                recettes={recettes}
                    ></AdminForm>)
                }
                <footer>
                    <button onClick={chargerExemple}>
                        Remplir
                    </button>   
                </footer>
            </div>
        )
    }
}

export default Admin