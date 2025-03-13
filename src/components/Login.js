import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

function Login() {
    const [formValues, setFormValues] = useState({ email: "", password: "" });
    const [validationStates, setValidationStates] = useState({ emailValid: true, passwordValid: true });

    const validateEmail = (email) => {
        const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length === 8;
    };

    const handleEmailChange = (e) => {
        setFormValues({ ...formValues, email: e.target.value });
        setValidationStates({ ...validationStates, emailValid: validateEmail(e.target.value) });
    };

    const handlePasswordChange = (e) => {
        setFormValues({ ...formValues, password: e.target.value });
        setValidationStates({ ...validationStates, passwordValid: validatePassword(e.target.value) });
    };

    const isFormValid = validationStates.emailValid && validationStates.passwordValid && formValues.email && formValues.password;

    return (
        <div>
            <h1>Login</h1>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control 
                        type="email" 
                        placeholder="Enter email" 
                        onChange={handleEmailChange} 
                        value={formValues.email} 
                        isInvalid={!validationStates.emailValid} 
                    />
                    {!validationStates.emailValid && <Form.Text className="text-muted">Invalid email</Form.Text>}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type="password" 
                        placeholder="Password" 
                        onChange={handlePasswordChange} 
                        value={formValues.password} 
                        isInvalid={!validationStates.passwordValid} 
                    />
                    {!validationStates.passwordValid && <Form.Text className="text-muted">Password should be 8 characters long</Form.Text>}
                </Form.Group>

                <Link to={isFormValid ? "/home" : "#"} style={{ pointerEvents: isFormValid ? "auto" : "none" }}>
                    <Button variant="primary" disabled={!isFormValid}>
                        Log In
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Login;
