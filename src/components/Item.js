
// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

import { useState, useEffect } from "react"

export default function Item({nombre, descripcion, stock, total}) {
  
  const [contadorStock,setContadorStock]=useState(stock);
  const [textoBoton, setTextoBoton] = useState ("comprar");
  const [botonDisabled, setBotonDisabled]=useState(false);
  const [cursor,setCursor]= useState("pointer");
  
  useEffect(()=>{
    if (contadorStock===0) {
      setTextoBoton("Sin stock")
      setBotonDisabled(true)
      setCursor("auto")
    }
  },[contadorStock])

  const manejadorStock = ()=>{
    if (contadorStock>0) {
      setContadorStock(prevContador=> prevContador-1)
      total()
    }
  }
  

  return (
    <div className='producto'>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <h5>Stock: <span>{contadorStock}</span></h5>
      <button onClick={manejadorStock} disabled={botonDisabled} style={{cursor: cursor}} >{textoBoton}</button>
    </div>
  )
}
