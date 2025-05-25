# Todo Or Not Todo ✅

_“That is the procrastination.”_

[![Deployed via GitHub Actions](https://img.shields.io/badge/Deployed%20via-GitHub%20Actions-blue?logo=github)](https://github.com/junaid-mohammad/Todo-or-Not-Todo)
[![Azure App Service](https://img.shields.io/badge/Hosted%20on-Azure%20App%20Service-brightgreen)](https://todo-or-not-todo-b0hqddhng9cqanaq.canadacentral-01.azurewebsites.net/)
[![Azure DevOps](https://img.shields.io/badge/Tracked%20in-Azure%20DevOps-blue)](https://dev.azure.com/Junaid-Arif/Todo%20Or%20Not%20Todo)

This repository contains the source code for **Todo Or Not Todo**, a full-stack todo list app rebuilt from a personal project I first created three years ago. The original version, hosted on **Render**, had no persistence — tasks vanished on refresh. But now, with a solid grasp of **Relational Databases**, **PostgreSQL**, and modern backend practices, I’ve transformed it into a fully functional CRUD application.

The app now features persistent data storage, clean modular architecture, and cloud hosting via **Azure App Service** with a **PostgreSQL Flexible Server** backend. While keeping the minimalist UI and structure familiar, I’ve added scalable backend logic, real-time task updates, and production-level deployment with CI/CD.

---

## 🎯 Purpose

**Todo Or Not Todo** was built to:

- Revisit and upgrade a personal project I first created three years ago — now with full **CRUD functionality** and cloud-hosted **PostgreSQL**.
- Strengthen my backend development skills using **Node.js**, **Express**, **EJS**, and SQL-based persistence.
- Learn to modularize logic across **routes**, **controllers**, and **views** for clean maintainability.
- Set up seamless **CI/CD pipelines** with **GitHub Actions** and host a full-stack app on **Azure App Service**.
- Design a minimal yet responsive **UI/UX**, styled for both desktop and mobile usage using **CSS Flexbox** and media queries.

---

## 🛠️ Features

- **Persistent Todo Items**: Tasks are stored in a **PostgreSQL** database and remain intact between sessions.
- **Edit, Delete, Add**: Full CRUD operations with inline editing and checkbox-based deletion.
- **Modular Architecture**: Organized using partials for EJS views, clean form handling, and route-based separation.
- **Responsive Design**: Mobile-friendly layout ensures a smooth experience on all screen sizes.
- **Production-Ready**: Hosted on **Azure App Service** with environment configuration managed via `.env` files and Azure App Settings.

---

## 💻 Technologies Used

- **Node.js** — JavaScript runtime
- **Express** — Web server framework
- **EJS** — Server-side templating engine
- **PostgreSQL** — Relational database for task management
- **pg** — PostgreSQL client for Node.js
- **dotenv** — Environment variable configuration
- **Body-Parser** — Middleware for handling form submissions
- **HTML5 / CSS3** — Markup and styling
- **Flexbox + Media Queries** — Responsive design techniques
- **Azure App Service** — Cloud hosting platform
- **Azure PostgreSQL Flexible Server** — Managed database service
- **GitHub + GitHub Actions** — Source control and CI/CD
- **Azure DevOps** — Optional version tracking and backups

---

## 🧠 What I Learned

- How to **revive a legacy personal project** and rebuild it with modern full-stack practices.
- Writing **modular, maintainable Express apps** with clear file structure.
- Implementing **cloud persistence** using Azure PostgreSQL and secure connection setup.
- Enhancing the **user experience** through small UI/UX improvements like inline editing.
- Debugging deployment pipelines and managing **CI/CD with GitHub Actions**.
- Developing with both **local and cloud environments** in mind through effective `.env` use.

---

## 🚀 Deployment & Workflow

**Todo Or Not Todo** is deployed using **Azure App Service**, with a fully managed **Azure PostgreSQL Flexible Server** as its persistent backend. The project is built using a full-stack stack of **Node.js**, **Express**, **EJS**, and **PostgreSQL**, and supports both local development and production deployment pipelines.

The transition from a previously static version (hosted on Render) to a dynamic, database-powered app involved setting up automated deployment via **GitHub Actions** and managing environment-specific configurations through `.env` files and **Azure App Settings**. For redundancy and future pipeline integration, **Azure DevOps** is also connected.

---

### ☁️ Hosting & Infrastructure

- **Azure App Service** hosts the Node.js + EJS application, serving both static and dynamic routes.
- **Azure PostgreSQL Flexible Server** stores all task data in a persistent relational format.
- SSL is enforced for production, and IP-based access control is used during development.

---

### ⚙️ Local & Cloud Environments

The app is designed to run consistently in both environments, thanks to environment-based configuration:

```js
const db = new pg.Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl:
    process.env.NODE_ENV === "production"
      ? { rejectUnauthorized: false }
      : false,
});
```

Local development is handled using a `.env` file, while Azure App Service provides environment variables securely for production use.

---

### 🔁 GitHub Actions & Continuous Deployment

Pushing to the `main` branch triggers an automated deployment workflow using **GitHub Actions**, which builds and publishes the app to Azure. This setup mirrors the pipeline structure used in my [**Capitalism**](https://github.com/junaid-mohammad/Capitalism) project.

---

### 🧠 Database Migration & Seeding

The `items` table was exported from my local PostgreSQL instance using `pg_dump` and imported into Azure using `psql`. For a detailed walkthrough of this process (including firewall setup and connection commands), check out the [**deployment section in Capitalism**](https://github.com/junaid-mohammad/Capitalism#-deployment--workflow).

---

### 📦 Azure DevOps Integration

This repository is also configured with **Azure DevOps** as a secondary Git remote:

```bash
git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/Todo%20or%20Not%20Todo/_git/Todo%20or%20Not%20Todo
git push azure main
```

This setup ensures version control backup and leaves room for future integration with **Azure Pipelines**.

---

## 🤝 Contribution

**Todo Or Not Todo** started as a simple personal project and evolved into a fully functional CRUD application as I revisited it with a stronger foundation in full-stack development. If you’d like to add new features, improve the UI, or integrate a different database or auth flow — feel free to fork the repo and contribute.

---

## 📄 License

This project is open-source and available for anyone to learn from, build upon, or adapt. Use it for your own productivity tools, portfolio projects, or web development practice.

---

## 🔗 Credits

- Originally built in 2022 as a beginner web dev exercise — now reimagined with persistent data, modular architecture, and full deployment support.
- Built using **Node.js**, **Express**, **PostgreSQL**, and **EJS**, with styling handled via responsive **CSS3**.
- Designed and developed by [**Junaid Arif**](https://github.com/junaid-mohammad), deployed using **Azure App Service** and **GitHub Actions**.
