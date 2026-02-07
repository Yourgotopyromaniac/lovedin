# LovedIn - Interactive Proposal Web Application

## Team Members

- **Developer 1**: Awoyemi Abiola - [GitHub](https://github.com/Yourgotopyromaniac)
- **Developer 2**: Okwuosa Oluchi - [GitHub](https://github.com/luchiiii)

---

## Case Study Summary

LovedIn is a web application designed to help people create and share personalized proposal experiences. The app takes a simple approach - users input their partner's name and relationship type, then get a customized proposal page that feels personal and meaningful.

### What the app does:

- Lets users personalize proposals with their partner's name and whether they're asking a girlfriend or boyfriend
- Creates an interactive experience with animations and playful interactions
- Works on phones, tablets, and desktops
- Uses a romantic color palette and clean design
- Has a straightforward form to get the information needed

### Why it matters:

Proposals are important moments that deserve to feel special. LovedIn makes it easier to create something memorable and personalized without needing to be a designer or developer. Partners can experience the proposal on any device they have.

### How it works:

1. User lands on the homepage
2. Fills in their partner's name and relationship type
3. Clicks "Generate Proposal"
4. Gets taken to a customized proposal page with their partner's name
5. Sees an animated GIF and the personalized question
6. Can click "Yes" for a celebration moment or play with the "No" button
7. Sees a success page with a celebration GIF if they click "Yes"
8. Can go back and start over

### Built with:

- HTML5, CSS3, and JavaScript
- Custom color palette with Playfair Display and Inter fonts
- Git and GitHub for version control and team collaboration
- Deployed on Vercel

---

## Live Application

Visit LovedIn here: https://lovedin.vercel.app/

---

## Documentation

Read the full case study: https://docs.google.com/document/d/1BwLFD08gpjclHfZflFJPF8wNfVAWR2nbD_FLrHhudEE/view?usp=sharing

View the design system: https://www.notion.so/LovedIn-Design-Documentation-2fcff83f0c4c80cea70bfefc37e883e0?source=copy_link

---

## Design System

### Colors

- Primary: #E22B3B (Scarlet Blush) - Main buttons and headings
- Secondary: #ED4779 (Wild Strawberry) - Gradients and accents
- Accent: #FA88BB (Petal Frost) - Borders and highlights
- Background: #F0D1D7 (Pink Carnation) - Page backgrounds
- Support: #D86A77 (Blush Rose) - Supporting text and borders

### Fonts

- Playfair Display for headings - gives it that romantic feel
- Inter for body text - easy to read

---

## Project Structure

```
lovedIn/
│
├── index.html                 (Home page with the form)
├── proposal.html              (The personalized proposal page)
│
├── css/
│   ├── styles.css            (Styles for the home page)
│   └── proposal.css          (Styles for the proposal page)
│
├── js/
│   ├── app.js                (Handles form, modal, and redirects to proposal)
│   └── proposal.js           (Handles the proposal page interactions)
│
├── assets/
│   └── images/               (Logo, favicon, and meta images)
│
└── README.md                 (This file)
```

---

## Features

### Home Page

The home page has a clean layout with navigation, a hero section, feature cards explaining what LovedIn does, and the form where users input information. It's designed to be simple and inviting.

### Proposal Page

The proposal page shows the personalized question with the partner's name. It has an animated GIF at the top, the question, and two buttons - Yes and No. The No button moves away when you try to click it, which adds a playful element. When you click Yes, it shows a celebration page with another GIF and a nice message.

### Form and Modal Handler

The app.js file handles the form submission, captures the partner's name and type, checks that both are filled in, then creates a URL with that information. It also manages the modal that appears after form submission, giving users options to share or preview their proposal.

### Proposal Logic

When the proposal page loads, it reads the name and type from the URL, updates the heading to be personalized, and handles all the button interactions. You can also press Escape to go back.

---

## Works on All Devices

The app is designed to work on any screen size:

- Desktops and larger screens
- Tablets in portrait and landscape
- Mobile phones
- All elements adjust and stay functional

---

## How We Built It

We used Git and GitHub to manage the code and collaborate. Each feature was built on its own branch, reviewed by the other person, and then merged to the main branch once it looked good. This kept things organized and made sure we caught any issues before pushing to production.

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

## How to Use

1. Go to the home page and fill in your partner's name
2. Select their type (girlfriend or boyfriend)
3. Click "Generate Proposal"
4. You'll see your personalized proposal page
5. Click Yes to see the celebration, or play with the No button
6. Share the link with your special person

---

## Questions?

If you have questions about the project or want to reach out, feel free to contact the development team.

---

Made with care by the LovedIn team

Last updated February 2026

```

```
