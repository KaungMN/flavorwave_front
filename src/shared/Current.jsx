import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './current.css';

export default function Current() {
    const location = useLocation();

    console.log(location.pathname);
    return (
        <div className="current-path-section mx-auto">
            <Container className="current-path-container">
                <span style={{ fontSize: '22px', textTransform: 'capitalize', fontWeight: "600" }}>
                    {location.pathname === '/' ? '/home' : location.pathname.replace(/\//g, '＞').slice(1)}
                </span>
            </Container>
        </div>
    );
}
