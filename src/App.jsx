import "./App.css";

function App() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* ================= NAVEGACIÓN ================= */}

      <nav className="navbar">
        <a href="#inicio" className="logo">
          JT.
        </a>

        <div className="navLinks">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#tecnologias">Tecnologías</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#investigacion">Investigación</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#contacto">Contacto</a>
        </div>
      </nav>

      <main>
        {/* ================= 00. INICIO ================= */}

        <section className="hero" id="inicio">
          <div className="heroContent">
            <p className="hello">Hola, soy</p>

            <h1>
              Julián Olmedo
              <br />
              <span>Travez Esquivel</span>
            </h1>

            <h2>
              Systems Engineer · Software Developer · AI · Automation
            </h2>

            <p className="description">
              Ingeniero en Sistemas enfocado en desarrollo de software,
              inteligencia artificial y automatización de procesos. Desarrollo
              soluciones utilizando tecnologías modernas y modelos de Deep
              Learning aplicados a problemas reales.
            </p>

            <div className="technologies">
              <span>Python</span>
              <span>React</span>
              <span>MongoDB</span>
              <span>PyTorch</span>
              <span>Django</span>
              <span>n8n</span>
            </div>

            <div className="buttons">
              <a href="#proyectos" className="primaryButton">
                Ver proyectos
              </a>

              <a
                href="https://github.com/JulianT3370"
                target="_blank"
                rel="noreferrer"
                className="secondaryButton"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          <div className="visual">
            <div className="codeCard">
              <div className="codeHeader">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <pre>
{`const developer = {
  name: "Julián Travez",
  role: "Systems Engineer",

  focus: [
    "Software Development",
    "Artificial Intelligence",
    "Automation"
  ],

  technologies: [
    "Python",
    "React",
    "MongoDB",
    "PyTorch",
    "n8n"
  ]
};`}
              </pre>
            </div>
          </div>
        </section>

        {/* ================= 01. SOBRE MÍ ================= */}

        <section className="section sectionAlt" id="sobre-mi">
          <div className="sectionHeader">
            <span>01.</span>
            <h2>Sobre mí</h2>
          </div>

          <div className="aboutGrid">
            <div className="aboutText">
              <p>
                Soy Ingeniero en Sistemas con experiencia en desarrollo de
                software, inteligencia artificial, automatización y soporte
                tecnológico.
              </p>

              <p>
                He trabajado con Python, React y MongoDB en el desarrollo de
                aplicaciones, además de crear flujos de automatización mediante
                n8n.
              </p>

              <p>
                Mi trabajo académico se ha enfocado en Deep Learning y visión
                por computador aplicados al análisis de imágenes médicas.
              </p>

              <p>
                Mi investigación sobre clasificación de adenocarcinoma de
                próstata mediante redes neuronales convolucionales fue aceptada
                para presentación oral y publicación en ICAT 2026.
              </p>

              <p>
                Me interesa crear soluciones que combinen software,
                inteligencia artificial, datos y automatización para resolver
                problemas reales.
              </p>
            </div>

            <div className="aboutStats">
              <div className="statCard">
                <strong>ICAT 2026</strong>
                <span>Investigación aceptada</span>
              </div>

              <div className="statCard">
                <strong>2019–2020</strong>
                <span>Experiencia profesional en Suiza</span>
              </div>

              <div className="statCard">
                <strong>2024</strong>
                <span>Experiencia en desarrollo</span>
              </div>

              <div className="statCard">
                <strong>3</strong>
                <span>Idiomas</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 02. TECNOLOGÍAS ================= */}

        <section className="section" id="tecnologias">
          <div className="sectionHeader">
            <span>02.</span>
            <h2>Tecnologías</h2>
          </div>

          <p className="sectionIntro">
            Tecnologías y herramientas con las que he trabajado en desarrollo,
            investigación y automatización.
          </p>

          <div className="skillsGrid">
            <div className="skillCard">
              <div className="skillIcon">&lt;/&gt;</div>
              <h3>Desarrollo</h3>

              <div className="skillTags">
                <span>Python</span>
                <span>JavaScript</span>
                <span>React</span>
                <span>Django</span>
                <span>HTML</span>
                <span>GitHub</span>
              </div>
            </div>

            <div className="skillCard">
              <div className="skillIcon">AI</div>
              <h3>Inteligencia Artificial</h3>

              <div className="skillTags">
                <span>PyTorch</span>
                <span>Scikit-learn</span>
                <span>Deep Learning</span>
                <span>CNN</span>
                <span>Computer Vision</span>
                <span>Transfer Learning</span>
              </div>
            </div>

            <div className="skillCard">
              <div className="skillIcon">DB</div>
              <h3>Datos</h3>

              <div className="skillTags">
                <span>MongoDB</span>
                <span>SQL</span>
                <span>SQLite</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
              </div>
            </div>

            <div className="skillCard">
              <div className="skillIcon">⚡</div>
              <h3>Automatización</h3>

              <div className="skillTags">
                <span>n8n</span>
                <span>APIs</span>
                <span>Webhooks</span>
                <span>Workflows</span>
                <span>Process Automation</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 03. PROYECTOS ================= */}

        <section className="section sectionAlt" id="proyectos">
          <div className="sectionHeader">
            <span>03.</span>
            <h2>Proyectos</h2>
          </div>

          <p className="sectionIntro">
            Proyectos relacionados con inteligencia artificial, desarrollo de
            software, automatización e infraestructura.
          </p>

          <div className="projectsGrid">
            {/* IA PRÓSTATA */}

            <article className="projectCard featuredProject">
              <div className="projectTop">
                <span className="projectType">INTELIGENCIA ARTIFICIAL</span>
                <span className="projectStatus research">Investigación</span>
              </div>

              <h3>Clasificación de Adenocarcinoma de Próstata</h3>

              <p>
                Desarrollo y evaluación de modelos de Deep Learning para la
                clasificación automática de imágenes histopatológicas de
                adenocarcinoma de próstata.
              </p>

              <p>
                El proyecto utiliza redes neuronales convolucionales, Transfer
                Learning y métricas especializadas para evaluar el desempeño de
                los modelos.
              </p>

              <div className="projectTech">
                <span>Python</span>
                <span>PyTorch</span>
                <span>CNN</span>
                <span>Transfer Learning</span>
                <span>Django</span>
              </div>

              <div className="projectLinks">
                <a href="#investigacion">Ver investigación →</a>
              </div>
            </article>

            {/* ALARMAS */}

            <article className="projectCard">
              <div className="projectTop">
                <span className="projectType">FULL STACK</span>
                <span className="projectStatus completed">Proyecto</span>
              </div>

              <h3>Sistema de Alarmas Comunitarias</h3>

              <p>
                Proyecto de software orientado a la gestión de alarmas
                comunitarias, estructurado mediante frontend y backend
                independientes.
              </p>

              <div className="projectTech">
                <span>React</span>
                <span>JavaScript</span>
                <span>API</span>
                <span>GitHub</span>
              </div>

              <div className="projectLinks">
                <a
                  href="https://github.com/JulianT3370/FrontAlarmasComunitariasUIO"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend ↗
                </a>

                <a
                  href="https://github.com/JulianT3370/BackAlarmasComuntariasUIO"
                  target="_blank"
                  rel="noreferrer"
                >
                  Backend ↗
                </a>
              </div>
            </article>

            {/* N8N */}

            <article className="projectCard">
              <div className="projectTop">
                <span className="projectType">AUTOMATIZACIÓN</span>
                <span className="projectStatus development">
                  En desarrollo
                </span>
              </div>

              <h3>Automatización de Procesos con n8n</h3>

              <p>
                Creación de workflows para automatizar tareas e integrar
                aplicaciones y servicios mediante APIs y Webhooks.
              </p>

              <div className="projectTech">
                <span>n8n</span>
                <span>APIs</span>
                <span>Webhooks</span>
                <span>Automation</span>
              </div>

              <div className="projectLinks">
                <span>Proyecto en preparación</span>
              </div>
            </article>

            {/* TERRAFORM */}

            <article className="projectCard">
              <div className="projectTop">
                <span className="projectType">DEVOPS / CLOUD</span>
                <span className="projectStatus development">
                  En desarrollo
                </span>
              </div>

              <h3>Infrastructure as Code con Terraform</h3>

              <p>
                Proyecto orientado a automatizar la creación y configuración de
                infraestructura utilizando Infrastructure as Code.
              </p>

              <p>
                Actualmente se encuentra en desarrollo y será completado con
                infraestructura reproducible y documentación técnica.
              </p>

              <div className="projectTech">
                <span>Terraform</span>
                <span>IaC</span>
                <span>DevOps</span>
              </div>

              <div className="projectLinks">
                <a
                  href="https://github.com/JulianT3370/terraform"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub ↗
                </a>
              </div>
            </article>
          </div>
        </section>

        {/* ================= 04. INVESTIGACIÓN ================= */}

        <section className="section" id="investigacion">
          <div className="sectionHeader">
            <span>04.</span>
            <h2>Investigación</h2>
          </div>

          <div className="researchCard">
            <div className="researchContent">
              <div className="researchBadges">
                <span>ICAT 2026</span>
                <span>Deep Learning</span>
                <span>Computer Vision</span>
              </div>

              <p className="researchLabel">INVESTIGACIÓN ACEPTADA</p>

              <h3>
                A Convolutional Neural Network-Based Model for Classification
                of Prostate Adenocarcinoma
              </h3>

              <p className="paperId">Paper ID: 22</p>

              <p className="researchDescription">
                Investigación enfocada en el desarrollo y evaluación de modelos
                basados en redes neuronales convolucionales para la
                clasificación automática de imágenes histopatológicas de
                adenocarcinoma de próstata.
              </p>

              <div className="researchInfo">
                <div>
                  <span>Evento</span>
                  <strong>ICAT 2026</strong>
                </div>

                <div>
                  <span>Modalidad</span>
                  <strong>Presentación oral</strong>
                </div>

                <div>
                  <span>Estado</span>
                  <strong>Aceptado</strong>
                </div>

                <div>
                  <span>Serie prevista</span>
                  <strong>Springer CCIS</strong>
                </div>
              </div>

              <div className="researchTech">
                <span>Python</span>
                <span>PyTorch</span>
                <span>CNN</span>
                <span>Transfer Learning</span>
                <span>Computer Vision</span>
                <span>Deep Learning</span>
              </div>
            </div>

            <div className="researchVisual">
              <div className="publicationIcon">AI</div>

              <p>Applied Technologies</p>

              <strong>Proceedings of ICAT 2026</strong>

              <span>
                Communications in Computer and Information Science
              </span>

              <div className="acceptedBadge">✓ Accepted</div>
            </div>
          </div>
        </section>

        {/* ================= 05. EXPERIENCIA ================= */}

        <section className="section sectionAlt" id="experiencia">
          <div className="sectionHeader">
            <span>05.</span>
            <h2>Experiencia</h2>
          </div>

          <div className="timeline">
            <div className="timelineItem">
              <div className="timelineDot"></div>

              <div className="timelineDate">2024</div>

              <div className="timelineContent">
                <span className="experienceType">DESARROLLO DE SOFTWARE</span>

                <h3>Desarrollador · Prácticas Preprofesionales</h3>

                <h4>Golden Companies</h4>

                <p>
                  Participación en desarrollo y mantenimiento de soluciones de
                  software utilizando Python, React y MongoDB, además de GitHub
                  para control de versiones y colaboración.
                </p>

                <div className="experienceTags">
                  <span>Python</span>
                  <span>React</span>
                  <span>MongoDB</span>
                  <span>GitHub</span>
                </div>
              </div>
            </div>

            <div className="timelineItem">
              <div className="timelineDot"></div>

              <div className="timelineDate">6 meses</div>

              <div className="timelineContent">
                <span className="experienceType">PASANTÍA</span>

                <h3>Pasante de Desarrollo</h3>

                <h4>Golden Companies</h4>

                <p>
                  Desarrollo y mantenimiento de aplicaciones, participación en
                  pruebas y resolución de problemas técnicos.
                </p>

                <div className="experienceTags">
                  <span>Python</span>
                  <span>React</span>
                  <span>MongoDB</span>
                </div>
              </div>
            </div>

            <div className="timelineItem">
              <div className="timelineDot"></div>

              <div className="timelineDate">2019 – 2020</div>

              <div className="timelineContent">
                <span className="experienceType">
                  EXPERIENCIA INTERNACIONAL
                </span>

                <h3>Técnico en Reparación de Computadoras</h3>

                <h4>AA-Z Service · Suiza</h4>

                <p>
                  Diagnóstico de hardware y software, mantenimiento preventivo y
                  correctivo, instalación de sistemas y soporte técnico.
                </p>
              </div>
            </div>

            <div className="timelineItem">
              <div className="timelineDot"></div>

              <div className="timelineDate">2025 – 2026</div>

              <div className="timelineContent">
                <span className="experienceType">DOCENCIA</span>

                <h3>Docente de Bachillerato</h3>

                <h4>Unidad Educativa Ecuador Patria Mía</h4>

                <p>
                  Docencia de Matemática, Física y Computación, planificación de
                  clases, elaboración de material educativo y utilización de
                  herramientas tecnológicas en el proceso de enseñanza.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 06. FORMACIÓN ================= */}

        <section className="section" id="formacion">
          <div className="sectionHeader">
            <span>06.</span>
            <h2>Formación</h2>
          </div>

          <div className="educationGrid">
            <div className="educationCard mainEducation">
              <span className="educationYear">2020 – 2026</span>

              <h3>Ingeniería en Sistemas</h3>

              <h4>Universidad Central del Ecuador</h4>

              <p>
                Formación en desarrollo de software, bases de datos,
                inteligencia artificial, Machine Learning, Deep Learning,
                ingeniería de software y sistemas informáticos.
              </p>
            </div>

            <div className="educationCard">
              <span className="educationYear">2011</span>

              <h3>Bachiller Técnico en Electromecánica Automotriz</h3>

              <h4>Colegio Miguel de Santiago</h4>

              <p>
                Formación técnica en electricidad, mecánica y sistemas
                electromecánicos aplicados al área automotriz.
              </p>
            </div>
          </div>

          <div className="languages">
            <h3>Idiomas</h3>

            <div className="languageGrid">
              <div>
                <strong>Español</strong>
                <span>Nativo</span>
              </div>

              <div>
                <strong>Inglés</strong>
                <span>B1 · Intermedio</span>
              </div>

              <div>
                <strong>Francés</strong>
                <span>A2 · Básico</span>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 07. CONTACTO ================= */}

        <section className="contactSection" id="contacto">
          <p className="contactNumber">07.</p>

          <h2>¿Trabajamos juntos?</h2>

          <p>
            Estoy interesado en oportunidades relacionadas con desarrollo de
            software, inteligencia artificial, automatización y tecnologías
            emergentes.
          </p>

          <div className="contactButtons">
            <a
              href="mailto:jt5052@gmail.com"
              className="primaryButton"
            >
              Enviar correo
            </a>

            <a
              href="https://github.com/JulianT3370"
              target="_blank"
              rel="noreferrer"
              className="secondaryButton"
            >
              GitHub ↗
            </a>
          </div>

          <div className="contactDetails">
            <span>Quito, Ecuador</span>
            <span>•</span>
            <a href="mailto:jt5052@gmail.com">jt5052@gmail.com</a>
            <span>•</span>
            <a href="tel:+593960906857">096 090 6857</a>
          </div>
        </section>
      </main>

      {/* ================= FOOTER ================= */}

      <footer>
        <p>
          © {currentYear} Julián Olmedo Travez Esquivel
        </p>

        <p>Diseñado y desarrollado con React.</p>
      </footer>
    </>
  );
}

export default App;