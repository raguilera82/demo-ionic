# demo-ionic
Proyecto para utilizar como demo paso por paso en las charlas de Cordova. Implementado con AngularJS + Ionic + ngCordova

#Instrucciones para ejecutar la demo

REQUISITOS: tener instalado NodeJS + NPM y preparado el entorno para la plataforma deseada. Por ejemplo, para Android
tener instalado el Android SDK. 

1. Hacer clone del proyecto: git clone https://github.com/raguilera82/demo-ionic.git

2. Hacer checkout de la rama master: git checkout master

3. Situarse en el raiz del proyecto: cd demo-ionic

4. Instalar los paquetes de node definidos en el fichero package.json: npm install

5. Instalar las librerías de javascript definidas en el fichero bower.json: bower install

6. Probar el despliegue de la aplicación en el navegador: grunt serve

7. Añadir la plataforma móvil donde queremos desplegar la aplicación: grunt platform:add:android {ios|firefoxos|wp8}

8. Ejecutar la aplicación

     8.1 Si es un dispositivo físico: grunt run:android
     8.2 Si es un emulador: grunt emulate:android

9. Enjoy!
