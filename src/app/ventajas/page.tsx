import Header from "@/components/Header/Header";
import styles from "../page.module.css";

export default function Ventajas() {
  return (
    <>
      <Header />
      <main>
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
      </main>
    </>
  );
}
