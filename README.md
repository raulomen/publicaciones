1. **Descripción General**:
Este proyecto es una aplicación web construida con **Next.js 14**, **React 18**, y **TypeScript**. La aplicación consume datos de **JSONPlaceholder**, mostrando usuarios y publicaciones, con la capacidad de ver detalles de cada usuario y publicación, así como añadir comentarios. La aplicación utiliza **TanStack Query (React Query)** para manejar las peticiones, el caché y la revalidación de datos, así como **Server Components** en Next.js 14 para mejorar el rendimiento y la eficiencia.

2. **Estructura del Proyecto**:
   - Se incluye una representación de la estructura del proyecto para que cualquier persona que trabaje con el código pueda comprender rápidamente cómo está organizado.

3. **Requisitos Previos**:
Antes de ejecutar la aplicación, asegúrate de tener instalados los siguientes programas:

- **Node.js**: Necesitas tener instalado Node.js. Puedes descargarlo desde [aquí](https://nodejs.org/).
- **npm o yarn**: Cualquier gestor de paquetes. Si no tienes uno instalado, puedes usar npm, que viene con Node.js. Si prefieres usar yarn, instálalo siguiendo las instrucciones [aquí](https://yarnpkg.com/getting-started/install).


4. **Instalación**:
Sigue estos pasos para instalar y ejecutar la aplicación en tu entorno local:

1. **Clona el repositorio**:
   
   ```bash
   git clone https://github.com/tu-usuario/tu-repositorio.git
   cd tu-repositorio

5. **Uso**:
Para iniciar la aplicación en modo de desarrollo, ejecuta el siguiente comando:

Si usas npm:

```bash
npm run dev

6. **Explicación de la Estructura de Archivos**:

En esta sección, explicas con más detalle la función de los archivos y carpetas que has incluido en el proyecto.
La estructura del proyecto está organizada de la siguiente manera:

- **/app/layout.tsx**: Define la estructura básica de la aplicación, como el encabezado, la barra de navegación y el pie de página. Este archivo se usa para envolver las páginas.
- **/app/page.tsx**: Página principal de la aplicación. Muestra una vista general con enlaces a las secciones de usuarios y publicaciones.
- **/app/users/page.tsx**: Página que muestra una lista de todos los usuarios.
- **/app/users/[id]/page.tsx**: Página que muestra los detalles de un usuario específico. Se utiliza cuando se navega a `/users/{id}`.
- **/app/posts/page.tsx**: Página que muestra una lista de todas las publicaciones.
- **/app/posts/[id]/page.tsx**: Página que muestra los detalles de una publicación específica. Se utiliza cuando se navega a `/posts/{id}`.
- **/styles**: Contiene los archivos de estilo usando Styled Components. Cada archivo dentro de esta carpeta corresponde a los estilos de una parte específica de la aplicación.

7. **Contribuir**:

Si deseas contribuir a este proyecto, sigue estos pasos:

1. Haz un fork del proyecto.
2. Crea una rama para tu característica o corrección de error: `git checkout -b feature/nueva-caracteristica`
3. Realiza tus cambios y haz commit: `git commit -am 'Agregué una nueva característica'`
4. Envía un pull request explicando tus cambios.

¡Gracias por tu contribución!


8. **Licencia**:
Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

