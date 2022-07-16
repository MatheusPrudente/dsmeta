import axios from "axios";
import { toast } from "react-toastify";
import notification from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";

type Props = {
  saleId: number;
};

function handleClick(id: number) {
  axios.get(`${BASE_URL}/sales/${id}/notification`).then((response) => {
    toast.info("SMS enviado com sucesso")
  });
}

function NotificationButton({ saleId }: Props) {
  return (
    <>
      <div
        className="dsmeta-red-btn-container"
        onClick={() => handleClick(saleId)}
      >
        <div className="dsmeta-red-btn">
          <img src={notification} alt="Notificar agente" />
        </div>
      </div>
    </>
  );
}

export default NotificationButton;
