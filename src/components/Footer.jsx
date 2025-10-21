import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6';

function Footer() {
  return (
    <Navbar
      fixed="bottom"
      bg="dark"
      variant="dark"
      expand="lg"
      className="m-0 p-0 border-0 rounded-0"
      style={{
        margin: 0,
        padding: 0,
        borderRadius: 0,
        border: 'none',
        height: '60px',
      }}
    >
      <Container
        fluid
        className="m-0 p-0 d-flex justify-content-between align-items-center px-4"
        style={{
          color: 'white',
          height: '100%',
        }}
      >
        {/* Texto izquierdo */}
        <p className="m-0 p-0" style={{ fontSize: '0.9rem' }}>
          © 2025 Mi Tienda - Todos los derechos reservados
        </p>

        {/* Íconos de redes */}
        <div className="d-flex gap-3">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            <FaInstagram size={18} />
          </a>
          <a
            href="https://wa.me/5490000000000"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            <FaXTwitter size={18} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'white' }}
          >
            <FaYoutube size={18} />
          </a>
        </div>
      </Container>
    </Navbar>
  );
}

export default Footer;
