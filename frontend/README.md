
# IPSUM-Challenge Frontend

Este proyecto es el encargado del frontend de la aplicación, desarrollado en **ReactJS**. El frontend se encarga de manejar la interfaz de usuario y la interacción con el backend a través de API. La aplicación está estructurada utilizando un enrutado para las diferentes vistas disponibles.

## Vistas Principales

El frontend incluye las siguientes vistas:

- **Login**: Vista para que los usuarios ingresen sus credenciales y accedan a la aplicación.
- **Register**: Vista para que los nuevos usuarios se registren en la aplicación.
- **Profile**: Vista donde los usuarios pueden ver su información personal.
- **Home**: Página principal que da la bienvenida al usuario y proporciona acceso a las demás funcionalidades.

## Funcionalidad

### Autenticación

El proceso de autenticación incluye las siguientes características:

1. **Registro de Usuario**:
   - Los nuevos usuarios pueden registrarse proporcionando la información necesaria.
   - Una vez completado el formulario de registro, se realiza una solicitud **POST** a la API del backend para almacenar los datos del usuario.
   
2. **Inicio de Sesión**:
   - Los usuarios registrados pueden iniciar sesión proporcionando su nombre de usuario y contraseña.
   - Una solicitud **POST** se envía al backend para autenticar las credenciales del usuario.

3. **Manejo de Sesión**:
   - Después de la autenticación, se almacena un token de sesión que se utiliza para autorizar las solicitudes a las demás vistas protegidas.

### Interacción con el Backend

Cada vista interactúa con el backend utilizando peticiones API:

- **POST**: Se utiliza para enviar datos (como durante el registro y el inicio de sesión).
- **GET**: Se utiliza para recuperar datos (como para cargar el perfil del usuario).
- **PUT/PATCH**: Se utilizan para actualizar datos (como para actualizar el perfil del usuario).
- **DELETE**: Se utiliza para eliminar recursos (aunque esta funcionalidad depende de la implementación específica del backend).

## Tecnologías Utilizadas

- **ReactJS**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **React Router**: Módulo para manejar el enrutado de la aplicación.
- **Axios**: Cliente HTTP utilizado para realizar peticiones a la API del backend.
- **CSS/SCSS**: Utilizado para el estilo y diseño de la interfaz.

## Instalación y Configuración

1. **Clonar el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/IPSUM-Challenge-Frontend.git
   cd IPSUM-Challenge-Frontend
   ```

2. **Instalar dependencias:**

   ```bash
   npm install
   ```

3. **Configurar las variables de entorno:**

   Crea un archivo `.env` en la raíz del proyecto y añade las siguientes configuraciones:
   
   ```env
   REACT_APP_API_URL=http://localhost:8000/api  # URL del backend
   ```

4. **Iniciar la aplicación:**

   ```bash
   npm run start
   ```

