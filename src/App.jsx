import { Outlet } from "react-router-dom"
import Container from "./Components/Container"
import Header from "./Components/Header"
function App() {
  return (
    <>
      <Container>
        <Header/>
        <Outlet/>
      </Container>
    </>
  )
}

export default App
