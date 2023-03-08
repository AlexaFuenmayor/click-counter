import './App.css';
import Button from './components/Button';
import Counter from './components/Counter';
import logoAlexa  from'./images/logo-alexa.png';
import { useState } from 'react';

// Componente funcional:
function App() {

  // HOOKS: Funciones especiales que nos permiten usar caracteristicas de REACT en los
  // componentes funcionales... Antes de tener los hooks no se podia trabajar con estados en los componentes funcionales
  // useState: hook que permite agregar un estado a un componente funcional
  // pasos para usarlo:

  // 1. importarlo desde react,
  // 2. dentro del componente funcional declarar una constante (que será un arreglo con dos elementos:
             //a.VALOR que queremos usar como el ESTADO,
             //b.FUNCIÓN que nos permitirá actualizar el VALOR.)
  //3. A los valores entre [] se le asigna el valor retornado por useState.
  //4. Entre los parentesis pasar el valor inicial de nuestro estado
  //---el valor 0 será el valor inicial del contador de clicks----
  //5. Luego con la función setClickNumns podré actualizar le número de clicks
         //SET:asignar
  const [clickNums, setClickNums] = useState(0);

  //Tomar el número de clicks y sumarle 1, es decir Cuando se clickee aumentar en 1 el contador y asignar el nuevo valor al estado de mi componente.. Lo cuál se puede hacer con los dos elementos que acabamos de crear en el []:
  const manejarClick = () => {
    
  //Llamamos a la función y le pasamos como argumento el nuevo valor que le vamos a asignar al número de clicks.. Actualizando así el número.
  //La llamada a la función setClickNums actualizará el estado. S eactualizará lo que se deba actualizar debido a ese cambio y se reenderiza
   setClickNums(clickNums + 1);

//¿Cómo mostras el valor del click de forma dinámica?
//pasarle al clickNums[el que está como VALOR DE useState] el numero de clicks (COMO PROPS)
    };

  const resetCounter = () => {
    setClickNums(0)
  };
  return (
    <div className="App">
      <div className='alexa-logo-contenedor'>
        <img className='alexa-logo'
        src={logoAlexa}
        alt="logo de alexa"/>
      </div>
      <div className='counter-container'>
        <Counter
        //PASAR VALOR DE FORMA DINÁMICA: Insertamos código JS{}, pasarle la variable definida arriba: el estado de nuestro componente. Usar ese estado actual y lo pasamos como prop, usandolo directamente en el contador para mostrar su valor
        clicksNums={clickNums}/>
        <Button 
        text='Click'
        isClickButton={true}
        manejarClick={manejarClick}/>
        <Button 
        text='Reset'
        isClickButton={false}
        manejarClick={resetCounter}/>
      </div>

    </div>
  );
}

export default App;
