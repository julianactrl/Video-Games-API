<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' />
</p>

# Individual Project - Henry Videogames

<div >
  <!-- <img align='left' height="200" src='./cardsGames.png' /> -->
  <img align="right" height="200" src="./landingGame.png" />
</div> 


## Objetivos del Proyecto

- Construir una App utlizando React, Redux, Node y Sequelize.
- Afirmar y conectar los conceptos aprendidos en la carrera.
- Aprender mejores prácticas.
- Aprender y practicar el workflow de GIT.
- Usar y practicar testing.


#### Tecnologías:
- [ X ] React
- [ X ] Redux
- [ X ] Express
- [ X ] Sequelize - Postgres

#### Frontend

Se debe desarrollar una aplicación de React/Redux que contenga las siguientes pantallas/rutas.

__Pagina inicial__: deben armar una landing page con
- [ X ] Alguna imagen de fondo representativa al proyecto
- [ X ] Botón para ingresar al home (`Ruta principal`)

__Ruta principal__: debe contener
- [ X ] Input de búsqueda para encontrar videojuegos por nombre
- [ X ] Área donde se verá el listado de videojuegos. Deberá mostrar su:
  - Imagen
  - Nombre
  - Géneros
- [ X ] Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros
- [ X ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating
- [ X ] Paginado para ir buscando y mostrando los siguientes videojuegos


__Ruta de detalle de videojuego__: debe contener
- [ X ] Los campos mostrados en la ruta principal para cada videojuegos (imagen, nombre, y géneros)
- [ X ] Descripción
- [ X ] Fecha de lanzamiento
- [ X ] Rating
- [ X ] Plataformas

__Ruta de creación de videojuegos__: debe contener
- [ X ] Un formulario __controlado__ con los siguientes campos
  - Nombre
  - Descripción
  - Fecha de lanzamiento
  - Rating
- [ X ] Posibilidad de seleccionar/agregar varios géneros
- [ X ] Posibilidad de seleccionar/agregar varias plataformas
- [ X ] Botón/Opción para crear un nuevo videojuego

#### Base de datos

El modelo de la base de datos deberá tener las siguientes entidades (Aquellas propiedades marcadas con asterísco deben ser obligatorias):

- [ X ] Videojuego con las siguientes propiedades:
  - ID: * No puede ser un ID de un videojuego ya existente en la API rawg
  - Nombre *
  - Descripción *
  - Fecha de lanzamiento
  - Rating
  - Plataformas *
- [ X ] Genero con las siguientes propiedades:
  - ID
  - Nombre

La relación entre ambas entidades debe ser de muchos a muchos ya que un videojuego puede pertenecer a varios géneros en simultaneo y, a su vez, un género puede contener múltiples videojuegos distintos. Un ejemplo sería el juego `Counter Strike` pertenece a los géneros Shooter y Action al mismo tiempo. Pero a su vez existen otros videojuegos considerados como Shooter o como Action.


#### Backend

Se debe desarrollar un servidor en Node/Express con las siguientes rutas:

__IMPORTANTE__: No está permitido utilizar los filtrados, ordenamientos y paginados brindados por la API externa, todas estas funcionalidades tienen que implementarlas ustedes.

- [ X ] __GET /videogames__:
  - Obtener un listado de los primeras 15 videojuegos
  - Debe devolver solo los datos necesarios para la ruta principal
- [ X ] __GET /videogames?name="..."__:
  - Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
  - Si no existe ningún videojuego mostrar un mensaje adecuado
- [ X ] __GET /videogame/{idVideogame}__:
  - Obtener el detalle de un videojuego en particular
  - Debe traer solo los datos pedidos en la ruta de detalle de videojuego
  - Incluir los géneros asociados
- [ X ] __GET /genres__:
  - Obtener todos los tipos de géneros de videojuegos posibles
  - En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
- [ X ] __POST /videogame__:
  - Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
  - Crea un videojuego en la base de datos


#### Testing
- [ ] Al menos tener un componente del frontend con sus tests respectivos
- [ ] Al menos tener una ruta del backend con sus tests respectivos
- [ ] Al menos tener un modelo de la base de datos con sus tests respectivos

<div >
  <img align='center' height="100%" width='100%' src='./cardsGames.png' />
  <!-- <img align="right" height="200" src="./landingGame.png" /> -->
</div> 
