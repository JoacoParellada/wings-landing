import Header from "@/components/Header/Header";
import styles from "../page.module.css";

export default function Metodologia() {
  return (
    <>
      <Header />
      <main>
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
                  Nuestro equipo técnico lleva a cabo el proyecto con precisión
                  y compromiso
                </p>
              </div>
              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <h3>Control de Calidad</h3>
                <p>
                  Verificamos que cada etapa cumpla con los estándares
                  eléctricos y de seguridad
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
      </main>
    </>
  );
}
