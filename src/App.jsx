import { useEffect, useState } from 'react'
import Tabla from './componentes/tabla'
import 'tailwindcss/tailwind.css';
import axios from 'axios';



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
        const response = await fetch('http://localhost/PHP_PROYECT2/API/api.php');
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
  const agregarDatos = async (datosForm) => {
  
    try {

      // ///////////  Fectch

      // const response = await fetch('http://localhost/PHP_PROYECT2/API/api.php', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(datosForm),
        
      // });
      
   

      // //////////  Axios

      await axios.post("http://localhost/PHP_PROYECT2/API/api.php",  JSON.stringify(datosForm) )
        
      setMensaje('Producto agregado exitosamente.');

    } catch (error) {
      console.error('Error al agregar el dato:', error);
      setMensaje('Hubo un error al agregar el dato. Por favor, inténtalo de nuevo más tarde.');
    }
  };


  // Actualizar datos

  const actualizarDatos = async (Productos) => {
  
    try {

      // ///////////  Fectch
      const response = await fetch('http://localhost/PHP_PROYECT2/API/api.php', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(Productos),
        
      });
      
  

      // //////////  Axios

  //     await axios.put("http://localhost/PHP_PROYECT2/API/api.php",  JSON.stringify(Productos),{
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     });
        
      setMensaje('Producto actualizado exitosamente.');

  } catch (error) {
    console.error('Error al agregar el dato:', error);
    setMensaje('Hubo un error al actualizar el dato. Por favor, inténtalo de nuevo más tarde.');
  }
  };


  // ////////// eliminar

  const eliminarDatos = async (id) => {
  
    try {

      // ///////////  Fetch

      // const response = await fetch('http://localhost/PHP_PROYECT2/API/api.php', {
      //   method: 'DELETE',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(id),
        
      // });
      
   

      // //////////  Axios
      
      await axios.delete("http://localhost/PHP_PROYECT2/API/api.php", {
        data:{"codigo":id}, // Incluye el id en el objeto data
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
     
      setMensaje('Producto eliminado exitosamente.');
      location.reload();

    } catch (error) {
      console.error('Error al agregar el dato:', error);
      setMensaje('Hubo un error al eliminar el dato. Por favor, inténtalo de nuevo más tarde.');
    }
  };


  return (
    <>
      <Tabla datos={data} agregarDatos={agregarDatos} actualizarDatos={actualizarDatos} eliminarDatos={eliminarDatos} mensaje={mensaje}></Tabla>
    </>
  )
}

export default App
