import informacion from '../informacion/habilidades.json'
import styles from './estilos/Intereshobby.module.css';

const InteresHobby_info = informacion[6].InteresyHobbies;

const Intereshobby = () => {
    return <div className={styles.IntereshobbyContainer}>
        <h2>Intereses y Hobbies</h2>
        <ul>
            {InteresHobby_info?.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>

}
export default Intereshobby;