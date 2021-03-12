import React from 'react'

const AdminForm = ({
    id: key,
    majRecette,
    recettes,
    supprimerRecette
}) => {
    const recette = recettes[key]
    const handleChange = (event, key) => {
        const {name, value } = event.target;
        const recette = recettes[key]
        recette[name] = value
        majRecette(key, recette)
    }

    return (
        <div className='card'>
            <form className='admin-form'>
                <input type="text" value={recette.nom} onChange={e => handleChange(e, key)} name="nom" placeholder="Nom de la recette"/> 
                <input type="text" value={recette.image}  onChange={e => handleChange(e, key)} name="image" placeholder="Adresse de l'image"/> 
                <textarea rows="13" value={recette.ingredients}  onChange={e => handleChange(e, key)} name="ingredients" placeholder="Liste des ingredients"/> 
                <textarea rows="13" value={recette.instructions}  onChange={e => handleChange(e, key)} name="instructions" placeholder="Liste des instructions"/>    
            </form>
            <button onClick={() => supprimerRecette(key)}>Supprimer</button>
        </div>
    )
}

export default AdminForm