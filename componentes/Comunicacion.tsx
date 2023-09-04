import informacion from "../informacion/habilidades.json";
import styles from './estilos/Comunicacion.module.css';
const Comunicacion_info = informacion[5].ComunicacionHabilidadesInterpersonales;

const Comunicacion = ()=>{
    return  <div className={styles.ComunicacionContainer}>
        <h2>Habilidades Interpersonales</h2>
        <ul>
                {Comunicacion_info?.map((item:string, index:number)=> <li key={index}>{item}</li>)}
            </ul>
    </div>


}

export default Comunicacion;