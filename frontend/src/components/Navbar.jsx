import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [showModal, setShowModal] = useState(false);
  const [level, setLevel] = useState(0);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);
  const navigate=useNavigate()
  const handleLogin = (username) => {
    if (username === "admin") {
      setLevel(1);
    } else {
      setLevel(2);
    }
  }

  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-dark text-white ">
        <div className="container-md">
          <a className="navbar-brand text-white " href="#">
            Bilge Web
          </a>
        </div>
        <div className="navbar navbar-expand-lg bg-dark text-white">
          {level === 0 && (
            <button type="button" className="navbar-brand text-white btn btn-primary" onClick={handleShowModal}>
              Yeni Görev Ekle
            </button>
          )}
          {level === 1 && (
            <button type="button" className="navbar-brand text-white btn btn-primary" onClick={handleShowModal}>
              Yeni Görev Ekle
            </button>
          )}
          <button type="button" onClick={()=>navigate('/login')   } className="navbar-brand text-white btn btn-primary">
            Giriş
          </button>
          <button type="button" onClick={()=>navigate('/register')} className="navbar-brand text-white btn btn-primary">
            Kaydol
          </button>
        </div>
      </nav>
     
      <Modal show={showModal} onHide={handleCloseModal} centered  size="lg"  >
        <Modal.Header closeButton>
          <Modal.Title>Yeni Görev Ekle</Modal.Title>
        </Modal.Header>
        <Modal.Body   >
          <Form className=' mt-5 ' >
            <Form.Group controlId="formTaskTitle">
              <Form.Label>Görev Başlığı</Form.Label>
              <Form.Control type="text" placeholder="Görev başlığını giriniz" />
            </Form.Group>

            <Form.Group controlId="formTaskDescription">
              <Form.Label>Görev Açıklaması</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Görev açıklamasını giriniz" />
            </Form.Group>

            <Form.Group controlId="formTaskDeadline">
              <Form.Label>Bitiş Tarihi</Form.Label>
              <Form.Control type="date" />
            </Form.Group>

            <Form.Group controlId="formTaskAssignedTo">
              <Form.Label>Atandığı Kişi</Form.Label>
              <Form.Control as="select" multiple>
                <option>user1</option>
                <option>user2</option>
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={handleCloseModal}>
            İptal
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Kaydet
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Navbar;
