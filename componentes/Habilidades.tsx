import informacion from '../informacion/habilidades.json';
import styles from './estilos/Habilidades.module.css';
const habilidades = informacion[1].habilidadesTecnicas;
const Habilidades = () => {
    return <div className={styles.HabilidadesContainer}>
        <h2>Habilidades tecnicas</h2>
        <ul>
            {habilidades?.map((item: string, index: number) => <li key={index}>{item}</li>)}
        </ul>
    </div>
}
export default Habilidades;