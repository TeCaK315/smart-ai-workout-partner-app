# Setup Guide

## Prerequisites
- Node.js 18+
- npm or yarn
- Git

## Installation

1. Clone the repository:
```bash
git clone <repo-url>
cd smart-ai-workout-partner-app
```

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables:
```bash
cp .env.example .env.local
```

4. Configure your `.env.local`:
```
DATABASE_URL=your_database_url
OPENAI_API_KEY=your_openai_key
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## Build for Production

```bash
npm run build
npm start
```

## Deploy

### Vercel (Recommended)
1. Push to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

### Docker
```bash
docker build -t smart-ai-workout-partner-app .
docker run -p 3000:3000 smart-ai-workout-partner-app
```

---

Need help? Check [PROJECT_SPEC.md](./PROJECT_SPEC.md) for full project details.
