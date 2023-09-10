"use client"
//import React, { useEffect, useState } from 'react';
import styles from './estilos/Topnav.module.css';
import { Link } from 'react-scroll'
//import {RxHamburgerMenu} from 'react-icons/rx'
import {BiCodeAlt}from 'react-icons/bi'
import {MdSchool} from 'react-icons/md'
import {FaHeadSideVirus} from 'react-icons/fa'
import {HiHome} from 'react-icons/hi'
const Navtop = () => {

return(
  <nav className={styles.TopnavContainer}>
      <ul id={styles.nav_desktop}>
          <li><Link to='Presentacion_container' activeClass={styles.firstListItemActive} smooth={true} spy={true} duration={500} >Inicio</Link></li>
          <li><Link to='Experiencia_container' activeClass={styles.listItemActive} smooth={true} spy={true} duration={500} >Educacion</Link></li>
          <li><Link to='Habilidades_container' activeClass={styles.listItemActive} smooth={true} spy={true} duration={500} >Habilidades</Link></li>
          <li><Link to='Comunicaciones_container' activeClass={styles.listItemActive} smooth={true} spy={true} duration={500}  >Comunicaciones</Link></li>
          <li><Link to='Intereses_container' activeClass={styles.listItemActive} smooth={true}  spy={true} duration={500} >Hobbies</Link></li>
      </ul>
      <ul id={styles.nav_smartphone}>
          <li className={styles.item_nav_smartphone} ><Link to='Presentacion_container' smooth={true} spy={true} duration={500} activeClass={styles.listItemActiveSmartphone}  ><HiHome/></Link></li>
          <li className={styles.item_nav_smartphone} ><Link to='Experiencia_container' smooth={true} spy={true} duration={500} activeClass={styles.listItemActiveSmartphone} ><MdSchool/></Link></li>
          <li className={styles.item_nav_smartphone} ><Link to='Habilidades_container' smooth={true} spy={true} duration={500} activeClass={styles.listItemActiveSmartphone} ><BiCodeAlt/></Link></li>
          <li className={styles.item_nav_smartphone} ><Link to='Intereses_container' smooth={true}  spy={true} duration={500}activeClass={styles.listItemActiveSmartphone} ><FaHeadSideVirus/></Link></li>
      </ul>
    </nav>
    )
};
//estamos en el estilado
export default Navtop;
