import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
} from '../types/index';

import clienteAxios from '../config/axios';
import Swal from 'sweetalert2';

// Crear nuevos productos
export function crearNuevoProductoAction(producto) {
    return async (dispatch) => {
        dispatch(agregarProducto());

        try {
            // Insertar en la API
            await clienteAxios.post('/productos', producto);

            // Si todo sale bien, actualizar el state
            dispatch(agregarProductoExito(producto));

            // Alerta
            Swal.fire(
                'Éxito',
                'El producto ha sido añadido correctamente',
                'success'
            );
        } catch (error) {
            console.log(error);

            // Si hay un error, cambiar el state
            dispatch(agregarProductoError(true));

            // Alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Hubo un error',
                text: 'Ooops, algo salió mal, inténtelo de nuevo',
            });
        }
    };
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
});

// Si el producto se guarda en la base de datos
const agregarProductoExito = (producto) => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto,
});

// Si hubo un error
const agregarProductoError = (estado) => ({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado,
});
