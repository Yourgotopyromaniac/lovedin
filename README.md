# LovedIn - Interactive Proposal Web Application

## Live Application

## Visit LovedIn here: https://lovedin.vercel.app/

## Team Members

- **Developer 1**: Awoyemi Abiola - [GitHub](https://github.com/Yourgotopyromaniac)
- **Developer 2**: Okwuosa Oluchi - [GitHub](https://github.com/luchiiii)

## Case Study Summary

LovedIn is a web application designed to help people create and share personalized proposal experiences. The app takes a simple approach - users input their partner's name and relationship type, then get a customized proposal page that feels personal and meaningful.

### Why it matters:

Proposals are important moments that deserve to feel special. LovedIn makes it easier to create something memorable and personalized without needing to be a designer or developer. Partners can experience the proposal on any device they have.

### Built with:

- HTML5
- Git and GitHub for version control and team collaboration
- Deployed on Vercel

---

## Documentation

Read the updated case study: https://docs.google.com/document/d/1BwLFD08gpjclHfZflFJPF8wNfVAWR2nbD_FLrHhudEE/view?usp=sharing

View the design documentation : https://tidy-nape-704.notion.site/LovedIn-Design-Documentation-2fcff83f0c4c80cea70bfefc37e883e0?source=copy_link

---

## Project Structure

```
lovedIn/
│
├── assets/
│   └── images/               (Logo, favicon, and meta images)
│
├── js/
│   ├── app.js
│
├── index.html                 (Home page with the form)
├── proposal.html              (The personalized proposal page)
│
└── README.md                 (This file)
```

---

## Getting Started

### What you need:

- A modern web browser
- Git if you want to work with the code

### To run it locally:

1. Clone the repository

   ```bash
   git clone https://github.com/Yourgotopyromaniac/LovedIn.git
   cd lovedIn
   ```

2. Open index.html in your browser

Option 1: Just double-click index.html in your file explorer
(works on Windows, macOS, and Linux)

Option 2: From a terminal

macOS:

```bash
open index.html
```

Windows (Command Prompt):

```bash
start index.html
```

Windows (PowerShell):

```bash
ii .\index.html
```

Linux (most desktop environments):

```bash
xdg-open index.html
```

That's it. No build process or special setup needed.

---

## Styling Guide (CSS Variables)

LovedIn uses CSS variables defined in `base.css` to maintain consistent design between the website's pages and the design system, and simplify maintenance across the project.

### Design Tokens

All core design values are centralized as custom properties with colors and fonts matching the design documentation values:

#### Colors

- --color-primary (Scarlet Blush)
- --color-primary-bg (Pink Carnation)
- --color-accent (Petal Frost)
- --color-support (Blush Rose)

#### Typography

- --font-display: "Playfair Display", serif;
- --font-body: "Inter", sans-serif;
- --heading-h1 to --heading-h4
- --font-size-sm to --font-size-lg
- --font-weight-medium
- --font-weight-bold

#### Spacing

- --spacing-xs to --spacing-6xl

#### Radius and Shadows

- --radius-sm to --radius-2xl
- --shadow-md
- --shadow-lg

#### Transitions and Breakpoints

- --transition-fast
- --transition-base
- Responsive breakpoints via media queries

### Usage Principle

All layouts, colors, and typography should use variables instead of hard-coded values.

Example:

```css
/* Preferred */
padding: var(--spacing-lg);
color: var(--color-gray-700);

/* Avoid */
padding: 20px;
color: #666;
```

### File Structure

base.css → Global tokens and shared styles
index.css → Page-specific styles
stories.css → Page-specific styles

This system ensures visual consistency, easier updates, and better collaboration.

## Questions?

If you have questions about the project or want to reach out, feel free to contact the development team.

---

```

```
