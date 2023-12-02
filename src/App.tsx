//import { LoginBox } from "./components/Login"
import { ClientProvider } from "./providers/ClientContext"
import { RoutesMain } from "./routes"
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import {Reset} from "./styles/reset"
import { GlobalStyle } from "./styles/globalStyles"

function App() {

  return (
    <>
      <ClientProvider>
        <Reset/>
        <GlobalStyle/>
        <ToastContainer autoClose={3000}/>
        <RoutesMain/>
      </ClientProvider>
    </>
  )
}

export default App
