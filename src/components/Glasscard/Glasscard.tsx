// GlassCard.jsx
import "./GlassCard.css";
import { IoIosAirplane } from "react-icons/io";

const GlassCard = () => {
  return (
    <div className="glass-container">
      <div className="glass-card">
        <div>
          <h2 className="glasscardh2"> Adventure & <br /> Outdoors</h2>
          <button className="placecircle"><IoIosAirplane style={{fontSize: "20px"}} /></button>
        </div>
        
        <div className="glass-card-image"></div>
      </div>



      <div className="glass-card1">
        <div>
          <h2 className="glasscardh2">Outdoors, Discover <br /> Yourself</h2>
          <button className="placecircle"><IoIosAirplane style={{fontSize: "20px"}} /></button>
        </div>
        
        <div className="glass-card-image1"></div>
      </div>
    </div>
  );
};

export default GlassCard;
