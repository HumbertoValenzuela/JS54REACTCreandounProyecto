import { Fragment, useState } from 'react';
import Header from './componente/Header';
import Formulario from './componente/Formulario';
import Mensaje from './componente/Mensaje';
import Resultado from './componente/Resultado';
import Spinner from './componente/Spinner';



function App() {  
  // En react fluyen del componente padre a hijo  
  // Definir el state. Retorna dos valores. const[Array Destructuring]  
  // Cantidad una variable que contiene el valor
  // guardarCantidad  es una función que va ser utilizada para estar 
  // interactuando y guardando lo que es el state que estamos creando
  const [cantidad, guardarCantidad] = useState(0);//0 valor inicial
  const [plazo, guardarPlazo] = useState('');
  const [total, guardarTotal] = useState(0);
  const [cargando, guardarCargando] = useState(false);

  let componente;

  if(cargando) {
    componente = <Spinner />
  } else if(total === 0) {
      componente = <Mensaje />
    } else {
        componente = <Resultado 
                  total={total}
                  plazo={plazo}
                  cantidad={cantidad}
                  />
      }



  // Para utilizar componente Header
  return (
     <Fragment>   
      <Header 
        titulo="Cotizador de Prestamo"    
      />
        <div className="container">
          <Formulario 
            cantidad={cantidad}
            guardarCantidad={guardarCantidad}
            plazo={plazo}
            guardarPlazo={guardarPlazo}
            total={total}
            guardarTotal={guardarTotal}
            guardarCargando={guardarCargando}
          />  
          <div className="mensajes">
              {componente}
          </div> 
        </div>
        </Fragment>  
           
    
  );
}

export default App;

// 4. Comenzando nuestro primer proyecto