"use client"
import React, { useEffect, useState } from 'react';
import styles from './estilos/Topnav.module.css';

const Navtop = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [linkStyles, setLinkStyles] = useState<{ [key: string]: React.CSSProperties }>({
    Presentacion: {},
    Habilidades: {},
    Intereses: {},
    Experiencia: {},
    Comunicaciones: {},
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section, index) => {
        const liElement = document.querySelectorAll('li')[index];
        const sectionTop = section.getBoundingClientRect().top;
        const linkText = liElement.textContent || '';

        if (sectionTop >= 0 && sectionTop <= 350) {
          setLinkStyles((prevState) => ({
            ...prevState,
            [linkText]: { fontSize: '30px', fontWeight: 'bold' },
          }));
        } else {
          // Solo cambia el estilo si no es el enlace activo
          if (linkText !== activeLink) {
            setLinkStyles((prevState) => ({
              ...prevState,
              [linkText]: { fontSize: '24px', fontWeight: 'normal' },
            }));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeLink]);

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <nav className={styles.TopnavContainer}>
      <ul>
        <li className={activeLink === 'Presentacion' ? styles.active : ''}>
          <a href='#Presentacion' style={{ ...linkStyles['Presentacion'], transition: 'font-size 0.2s' }} onClick={() => handleLinkClick('Presentacion')}>
            Inicio
          </a>
        </li>
        <li className={activeLink === 'Experiencia' ? styles.active : ''}>
          <a href='#Experiencia' style={{ ...linkStyles['Experiencia'], transition: 'font-size 0.2s' }} onClick={() => handleLinkClick('Experiencia')}>
            Experiencia
          </a>
        </li>
        <li className={activeLink === 'Habilidades' ? styles.active : ''}>
          <a href='#Habilidades' style={{ ...linkStyles['Habilidades'], transition: 'font-size 0.2s' }} onClick={() => handleLinkClick('Habilidades')}>
            Habilidades
          </a>
        </li>
        <li className={activeLink === 'Comunicaciones' ? styles.active : ''}>
          <a href='#Comunicaciones' style={{ ...linkStyles['Comunicaciones'], transition: 'font-size 0.2s' }} onClick={() => handleLinkClick('Comunicaciones')}>
            Comunicaciones
          </a>
        </li>
        <li className={activeLink === 'Intereses' ? styles.active : ''}>
          <a href='#Intereses' style={{ ...linkStyles['Intereses'], transition: 'font-size 0.2s' }} onClick={() => handleLinkClick('Intereses')}>
            Intereses
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navtop;
