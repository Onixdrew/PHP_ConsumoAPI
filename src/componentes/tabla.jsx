import { useState } from 'react'



const Tabla = ({ datos,agregarDatos, mensaje} ) => {
    
    const [nombre, setNombre] = useState('');
    const [precio, setPrecio] = useState('');
    const [categoria, setCategoria] = useState('');

    const enviarDatos = (event) => {
        event.preventDefault();
        // Envía los datos al componente padre
        agregarDatos({ nombre, precio, categoria });
        // Reinicia los campos del formulario
        setNombre('');
        setPrecio('');
        setCategoria('');
      };

    return (
    <>
      <div className="relative overflow-x-auto w-[80%] mt-20 mx-auto">
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="relative mt-[3vh] ml-[10vw]  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800"
        >
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-100 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Agregar
          </span>
        </button>
        {mensaje && <p className='mb-3 mt-3'>{mensaje}</p>}

        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-3 text-base hover:text-white py-3">
                Código
              </th>
              <th scope="col" className="px-3 text-base hover:text-white py-3">
                Nombre
              </th>
              <th scope="col" className="px-3 text-base hover:text-white py-3">
                Precio
              </th>
              <th scope="col" className="px-3 text-base hover:text-white py-3">
                Categoria
              </th>
              <th scope="col" className="px-3 text-base hover:text-white py-3">
                Acciones
              </th>
            </tr>
          </thead>
          <tbody>
            {datos?.map((producto) => (
              <tr
                key={producto.codigo}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="px-6 py-4 fs-5 text-dark">{producto.codigo}</td>
                <td className="px-6 py-4 fs-5 text-dark">{producto.nombre}</td>
                <td className="px-6 py-4 fs-5 text-dark">{producto.precio}</td>
                <td className="px-6 py-4 fs-5 text-dark">{producto.categoria}</td>

                <td className="flex justify-evenly mt-4">
                  <button
                    id="actualizar"
                  
                    className="bg-white p-2 rounded-lg  "
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                  >
                    <i className="fa-solid fa-pen-to-square text-black  hover:text-blue-500"></i>
                  </button>

                  <button
                    id="eliminar"
                   
                    className="bg-white p-2 rounded-lg"
                  >
                    <i className="fa-solid fa-trash text-black   hover:text-red-500"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

            {/* Modal form agregar */}
      <div
        className="modal fade bg-primary-subtle"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog ">
          <div className="modal-content bg-success text-white fw-medium bg-gradient">
            <div className="modal-header ">
              <h1 className="modal-title fs-5 " id="exampleModalLabel">
                Agregar Productos
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="container mt-3">
                <form onSubmit={enviarDatos}>
                  <div className="mb-3 mt-3 d-flex flex-column gap-2">
                    <label htmlFor="codigo"></label>
                    <input
                      type="number"
                      className="form-control"
                      id="codigo"
                      name="codigo"
                      hidden
                    />
                  </div>
                  <div className="mb-3 mt-3 d-flex flex-column gap-2">
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Ingresa el nombre del producto"
                      name="nombre"
                    />
                  </div>
                  <div className="mb-3 mt-3 d-flex flex-column gap-2">
                    <label htmlFor="precio">Precio:</label>
                    <input
                      type="number"
                      className="form-control desc"
                      id="precio"
                      value={precio}
                      onChange={(e) => setPrecio(e.target.value)}
                      name="precio"
                      placeholder="Ingresa el precio"
                    />
                  </div>
                  <div className="mb-3 mt-3 d-flex flex-column gap-2">
                    <label htmlFor="categoria">Categoria:</label>
                    <input
                      type="text"
                      className="form-control desc"
                      id="categoria"
                      value={categoria} 
                      onChange={(e) => setCategoria(e.target.value)}
                      name="categoria"
                      placeholder="Ingresa la categoria"
                    />
                  </div>
                  <div className="modal-footer">
                    <button
                      id="guardar"
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-primary"
                      
                    >
                      Guardar
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabla;
