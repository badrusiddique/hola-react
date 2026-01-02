# Hola React 👋

A collection of React learning projects progressing from basic concepts to advanced hooks and real-world applications. Each project builds upon previous concepts to create a comprehensive learning path for React development.

## Projects Overview

### [01 Custom React](./01-custom-react)
**Concept**: Understanding React fundamentals by building a mini React library from scratch

**What you'll learn**:
- How React's rendering mechanism works under the hood
- Virtual DOM structure and concepts
- Converting JavaScript objects to DOM elements
- The relationship between React elements and actual DOM

**Tech**: Vanilla JavaScript, DOM Manipulation

---

### [02 Counter](./02-counter)
**Concept**: React state management with hooks

**What you'll learn**:
- Using `useState` hook for state management
- How React batches state updates
- Functional state updates vs direct updates
- Event handling in React
- Re-rendering behavior

**Tech**: React, Vite

---

### [03 Tailwind Props](./03-tailwind-props)
**Concept**: Component reusability with props and Tailwind CSS styling

**What you'll learn**:
- Passing and using props in components
- Component composition and reusability
- Tailwind CSS utility classes
- Responsive design patterns
- JSX `className` attribute

**Tech**: React, Vite, Tailwind CSS

---

### [04 Background Color Changer](./04-bg-color-changer)
**Concept**: Interactive UI with dynamic styling

**What you'll learn**:
- State-driven UI updates
- Dynamic CSS class application
- Event handling with parameters
- Object mapping for data management
- Template literals for dynamic classes

**Tech**: React, Vite, Tailwind CSS

---

### [05 Password Generator](./05-password-generator)
**Concept**: Advanced React hooks and browser APIs

**What you'll learn**:
- `useState` for multiple state variables
- `useEffect` for side effects
- `useCallback` for performance optimization
- `useRef` for DOM access
- Clipboard API
- Complex string manipulation
- Memoization concepts

**Tech**: React, Vite, Tailwind CSS

---

### [06 Currency Converter](./06-currency-converter)
**Concept**: API integration, async operations, and real-time data handling

**What you'll learn**:
- Fetching data from external APIs with `fetch`
- `useMemo` for expensive computations
- `useCallback` with async functions
- Managing multiple dependent states
- Handling API responses and data transformation
- Component communication with props
- Swap functionality between inputs
- Working with dynamic dropdown options
- Real-time currency conversion

**Tech**: React, Vite, Tailwind CSS, Currency API

---

### [07 React Router](./07-react-router)
**Concept**: Client-side routing and navigation in React applications

**What you'll learn**:
- Setting up React Router with `createBrowserRouter`
- Creating nested routes with `Outlet`
- Using `Link` and `NavLink` for navigation
- Dynamic routing with URL parameters (`useParams`)
- Query parameters with `useSearchParams`
- Layout components for consistent UI structure
- Active link styling with `NavLink`
- Lazy loading routes for code splitting
- Alternative routing configurations (`createRoutesFromElements`)
- Building multi-page applications with React

**Tech**: React, Vite, React Router DOM, Tailwind CSS

---

### [08 Mini Context](./08-mini-context)
**Concept**: Context API for global state management

**What you'll learn**:
- Creating and using React Context
- Context Provider pattern
- `useContext` hook for consuming context
- Sharing state across component tree without props drilling
- Building a simple authentication flow
- Context vs props for state management
- Managing global application state

**Tech**: React, Vite, Tailwind CSS

---

### [09 Theme Switcher](./09-theme-switcher)
**Concept**: Advanced Context API usage with theme management

**What you'll learn**:
- Building a complete theme system with Context API
- Combining multiple context values and functions
- Persisting theme state in localStorage
- Dark mode implementation
- Dynamic CSS class switching
- Context best practices
- Real-world state management patterns

**Tech**: React, Vite, Tailwind CSS

---

## Getting Started

Each project is self-contained with its own README. To run any project:

```bash
# Navigate to the project folder
cd 0X-project-name

# Install dependencies
npm install

# Start development server
npm run dev
```

For `01-custom-react` (vanilla JS), simply open `index.html` in your browser.

## Learning Path

The projects are ordered progressively:

1. **Understand the fundamentals** → Custom React implementation
2. **Learn state management** → Counter with useState
3. **Master props and styling** → Tailwind Props
4. **Build interactive UIs** → Background Color Changer  
5. **Advanced hooks** → Password Generator
6. **API integration & async** → Currency Converter
7. **Client-side routing** → React Router
8. **Context API basics** → Mini Context
9. **Advanced Context usage** → Theme Switcher

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **ESLint** - Code linting

## Repository Structure

```
hola-react/
├── 01-custom-react/         # Vanilla JS React implementation
├── 02-counter/               # useState basics
├── 03-tailwind-props/        # Props and Tailwind
├── 04-bg-color-changer/      # Interactive state management
├── 05-password-generator/    # Advanced hooks
├── 06-currency-converter/    # API integration & async
├── 07-react-router/          # React Router & navigation
├── 08-mini-context/          # Context API basics
├── 09-theme-switcher/        # Advanced Context & theme management
└── README.md                 # This file
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Basic JavaScript knowledge
- Understanding of HTML/CSS

## Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)

## Author

Built while learning React fundamentals and best practices.

---

Happy Learning! 🚀