import React, {Component} from 'react';
import './App.css';

import contactos from './extra/contact.json'

/*Componentes */
import Navbar from './components/navBar';
import Contactos from './components/contacs';
import ContactoForm from './components/contactForm';

/*Johnny Rondon - 2019-8291 - G 3 - ProgramacionWeb - LuisSoto*/

class App extends Component {
  
  /*En el estado tomamos los contactos del json referenciado arriba */
  state = {
    contactos: contactos
  }
  
  addContacto = (nombre, numero, email) => {
    
    const newContacto = {
      nombre: nombre,
      numero: numero,
      email: email,
      id: this.state.contactos.length
    }

    this.setState({
      contactos: [...this.state.contactos, newContacto]
    })
  }

  /*Verifica si el id de la tarea es diferente del id que le estan pasando */
  deleteContacto = (id) => {
    const newContacto = this.state.contactos.filter(contacto => contacto.id !==id);
    this.setState({
      contactos: newContacto
    })
  }

  searchContacto = (dato) => {
    const Search = this.state.contactos.filter(contacto => {
      return (
        contacto.nombre.includes(dato) ||
        contacto.numero.includes(dato) ||
        contacto.email.includes(dato)
      );
    });
    this.setState({contactos: Search})
  }

  /* Tomamos el array de contactos en "state" y se los pasamos 
  a un atributo del componente "Contactos" */
  render() {
    return <div>
      <Navbar
        contactosNews = {this.state.contactos}
        key = {contactos.id}
        searchContacto = {this.searchContacto}/>

      <ContactoForm addContacto = {this.addContacto}/>
      <Contactos 
      contactos={this.state.contactos} 
      deleteContacto = {this.deleteContacto}/>
    </div>
  }
}

export default App;
