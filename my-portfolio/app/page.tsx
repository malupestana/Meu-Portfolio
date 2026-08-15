export default function Home() {
  return (
    <>
      {/* Elementos de Background */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      {/* Navegação */}
      <header>
        <nav>
          <a href="#" className="logo">&lt;MARIA.DEV /&gt;</a>
          <ul className="nav-links">
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#tecnologias">Tecnologias</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li><a href="#experiencia">Experiência</a></li>
          </ul>
        </nav>
      </header>

      <main className="container">
        
        {/* Seção Hero (Sobre) */}
        <section id="sobre" className="hero">
          <div className="hero-content">
            <div className="hero-image">
              <div className="avatar-placeholder">
                <i className="fas fa-user"></i>
                {/* <img src="/sua-foto.jpg" alt="Foto de Maria" /> */}
              </div>
            </div>
            <div className="hero-text">
              <span className="tag-subtitle">Desenvolvedora Backend</span>
              <h1 className="hero-title">Olá, meu nome é <span>Maria</span></h1>
              <p className="hero-desc">
                Sou desenvolvedora com foco em backend, atualmente me graduando na UFLA, construindo APIs robustas, microsserviços escaláveis e pipelines de dados. Apaixonada por código limpo, performance e arquiteturas que realmente funcionam em produção.
              </p>
              <div className="hero-buttons">
                <a href="#projetos" className="btn btn-primary">Ver projetos</a>
                <a href="#experiencia" className="btn btn-outline">Experiência</a>
                <a href="www.linkedin.com/in/marialpestana" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Seção Tecnologias */}
        <section id="tecnologias">
          <div className="section-header">
            <span className="tag-subtitle">Stack Técnica</span>
            <h2 className="section-title">Tecnologias</h2>
          </div>

          <div className="tech-grid">
            <div className="tech-card">
              <i className="fab fa-git-alt tech-icon git"></i>
              <h3>Git</h3>
              <p>Controle de versão</p>
            </div>
            <div className="tech-card">
              <i className="fab fa-java tech-icon java"></i>
              <h3>Java</h3>
              <p>Backend principal</p>
            </div>
            <div className="tech-card">
              <i className="fab fa-python tech-icon python"></i>
              <h3>Python</h3>
              <p>Scripts & Data</p>
            </div>
            <div className="tech-card">
              <i className="fas fa-c tech-icon cpp"></i>
              <h3>C++</h3>
              <p>Performance</p>
            </div>
          </div>

          <div className="tech-pills">
            <span className="pill">Spring Boot</span>
            <span className="pill">FastAPI</span>
            <span className="pill">Docker</span>
            <span className="pill">Kubernetes</span>
            <span className="pill">GitHub Actions</span>
            <span className="pill">REST APIs</span>
            <span className="pill">Microsserviços</span>
            <span className="pill">MySQL</span>
          </div>
        </section>

        {/* Seção Projetos */}
        <section id="projetos">
          <div className="section-header">
            <span className="tag-subtitle">Portfólio</span>
            <h2 className="section-title">Projetos</h2>
          </div>

          <div className="projects-grid">
            <a href="https://github.com/seu-user/repo1" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-header">
                <span className="project-tag">Backend</span>
                <div className="project-links">
                  <i className="fab fa-github"></i>
                </div>
              </div>
              <h3>API REST de E-commerce</h3>
              <p>Sistema completo de e-commerce com autenticação JWT, pagamentos e gestão de estoque. Suporta mais de 10k requisições/min.</p>
              <div className="project-tech">
                <span>Java</span>
                <span>Spring Boot</span>
                <span>PostgreSQL</span>
                <span>Redis</span>
              </div>
            </a>

            <a href="https://github.com/seu-user/repo2" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-header">
                <span className="project-tag">Data Engineering</span>
                <div className="project-links">
                  <i className="fab fa-github"></i>
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </div>
              <h3>Pipeline de Dados</h3>
              <p>Pipeline automatizado para ingestão e transformação de dados em tempo real, processando 2M de registros diários.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>Apache Kafka</span>
                <span>Docker</span>
                <span>MongoDB</span>
              </div>
            </a>

            <a href="https://github.com/seu-user/repo3" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-header">
                <span className="project-tag">Segurança</span>
                <div className="project-links">
                  <i className="fab fa-github"></i>
                </div>
              </div>
              <h3>Microserviço de Autenticação</h3>
              <p>Serviço centralizado de autenticação e autorização com suporte a OAuth2, SAML e autenticação biométrica.</p>
              <div className="project-tech">
                <span>Java</span>
                <span>Spring Security</span>
                <span>Keycloak</span>
                <span>MySQL</span>
              </div>
            </a>

            <a href="https://github.com/seu-user/repo4" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-header">
                <span className="project-tag">Open Source</span>
                <div className="project-links">
                  <i className="fab fa-github"></i>
                </div>
              </div>
              <h3>Biblioteca de Algoritmos</h3>
              <p>Coleção open source de estruturas de dados e algoritmos otimizados em C++ com benchmarks comparativos.</p>
              <div className="project-tech">
                <span>C++</span>
                <span>CMake</span>
                <span>Git</span>
                <span>GitHub Actions</span>
              </div>
            </a>
          </div>
        </section>

        {/* Seção Experiência */}
        <section id="experiencia">
          <div className="section-header">
            <span className="tag-subtitle">Trajetória</span>
            <h2 className="section-title">Experiência</h2>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3>Estagiária em Inovação e Melhoramento de Processos</h3>
                  <span className="timeline-date"><i className="far fa-calendar"></i> Atualmente</span>
                </div>
                <div className="timeline-company">
                  <span>Projeto / Estágio</span>
                  <span className="timeline-location"><i className="fas fa-map-marker-alt"></i> Lavras, MG</span>
                </div>
                <p className="timeline-desc">Atuação em um projeto focado no mapeamento, melhoramento e inovação de processos, unindo análise crítica, metodologias eficientes e tecnologia.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Maria · Desenvolvido com &lt;/&gt; e muito café</p>
      </footer>
    </>
  );
}