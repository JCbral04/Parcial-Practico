# Visualizador Interactivo de Datos CSV

Una aplicación web de una sola página (SPA) que permite visualizar y analizar datos en formato CSV de manera interactiva. La aplicación incluye funcionalidades de visualización de datos en tablas y gráficos, con opciones de personalización y accesibilidad.

## 🚀 Características

- **📊 Visualización de datos** en tablas interactivas
- **📈 Gráficos dinámicos** con múltiples tipos de visualización
- **🌓 Modo oscuro/claro** con preferencia guardada
- **📱 Diseño responsivo** para todos los dispositivos
- **♿ Accesibilidad mejorada** (WCAG 2.1)
- **📤 Exportación** de gráficos como imágenes PNG
- **⚡ Procesamiento rápido** de archivos CSV

## 🛠️ Tecnologías Utilizadas

- **Frontend:**
  - HTML5 semántico
  - CSS3 con variables personalizadas
  - JavaScript (ES6+)
  - [Chart.js 4.4.1](https://www.chartjs.org/) - Visualización de gráficos
  - [Bootstrap 5.3](https://getbootstrap.com/) - Estilos y componentes
  - [Font Awesome 6](https://fontawesome.com/) - Iconos

## 📦 Instalación

1. Clona el repositorio:
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   ```
2. Abre el archivo `index.html` en tu navegador web

## 🎯 Uso

1. **Cargar datos**:
   - Pega tus datos CSV en el área de texto
   - O haz clic en "Seleccionar archivo" para cargar un archivo CSV
   - Presiona "Procesar CSV" para cargar los datos

2. **Explorar datos**:
   - Los datos se mostrarán en una tabla interactiva
   - Usa los controles de filtrado para explorar los datos

3. **Crear gráficos**:
   - Selecciona las columnas para los ejes X e Y
   - Elige el tipo de gráfico (barras, líneas, torta, etc.)
   - Haz clic en "Actualizar Gráfico" para ver los cambios

4. **Personalizar**:
   - Cambia entre modo claro y oscuro con el interruptor en la esquina superior derecha
   - Exporta el gráfico como imagen con el botón correspondiente

## 🏗️ Estructura del Proyecto

```
csv-visualizer/
├── css/
│   └── styles.css       # Estilos personalizados
├── js/
│   └── app.js          # Lógica principal de la aplicación
├── index.html          # Punto de entrada de la aplicación
├── .vscode/            # Configuración de VS Code
│   └── launch.json     # Configuración de depuración
└── README.md           # Documentación
```

## ♿ Accesibilidad

Hemos implementado varias características de accesibilidad:

- Navegación por teclado
- Contraste adecuado en ambos modos
- Etiquetas ARIA para elementos interactivos
- Textos alternativos para imágenes
- Compatibilidad con lectores de pantalla
- Tamaño de fuente escalable

## 🎨 Personalización

Puedes personalizar la apariencia modificando las variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #4a6fa5;
    --secondary-color: #6c757d;
    --success-color: #198754;
    --danger-color: #dc3545;
    --light-color: #f8f9fa;
    --dark-color: #212529;
    --bg-color: #ffffff;
    --text-color: #212529;
    --card-bg: #ffffff;
    --input-bg: #ffffff;
    --border-color: #dee2e6;
}
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, sigue estos pasos:

1. Haz un fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/nueva-caracteristica`)
3. Haz commit de tus cambios (`git commit -am 'Añade nueva característica'`)
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`)
5. Abre un Pull Request

## 📞 Soporte

Para soporte, por favor abre un issue en el repositorio.

---

Desarrollado con ❤️ para facilitar la visualización de datos CSV.
- [Font Awesome](https://fontawesome.com/) para iconos

## 📦 Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Node.js (solo para desarrollo y contribuciones)
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd csv-visualizer
   ```

2. Abre el archivo `index.html` en tu navegador o usa un servidor local:
   ```bash
   npx serve
   ```

## Uso

1. **Cargar datos CSV**:
   - Pega tus datos CSV en el área de texto
   - O haz clic en "Seleccionar archivo" para cargar un archivo CSV
   - Haz clic en "Procesar CSV"

2. **Explorar los datos**:
   - Los datos se mostrarán en una tabla interactiva
   - Usa la barra de desplazamiento horizontal si es necesario

3. **Crear gráficos**:
   - Selecciona las columnas para los ejes X e Y
   - Elige el tipo de gráfico
   - Haz clic en "Actualizar Gráfico"

4. **Filtrar datos**:
   - Activa el interruptor de filtros
   - Selecciona los valores que deseas incluir
   - Aplica los filtros

5. **Exportar gráficos**:
   - Configura tu gráfico
   - Haz clic en "Exportar Imagen" para guardar como PNG

## Accesibilidad

La aplicación sigue las pautas WCAG 2.1 Nivel AA e incluye:

1. **Navegación por teclado**:
   - Soporte completo para navegación con teclado
   - Atajos de teclado para funciones principales
   - Indicadores de foco visibles

2. **Contraste de color**:
   - Relación de contraste mínimo de 4.5:1 para texto normal
   - Modo de alto contraste disponible

3. **Lectores de pantalla**:
   - Estructura semántica HTML5
   - Textos alternativos para elementos no textuales
   - Regiones ARIA para contenido dinámico
   - Anuncios de cambios en tiempo real

4. **Otras características de accesibilidad**:
   - Texto escalable sin pérdida de funcionalidad
   - Etiquetas descriptivas para controles de formulario
   - Mensajes de error claros y sugerencias
   - Soporte para tecnologías de asistencia

## Estructura del Proyecto

```
csv-visualizer/
├── css/
│   └── styles.css         # Estilos principales de la aplicación
├── js/
│   └── app.js            # Lógica principal de la aplicación
├── index.html            # Punto de entrada de la aplicación
└── README.md             # Este archivo
```

## Personalización

### Variables CSS

Puedes personalizar los colores y estilos modificando las variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #4a6fa5;
    --secondary-color: #6c757d;
    --success-color: #198754;
    --danger-color: #dc3545;
    --light-color: #f8f9fa;
    --dark-color: #212529;
    --bg-color: #ffffff;
    --text-color: #212529;
    --card-bg: #ffffff;
    --input-bg: #ffffff;
    --border-color: #dee2e6;
}
```

### Tipos de Gráficos

La aplicación soporta varios tipos de gráficos que puedes seleccionar en el menú desplegable:
- Barras verticales
- Barras horizontales
- Líneas
- Torta

## Despliegue

Puedes desplegar esta aplicación en cualquier servicio de alojamiento estático como:
- GitHub Pages
- Netlify
- Vercel
- Firebase Hosting

## Limitaciones

- Tamaño máximo de archivo CSV: ~5MB (depende del navegador)
- No soporta archivos con codificaciones diferentes a UTF-8
- El rendimiento puede verse afectado con conjuntos de datos muy grandes

## Mejoras Futuras

- [ ] Soporte para múltiples conjuntos de datos
- [ ] Más tipos de gráficos (dispersión, radar, etc.)
- [ ] Exportación de datos procesados
- [ ] Integración con APIs de almacenamiento en la nube
- [ ] Soporte para más formatos de datos (Excel, JSON, etc.)

## Contribución

Las contribuciones son bienvenidas. Por favor, lee las [pautas de contribución](CONTRIBUTING.md) antes de enviar un pull request.

## Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Créditos

- Desarrollado por [Tu Nombre]
- Iconos por [Font Awesome](https://fontawesome.com/)
- Gráficos por [Chart.js](https://www.chartjs.org/)
- Estilos con [Bootstrap 5](https://getbootstrap.com/)

---

*Este proyecto fue creado como parte del curso de Ingeniería Web.*
