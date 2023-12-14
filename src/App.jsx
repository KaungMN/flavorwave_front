import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Sidebar from './shared/SideBar.jsx';
import Current from './shared/Current.jsx';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RootNavigator from './router/RootNavigator.jsx';
import { getMenuList } from './constants/index.js';

function App() {
    if (getMenuList().length === 0) return <RootNavigator />;

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
                <Col xl={2} lg={2} xs={2}></Col>
                <Col xl={10} lg={10} xs={10}>
                    <Current />
                </Col>
            </Row>
            <Row>
                <Col lg={2} xs={2}>
                    <Sidebar />
                </Col>
                <Col style={{ marginTop: '80px' }} lg={10} xs={10}>
                    <div>
                        <RootNavigator />
                    </div>
                </Col>
            </Row>
        </>
    );
}

export default App;
