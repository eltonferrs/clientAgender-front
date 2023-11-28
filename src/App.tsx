//import { LoginBox } from "./components/Login"
import { ClientProvider } from "./providers/ClientContext"
import { RoutesMain } from "./routes"
import {ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
function App() {

  return (
    <>
      <ClientProvider>
        <ToastContainer autoClose={3000}/>
        <RoutesMain/>
      </ClientProvider>
    </>
  )
}

export default App
