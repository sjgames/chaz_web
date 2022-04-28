import {Container} from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {BrowserRouter as Router} from "react-router-dom";
import Main from "./components/Main";
import VoxelChaz from "./components/VoxelChaz.js";



function App() {
    return (
    <Router>
        <Header/>
        <main className="py-3">
                <Container fluid>
                    <VoxelChaz/>
                    <Main/>
                </Container>
        </main>
        <Footer/>
    </Router>
    );
}

export default App;
