import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './shared/SideBar.jsx';
import Current from './shared/Current.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RootNavigator from './router/RootNavigator.jsx';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <>
            <Row
                style={{
                    background: '#f5f5f5',
                    position: 'fixed',
                    width: '100%',
                    zIndex: '1'
                }}
            >
                <Col xl={3} lg={3} xs={2}></Col>
                <Col xl={9} lg={9} xs={10}>
                    <Current />
                </Col>
            </Row>
            <Row>
                <Col lg={3} xs={2}>
                    <Sidebar />
                </Col>
                <Col style={{ marginTop: '80px' }} lg={9} xs={10}>
                    <div>
                        <RootNavigator />
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default App;
