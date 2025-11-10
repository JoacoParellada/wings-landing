import Header from "@/components/Header/Header";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <Header />
      <main id="top" className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.logo}>
              <h1>WINGS</h1>
              <span>S.A.S</span>
            </div>
            <h2 className={styles.heroTitle}>
              SOLUCIONES EFICIENTES,
              <br />
              PROACTIVAS Y<br />
              PERSONALIZADAS
            </h2>
            <p className={styles.heroSubtitle}>Servicios Eléctricos</p>
            <div className={styles.heroCta}>
              <a href="#contacto" className={styles.btnPrimary}>
                Contáctanos
              </a>
              <a href="#servicios" className={styles.btnSecondary}>
                Nuestros Servicios
              </a>
            </div>
          </div>
          <div className={styles.heroOverlay}></div>
        </section>

        {/* Introducción */}
        <section className={styles.intro}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Introducción</h2>
            <div className={styles.introContent}>
              <p>
                En <strong>WINGS</strong> somos una empresa especializada en
                obras eléctricas, orientada a brindar soluciones técnicas
                integrales para todo tipo de proyectos. Nuestro compromiso es
                acompañar a cada cliente desde la planificación hasta la
                ejecución, ofreciendo un servicio seguro, eficiente y
                profesional.
              </p>
              <p>
                Contamos con un equipo altamente capacitado, tecnología
                actualizada y una fuerte vocación por la excelencia técnica.
                Atendemos tanto al sector privado como público, trabajando en
                obras residenciales, industriales y comerciales.
              </p>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className={styles.services}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>¿Qué ofrecemos?</h2>
            <div className={styles.servicesGrid}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>⚡</div>
                <h3>Proyecto y Dirección Técnica</h3>
                <p>Cálculo y dirección técnica de obras eléctricas</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔧</div>
                <h3>Mantenimiento Eléctrico</h3>
                <p>Preventivo y correctivo</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📊</div>
                <h3>Tableros Eléctricos</h3>
                <p>Provisión y montaje especializado</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔌</div>
                <h3>Redes de Distribución</h3>
                <p>Tendido en baja y media tensión</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏭</div>
                <h3>Sub Estaciones</h3>
                <p>Montaje de transformadoras</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📈</div>
                <h3>Calidad de Energía</h3>
                <p>Estudio y análisis especializado</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>⚙️</div>
                <h3>Motores Eléctricos</h3>
                <p>Bobinado profesional</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🔋</div>
                <h3>Generadores</h3>
                <p>Montaje y mantenimiento</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🌐</div>
                <h3>Cableado Estructurado</h3>
                <p>Redes, detección de incendios, fibra óptica</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>💡</div>
                <h3>Instalaciones Generales</h3>
                <p>Eléctricas en general</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>📦</div>
                <h3>Materiales y Logística</h3>
                <p>Venta y servicios de logística</p>
              </div>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>🏢</div>
                <h3>Módulos y Oficinas</h3>
                <p>Alquiler y venta</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className={styles.contact}>
          <div className={styles.container}>
            <h2 className={styles.sectionTitle}>Contacto</h2>
            <p className={styles.contactSubtitle}>
              Estamos disponibles para atender tus consultas y proyectos
            </p>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📧</span>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:ropardo3@gmail.com">ropardo3@gmail.com</a>
                  <a href="mailto:electricwings3@gmail.com">
                    electricwings3@gmail.com
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📱</span>
                <div>
                  <h4>Teléfonos</h4>
                  <a href="https://wa.me/2615275304">261 527 5304</a>
                  <a href="https://wa.me/2617592448">261 759 2448</a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📍</span>
                <div>
                  <h4>Dirección</h4>
                  <p>El Parral 2214, Ciudad Mendoza</p>
                </div>
              </div>
              <div className={styles.contactItem}>
                <span className={styles.contactIcon}>📸</span>
                <div>
                  <h4>Instagram</h4>
                  <a
                    href="https://instagram.com/wingselectric"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @wingselectric
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.container}>
            <div className={styles.footerContent}>
              <div className={styles.footerBrand}>
                <h3>WINGS S.A.S</h3>
                <p>Servicios Eléctricos</p>
              </div>
              <div className={styles.footerText}>
                <p>
                  Soluciones eficientes, proactivas y personalizadas para
                  proyectos eléctricos e instalaciones de energía solar.
                </p>
              </div>
            </div>
            <div className={styles.footerBottom}>
              <p>
                &copy; {new Date().getFullYear()} WINGS S.A.S. Todos los
                derechos reservados.
              </p>
            </div>
          </div>
        </footer>
        {/* Back to top */}
        <a
          href="#top"
          className={styles.backToTop}
          aria-label="Volver al inicio"
        >
          ↑
        </a>
      </main>
    </>
  );
}
