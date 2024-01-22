import { Container } from "./components/container"
import Title from './components/Title/Title';
import Typography from "./components/Typography/Typography";

function App() {


  return (
  
     <Container>
      <Title/>
      <Typography fontSize={24} bold marginTop={24}> List of Clearing Task </Typography>
     </Container>
  
  )
}

export default App
