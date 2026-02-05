# Personal Portfolio

A modern, high-performance personal portfolio website engineered to showcase projects in **AI, Machine Learning, and Cybersecurity**. 

The codebase focuses on a **Glassmorphism** design aesthetic, utilizing pure CSS architecture for visual depth and vanilla JavaScript for interactivity, ensuring a lightweight and responsive user experience without the overhead of heavy frontend frameworks.

## 📂 Project Structure

The repository is organized to separate concerns between structure (HTML), presentation (CSS), and behavior (JS).

```text
/
├── index.html        # Main entry point containing semantic markup and data content
├── style.css         # Centralized stylesheet (CSS Variables, Grid, Animations)
├── script.js         # Core logic (Theme engine, Typewriter, Mouse tracking)
└── README.md         # Project documentation

```

## 🎨 Design Philosophy & Features

The user interface is built around the concept of **Glassmorphism**, employing semi-transparent backgrounds with backdrop filters to create a multi-layered, depth-based hierarchy.

### Core Features

* **Dynamic Theme Engine**: A robust Dark/Light mode toggle that uses CSS variables and LocalStorage to persist user preferences across sessions.
* **Spotlight Interaction**: An advanced JavaScript-driven hover effect that calculates mouse position in real-time to render a dynamic "spotlight" gradient over project cards.
* **Scroll-Driven Animations**: Utilizes the modern CSS `view()` timeline to trigger smooth entry animations (fade-in + slide-up) as the user traverses the page.
* **Typewriter Effect**: A custom JavaScript loop in the Hero section that cycles through professional titles with a blinking cursor animation.
* **Visual Feedback**: Includes a reading progress bar fixed to the viewport top and breathing gradient text animations.

## 🔄 Recent Changelog (Commit History)

The latest updates to the codebase focused on UI modernization and interactivity enhancements:

1. **`feat: integrate spotlight hover effects, scroll progress bar, and breathing gradient text`**
* Added `mousemove` event listeners to track cursor position relative to cards.
* Implemented `radial-gradient` manipulation in CSS variables for the spotlight effect.
* Added a logic-based scroll progress bar pinned to the top of the viewport.


2. **`feat: add dark/light mode toggle with local storage and typewriter hero effect`**
* Introduced CSS root variables for color theming (`--bg-color`, `--text-primary`).
* Wrote JavaScript logic to switch classes and persist state via `localStorage`.
* Implemented a recursive `setTimeout` loop for the typewriter text animation.


3. **`refactor: implement glassmorphism layout, responsive grid, and scroll animations`**
* Restructured HTML5 semantics (replaced deprecated tags).
* Applied `backdrop-filter: blur()` and transparency for the glass look.
* Converted layout to CSS Grid (`grid-template-columns`) for full mobile responsiveness.



## 🛠️ Technical Stack

This project is built with a focus on semantic structure, clean code, and performance optimization.

### Frontend Architecture

* **HTML5**: Semantic markup ensuring accessibility and proper document structure.
* **CSS Variables (`:root`)**: Used for centralized color management and theme switching.
* **CSS Grid & Flexbox**: Powering the responsive layout and card alignment.
* **Keyframe Animations**: Handling micro-interactions (hover states, cursors, gradient shifts).
* **JavaScript (ES6+)**: Vanilla JS used for DOM manipulation, event listeners (scroll, click, mousemove), and state management.

### Assets & Libraries

* **Devicon**: Vector-based icon font used for rendering technology stack logos.
* **Google Fonts**: Utilizes the **Inter** typeface for clean, modern typography.

## 📂 Portfolio Highlights

The codebase structures the content into four primary data sections:

1. **Professional Summary**: An overview of specialization in GenAI architecture and RAG systems.
2. **Technical Skills**: A categorized grid displaying proficiency in Languages, Frameworks, and Libraries.
3. **Project Showcase**: Detailed cards for key engineering initiatives (CodeGraph, ViperScan, SOC Analyst).
4. **Certifications**: A listing of credentials including AWS Solutions Architecture and Cybersecurity foundations.
