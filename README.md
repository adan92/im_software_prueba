# I'm software
Repositorio que almaceana código de la prueba técnica de I'm software.

## Requisitos
- Java 17
- Spring boot 3
- React 19.0.0
- Bootstrap 5

## Instrucciones de instalación

1. **Clonar el repositorio:**

   ```bash
   git clone <URL del repositorio>
   cd <directorio del proyecto>
    ```
2. Accede a la carpeta:
   ```bash
   cd imsoftware\
   ```
3. Ejecuta el siguiente comando para iniciar el backend:
   ```bash
   mvn spring-boot:run -Dspring-boot.run.arguments="-Dserver.port=9090 -Dspring.profiles.active=dev"
   ```
4. En otra terminal se accede a la carpeta de frontend:
   ```bash
   cd frontend\
   ```
5. Se instalan las dependencias del proyecto
   ```bash
   npm install
   ```
6. Se ejecuta el siguiente comando para poder ejecutar el frontend
   ```bash
   npm run dev
   ```
7. Se abre el navegador y se pega la siguiente dirección:
   ```html
   http://localhost:5173/
   ```