import styled from 'styled-components';
import { Topbar , Sidebar } from './components';
import { Home } from './pages';


 const Container = styled.div`
 display: flex;
`;


function App() {
  return (
    <>
    <Topbar/>
    <Container>
        <Sidebar/> 

        <Home/>

    </Container>

    </>
  );
}

export default App;
