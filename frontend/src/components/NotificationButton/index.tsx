import notification from "../../assets/img/notification-icon.svg";
import './styles.css'

function NotificationButton() {
  return (
    <>
      <div className="dsmeta-red-btn-container">
        <div className="dsmeta-red-btn">
          <img src={notification} alt="Notificar agente" />
        </div>
      </div>
    </>
  );
}

export default NotificationButton;
