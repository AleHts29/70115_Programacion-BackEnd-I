## Arquitectura del proyecto
```text
my-express-app/
│
├── src/
│   ├── routes/
│   │   └── products.router.js
│   ├── services/
│   │   └── ProductManager.js
│   └── app.js
│
└── data/
    └── productos.json
```


## Para probar las rutas, puedes usar Postman:

- GET /api/products: Listar todos los productos.
- GET /api/products?limit=2: Listar los productos limitados por el parámetro limit.
- GET /api/products/:pid: Obtener un producto por su ID.
- POST /api/products: Crear un nuevo producto.
- PUT /api/products/:pid: Actualizar un producto por su ID.
- DELETE /api/products/:pid: Eliminar un producto por su ID.


```json
[
    {
        "title": "Camiseta Deportiva",
        "description": "Camiseta de manga corta hecha con material transpirable.",
        "code": "CAMIS01",
        "price": 29.99,
        "stock": 150,
        "category": "Ropa Deportiva",
        "thumbnails": [
            "https://example.com/images/camiseta1.jpg",
            "https://example.com/images/camiseta2.jpg"
        ]
    },
    {
        "title": "Zapatillas de Running",
        "description": "Zapatillas ligeras y cómodas, perfectas para correr largas distancias.",
        "code": "ZAPA01",
        "price": 79.99,
        "stock": 75,
        "category": "Calzado Deportivo",
        "thumbnails": [
            "https://example.com/images/zapatillas1.jpg",
            "https://example.com/images/zapatillas2.jpg"
        ]
    },
    {
        "title": "Botella de Agua Reutilizable",
        "description": "Botella de agua de acero inoxidable, capacidad de 750 ml.",
        "code": "BOTELLA01",
        "price": 19.99,
        "stock": 200,
        "category": "Accesorios Deportivos",
        "thumbnails": [
            "https://example.com/images/botella1.jpg"
        ]
    }
]

```