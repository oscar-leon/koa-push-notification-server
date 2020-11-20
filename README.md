## What is a PWA?

### Son web apps con casi la misma capacidad de una app nativa.
#### Ventajas:

    - Manejo de cache => handle offline (kill li-fi), predictable cache, etc. == faster web apps
    - Instalables
    - App native features: push notifications, programmatic updates, camera etc.
    - Business perspective => 
        - Mas engaging (study cases at the bottom)
        - P means progressive: mejora continua gracias al service worker (puedes actualizar versiones)
    - No necesitas una store.
    - Improves SEO? No, pero al ser requerido el https y mejorar los tiempos de carga... de forma indirecta, si.

#### Desventajas:
    - Al no venir de una store se pierde mucha visibilidad.
    - No soporta todas las features nativas (sobretodo ios < 11.3), esto cada vez va mejorando pq se desarrollan nuevas apis nativas de la web (ejemplo navigator.bluetooth: https://developer.mozilla.org/en-US/docs/Web/API/Bluetooth/requestDevice).
    - Integracion con otras apps (third party).

#### Partes:
    - Manifest:
        It's JSON file that defines the basic parameters of PWA (logos, orientation, instalacion, etc);
    - Service worker:
        A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction.

#### Study cases:
  [Trivago](https://www.thinkwithgoogle.com/intl/en-154/marketing-strategies/app-and-mobile/trivago-embrace-progressive-web-apps-as-the-future-of-mobile/])
  
  [Pinterest](https://medium.com/dev-channel/a-pinterest-progressive-web-app-performance-case-study-3bd6ed2e6154) 
  
  [Tinder](https://medium.com/@addyosmani/a-tinder-progressive-web-app-performance-case-study-78919d98ece0)



## Getting Started

If it's the first time you run this project:

```
npm i
```

```
npm run gen-key
```

This will print your server keys, place them at the .env file.


To run the project:

```
npm start
```

Open [http://localhost:8080](http://localhost:8080) with your browser to see the result.
