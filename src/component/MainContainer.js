import './css/Login.css';
import Anouncement from './Anouncement';
import FilmList from './FilmList';
import Footer from './Footer'
import {motion} from 'framer-motion';
const MainContainer = (props) =>{
    return (
        <motion.div
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            exit={{opacity: 0}}
        >
            <Anouncement/>
            <FilmList click={props.click}/>
            <Footer/>
        </motion.div>
    )
    
}

export default MainContainer