// import { RouterProvider } from "react-router-dom"
// import { mainRouter } from "./Routes/mainRoutes"
// import PrivateRoutes from "./Routes/PrivatRoutes"
// import { store } from "./Global/Store"


// const App=()=>{
//   return(
//     <div>
//       <PrivateRoutes store={store}>

//          <RouterProvider router={mainRouter}/>
//       </PrivateRoutes>
     
//     </div>
//   )
// }

// export default App



// import { RouterProvider } from "react-router-dom"
// const App=()=>{
//   return(
//     <div>

//     </div>
//   )
// }

// export default App

import { RouterProvider } from 'react-router-dom'
import  mainRoute  from './Routes/mainRoutes'
import { Provider } from 'react-redux'
import { store } from './Global/Store'
import {PersistGate} from "redux-persist/integration/react"
import {persistStore } from "redux-persist"
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"
import GlobalState from "./Global/GlobalState"

const App = () => {
  return (
    <div>
      <Provider store={store}>
<PersistGate loading ={null} persistor={persistStore}>
      <QueryClientProvider client={client}>
        <GlobalState>
          <RouterProvider router={mainRoutes}/>
        </GlobalState>
      </QueryClientProvider>
  </PersistGate>
      </Provider>
    </div>
  )
}

export default App