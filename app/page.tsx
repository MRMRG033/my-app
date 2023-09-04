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
      <div id='Presentacion' className='section'>
      <Presentacion />
      </div>
      <div id='Experiencia' className='section'>
        <Experienciaeducativa />
        </div>
      <div id='Habilidades' className='section' style={{height:"100vh", display:'flex', flexDirection:"column", justifyContent:'space-around', background:'black' , scrollSnapType:'y mandatory'}}>
      <Habilidades />
      <Frameworksbibliotecas />
      <Disenoweb />
      </div>
      <Basededatos />
      <div id='Comunicaciones' className='section'>
      <Comunicacion />
      </div>
      <div id='Intereses' className='section'>
      <Intereshobby />
      </div>
    </main>
  )
}
