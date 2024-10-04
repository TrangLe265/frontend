import { Container, CssBaseline } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TabNavMUI from './components/Home';



function App() {
  
  return (
    <Container maxWidth="xl" >
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6">
            My Todos
          </Typography>
        </Toolbar>
      </AppBar>
     <TabNavMUI />
    </Container>
  )
}

export default App
