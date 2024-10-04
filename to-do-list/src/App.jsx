import { Container, CssBaseline } from '@mui/material'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Todolist from './components/ToDoList'


function App() {
  
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <AppBar position='static'>
        <Toolbar>
          <Typography variant="h6">
            My Todos
          </Typography>
        </Toolbar>
      </AppBar>
     < Todolist />
    </Container>
  )
}

export default App
