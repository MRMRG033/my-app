import React from "react";
import styles from './estilos/Presentacion.module.css'

const Presentacion = ()=>{

    return (
        <section className={styles.PresentacionContainer}>
            <div>
                <img className={styles.PresentacionFoto} src="foto.jpg" />
            <h1 style={{fontSize:120}}>DESARROLLADOR WEB</h1>
            </div>
        </section>
    )
}

export default Presentacion;
