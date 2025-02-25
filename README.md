
[![Netlify Status](https://api.netlify.com/api/v1/badges/0d499372-70ac-4612-a577-8ff84716ddfb/deploy-status)](https://app.netlify.com/sites/verdant-chaja-c6d512/deploys)

# Proactive Technical Assessment

A comprehensive web application with an Nuxt, Nuxt UI component and API PArty, and automated testing & deployment pipelines.

[![Watch the video](https://67be05c6da68f1000829b024--verdant-chaja-c6d512.netlify.app/video/desktop_demo.mp4)](https://67be05c6da68f1000829b024--verdant-chaja-c6d512.netlify.app/video/desktop_demo.mp4)
[![Watch the video](https://67be05c6da68f1000829b024--verdant-chaja-c6d512.netlify.app/video/mobile_demo.mp4)](https://67be05c6da68f1000829b024--verdant-chaja-c6d512.netlify.app/video/mobile_demo.mp4)
---

## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Features](#features)
- [Testing](#testing)
- [Deployment](#deployment)
- [License](#license)

---

## About

This project is a web application designed with **Nuxt JS** for the frontend and **Nuxt UI Component** with **API Party** for the API connectivity. Deployment is managed on **Netlify**. Continuous integration and deployment (CI/CD) pipelines are set up via **Netlify** for seamless operations.

---

## Tech Stack

- **Frontend**: Nuxt, Nuxt UI, HTML, CSS, TypeScript
- **API**: API Party
- **Deployment**:
   - **Netlify Server**
- **CI/CD**: Github to Netlify

---

## Getting Started

Follow these steps to get the project up and running locally.

### Prerequisites

Make sure you have the following installed:

- **Nuxt NPM** 
- **Git** (for version control)
- **pnpm** (node package manager)

### Clone the Repository

```bash
git clone https://github.com/yaseerhaja/proactive-technical-assessment-hajamohaideen.git
cd proactive-technical-assessment-hajamohaideen
```

### Install Dependencies
For the App (Nuxt):
```bash
pnpm install
```

### Run the Project

```bash
pnpm run dev
```

---

### Project Structure

```angular2html
├── proactive-technical-assessment-hajamohaideen/        # Nuxt 
│   ├── app/
│   │   ├── components/
│   │   ├── composables/
│   │   ├── config/
│   │   ├── constants/
│   │   ├── layouts/
│   │   ├── pages/
│   │   ├── stores/
│   │   ├── utils/
│   ├── package.json
│   ├── .github/                # GitHub Actions workflow files
│   ├── └── workflows/
│   ├── README.md
│   ├── nuxt.config.ts
│   └── netlify.toml
```

---

## Features

- **Application**: Responsive UI built with Nuxt.
- **API**: Public API with API Party for seamless data interaction.
- **CI/CD**: Fully automated build, test, and deployment pipeline through Netlify.
- **Deployment**:
   - **Application** is hosted on Netlify.(https://67bdf91495e027000828a733--verdant-chaja-c6d512.netlify.app/)

---

## Testing

Unit Tests are performed on UI component level

## Deployment

### Netlify 

I have set up **Netlify** for CI/CD that handles the deployment of application.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

You can find the `LICENSE` file in the root of the repository.

