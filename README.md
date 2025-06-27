# Valdo App

Este proyecto es un ejemplo simple de una aplicación estilo "Instagram" en React Native utilizando Expo. La paleta de colores proviene de un estilo RPG pixel:

- `#5a3938`
- `#847b6d`
- `#a3ab98`
- `#d2d5af`
- `#dfa49b`

Para evitar incluir archivos binarios en el repositorio, las imagenes de ejemplo usadas en `App.js` se cargan desde URLs remotas. Puedes reemplazarlas por tus propias rutas o imagenes en la nube.
## Instalación

1. Asegúrate de tener **Node.js** instalado.
2. Instala `expo-cli` de forma global si tienes acceso a internet:
   ```bash
   npm install -g expo-cli
   ```
3. Clona este repositorio y dentro de la carpeta ejecuta:
   ```bash
   npm install
   ```
4. Inicia el proyecto con:
   ```bash
   npm start
   ```
   Esto abrirá el servidor de Expo para poder usar **Expo Go** en tu dispositivo móvil.

## Conexión a una base de datos en la nube

A continuación se listan pasos generales para conectar la aplicación a un servicio como **Firebase**:

1. Crea un proyecto en [Firebase](https://firebase.google.com/).
2. Dentro de la consola de Firebase, habilita **Firestore** o **Realtime Database** según prefieras.
3. En la sección "Project settings" copia la configuración de tu app web.
4. Instala las dependencias necesarias (requiere acceso a internet):
   ```bash
   npm install firebase
   ```
5. Crea un archivo `firebase.js` en la raíz del proyecto con el siguiente código:
   ```javascript
   import { initializeApp } from 'firebase/app';
   import { getFirestore } from 'firebase/firestore';

   const firebaseConfig = {
     apiKey: 'TU_API_KEY',
     authDomain: 'TU_AUTH_DOMAIN',
     projectId: 'TU_PROJECT_ID',
     storageBucket: 'TU_STORAGE_BUCKET',
     messagingSenderId: 'TU_SENDER_ID',
     appId: 'TU_APP_ID'
   };

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   ```
6. Ya puedes importar `db` en tu código para leer y escribir datos desde la nube.

Estos pasos son una guía básica; consulta la documentación oficial de Firebase para obtener más detalles.
