import React, { useEffect, useState } from 'react';
import API from './Services/API'

import './App.css';
import './global.css';
import './Sidebar.css';
import './Main.css';
import DevItem from './components/DevItem/index';
import DevForm from './components/DevForm/index'
import toaster from 'toasted-notes';
import 'toasted-notes/src/styles.css';




function App() {
  const [devs, setDevs] = useState([]);
  
  
  useEffect(() => {
    document.title = 'Dev Radar';
    
    async function loadDevs() {
      const response = await API.get('/devs');
      setDevs(response.data);
    }
    loadDevs();
  }, [])

  async function handleAddDev(data) {
    const response = await API.post('/devs', data)
    console.log(data)
    if (response.data === "100"){
      toaster.notify('Usuário Github já cadastrado.', { 
        duration: 3200
      })
    }
    else {
      setDevs([...devs, response.data]);
    }    
  }

  return (

    <div id="app">
      <aside>
        <strong>Cadastro</strong>
        <DevForm onSubmit={handleAddDev} />
      </aside>

      <main>
        <ul>
          {devs.map(dev => (
            <DevItem key={dev._id} dev={dev} />
          ))}
        </ul>

      </main>

    </div>
  );
}

export default App;
