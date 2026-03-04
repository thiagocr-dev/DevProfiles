💻 Developer Profiles App

Aplicación web desarrollada en React que permite visualizar y crear perfiles de desarrolladores, mostrando información profesional, stack tecnológico y estadísticas dinámicas.

Proyecto realizado como trabajo integrador para la materia de desarrollo frontend.

---

🚀 Funcionalidades

- 📋 Listado dinámico de desarrolladores
- 👤 Vista individual de perfil ("/profile/:id")
- ➕ Creación de nuevos perfiles mediante formulario
- 📊 Visualización de métricas y stack tecnológico
- 🧠 Manejo de estado global con DeveloperContext
- 🛣 Enrutamiento con React Router DOM
- 📱 Diseño totalmente responsive (320px – 2000px)
- ✅ Validaciones básicas en formulario
- 🆔 Generación dinámica de IDs

---

🛠 Tecnologías utilizadas

- React
- React Router DOM
- Context API
- CSS
- JavaScript (ES6+)
- Vite

---

📂 Estructura del proyecto

src/
 ├── components/
 ├── context/
 ├── data/
 ├── layouts/
 ├── pages/
 ├── App.jsx
 └── global.css
 └── main.jsx

La aplicación está organizada de forma modular siguiendo principios de buenas prácticas (DRY, KISS).

---

📊 Manejo de Estado

Se utiliza Context API para mantener un estado global de perfiles, permitiendo:

- Agregar nuevos desarrolladores
- Visualizarlos automáticamente en Home
- Acceder dinámicamente a cada perfil mediante parámetros de URL

---

🧪 Validaciones implementadas

El formulario de creación de perfil incluye validaciones básicas:

- Nombre obligatorio
- Rol obligatorio
- Al menos una tecnología
- Experiencia no negativa
- Nivel de inglés obligatorio

---

🔐 Autenticación

El proyecto incluye un sistema de login simple implementado en el frontend utilizando estado global (Context API).

⚠️ No cuenta con backend ni base de datos.

Las credenciales están simuladas para fines académicos.

👤 Credenciales de prueba
Usuario: admin
Contraseña: 1234

✅ Funcionalidades del Login
- Validación básica de campos
- Manejo de errores
- Redirección automática tras autenticación
- Protección de rutas 

---

📱 Responsive Design

La aplicación fue desarrollada con enfoque mobile-first y funciona correctamente desde:

- 320px (mobile)
- Tablet
- Desktop
- Pantallas grandes

---

🌐 Deploy

La aplicación se encuentra desplegada en Vercel:

🔗 https://dev-profiles-gamma.vercel.app/

---

📦 Instalación y ejecución local

1. Clonar el repositorio

git clone https://github.com/tu-usuario/tu-repo.git

2. Instalar dependencias

npm install

3. Ejecutar en entorno de desarrollo

npm run dev

---

📚 Aprendizajes

Durante el desarrollo se trabajó en:

- Organización de componentes
- Manejo de estado global
- Enrutamiento dinámico
- Validaciones en formularios
- Buenas prácticas de desarrollo

---

👨‍💻 Autor

Thiago Colombo Russell

---
