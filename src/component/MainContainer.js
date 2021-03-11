import './css/Login.css';
import Anouncement from './Anouncement';
import FilmList from './FilmList';
import Footer from './Footer'

const MainContainer = (props) =>{
    return (
        <div>
            <Anouncement/>
            <FilmList click={props.click}/>
            <Footer/>
        </div>
    )
    
}

export default MainContainer