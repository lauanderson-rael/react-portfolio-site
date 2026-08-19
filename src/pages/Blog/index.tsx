import { useState, useEffect } from "react";
import {
  Container,
  BlogHero,
  SearchBox,
  PostGrid,
  PostCard,
  LoadingContainer,
  EmptyState,
  LegalNotice,
  SessaoFormulario,
} from "./styles";
import { FiSearch, FiArrowUpRight } from "react-icons/fi";

type Post = {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  category: string[];
};

export default function Blog() {
  const [post, setPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    celular: "",
    mensagem: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { nome, email, celular, mensagem } = formData;
    const subject = `Pergunta de ${nome}`;
    const body = `Nome: ${nome}\nEmail: ${email}\nCelular: ${celular}\n\nMensagem:\n${mensagem}`;
    window.location.href = `mailto:lauanderson38@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const handleReset = () => {
    setFormData({ nome: "", email: "", celular: "", mensagem: "" });
  };

  const filteredPosts = post.filter((item) =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    async function loadApi() {
      const apiKey = import.meta.env.VITE_CURRENTS_API_KEY;
      const keywords = encodeURIComponent(
        "tecnologia OR programação OR inteligência artificial"
      );
      const url = `https://api.currentsapi.services/v1/search?keywords=${keywords}&language=pt&page_size=12`;

      try {
        const res = await fetch(url, {
          headers: {
            Authorization: apiKey ? `Bearer ${apiKey}` : "",
          },
        });

        const data = await res.json();

        if (data.status === "ok" && Array.isArray(data.news)) {
          setPost(data.news.slice(0, 10));
        } else {
          console.error("Erro na API:", data);
        }
      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
      } finally {
        setLoading(false);
      }
    }

    loadApi();
  }, []);

  if (loading) {
    return (
      <Container>
        <LoadingContainer>
          <div className="spinner" />
          <p>Carregando notícias de tecnologia...</p>
        </LoadingContainer>
      </Container>
    );
  }

  return (
    <>
      <Container>
        {/* HERO E BARRA DE BUSCA */}
        <BlogHero>
          <h1>
            Lau<span>Blog</span>
          </h1>
          <p>
            Fique por dentro das últimas notícias sobre Tecnologia, Programação e
            Inteligência Artificial.
          </p>

          <SearchBox>
            <FiSearch />
            <input
              type="text"
              placeholder="Buscar notícias por título..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchBox>
        </BlogHero>

        {/* LISTAGEM DOS POSTS */}
        <PostGrid>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((item) => (
              <PostCard key={item.id}>
                <div className="card-image">
                  <img
                    src={
                      item.image && item.image !== "None"
                        ? item.image
                        : "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
                    }
                    alt={item.title}
                  />
                  <span className="category-badge">
                    {item.category && item.category.length > 0
                      ? item.category[0]
                      : "Tecnologia"}
                  </span>
                </div>
                <div className="card-body">
                  <h2>{item.title}</h2>
                  <p>
                    {item.description ||
                      "Clique em ler mais para conferir a notícia completa no site original."}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button>
                      Ler mais <FiArrowUpRight />
                    </button>
                  </a>
                </div>
              </PostCard>
            ))
          ) : (
            <EmptyState>
              <h3>Nenhuma notícia encontrada</h3>
              <p>
                Tente buscar por outros termos como "IA", "React" ou
                "Tecnologia".
              </p>
            </EmptyState>
          )}
        </PostGrid>

        {/* AVISO LEGAL */}
        <LegalNotice>
          As imagens e descrições exibidas neste blog são fornecidas por serviços de terceiros e pertencem aos respectivos autores. Ao clicar no botão "Ler mais", você será redirecionado para a publicação original. Todos os direitos reservados aos autores.
        </LegalNotice>
      </Container>

      {/* FORMULÁRIO DE CONTATO */}
      <SessaoFormulario>
        <h2 className="titulo">
          Faça sua <span>Pergunta</span>
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome completo"
            value={formData.nome}
            onChange={(e) =>
              setFormData({ ...formData, nome: e.target.value })
            }
            required
          />
          <input
            type="email"
            placeholder="Seu e-mail"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <input
            type="tel"
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
            required
          ></textarea>

          <div className="btn-enviar">
            <input type="submit" value="ENVIAR" />
            <input type="button" value="LIMPAR" onClick={handleReset} />
          </div>
        </form>
      </SessaoFormulario>
    </>
  );
}