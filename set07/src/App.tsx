import { RouterProvider } from "react-router-dom"
import { mainRoutes } from "./Router/mainRoutes"

const App = () => {
  return (
    <div>
      <RouterProvider router={mainRoutes}/>
    </div>
  )
}

export default App
