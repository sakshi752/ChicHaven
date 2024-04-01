import { Outlet } from "react-router-dom"
import Container from "./Components/Container"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
function App() {
  return (
    <>
      <Container>
        <Header/>
        <Outlet/>
      </Container>
      <Footer/>
    </>
  )
}

export default App
