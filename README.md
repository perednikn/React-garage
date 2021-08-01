# Venta de Garage

Proyecto que simula la plataforma de comercialización de una venta de garage, consultando para su contenido el Firebase asociado

# Dependencias:

- React (V. 17.0.2)
- Firebase (V 8.0.2)
- Bootstrap (V. 5.0.1)

# Levantando el proyecto:

En la raíz del proyecto, abrir una consola e ingresar el siguiente comando:

 ### 'npm start'
 
# Utilización del proyecto:

Al correr el proyecto el usuario se encontrará con el home de la tienda donde verá las fichas de todos los productos disponibles, que se encuentran ordenados según el ID asignado al momento de crear la bd.
En la barra superior cuenta con un navBar que marca la ruta donde está posicionado actualmente el usuario. Así como también le permitirá filtrar por aquellos productos electronicos o analogicos, según prefiera.

En cualquiera de los casos, verá filtrados los elementos con una vista previa que contiene foto, nombre, valor y un botón para conocer más. 
Al clickearlo, el usuario verá una ficha ampliada del producto elegido y la posibilidad de agregar al carrito cuántas unidades desee (dentro de las disponibles) 

Tras agregar el ítem al carrito el usuario podrá seguir comprando o bien dirigirse al carrito.
Una vez en el carrito el usuario verá el detalle de los ítems elegidos, teniendo la posibilidad de eliminar de su carrito los no deseados

Para finalizar, el usuario deberá ingresar su nombre, mail y teléfono de contacto para poder crear la orden y registrarla en el Firebase. 
Al obtener el #ID del registro se le muestra al usuario mediante un alert que le confirma la compra y le anuncia que será redirigido al home.

