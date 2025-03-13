import Login from "./Login";
import '../styles/login.css';
import Card from 'react-bootstrap/Card';

function LoginFull() {
    return (
        <div className="div-login">
            <Card className="login-card"><Login /></Card>
        </div>
    );
}

export default LoginFull;
