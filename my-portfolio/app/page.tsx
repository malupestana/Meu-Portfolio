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
                <img src="/minhafoto.jpeg" alt="Foto de Maria" /> 
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
                <a href="https://www.linkedin.com/in/marialpestana" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
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
          {/* Projeto 1 */}
            <a href="https://github.com/malupestana/infraestrutura-compjr" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-header">
                <span className="project-tag">DevOps & CI/CD</span>
                <div className="project-links">
                  <i className="fab fa-github"></i>
                  <i className="fas fa-external-link-alt"></i>
                </div>
              </div>
              <h3>Pipeline CI/CD com Node.js</h3>
              <p>Projeto focado em infraestrutura (Comp Jr). Implementa uma pipeline completa automatizando integração contínua (ESLint e Jest), análise de qualidade via SonarCloud e entrega contínua (deploy) no Render.</p>
              <div className="project-tech">
                <span>Node.js</span>
                <span>Express</span>
                <span>Jest</span>
                <span>SonarCloud</span>
                <span>Render</span>
              </div>
            </a>
          {/* Projeto 2 */}
            <a href="https://github.com/malupestana/projeto-CienciaEGovernan-aDeDados-RioDeJaneiro" target="_blank" rel="noopener noreferrer" className="project-card">
              <div className="project-header">
                <span className="project-tag">Data Science & Analysis</span>
                <div className="project-links">
                  <i className="fab fa-github"></i>
                </div>
              </div>
              <h3>Análise Socioeconômica do RJ</h3>
              <p>Trabalho individual (Desafio Zetta Lab) focado na coleta, limpeza e análise de dados da base SIDRA/IBGE. O estudo levanta indicadores de infraestrutura e vulnerabilidade para evidenciar disparidades socioeconômicas através de visualizações gráficas.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>Pandas</span>
                <span>Matplotlib</span>
                <span>IBGE/SIDRA</span>
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
                  <h3>Projeto de Inovação e Melhoramento de Processos</h3>
                  <span className="timeline-date"><i className="far fa-calendar"></i> Atualmente</span>
                </div>
                <div className="timeline-company">
                  <span>Projeto de Inovação</span>
                  <span className="timeline-location"><i className="fas fa-map-marker-alt"></i> Lavras, MG</span>
                </div>
                <p className="timeline-desc">Atuo no Projeto de Inovação PENSE - Programa de Inovação em Serviços Editoriais Acadêmicos, focados na melhoria contínua realizando o mapeamento (visão As-Is) e a modelagem otimizada (visão To-Be) de fluxos de trabalho utilizando a notação BPMN. Desenhando e otimizando fluxos de trabalho editoriais, centralizando processos dispersos para permitir o monitoramento em tempo real e a redução de falhas operacionais.</p>
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