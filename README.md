# Gestión de Pozos Petroleros

Aplicación web para la gestión de pozos petroleros, desarrollada con **Angular**, **Node.js (TypeScript)** y **PostgreSQL**. Permite crear, listar y actualizar pozos, así como visualizar estadísticas operativas.

---

## Funcionalidades

- Listado de pozos con datos actualizados desde la API.
- Creación de nuevos pozos (nombre, ubicación, producción diaria, estado inicial).
- Actualización del estado operativo de un pozo (activo / inactivo).
- Visualización de estadísticas:
  - Porcentaje de pozos activos e inactivos.
  - Producción total de los pozos activos.

---

## Tecnologías utilizadas

- **Frontend:** Angular  
- **Backend:** Node.js + Express + TypeScript  
- **Base de datos:** PostgreSQL    

---

## Estructura del proyecto

```
├── backend/ # Servidor Express en TypeScript
│ ├── src/
│ │ ├── index.ts # Punto de entrada del servidor
│ │ ├── routes/ # Endpoints REST
│ │ ├── controllers/ # Lógica de cada endpoint
│ │ ├── schemas/ # Validación de datos (Zod)
│ │ └── prisma/ # Configuración de la base de datos y migraciones
│ └── package.json
│
├── frontend/ # Aplicación Angular
│ ├── src/
│ │ ├── app/
│ │ │ ├── components/ # Componentes de gestión y tabla de pozos
│ │ │ ├── services/ # Servicios para comunicación con backend
│ │ │ └── directives/ # Directiva para resaltado de estado
│ │ └── ...
│ └── package.json
│
└── docker-compose.yml # Configuración opcional para levantar todos los servicios
```

---

## Instalación y ejecución

### Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/gestion-pozos.git
cd gestion-pozos
Backend
bash
npm install
npx prisma migrate dev --name init
npm run dev
```
Servidor disponible en: http://localhost:4000

Frontend
```
cd Backend
npm install
ng serve
Aplicación disponible en: http://localhost:4200
```

Endpoints Backend
GET /pozos → Lista todos los pozos registrados.

POST /pozos → Crea un nuevo pozo.

PATCH /pozos/:id → Actualiza el estado de un pozo.

Ejemplo POST /pozos
```
{
  "nombre": "Pozo 1",
  "ubicacion": "Bloque 7",
  "produccionDiaria": 500,
  "estado": "activo"
}
```
## Base de datos
Se inicializa con 5 registros por defecto
```
id  |  nombre  |  ubicacion  |  produccion_diaria  |  estado
```
### Este código no es funcional
se presentaron algunos inconvenientes durante el proceso, principalmente:

El frontend, al ser desarrollado con Angular, se lo trabajó con poca experiencia y unicamente accediendo a documentación. No fue posible unificar con el backend
Al no lograr unificar, el pipe de cambio de unidades no se realizó.

Sin embargo, a lo largo del código se encuentran comentarios al respecto.


