"use client"
import React, { useEffect, useState } from 'react';
import styles from './estilos/Topnav.module.css';

const Navtop = () => {
  const [activeSection, setActiveSection ] = useState<string | null>(null)
  useEffect(() => {
    
    const handleScroll = () => {
      
      const contenedores = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;
      contenedores.forEach((element, index) =>{
        const sectionTop= element.offsetTop;
        const sectionHeight = element.offsetHeight;
        if(index === 0){
          console.log(sectionTop)
          console.log(sectionHeight)
          console.log(scrollPosition)
        }
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(element.id)
        }
    });
}
window.addEventListener('scroll', handleScroll);
return ()=>{
  window.removeEventListener('scroll', handleScroll);
}
  },[]);
  return (
    <nav className={styles.TopnavContainer}>
      <ul>
          <li className={activeSection === '' ? styles.active : ''}><a href='#Presentacion_container'>Presentacion</a></li>
          <li className={activeSection === 'Experiencia_container' ? styles.active: ''}><a href='#Experiencia_container' >Experiencia</a></li>
          <li className={activeSection === 'Habilidades_container' ? styles.active: ''}><a href='#Habilidades_container'>Habilidades</a></li>
          <li className={activeSection === 'Comunicaciones_container' ? styles.active: ''}><a href='#Intereses_container'>Intereses</a></li>
      </ul>
    </nav>
  );
};

export default Navtop;
