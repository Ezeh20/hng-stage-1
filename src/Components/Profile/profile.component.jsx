import { useState } from "react";

import "./profile.style.css";
import profile from '../../assets/img/ceejay.webp';
import more from '../../assets/img/more-Default.svg';
import morepressed from '../../assets/img/more-Pressed.svg';
import share from '../../assets/img/Share-Default.svg';
import tool from '../../assets/img/Tooltip.svg';
import clicked from '../../assets/img/State-Focus.svg';
import cam from '../../assets/img/cam.svg';


const Profile = () => {
  const [isActive, setIsActive] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [moreButton, setMoreButton] = useState(false)


  const handle = () => {
    setIsActive(current => !current)
  }
  return (
    <div className="head">
      <div className="profile">
        <div className="user-info">
          <div className="profile-sec">
            <div className="img" style={{
              backgroundImage: `url(${profile})`
            }} />
            <div className="overlay">
              <img src={cam} alt="" className="cam" />
            </div>
          </div>
          <p className="twitter" id="twitter">Ceejay__1</p>
          <p className="slack" id="slack" hidden>Cii-jay</p>
        </div>
        <div className="nav-button">
          <img src={moreButton ? morepressed : more} alt="" className="more-button" onClick={() => setMoreButton(click => !click)} />
          <div className="share-share">
            <img src={tool} alt="tool-tip" className="tool" style={showTooltip ? { visibilty: "visible" } : { visibility: "hidden" }} />
            <img src={isActive ? clicked : share} alt="" className="share-button" onMouseEnter={() => setShowTooltip(true)} onMouseLeave={() => setShowTooltip(false)}
              onClick={handle}
            />

          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
