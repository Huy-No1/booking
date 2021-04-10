import '../css/Ticket.css';
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Ticket = (props) => {
    const {item, onDelete}= props;
    return (<div>
        <div className="ticket-container">
            <div className="hide"></div>
            <div className="hidet"></div>
            <div className="hidet" style={{top: 122}}></div>
            <div className="hider"></div>
            <div className="separate"></div>
            <div className="separater"></div>
                <div className="circle" style={{top: -10, left: 36}}></div>
                <div className="circler" style={{top: -10, right: 36}}></div>
                <div className="circle" style={{bottom: -10, left: 36}}></div>
                <div className="circler" style={{bottom: -10, right: 36}}></div>
                <div className="circle" style={{top: 5}}></div>
                <div className="circle" style={{top: 27}}></div>
                <div className="circle" style={{top: 49}}></div>
                <div className="circle" style={{top: 71}}></div>
                <div className="circle" style={{top: 93}}></div>
                <div className="circler" style={{top: 5}}></div>
                <div className="circler" style={{top: 27}}></div>
                <div className="circler" style={{top: 49}}></div>
                <div className="circler" style={{top: 71}}></div>
                <div className="circler" style={{top: 93}}></div>
                <div>
                    {"Phim: " +item.Ticket.Schedule.Movie.Name}
                        <div>
                        {"Ghế: " + item.Ticket.Seat}
                        </div>
                        <div>
                        {"Ngày: " +item.Ticket.Schedule.Time.slice(0,10)}
                        </div>
                        <div>
                        {"Giờ chiếu: "+item.Ticket.Schedule.Time.slice(11, 16)}
                        </div>
                        <FontAwesomeIcon icon={faTimesCircle} className="info-delete" onDoubleClick={() => onDelete(item.TicketId)}/>
                </div>
        </div>
        </div>
    )
}
export default Ticket;