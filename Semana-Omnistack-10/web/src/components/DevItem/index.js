import React from 'react';
import API from '../../Services/API'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import './styles.css';



//Mover para App.js e utilizar event listener;
async function handleDeleteDev(dev_id) {
    await API.delete('/devs', {
        data: {
            _id: dev_id
        },
    }
    )
     window.location.reload(); //Refazer usando event listener;
  }

//Mover para App.js e utilizar event listener;
async function handleEditDev(dev_id) {

}


//
function DevItem({ dev }) {
    
    return (
        <li key={dev._id} className="dev-item">
            <header>
            <div className="buttons">
                <button className="edit-button" onClick={() => handleEditDev(dev._id)} disabled><FontAwesomeIcon icon={faUserEdit}/></button>
                <button className="delete-button" onClick={() => handleDeleteDev(dev._id)}><FontAwesomeIcon icon={faTrashAlt}/></button>
            </div>
            </header>
            <header>
                <img src={dev.avatar_url} alt={dev.name}/>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <span>{dev.techs.join(', ')}</span>
                </div>
            </header>
            <p>{dev.bio}</p>
            <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
         </li>
    );
}

export default DevItem;