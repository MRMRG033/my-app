import informacion from '../informacion/habilidades.json';
import styles from './estilos/Disenoweb.module.css';
const disenoweb: String[] = informacion[4].DisenoWeb as String[]; 
const Disenoweb = ()=>{
    return(
        <div className={styles.DisenowebContainer}>
            <h2>Diseno Web</h2>
            <ul>
                {disenoweb.map((item)=> <li key={item.length}>{item}</li>)}
            </ul>
        </div>
    )
}
export default Disenoweb