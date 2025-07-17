# PrepWise - AI-Powered Interview Practice Platform

PrepWise is a modern web application that helps users practice job interviews with AI-powered feedback. Built with Next.js, Firebase, and VAPI AI, it provides a realistic interview experience with instant feedback and performance analysis.

## 🚀 Features

### Core Features
- **AI-Powered Interviews**: Practice with realistic AI interviewers
- **Real-time Voice Interaction**: Natural conversation flow with speech recognition
- **Instant Feedback**: Get detailed feedback on your interview performance
- **Interview History**: Track your past interviews and progress
- **Customizable Interviews**: Choose different roles, tech stacks, and interview types
- **Performance Analytics**: View detailed feedback and improvement suggestions

### Technical Features
- **Modern UI/UX**: Beautiful, responsive design with dark mode
- **Authentication**: Secure user authentication with Firebase
- **Real-time Communication**: WebSocket-based voice communication
- **Database Integration**: Firestore for data persistence
- **Server-side Rendering**: Next.js App Router for optimal performance

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **React Hook Form** - Form handling and validation
- **Zod** - Schema validation
- **Sonner** - Toast notifications

### Backend & Services
- **Firebase Authentication** - User authentication
- **Firebase Firestore** - Database
- **Firebase Admin SDK** - Server-side Firebase operations
- **VAPI AI** - Voice AI platform for interviews
- **Next.js API Routes** - Server-side API endpoints

### Development Tools
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Turbopack** - Fast bundler for development

## 📋 Prerequisites

Before running this project, make sure you have:

- **Node.js 18+** installed
- **npm** or **yarn** package manager
- **Firebase project** set up
- **VAPI AI account** for voice AI features

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/prepwise.git
cd prepwise
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_CLIENT_EMAIL=your-service-account-email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY\n-----END PRIVATE KEY-----\n"

# VAPI AI Configuration
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your-vapi-workflow-id
```

### 4. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or use existing one
3. Enable Authentication (Email/Password)
4. Create a Firestore database
5. Generate service account key:
   - Go to Project Settings > Service Accounts
   - Click "Generate new private key"
   - Download the JSON file
   - Copy the credentials to your `.env.local`

### 5. VAPI AI Setup

1. Sign up at [VAPI AI](https://vapi.ai/)
2. Create a workflow for interview conversations
3. Copy your workflow ID to `NEXT_PUBLIC_VAPI_WORKFLOW_ID`

### 6. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
prepwise/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication pages
│   ├── (root)/            # Protected routes
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # UI components
│   ├── AuthForm.tsx      # Authentication form
│   ├── Agent.tsx         # AI interview agent
│   └── InterviewCard.tsx # Interview cards
├── firebase/             # Firebase configuration
├── lib/                  # Utility functions
│   └── actions/          # Server actions
├── types/                # TypeScript types
└── public/              # Static assets
```

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:seed      # Seed database with sample data
```

## 🎯 Features in Detail

### Authentication System
- Secure user registration and login
- Session management with HTTP-only cookies
- Protected routes with automatic redirects

### AI Interview Experience
- Real-time voice conversation with AI
- Speech-to-text and text-to-speech
- Natural language processing for responses
- Customizable interview scenarios

### Feedback System
- Detailed performance analysis
- Transcript review
- Improvement suggestions
- Interview history tracking

### User Dashboard
- Interview history and statistics
- Performance metrics
- Quick access to start new interviews

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Firebase](https://firebase.google.com/) for backend services
- [VAPI AI](https://vapi.ai/) for voice AI capabilities
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vercel](https://vercel.com/) for deployment platform

## 📞 Support

If you have any questions or need help:

- Create an issue on GitHub
- Email: support@prepwise.com
- Documentation: [docs.prepwise.com](https://docs.prepwise.com)

---

**Made with ❤️ by the PrepWise team**
