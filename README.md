# 🚀 Dekamond - Simple Client-side Auth

> A modern Next.js application with client-side authentication, built with TypeScript, Tailwind CSS, and shadcn/ui components.

[![Next.js](https://img.shields.io/badge/Next.js-15.5.2-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Zustand](https://img.shields.io/badge/Zustand-5.0-FF6B6B?style=flat-square)](https://zustand-demo.pmnd.rs/)

## ✨ Features

- 🔐 **Mobile Number Authentication** - Client-side validation with multiple format support
- 👤 **Mock User Integration** - Fetches random users from `randomuser.me` API
- 💾 **Local Storage** - Persistent user session management
- 🎨 **Modern UI** - Beautiful interface built with shadcn/ui components
- 📱 **Responsive Design** - Works seamlessly across all devices
- ♿ **Accessibility** - Proper labels, error messaging, and focus management
- 🌙 **Theme Support** - Dark/light mode toggle

## 🛠️ Tech Stack

- **Framework**: [Next.js 15.5.2](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.0](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.0](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: [Zustand 5.0](https://zustand-demo.pmnd.rs/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd dekamond
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   ```

   > Edit `.env` file with your configuration values

4. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**

   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## 🔄 User Flow

1. **Login Page** (`/`)

   - Enter mobile number in supported formats:
     - `09xxxxxxxxx`
     - `+989xxxxxxxxx`
     - `00989xxxxxxxxx`
   - Click "Login" to authenticate

2. **Authentication Process**

   - Validates phone number format
   - Fetches random user data from API
   - Stores user info in `localStorage`
   - Redirects to dashboard

3. **Dashboard** (`/dashboard`)
   - Displays personalized welcome message
   - Shows user avatar and email
   - Provides logout functionality
   - Clears storage and redirects to login

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── (authentication)/        # Auth route group
│   │   └── login/               # Login page
│   ├── (dashboard)/             # Dashboard route group
│   │   └── dashboard/           # Dashboard pages
│   └── globals.css              # Global styles
├── components/                   # Reusable components
│   ├── ui/                      # shadcn/ui components
│   └── sidebar/                 # Sidebar components
├── constants/                   # Application constants
├── features/                    # Feature-specific components
├── hooks/                       # Custom React hooks
├── interfaces/                  # TypeScript interfaces
├── lib/                         # Utility functions
└── stores/                      # Zustand stores
```

## 🔧 Key Files

- `src/lib/validation.ts` - Phone validation and form schemas
- `src/stores/auth-store.ts` - Authentication state management
- `src/features/login-form.tsx` - Login form component
- `src/features/dashboard-content.tsx` - Dashboard content
- `src/app/(authentication)/login/page.tsx` - Login page
- `src/app/(dashboard)/dashboard/page.tsx` - Dashboard page

## ⚠️ Important Notes

- **Client-side Only**: All authentication is handled client-side
- **No Real Auth**: No actual phone verification is performed
- **Mock Data**: Uses random user API for demonstration
- **Local Storage**: User sessions persist in browser storage

## 🎨 Customization

The project uses shadcn/ui components which can be easily customized:

1. Modify component styles in `src/components/ui/`
2. Update theme configuration in `src/providers/theme-provider.tsx`
3. Customize colors in `tailwind.config.js`

## 📝 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production with Turbopack
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
