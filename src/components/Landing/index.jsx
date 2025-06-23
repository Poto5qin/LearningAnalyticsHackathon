import {TOP_SECTION} from '../../Module/General';
import MytypedComponent from '../Typed/index.js';
import './style.css';

const Btn = props => {
  return (
    <button className={props.class}>
      <i className={props.ico}></i>
      {props.type}
      <div className="overlay">
        <div className="overlay-text">{props.overlay}</div>
      </div>
    </button>
  );
};

const About = () => {
  return (
    <div className="AboutMe">
      <h2>{TOP_SECTION.TITLE}</h2>
      <MytypedComponent />
    </div>
  );
};

const Myinfo = () => {
  return (
    <div className="Myinfo">
      <About />
      <p> {TOP_SECTION.SHORT_DESCRIPTION}</p>
      {/* Removed Discord button since SOCIALS is gone */}
      <div className="buttom-group">
        <a href={TOP_SECTION.JUDGES_FORM_LINK}>
          <Btn class="sponsor_btn" type="Judges" overlay="Fill the form" />
        </a>
        <a href={TOP_SECTION.HACKERS_REGISTRATION_FORM_LINK}>
          <Btn
            class="register"
            type="Register "
            overlay="Hackers registration"
          />
        </a>
      </div>
    </div>
  );
};

export {Btn, Myinfo};
