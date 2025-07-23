# 🤖 MeetAI - Where AI Becomes Your Meeting Partner

**MeetAI** revolutionizes video conferencing by making AI agents active participants in your conversations. Unlike traditional tools that analyze meetings afterward, MeetAI's AI agents join your calls in real-time, speak with actual voices, and engage naturally with all participants.

> 🌐 **Live Demo**: [https://meetai-phi-five.vercel.app/](https://meetai-phi-five.vercel.app/)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991.svg?style=for-the-badge&logo=openai&logoColor=white)
![Stream](https://img.shields.io/badge/Stream-005FFF.svg?style=for-the-badge&logo=streamlit&logoColor=white)

## 🚀 What Makes This Revolutionary

### 🎙️ **Real-Time AI Voice Participation**

AI agents don't just listen—they speak, respond, and contribute to conversations using OpenAI's Realtime API integration with Stream.io video calls. Your AI assistant has a voice and uses it naturally during meetings.

### 🧠 **Custom AI Personalities**

Create specialized AI agents with unique instructions and behaviors. Whether you need a technical expert, creative brainstormer, or meeting moderator, each agent maintains its personality throughout the conversation.

### 🔄 **Seamless Meeting Lifecycle**

- **Pre-Meeting**: AI agents automatically join when sessions start
- **During Meeting**: Real-time voice interaction and transcription
- **Post-Meeting**: Intelligent summarization and continued chat support
- **Follow-up**: Ask your AI assistant questions about any past meeting

### 💬 **Persistent AI Memory**

After meetings end, your AI agents remember everything. Chat with them about meeting details, get clarifications, or ask for follow-up actions—all powered by GPT-4o with full meeting context.

## ✨ Core Features

### 🎥 **Revolutionary Video Calling**

- **AI Voice Participants**: Agents speak with real voices using OpenAI's Realtime API
- **Live Transcription**: Real-time speech-to-text with speaker identification
- **Automatic Recording**: Every session captured with searchable transcripts
- **Stream.io Powered**: Enterprise-grade video infrastructure

### 🤖 **Intelligent Agent System**

- **Custom Instructions**: Define agent behavior and expertise areas
- **Generated Avatars**: Unique visual identity for each AI participant
- **Persistent Context**: Agents remember all interactions across sessions
- **Multi-Agent Support**: Create specialized teams of AI assistants

### 📊 **Advanced Meeting Analytics**

- **AI-Powered Summaries**: Structured insights with timestamps and key points
- **Speaker Analysis**: Detailed conversation breakdown by participant
- **Action Items**: Automatically extracted tasks and follow-ups
- **Searchable Transcripts**: Find any moment in your meeting history

### 💎 **Smart Freemium Model**

- **Free Trial**: 1 AI Agent + 3 Meetings to explore the platform
- **Usage Tracking**: Real-time limits with visual progress indicators
- **Seamless Upgrades**: Polar.sh integration for premium features
- **Transparent Pricing**: Clear subscription management

## 🛠️ Technology Stack

### **Frontend Innovation**

- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Full type safety across the stack
- **TailwindCSS** - Modern, responsive design system
- **Radix UI** - Accessible component primitives

### **AI & Real-Time Infrastructure**

- **OpenAI Realtime API** - Live voice conversation capabilities
- **OpenAI GPT-4o** - Advanced reasoning for summaries and chat
- **Stream.io Video** - Enterprise video calling platform
- **Stream.io Chat** - Real-time messaging and notifications

### **Backend & Data**

- **tRPC** - End-to-end typesafe API layer
- **Drizzle ORM** - Type-safe database operations
- **PostgreSQL** - Robust data persistence
- **Inngest** - Background job processing for AI tasks

### **Authentication & Payments**

- **Better Auth** - Modern authentication system
- **Polar.sh** - Subscription and billing management
- **Multi-Provider OAuth** - GitHub, Google, and email/password

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL database
- Stream.io account (video + chat)
- OpenAI API key

### Installation

```bash
# Clone the repository
git clone https://github.com/SanketLV/meetai.git
cd meetai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Configure your API keys and database URL

# Initialize database
npm run db:push

# Start development server
npm run dev
```

### Environment Configuration

```bash
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/meetai"

# Stream.io (Required for video calls)
NEXT_PUBLIC_STREAM_VIDEO_API_KEY="your_stream_video_key"
STREAM_VIDEO_SECRET_KEY="your_stream_video_secret"
NEXT_PUBLIC_STREAM_CHAT_API_KEY="your_stream_chat_key"
STREAM_CHAT_SECRET_KEY="your_stream_chat_secret"

# OpenAI (Required for AI agents)
OPENAI_API_KEY="your_openai_api_key"

# Authentication (Optional)
GITHUB_CLIENT_ID="your_github_client_id"
GITHUB_CLIENT_SECRET="your_github_client_secret"
GOOGLE_CLIENT_ID="your_google_client_id"
GOOGLE_CLIENT_SECRET="your_google_client_secret"

# Background Processing
INNGEST_EVENT_KEY="your_inngest_key"
INNGEST_SIGNING_KEY="your_inngest_signing_key"

# Payments (Optional)
POLAR_ACCESS_TOKEN="your_polar_token"
```

### Development Commands

```bash
npm run dev          # Start development server with Turbopack
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:push      # Push database schema changes
npm run db:studio    # Open Drizzle Studio
```

## 💡 How It Works

### Creating Your First AI Agent

1. **Design Your Assistant**: Define name, personality, and expertise
2. **Custom Instructions**: Specify how the agent should behave and respond
3. **Auto-Generated Avatar**: Each agent gets a unique visual identity
4. **Ready to Meet**: Your AI assistant is ready to join conversations

### Starting AI-Enhanced Meetings

1. **Create Meeting**: Schedule with your chosen AI agent
2. **Live Participation**: AI joins with voice and visual presence
3. **Real-Time Interaction**: Natural conversation with all participants
4. **Automatic Processing**: Transcription, recording, and analysis

### Post-Meeting Intelligence

1. **AI Summarization**: Structured insights with key takeaways
2. **Persistent Chat**: Continue conversations with your AI assistant
3. **Meeting Memory**: Ask questions about any past session
4. **Action Tracking**: Follow up on decisions and tasks

## 🎯 Use Cases

### **Business Meetings**

Create AI assistants specialized in different business functions—sales, engineering, marketing—each contributing relevant expertise to discussions.

### **Educational Sessions**

Deploy AI tutors that can answer questions, provide explanations, and facilitate learning during online classes or workshops.

### **Creative Brainstorming**

Use AI agents with creative personalities to generate ideas, challenge assumptions, and push creative boundaries during collaborative sessions.

### **Technical Reviews**

Have AI experts join code reviews, architecture discussions, or technical planning meetings with specialized knowledge in specific domains.

## 🔮 Future Roadmap

- **Multi-Language Support** - Global accessibility
- **Screen Sharing with AI** - Agents that can see and discuss shared content
- **Meeting Analytics Dashboard** - Advanced insights and reporting
- **Custom AI Model Integration** - Bring your own models
- **Mobile Applications** - iOS and Android native apps
- **Enterprise Features** - SSO, advanced admin controls, compliance

## 🏗️ Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── api/webhook/      # Stream.io webhook handlers
│   ├── call/             # Video call interface
│   └── (dashboard)/      # Main application pages
├── modules/              # Feature modules
│   ├── agents/           # AI agent management
│   ├── meetings/         # Meeting functionality
│   └── call/             # Video call components
├── lib/                  # Core utilities and configurations
├── db/                   # Database schema and connections
├── inngest/              # Background job functions
├── components/           # Reusable UI components
├── trpc/                 # End-to-end typesafe API layer configuration
└── hooks/                # Custom React hooks for shared client-side logic
```

## 🤝 Contributing

We welcome contributions that push the boundaries of AI-human collaboration:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-ai-feature`
3. **Commit** your changes: `git commit -m 'Add revolutionary AI capability'`
4. **Push** to the branch: `git push origin feature/amazing-ai-feature`
5. **Open** a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🌟 Why MeetAI Matters

Traditional video conferencing treats AI as an afterthought—a tool for post-meeting analysis. **MeetAI flips this paradigm**, making AI agents first-class participants who contribute meaningfully to conversations as they happen.

This isn't just another meeting tool—it's the future of human-AI collaboration.

---

**Built with ❤️ and cutting-edge AI technology**

_🚀 Experience the future of meetings where AI doesn't just assist—it participates._
