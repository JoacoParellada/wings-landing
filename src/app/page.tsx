import styles from "./page.module.css";

export default function Home() {
  return (
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
              En <strong>WINGS</strong> somos una empresa especializada en obras
              eléctricas, orientada a brindar soluciones técnicas integrales
              para todo tipo de proyectos. Nuestro compromiso es acompañar a
              cada cliente desde la planificación hasta la ejecución, ofreciendo
              un servicio seguro, eficiente y profesional.
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

      {/* Energía Solar */}
      <section className={styles.solar}>
        <div className={styles.container}>
          <div className={styles.solarContent}>
            <div className={styles.solarText}>
              <h2 className={styles.sectionTitle}>Energía Solar</h2>
              <div className={styles.partnerBadge}>
                <span>🤝 VITTEC PARTNER</span>
              </div>
              <p>
                Somos especialistas en sistemas de abastecimiento eléctrico
                mediante la implementación de paneles solares en grandes
                superficies para diversas ramas de la industria y el agro.
              </p>
              <p>
                Nuestras plantas solares optimizan el consumo energético al
                máximo, ofreciendo una respuesta favorable a problemas
                ambientales y económicos.
              </p>
              <p>
                Colaboramos con la independencia energética desde alternativas
                inteligentes de ahorro y prácticas de conciencia ambiental.
                Ofrecemos proyectos adaptados a cada necesidad.
              </p>
              <div className={styles.solarFeatures}>
                <div className={styles.feature}>
                  <span>🌞</span>
                  <p>Optimización máxima del consumo</p>
                </div>
                <div className={styles.feature}>
                  <span>🌱</span>
                  <p>Solución ambiental y económica</p>
                </div>
                <div className={styles.feature}>
                  <span>⚡</span>
                  <p>Independencia energética</p>
                </div>
                <div className={styles.feature}>
                  <span>🎯</span>
                  <p>Proyectos a medida</p>
                </div>
              </div>
            </div>
            <div className={styles.solarImage}>
              <div className={styles.solarImagePlaceholder}>
                <img src="/unsplash_Q3r3Ws-o54s_panel.webp" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología */}
      <section className={styles.methodology}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Metodología de Trabajo</h2>
          <p className={styles.methodologyIntro}>
            En WINGS aplicamos un enfoque técnico-operativo que garantiza
            resultados duraderos y seguros
          </p>
          <div className={styles.methodologySteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Diagnóstico y Planificación</h3>
              <p>
                Analizamos las necesidades del cliente y definimos un plan
                eficiente
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Ejecución Profesional</h3>
              <p>
                Nuestro equipo técnico lleva a cabo el proyecto con precisión y
                compromiso
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Control de Calidad</h3>
              <p>
                Verificamos que cada etapa cumpla con los estándares eléctricos
                y de seguridad
              </p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Acompañamiento Post-Servicio</h3>
              <p>Ofrecemos soporte, mantenimiento y seguimiento técnico</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ventajas */}
      <section className={styles.advantages}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Ventajas y Beneficios</h2>
          <div className={styles.advantagesContent}>
            <p>
              Elegir a <strong>WINGS</strong> como proveedor de soluciones
              eléctricas es apostar por un servicio integral, confiable y
              técnicamente sólido. Nuestro equipo está compuesto por
              profesionales con amplia experiencia en obras eléctricas, lo que
              nos permite abordar cada proyecto con una visión estratégica,
              cuidando cada detalle desde la planificación hasta la entrega
              final.
            </p>
            <div className={styles.advantagesGrid}>
              <div className={styles.advantageCard}>
                <h3>🎯 Servicio Integral</h3>
                <p>
                  Ingeniería, montaje, mantenimiento, redes tecnológicas,
                  provisión de materiales y logística en un mismo equipo
                </p>
              </div>
              <div className={styles.advantageCard}>
                <h3>⚡ Eficiencia Operativa</h3>
                <p>
                  Reducción de tiempos y mayor control en cada etapa del
                  proyecto
                </p>
              </div>
              <div className={styles.advantageCard}>
                <h3>✅ Normas y Estándares</h3>
                <p>
                  Trabajamos bajo normas técnicas que garantizan seguridad y
                  calidad
                </p>
              </div>
              <div className={styles.advantageCard}>
                <h3>👥 Enfoque Personalizado</h3>
                <p>
                  Asesoramiento profesional y acompañamiento continuo, incluso
                  después del proyecto
                </p>
              </div>
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
              &copy; {new Date().getFullYear()} WINGS S.A.S. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </footer>
      {/* Back to top */}
      <a href="#top" className={styles.backToTop} aria-label="Volver al inicio">
        ↑
      </a>
    </main>
  );
}
