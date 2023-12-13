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
                <Col lg={3} xs={2}>
                    <Sidebar />
                </Col>
                <Col lg={9} xs={10}>
                    <div>
                        <RootNavigator />
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default App;
