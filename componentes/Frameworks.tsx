import informacion from '../informacion/habilidades.json';
import styles from './estilos/Frameworks.module.css';
const frameworks = informacion[2]?.FrameworksBibliotecas?.[0];
const frameworksFrontend = informacion[2]?.FrameworksBibliotecas?.[1];

const Frameworksbibliotecas = ()=>{
    return  <div className={styles.FrameworksContainter}>
                <h2>Frameworks | Bibliotecas</h2>
                <div>
                    <ul>
                        {frameworks?.map((item:string | string[] | undefined, index: number)=> <li key={index}>{item}</li>)}
                    </ul>
                    <ul>
                        {frameworksFrontend?.map((item:string | string[] | undefined, index: number)=> <li key={index}>{item}</li>)}
                    </ul>
            </div>
    </div>
}

export default Frameworksbibliotecas;