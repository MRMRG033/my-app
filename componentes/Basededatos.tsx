import informacion from '../informacion/habilidades.json'
import styles from './estilos/Basededatos.module.css';

const basededatos_info= informacion[3]?.BasesDeDatos;

const Basededatos = ()=>{
    return  <div className={styles.BasededatosContainer}>
        <h2>Bases de Datos</h2>
        <ul>
            {basededatos_info?.map((item:string, index: number)=> <li key={index}>{item}</li>)}
        </ul>
    </div>


}
export default Basededatos;