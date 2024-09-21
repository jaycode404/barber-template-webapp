import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Contáctanos</h4>
          <p>
            Email: <a href="mailto:info@salon.com">info@brb.com</a>
          </p>
          <p>
            Teléfono: <a href="tel:+1234567890">+1 234 567 890</a>
          </p>
        </div>
        <div className="footer-column">
          <h4>Ubicación</h4>
          <p>Calle BRB 123</p>
          <p>Ciudad del barberia, SC 12345</p>
        </div>
        <div className="footer-column">
          <h4>Horario de Atención</h4>
          <p>Lunes - Viernes: 9am - 6pm</p>
          <p>Sábado: 10am - 4pm</p>
          <p>Domingo: Cerrado</p>
        </div>
        <div className="footer-column">
          <h4>Síguenos</h4>
          <p>
            <a
              href="https://facebook.com"
              target="_blank"
              
            >
              Facebook
            </a>
          </p>
          <p>
            <a
              href="https://instagram.com"
              target="_blank"
              
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://twitter.com"
              target="_blank"
              
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
