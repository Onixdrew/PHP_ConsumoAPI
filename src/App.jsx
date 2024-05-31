import { useEffect, useState } from 'react'
import Tabla from './componentes/tabla'
import 'tailwindcss/tailwind.css';



function App() {
  // traer datos
  const [data, setData] = useState(null);

  // Agregar
  const [mensaje, setMensaje] = useState('');


// ///////////////////////////// funciones////////////////


  // Traigo todos los datos
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost/PHP_PROYECT2(API)/API/api.php');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  // Agregar datos
  const agregarDatos = async (producto) => {
    producto.preventDefault();
    

    try {
      const response = await fetch('http://localhost/PHP_PROYECT2(API)/API/api.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(producto),
      });

      if (!response.ok) {
        throw new Error('Hubo un problema al agregar el dato.');
      }

      setMensaje('Dato agregado exitosamente.');
    } catch (error) {
      console.error('Error al agregar el dato:', error);
      setMensaje('Hubo un error al agregar el dato. Por favor, inténtalo de nuevo más tarde.');
    }
  };



  return (
    <>
      <Tabla datos={data} agregarDatos={agregarDatos} mensaje={mensaje}></Tabla>
    </>
  )
}

export default App
