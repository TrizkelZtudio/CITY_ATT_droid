# PROTOTiPO - Atencion Ciudadana (APP)

App prototipo de muestra/experimentación

(Código Base V4 compatible con [SERVER V3.5.x](https://github.com/TrizkelZtudio/Server_Tizayocan/releases/tag/BeforeTov4.0) )


# Cambios proximos

* Refactorización de endpoints => GRAPH QL
* Implementación de inyecciones de modulos dinamicos via sockets
* Seteo base de imagenes, colores y estilos para prototipo de **muestra**


# Tecnologías Requeridas

*  Angular CLI: v16.2.7
*  CAPACITOR JS - v6
*  IONIC - v7
*  Node v16.20.2
*  NPM 8.19.4

## Descripción

 Base, muestra, sin conexiones HTTP (prox in process)


## Instalación

Asegúrate de tener Node.js y npm instalados globalmente en tu máquina. Luego, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone git@github.com:TrizkelZtudio/CITY.ATT_droid.git
   cd tu_proyecto
   ```
   
2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Servidor de desarrollo:
Para ejecutar el proyecto en un servidor de desarrollo localmente, utiliza el siguiente comando:

    ```bash
    ionic serve
    ```

Esto abrirá la aplicación en tu navegador predeterminado.


# Configuraciones y recomendaciones


- CONEXIONES

  * Establecer rutas de conexion http en los archivos default del proyecto


- ESTILOS

    - Configuración Status bar color (IOS)
  
        * Setear estilos en las vistas en los `.html`
 
- Otros

    * Seteo de `package.name.com`

   

# Funciones Base

1. Captura de fotos
2. Cajas y componentes informativos
3. Formularios configuración de app
4. [Ionic Storage](https://github.com/ionic-team/ionic-storage)


