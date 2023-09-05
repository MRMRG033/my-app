"use client"
import React from 'react';
import Basededatos from '@/componentes/Basededatos'
import Comunicacion from '@/componentes/Comunicacion'
import Disenoweb from '@/componentes/Disenoweb'
import Frameworksbibliotecas from '@/componentes/Frameworks'
import Habilidades from '@/componentes/Habilidades'
import Intereshobby from '@/componentes/Intereshobby'
import Presentacion from '@/componentes/Presentacion'
import Navtop from '@/componentes/Topnav'
import Experienciaeducativa from '@/componentes/Experienciaeducativa';

export default function Home() {
  return (
    <main>
      <Navtop  />
      <section id='Presentacion_container'>
      <Presentacion />
      </section>
      <section id='Experiencia_container'>
        <Experienciaeducativa />
        </section>
      <section id='Habilidades_container' style={{height:"100vh", display:'flex', flexDirection:"column", justifyContent:'space-around', background:'black' , scrollSnapType:'y mandatory'}}>
      <Habilidades />
      <Frameworksbibliotecas />
      <Disenoweb />
      </section>
      <Basededatos />
      <section id='Comunicaciones_container'>
      <Comunicacion />
      </section>
      <section id='Intereses_container'>
      <Intereshobby />
      </section>
    </main>
  )
}
