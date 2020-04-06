import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

import api from "../../services/api";
import "./styles.css";
import logoImg from "../../assets/logo.svg";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [city, setCity] = useState("");
  const [uf, setUf] = useState("");

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();
    const data = {
      nome,
      email,
      whatsapp,
      city,
      uf
    };

    try {
      const response = await api.post("ongs", data);
      alert(`Seu ID de acesso: ${response.data.id}`);
      history.push("/");
    } catch (error) {
      alert("Error no cadastro, tente novamente");
    }
  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Casdatro</h1>
          <p>Faça seu cadastro e peça dinheiro honesto</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size="16" color="#E02041" />
            Fazer Login
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input
            placeholder="Nome do ONG"
            value={nome}
            onChange={e => setNome(e.target.value)}
          />
          <input
            placeholder="Email"
            type="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="WhatsApp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />
          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
