# UI Component Library with Build Checks

A React-based UI component library with automated code quality checks using Husky, ESLint, Prettier, and GitHub Actions.

## Features

- 🎨 Reusable UI components
- 🔧 Pre-commit hooks with Husky
- ✨ Code formatting with Prettier
- 🔍 Linting with ESLint
- 🧪 Automated testing
- 🐳 Docker containerization
- 🚀 CI/CD with GitHub Actions

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Docker
- Git

## Getting Started

### Local Development

**Clone the repository:**
```bash
git clone <your-repo-url>
cd otero_samir_ui_garden_build_checks
```

**Install dependencies:**
```bash
npm install
```

**Start development server:**
```bash
npm start
```

**Run tests:**
```bash
npm test
```

**Build for production:**
```bash
npm run build
```

---

## Docker Deployment

### Method 1: Using Docker directly

**Build the Docker image:**
```bash
docker build -t otero_samir_coding_assignment13 .
```

**Run the container:**
```bash
docker run -d -p 8018:80 --name otero_samir_coding_assignment13 otero_samir_coding_assignment13
```

**Access the application:**
Open your browser and navigate to [http://localhost:8018](http://localhost:8018)

---

### Method 2: Using Docker Compose

**Start the application:**
```bash
docker-compose up -d
```

**Access the application:**
Open your browser and navigate to [http://localhost:8018](http://localhost:8018)

**Stop the application:**
```bash
docker-compose down
```

---

## Stopping the Container

```bash
# Stop the container
docker stop otero_samir_coding_assignment13

# Remove the container
docker rm otero_samir_coding_assignment13

# Remove the image (optional)
docker rmi otero_samir_coding_assignment13
```

---

## Code Quality Checks

This project includes automated code quality checks that run:

### Pre-commit Hooks (Local)
- Prettier: Code formatting
- ESLint: Code linting and error detection
- Tests: Unit and integration tests

### GitHub Actions (CI/CD)
- All pre-commit checks
- Multi-node version testing
- Docker build verification
- Test coverage reporting

---

## Available Scripts

- `npm start` - Start development server
- `npm test` - Run tests in watch mode
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

---

## Project Structure

```
otero_samir_ui_garden_build_checks/
├── public/
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── Button.js
│   │   │   ├── Button.css
│   │   │   └── Button.test.js
│   │   └── index.js
│   ├── App.js
│   └── index.js
├── .github/
│   └── workflows/
│       └── ci.yml
├── .husky/
│   └── pre-commit
├── Dockerfile
├── docker-compose.yml
├── nginx.conf
├── .eslintrc.js
├── .prettierrc
└── README.md
```

---

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Ensure all checks pass locally
5. Submit a pull request

The pre-commit hooks will ensure code quality standards are met before any commit is allowed.

---