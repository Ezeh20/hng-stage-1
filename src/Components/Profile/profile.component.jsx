import "./profile.style.css";
import profile from '../../assets/img/display-pic.svg';
import profileHover from "../../assets/img/display-pic-hover.svg";
import more from '../../assets/img/more-Default.svg'

const Profile = () => {
  return (
    <div className="profile">
      <div className="user-info">
        <img src={profile} alt="" />

      </div>
        <img src={more} alt="" className="nav-button"/>
    </div>
  );
};

export default Profile;
