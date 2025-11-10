import Header from "@/components/Header/Header";
import styles from "../page.module.css";

export default function EnergiaSolar() {
  return (
    <>
      <Header />
      <main>
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
      </main>
    </>
  );
}
