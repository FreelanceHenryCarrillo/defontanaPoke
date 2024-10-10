# Pokémon App

## Descripción

Esta aplicación de Pokémon, desarrollada con Angular (versión 14), permite a los usuarios explorar un listado de Pokémon utilizando la [PokéAPI](https://pokeapi.co/). La app cuenta con funcionalidades como paginación, filtrado por nombre y gestión de favoritos.

## Funcionalidades

1. **Listado de Pokémon con Paginación**:
   - Visualiza todos los Pokémon en una tabla paginada, obteniendo datos desde: [Listado de Pokémon](https://pokeapi.co/api/v2/pokemon).
   - Permite filtrar los Pokémon por nombre (ejemplo: "charizard" o "pikachu").

2. **Detalles del Pokémon Seleccionado**:
   - Al seleccionar un Pokémon del listado, se muestra su información detallada, utilizando la API de detalles: [Detalles del Pokémon](https://pokeapi.co/api/v2/pokemon/{nombre}).

3. **Resumen de Pokémon por Letra**:
   - Incluye una tabla que muestra la cantidad de Pokémon que inician con cada letra del abecedario.

4. **Gestión de Favoritos**:
   - Los usuarios pueden marcar Pokémon como favoritos.
   - Los Pokémon favoritos se muestran en la parte superior del sitio, y al hacer clic en uno, se abre un diálogo con su información detallada.

## Requisitos Técnicos

- **Tecnologías Utilizadas**: Angular 14+, HTML, CSS, TypeScript.
- **Gestión de Formularios**: Se utiliza Angular Reactive Forms para implementar la funcionalidad de filtrado.
- **Optimización**: Se emplean operadores de observables para mejorar la eficiencia de la aplicación.
- **Comunicación entre Componentes**: Conceptos de comunicación efectiva entre componentes se han implementado.
- **Gestión de Subscripciones**: Todas las subscripciones son gestionadas para prevenir problemas de rendimiento.

## Bonus

- **Componentes Personalizados**: Se implementaron directivas y pipes personalizados.
- **Patrón Redux**: Utiliza un patrón Redux para el manejo del estado de la aplicación.
- **Optimización de Carga de Datos**: La carga de datos está optimizada para cumplir con los requisitos del proyecto.

## Instalación

1. Clona el repositorio:
   ```bash
   git clone [https://github.com/tu-usuario/pokemon-app.git](https://github.com/ZeroSwordDev/defontanaPoke/edit/main/README.md)

1. Navega al directorio del proyecto:
   ```bash
   cd pokemon-app

1. Instala las dependencias:
   ```bash
    npm install
   
1. Inicia la aplicación:
   ```bash
    npm start

## Iamges
![defontanapoke](https://github.com/user-attachments/assets/55565d19-6b60-4207-9076-34ddd0f5aa4a)
![filter](https://github.com/user-attachments/assets/90f3fee6-a468-47f6-a2e4-7ed59700a611)
