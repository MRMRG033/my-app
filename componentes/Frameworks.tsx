import informacion from '../informacion/habilidades.json';
import styles from './estilos/Frameworks.module.css';
const frameworks= informacion[2].FrameworksBibliotecas;

const Frameworksbibliotecas = ()=>{
    return  <div className={styles.FrameworksContainter}>
        <h2>Frameworks | Bibliotecas</h2>
            <ul>
                {frameworks?.map((item:string | string[], index: number)=> <li key={index}>{item}</li>)}
            </ul>
    </div>
}

export default Frameworksbibliotecas;