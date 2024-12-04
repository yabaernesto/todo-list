import App from './App.jsx'
import { TaskPage } from './pages/TaskPage.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task",
    element: <TaskPage />
  },
]);

export function Rotas() {
  return (
    <RouterProvider router={router} />
  )
}
