import React, { useState } from "react";

import "./styles.css";
import { Link, useHistory } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import api from "../../services/api";

export default function NewIncident() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");

  const ongId = localStorage.getItem("ongId");

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();
    const data = {
      title,
      description,
      value
    };

    try {
      await api.post("incidents", data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push("/profile");
    } catch (error) {
      alert("Error no cadastro, tente novamente");
    }
  }
  return (
    <div className="incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />

          <h1>Casdatrar Novo Pedido</h1>
          <p>Peça dinheiro honesto pra alguem te ajudar</p>

          <Link className="back-link" to="/profile">
            <FiArrowLeft size="16" color="#E02041" />
            Voltar para Home
          </Link>
        </section>
        <form onSubmit={handleNewIncident}>
          <input
            placeholder="Titulo do pedido"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input
            placeholder="Valor em Reais"
            value={value}
            onChange={e => setValue(e.target.value)}
          />

          <button className="button" type="submit">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
