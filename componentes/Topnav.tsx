"use client"
import React, { useEffect, useState } from 'react';
import styles from './estilos/Topnav.module.css';
//import {RxHamburgerMenu} from 'react-icons/rx'
import {BiCodeAlt}from 'react-icons/bi'
import {MdSchool} from 'react-icons/md'
import {FaHeadSideVirus} from 'react-icons/fa'
import {HiHome} from 'react-icons/hi'
const Navtop = () => {

  const [activeSection, setActiveSection ] = useState<string | null>(null);
  useEffect(() => {
    const handleScroll = () => {
      
      const contenedores = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;
      contenedores.forEach((element) =>{
        const sectionTop= element.offsetTop;
        const sectionHeight = element.offsetHeight;

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
return(
  <nav className={styles.TopnavContainer}>
      <ul className={activeSection === '' ? styles.inactiveNav : styles.activeNav} id={styles.nav_desktop}>
          <li className={activeSection === '' ? styles.active : ''}><a href='#Presentacion_container'>Inicio</a></li>
          <li className={activeSection === 'Experiencia_container' ? styles.active: ''}><a href='#Experiencia_container' >Experiencia</a></li>
          <li className={activeSection === 'Habilidades_container' ? styles.active: ''}><a href='#Habilidades_container'>Habilidades</a></li>
          <li className={activeSection === 'Comunicaciones_container' ? styles.active: ''}><a href='#Intereses_container'>Intereses</a></li>
      </ul>
      <ul id={styles.nav_smartphone}>
          <li className='' ><a href='#Presentacion_container'><HiHome height="30px  " /></a></li>
          <li ><a href='#Experiencia_container' ><MdSchool /></a></li>
          <li ><a href='#Habilidades_container'><BiCodeAlt /></a></li>
          <li ><a href='#Intereses_container'><FaHeadSideVirus /></a></li>
      </ul>
    </nav>
    )
};
//estamos en el estilado
export default Navtop;
