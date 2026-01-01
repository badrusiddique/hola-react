import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AboutUs from './components/AboutUs.jsx'
import Contact from './components/Contact.jsx'
import Github from './components/Github.jsx'
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './components/Home.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<App />} />
//         <Route path="/about" element={<AboutUs />} />
//         <Route path="/contact" element={<Contact />} />
//         {/* // Route: /github/:userName?repository=repo-name */}
//         <Route path="/github/:userName" element={<Github />} />
//       </Routes>
//     </BrowserRouter>
//   </StrictMode>,
// )

const router = createBrowserRouter([
  // WITHOUT NESTED ROUTES AND OUTLET, SO ALWAYS RENDER HEADER AND FOOTER IN EACH COMPONENT

  // {
  //   path: "/",
  //   Component: App,
  // },
  // {
  //   path: "/about",
  //   Component: AboutUs,
  // },
  // {
  //   path: "/contact",
  //   Component: Contact,
  // },
  // {
  //   path: "/github/:userName",
  //   Component: Github,
  // }
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/about",
        Component: AboutUs,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/github/:userName",
        // Component: Github,
        lazy: () => import('./components/Github.jsx').then(module => ({ Component: module.default })),
      }
    ]
  }
]);

// SAME AS ABOVE JUST DIFFERENT FORMAT

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Layout />}>
//       <Route path="" Component={Home} />
//       <Route path="about" Component={AboutUs} />
//       <Route path="contact" Component={Contact} />
//       <Route path="github/:userName" Component={Github} />
//     </Route>
//   )
// );

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)