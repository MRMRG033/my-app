import informacion from '../informacion/habilidades.json';
import styles from './estilos/Experienciaeducativa.module.css'
const experiencia_info = informacion[0].ExperienciaEducativa;
const Experienciaeducativa = ()=>{
    const anio: number = new Date().getFullYear();
    return (
        <div className={styles.ExperienciaeducativaContainer}>
            <h2>Aprendizaje Autodidacta | 2020-{anio}</h2>
            <ul>
                {experiencia_info?.map((item, index)=><li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}

export default Experienciaeducativa;