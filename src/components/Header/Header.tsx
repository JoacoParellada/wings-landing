"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>
          <span className={styles.brandMain}>WINGS</span>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="/">Inicio</a>
          <a href="/energia-solar">Energía Solar</a>
          <a href="/metodologia">Metodología</a>
          <a href="/ventajas">Ventajas</a>
        </nav>

        <button
          className={styles.menuToggle}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
}
