import "./profile.style.css";
import profile from '../../assets/img/display-pic.svg';
import profileHover from "../../assets/img/display-pic-hover.svg";
import more from '../../assets/img/more-Default.svg'

const Profile = () => {
  return (
    <div className="head">
    <div className="profile">
      <div className="user-info">
        <div>
          <img src={profile} alt="" id="profile__img"/>
          <img src={profileHover} alt="" className="bg-hover" />
        </div>
        <p className="twitter" id="twitter">Ceejay__1</p>
        <p className="twitter" id="slack" hidden>Cii-jay</p>
      </div>
      <img src={more} alt="" className="nav-button" />
    </div>
    </div>
  );
};

export default Profile;
