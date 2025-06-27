Este es el frontend de la aplicación Tecnimatica, desarrollado con Angular. Permite a los usuarios registrarse, iniciar sesión y visualizar funcionalidades relacionadas con la gestión de usuarios. Se conecta a una API REST construida con .NET.

Tecnologias utilizadas: 

Angular 17+

HTML5 + CSS3

TypeScript

Bootstrap (opcional)

Comunicación con API REST vía HttpClient

Requisitos previos:
Antes de ejecutar este proyecto, asegúrate de tener instalado:

Node.js (v16 o superior)

Angular CLI (npm install -g @angular/cli)
Instalación
Clona este repositorio y navega a la carpeta del proyecto:

bash
Copiar
Editar
git clone https://github.com/ValentinaM07/Tecnimatica-Fronted.git
cd Tecnimatica-Fronted/frontend-api
Instala las dependencias del proyecto:

bash
Copiar
Editar
npm install

Ejecución del proyecto
Para levantar el proyecto en modo desarrollo, ejecuta:

bash
Copiar
Editar
ng serve
Abre tu navegador en: http://localhost:4200

🔗 Conexión con el Backend
Asegúrate de que la API .NET (backend) esté corriendo en el puerto correspondiente (por ejemplo: https://localhost:7256 o http://localhost:5155) y que CORS esté habilitado.

Puedes cambiar la URL base de la API en el archivo usuario.service.ts.

Registro de usuario

Inicio de sesión (login)

Validación de formularios

Navegación entre componentes


En caso de conflictos de puertos, puedes cambiar el puerto por defecto al iniciar Angular (ng serve --port 4300)

Asegúrate de que el backend y frontend tengan los mismos permisos de origen cruzado (CORS)

