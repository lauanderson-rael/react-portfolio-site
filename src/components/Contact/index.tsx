import { useState } from "react";
import { SessaoFormulario } from "./styles";
import { IoIosMail } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

export function Contact() {
  const [activeTab, setActiveTab] = useState<"email" | "whatsapp">("email");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, email, celular, mensagem } = formData;
    const subject = `Contato de ${nome}`;
    const body = `Nome: ${nome}\nEmail: ${email}\nCelular: ${celular}\n\nMensagem:\n${mensagem}`;
    window.location.href = `mailto:lauanderson38@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleReset = () => {
    setFormData({ nome: "", email: "", celular: "", mensagem: "" });
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, mensagem } = formData;
    const text = `Olá, sou ${nome}. ${mensagem}`;
    window.open(
      `https://api.whatsapp.com/send?phone=5598985571212&text=${encodeURIComponent(
        text
      )}`,
      "_blank"
    );
  };

  return (
    <SessaoFormulario>
      <div>
        <h2 className="titulo">
          Fale<span> comigo</span>
        </h2>

        <div className="tabs">
          <button
            type="button"
            className={`tab-button ${activeTab === "email" ? "active" : ""}`}
            onClick={() => setActiveTab("email")}
          >
            <IoIosMail /> Email
          </button>
          <button
            type="button"
            className={`tab-button ${
              activeTab === "whatsapp" ? "active" : ""
            }`}
            onClick={() => setActiveTab("whatsapp")}
          >
            <FaWhatsapp /> WhatsApp
          </button>
        </div>

        {activeTab === "email" && (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Seu e-mail"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Seu celular"
              value={formData.celular}
              onChange={(e) =>
                setFormData({ ...formData, celular: e.target.value })
              }
            />
            <textarea
              placeholder="Sua mensagem"
              value={formData.mensagem}
              onChange={(e) =>
                setFormData({ ...formData, mensagem: e.target.value })
              }
            ></textarea>
            <div className="btn-enviar" style={{ display: "flex", gap: "10px" }}>
              <input type="submit" value="ENVIAR" />
              <input type="button" value="LIMPAR" onClick={handleReset} />
            </div>
          </form>
        )}

        {activeTab === "whatsapp" && (
          <form onSubmit={handleWhatsAppSubmit}>
            <input
              type="text"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
              required
            />
            <textarea
              placeholder="Sua mensagem"
              value={formData.mensagem}
              onChange={(e) =>
                setFormData({ ...formData, mensagem: e.target.value })
              }
              required
            ></textarea>
            <div className="btn-enviar" style={{ display: "flex", gap: "10px" }}>
              <input type="submit" value="ENVIAR NO WHATSAPP" />
              <input type="button" value="LIMPAR" onClick={handleReset} />
            </div>
          </form>
        )}
      </div>
    </SessaoFormulario>
  );
}
