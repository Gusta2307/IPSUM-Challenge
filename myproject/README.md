
# IPSUM-Challenge Backend

Este proyecto implementa la lógica de backend utilizando Django, un potente framework de desarrollo web en Python. El objetivo principal es gestionar la información del usuario mediante la clase `User`, que almacena varios atributos relacionados con las preferencias y datos básicos del usuario.

## Funcionalidad Principal

La clase `User` maneja y almacena la siguiente información:

- **Username**: Nombre de usuario único.
- **Email**: Correo electrónico asociado al usuario.
- **Password**: Contraseña para autenticación.
- **Favorite Food**: Comida favorita del usuario.
- **Favorite Artist**: Artista favorito del usuario.
- **Favorite Color**: Color favorito del usuario.
- **Favorite Place**: Lugar favorito del usuario.

## Tecnologías Utilizadas

- **Django**: Framework web de alto nivel para desarrollar el backend.
- **Python**: Lenguaje de programación utilizado para desarrollar el proyecto.

## Instalación y Configuración

1. **Clonar el repositorio:**

   \`\`\`bash
   git clone https://github.com/tu-usuario/IPSUM-Challenge.git
   cd IPSUM-Challenge
   \`\`\`

2. **Crear y activar un entorno virtual:**

   \`\`\`bash
   python3 -m venv env
   source env/bin/activate  # En Windows usa `env\Scripts\activate`
   \`\`\`

3. **Instalar dependencias:**

   \`\`\`bash
   pip install -r requirements.txt
   \`\`\`

4. **Realizar las migraciones de la base de datos:**

   \`\`\`bash
   python manage.py migrate
   \`\`\`

5. **Iniciar el servidor de desarrollo:**

   \`\`\`bash
   python manage.py runserver
   \`\`\`

## Uso

Una vez que el servidor esté en funcionamiento, puedes interactuar con la API para crear, leer, actualizar y eliminar usuarios y sus preferencias.
