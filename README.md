# Trabajo Final Integrador (Recuperatorio)- Desarrollo en Angular

## Descripción

Este proyecto fue desarrollado como Trabajo Final Integrador del curso de Angular. (Recuperatorio)

La aplicación consiste en un sistema de gestión de usuarios y productos utilizando Angular Standalone Components, Routing, Lazy Loading y Servicios.

## Funcionalidades

### Inicio

- Pantalla de bienvenida.
- Sidebar permanente para la navegación.

### Usuarios

- Listado de usuarios.
- Ver detalle de un usuario.
- Crear un usuario.
- Eliminar usuarios.
- Cambiar estado Activo/Inactivo.

### Productos

- Listado de productos.
- Ver detalle de un producto.
- Eliminar productos.

## Tecnologías utilizadas

- Angular 21
- TypeScript
- HTML
- CSS
- Angular Router
- Lazy Loading
- Servicios (Dependency Injection)
- Formularios Reactivos

## Estructura del proyecto

```
src/app
│
├── layout
│   └── sidebar
│
├── pages
│   └── inicio
│
├── usuarios
│   ├── lista
│   ├── detalle
│   ├── crear
│   └── usuarios.routes.ts
│
├── productos
│   ├── lista
│   ├── detalle
│   └── productos.routes.ts
│
├── services
│   ├── usuarios.ts
│   └── productos.ts
│
└── app.routes.ts
```

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/PaolaGiannattasio/tp-final-angular
```

Ingresar al proyecto:

```bash
cd tp-final-angular
```

Instalar dependencias:

```bash
npm install
```

Ejecutar la aplicación:

```bash
ng serve
```

Abrir en el navegador:

```
http://localhost:4200
```

## Compilar el proyecto

```bash
ng build
```

El proyecto compilado se genera en:

```
dist/tp-final-angular
```

## Funcionalidades implementadas

- Routing principal.
- Lazy Loading.
- Sidebar permanente.
- Router Outlet.
- RouterLink.
- Servicios.
- Formularios Reactivos.
- Validaciones.
- Navegación entre pantallas.
- Componentes Standalone.

## Autor

Paola Giannattasio
Curso: Desarrollo en Angular
Trabajo Final Integrador (Recuperatorio)

## Bibliografía

- https://angular.dev
- https://angular.dev/guide/routing
- https://angular.dev/guide/forms/reactive-forms
- https://angular.dev/guide/directives