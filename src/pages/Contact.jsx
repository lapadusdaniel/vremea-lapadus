import React from "react";
import Container from "react-bootstrap/Container";
import "./Contact.css";

function Contact() {
  return (
    <Container style={{ marginTop: "40px" }}>
      <h2>Contact</h2>
      <p>Ai întrebări, sugestii sau feedback? Trimite-ne un mesaj!</p>

      
      <div style={{ marginBottom: "30px" }}>
        <h4>Informații de Contact</h4>
        <ul>
          <li><strong>Telefon:</strong> 0123 456 789</li>
          <li><strong>Email:</strong> contact@vremea-lapadus.ro</li>
          <li><strong>Adresă:</strong> Str. Meteo, nr. 123, București</li>
        </ul>
      </div>

      
      <form>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
            Nume
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Numele tău"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Adresa ta de email"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="message" style={{ display: "block", marginBottom: "5px" }}>
            Mesaj
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Scrie aici mesajul tău..."
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              resize: "vertical",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#a97c50",
            color: "#fff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Trimite
        </button>
      </form>
    </Container>
  );
}

export default Contact;
