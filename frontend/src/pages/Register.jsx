import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Burada form verilerini göndermek için uygun bir API'ye istek gönderilebilir
    console.log({ name, email, password, confirmPassword });
  };

  return (
    <div className="container">
      <h1 className="my-5">Kaydol</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>İsim</Form.Label>
          <Form.Control type="text" placeholder="İsminizi girin" value={name} onChange={(e) => setName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label>E-posta Adresi</Form.Label>
          <Form.Control type="email" placeholder="E-posta adresinizi girin" value={email} onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formPassword">
          <Form.Label>Şifre</Form.Label>
          <Form.Control type="password" placeholder="Şifre oluşturun" value={password} onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formConfirmPassword">
          <Form.Label>Şifre Tekrar</Form.Label>
          <Form.Control type="password" placeholder="Şifrenizi tekrar girin" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Kaydol
        </Button>
        <p className="mt-3">
          Zaten hesabınız var mı? <Link to="/login">Giriş yapın</Link>
        </p>
      </Form>
    </div>
  );
}

export default Register;
