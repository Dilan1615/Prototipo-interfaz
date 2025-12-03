# 📚 Biblioteca Digital 

Prototipo de interfaz disenado para una experiencia sencilla de lectura y administracion de libros anime.

## 🎯 Descripcion del Proyecto
Este repositorio contiene un prototipo UI creado primero en Stitch y luego implementado en HTML y CSS. El flujo se centra en la gestion basica de usuarios y libros: registro, seleccion, favoritos, y configuracion del perfil.

Flujo Principal de Navegacion
```
Registro
↓
Pantalla principal con libros
↓
Seleccion de libro
↓
Seleccion de capitulo
↓
Agregar a favoritos
↓
Lista de libros
↓
Agregar libro
↓
Editar perfil

```

## Pantallas del Prototipo

1. 📝 **Registro**  
Pantalla para crear una nueva cuenta con un formulario simple. Es el punto inicial del usuario.  
<img src="register.png" alt="Registro" width="300">

2. 📚 **Pantalla principal con libros**  
Vista general donde se muestran todos los libros disponibles. Desde aquí se puede acceder a detalles.  
<img src="index.png" alt="Vista" width="300">

3. 📖 **Selección de un libro**  
Muestra la información del libro elegido: portada, descripción, autor y botones de acción.  
<img src="Libro.png" alt="Libro" width="300">

4. 📄 **Selección de capítulo**  
Lista de capítulos disponibles del libro seleccionado. Permite ir al contenido.  
<img src="VistaLibro.png" alt="VistaLibro" width="300">

5. ⭐ **Agregar a favoritos**  
Acción para guardar el libro en la lista personal del usuario.  
<img src="favortios.png" alt="Favoritos" width="300">

6. 📘 **Lista de libros**  
Muestra los libros guardados o favoritos del usuario. Permite organizarlos y acceder rápidamente.  
<img src="Lista.png" alt="Lista" width="300">

7. ➕ **Agregar libro**  
Formulario para agregar nuevos libros a la plataforma. Incluye campos básicos como título, autor y categoría.  
<img src="AgregarLibro.png" alt="AgregarLibro" width="300">

8. 👤 **Editar perfil**  
Pantalla donde el usuario puede modificar su información personal, datos de cuenta y configuraciones básicas.  
<img src="Perfil.png" alt="Perfil" width="300">


## 🛠️ Tecnologías Utilizadas

- **Diseño:** Stitch (prototipado)
- **Frontend:** HTML5, CSS3
- **Metodología:** Mobile-first, diseño responsivo

## 📦 Estructura del Proyecto

```
/
├── docs/
│   ├── AgregarLibro.png
│   ├── favoritos.png
│   ├── index.png
│   ├── Libro.png
│   ├── Lista.png
│   ├── Perfil.png
│   ├── register.png
│   ├── VistaLibro.png
│   └── ui_prototipo_stitch.md
│
├── ui-stitch/
│   ├── css/
│   ├── js/
│   ├── AgregarLibro.html
│   ├── favoritos.html
│   ├── index.html
│   ├── libro.html
│   ├── lista.html
│   ├── perfil.html
│   ├── register.html
│   └── VistaLibro.html
│
└── README.md
```

