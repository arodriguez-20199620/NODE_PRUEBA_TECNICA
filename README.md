# API de Productos

Esta API permite crear, listar y eliminar productos usando Express.js y MongoDB con Mongoose. Cada producto tiene nombre, descripción, precio, categoría y estado.

## Base URL

```
http://localhost:3000/api/products
```

## Modelo de Producto

```json
{
  "name": "Nombre del producto",
  "description": "Descripción opcional",
  "price": 100.0,
  "category": "Categoría opcional",
  "status": true
}
```

- **name**: *String*, obligatorio.  
- **description**: *String*, opcional.  
- **price**: *Number*, obligatorio, mayor o igual a 0.  
- **category**: *String*, opcional.  
- **status**: *Boolean*, opcional, por defecto `true`.  

---

## Endpoints

### 1. Crear producto

**POST /**

- **Descripción**: Crea un nuevo producto.  
- **Validaciones**:  
  - `name` es obligatorio.  
  - `price` es obligatorio y debe ser ≥ 0.  

**Request Body**:

```json
{
  "name": "Laptop",
  "description": "Laptop Gamer",
  "price": 1500,
  "category": "Electrónica"
}
```

**Response (201)**:

```json
{
  "_id": "64fa0e7e8b8c123456789012",
  "name": "Laptop",
  "description": "Laptop Gamer",
  "price": 1500,
  "category": "Electrónica",
  "status": true,
  "createdAt": "2025-09-25T20:00:00.000Z",
  "updatedAt": "2025-09-25T20:00:00.000Z"
}
```

---

### 2. Obtener productos

**GET /**

- **Descripción**: Obtiene todos los productos activos (`status: true`).  
- **Response (200)**:

```json
[
  {
    "_id": "64fa0e7e8b8c123456789012",
    "name": "Laptop",
    "description": "Laptop Gamer",
    "price": 1500,
    "category": "Electrónica",
    "status": true,
    "createdAt": "2025-09-25T20:00:00.000Z",
    "updatedAt": "2025-09-25T20:00:00.000Z"
  }
]
```

---

### 3. Eliminar producto

**DELETE /:id**

- **Descripción**: Elimina un producto por su ID.  
- **Validaciones**:  
  - `id` debe existir en la base de datos.  

**Ejemplo**:

```
DELETE /64fa0e7e8b8c123456789012
```

**Response (200)**:

```json
{
  "message": "Producto eliminado correctamente"
}
```

---

## Validaciones y Middleware

- Todas las rutas de creación y eliminación usan **Express Validator** para validar datos.  
- El middleware `validate` devuelve un error si algún campo es inválido.

