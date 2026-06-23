# proyectoGit — Curso RTD FSJ 0050-1

Repositorio grupal del bootcamp **Talento Digital Full Stack Java (FSJ 0050-1)**.
Contiene los portafolios personales y páginas grupales de los estudiantes.

---

## 👤 Carlos Alejandro Venturelli

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/carlos-venturelli-3a12ab29)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white)](https://github.com/Cventurelli)
[![Email](https://img.shields.io/badge/Email-D14836?style=flat&logo=gmail&logoColor=white)](mailto:cventurelli@gmail.com)

Estoy en un proceso de reconversión profesional hacia el desarrollo de software.
Doy mis primeros pasos como desarrollador backend con **Java** y el ecosistema **Spring**.
De forma puntual también incursiono en proyectos de ciencia de datos.
Cuando no estoy programando, disfruto de los clásicos de la literatura universal.

---

## 🌐 Portafolio en línea

```bash
git clone ...
https://rtdfsj0050-1.github.io/proyectoGit/assets/html/grupo1/carlosVenturelli.html
```

---

## 🗂 Estructura del proyecto

```bash
git clone ...

proyectoGit/
├── index.html                        # Página de inicio del curso
├── README.md
└── assets/
    ├── html/
    │   ├── grupo1/
    │   │   ├── carlosVenturelli.html ← Portafolio personal (avance9)
    │   │   ├── karina.html
    │   │   ├── pamelaY.html
    │   │   ├── sfernandez.html
    │   │   └── resumenG1.html
    │   ├── grupo2/
    │   ├── grupo3/
    │   ├── grupo4/
    │   └── profes/
    ├── css/
    │   └── grupo1/
    │       └── carlos-style.css      ← Estilos del portafolio
    ├── js/
    │   └── grupo1/
    │       └── carlos-script.js      ← Scripts del portafolio
    └── img/
```

---

## ⚙️ Tecnologías

| Capa       | Tecnología                          |
|------------|-------------------------------------|
| Estructura | HTML5 semántico                     |
| Estilos    | CSS3 puro (Grid, Flexbox, variables)|
| Scripts    | JavaScript ES6+ vanilla             |
| Fuentes    | Google Fonts (Space Grotesk, Inter) |
| Datos      | GitHub API pública                  |
| Hosting    | GitHub Pages                        |

---

## ✨ Funcionalidades del portafolio (`avance9`)

- **Modo claro / oscuro** con persistencia en `localStorage` y respeto a `prefers-color-scheme`
- **Barra de navegación fija** con detección de sección activa
- **Menú hamburguesa** accesible (`aria-expanded`, cierre con Escape y clic fuera)
- **Hero** con rotador de roles animado
- **Sobre mí** con información real sin datos inventados
- **Tecnologías** con niveles honestos y caja "Actualmente aprendiendo"
- **Timeline de experiencia** con animación al hacer scroll
- **Proyectos** cargados dinámicamente desde `https://api.github.com/users/Cventurelli/repos`
- **Sección de contacto** funcional: mailto real, LinkedIn y GitHub
- **Animaciones de entrada** con `IntersectionObserver`
- **Botón volver arriba** que aparece al desplazarse
- **Año automático** en el footer
- **Accesibilidad**: foco visible, `aria-label`, `prefers-reduced-motion`
- **Sin frameworks, npm ni compilación** — compatible directo con GitHub Pages

---

## 🚀 Cómo ejecutar localmente

```bash
# 1. Clonar el repositorio
git clone https://github.com/RTDFSJ0050-1/proyectoGit.git
cd proyectoGit

# 2. Cambiar a la rama de trabajo
git checkout avance9

# 3. Abrir index.html en el navegador
# (o usar la extensión Live Server de VS Code)
```

---

## 🌍 Publicar con GitHub Pages

1. Ir al repositorio en GitHub → **Settings → Pages**
2. En *Branch*, seleccionar **`avance9`** y carpeta **`/ (root)`**
3. Guardar — en 1–2 minutos el sitio estará disponible en:

```bash
git clone ...
https://rtdfsj0050-1.github.io/proyectoGit/
```

El portafolio de Carlos estará en:

```bash
git clone ...
https://rtdfsj0050-1.github.io/proyectoGit/assets/html/grupo1/carlosVenturelli.html
```

---

## 👥 Integrantes del curso

| Grupo | Estudiante         | Portafolio                                    |
|-------|--------------------|-----------------------------------------------|
| G1    | Carlos Venturelli  | `assets/html/grupo1/carlosVenturelli.html`    |
| G1    | Karina Riquelme    | `assets/html/grupo1/karina.html`              |
| G1    | Pamela Yañez       | `assets/html/grupo1/pamelaY.html`             |
| G1    | Soledad Fernández  | `assets/html/grupo1/sfernandez.html`          |

---

Talento Digital · RTD FSJ 0050-1 · 2025–2026

