import "./App.css";
import React, { useState } from "react";

export default function App() {

  /*
  Crear objeto users
  */
  
  const [users, setUsers] = useState([
    {
      nombre: "pipo",
      street: "juan b justo",
      city: "caba",
      state: "caba",
      country: "arg",
      telephone: "1234567890",
      birthday: new Date(2006, 0, 20),
    },
    {
      nombre: "pepe",
      street: "nogoya",
      city: "caba",
      state: "caba",
      country: "arg",
      telephone: "1234567891",
      birthday: new Date(2006, 0, 21),
    },
    {
      nombre: "pipe",
      street: "alberdi",
      city: "caba",
      state: "caba",
      country: "arg",
      telephone: "1234567892",
      birthday: new Date(2006, 0, 22),
    },
  ]);

  /*
  Crear variables
  */

  const [selectedOption, setSelectedOption] = useState("");
  const [newName, setNewName] = useState("");
  const [newStreet, setNewStreet] = useState("");
  const [newCity, setNewCity] = useState("");
  const [newState, setNewState] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newTel, setNewTel] = useState("");
  const [newBirthday, setNewBirthday] = useState("");

  /*
  Seleccionar nombres  
  */

  const handleSelectChange = (event) => {
    const selectedUserName = event.target.value;
    const selectedUser = users.find((user) => user.nombre === selectedUserName);
    setSelectedOption(selectedUser);
  };

  /*
  Formularios
  */

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setNewName(value);
        break;
      case "street":
        setNewStreet(value);
        break;
      case "city":
        setNewCity(value);
        break;
      case "state":
        setNewState(value);
        break;
      case "country":
        setNewCountry(value);
        break;
      case "tel":
        setNewTel(value);
        break;
      case "birthday":
        setNewBirthday(value);
        break;
      default:
        break;
    }
  };

  /*
  Enviar datos
  */

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmpleado = {
      nombre: newName,
      street: newStreet,
      city: newCity,
      state: newState,
      country: newCountry,
      telephone: newTel,
      birthday: newBirthday,
    };
    setUsers([...users, newEmpleado]);
    setSelectedOption(newEmpleado);
    setNewBirthday("");
    setNewCountry("");
    setNewCity("");
    setNewState("");
    setNewTel("");
    setNewStreet("");
    setNewName("");
  };
  
  return (
    <main>
      <div>
        <select
          value={selectedOption ? selectedOption.nombre : ""}
          onChange={handleSelectChange}
        >
          <option value="">Selecciona una opción</option>
          {users.map((user) => (
            <option key={user.nombre} value={user.nombre}>
              {user.nombre}
            </option>
          ))}
        </select>
        <p>Informacion del Empleado:</p>
        {selectedOption ? (
          <>
            <p>Nombre: {selectedOption.nombre}</p>
            <p>Dirección: {selectedOption.street}</p>
            <p>Ciudad: {selectedOption.city}</p>
            <p>Estado: {selectedOption.state}</p>
            <p>País: {selectedOption.country}</p>
            <p>Teléfono: {selectedOption.telephone}</p>
            <p>Fecha de Nacimiento: {(new Date(selectedOption.birthday)).toDateString()}</p>
          </>
        ) : (
          <p>Selecciona un empleado para ver su información.</p>
        )}
      </div>
      <div id="form">
        <p>Agrega un nuevo empleado</p>
        <p>Nombre</p>
        <input
          type="text"
          name="name"
          value={newName}
          onChange={handleChange}
        />
        <p>Direccion</p>
        <input
          type="text"
          name="street"
          value={newStreet}
          onChange={handleChange}
        />
        <p>Ciudad</p>
        <input
          type="text"
          name="city"
          value={newCity}
          onChange={handleChange}
        />
        <p>Estado/Provincia</p>
        <input
          type="text"
          name="state"
          value={newState}
          onChange={handleChange}
        />
        <p>Pais</p>
        <input
          type="text"
          name="country"
          value={newCountry}
          onChange={handleChange}
        />
        <p>Telefono</p>
        <input 
          type="text" 
          name="tel" 
          value={newTel} 
          onChange={handleChange} 
        />
        <p>Fecha de Nacimiento</p>
        <input
          type="date"
          name="birthday"
          value={newBirthday}
          onChange={handleChange}
        />
        <input type="button" value="Submit" onClick={handleSubmit} />
      </div>
    </main>
  );
}
