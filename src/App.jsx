import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './shared/SideBar.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RootNavigator from './router/RootNavigator.jsx';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <>
            <Row>
                <Col lg={4} md={2} xs={3}>
                    <Sidebar />
                </Col>
                <Col lg={8} md={10} xs={9}>
                    <div className="d-flex flex-column justify-content-center align-items-center">
                        <RootNavigator />
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default App;
