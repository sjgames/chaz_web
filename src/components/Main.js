import {Col, Container, Row} from "react-bootstrap";
import '../bootstrap.min.css';

function Main() {
    return (
        <div className="text-center">
            <Container>
                <Col>
                    <h3>
                        A platform game where you have to be fast, but not too fast!
                    </h3>
                    Platformer racing in the dark. Race against a blazingly fast AI, but you cannot be too fast...
                    <p/>
                    Otherwise you'll be kept in the dark!
                    <p/>
                    <iframe frameBorder="0" src="https://itch.io/embed/1421303" width="552" height="167"><a
                        href="https://luizchagasjardim.itch.io/chaz">Chaz</a></iframe>
                </Col>
            </Container>
        </div>
    )
}
export default Main;