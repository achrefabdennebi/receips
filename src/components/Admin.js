import React, { Component } from 'react'
import AjouterRecette from './AjouterRecette'
import AdminForm from './AdminForm'
class Admin extends Component {
    render () {
        const { recettes, ajouterRecette, majRecette, chargerExemple, supprimerRecette } = this.props
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