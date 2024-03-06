import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="https://t.me/davarenya">
        <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
          <rect fill="none" height="256" width="256" />
          <path
            d="M88,134.9,177.9,214a8,8,0,0,0,13.1-4.2L228.6,45.6a8,8,0,0,0-10.7-9.2L33.3,108.9c-7.4,2.9-6.4,13.7,1.4,15.3Z"
            fill="none"
            stroke="navy"
          />
          <line
            fill="none"
            stroke="navy"
            x1="88"
            x2="224.1"
            y1="134.9"
            y2="36.6"
          />
          <path
            d="M132.9,174.4l-31.2,31.2A8,8,0,0,1,88,200V134.9"
            fill="none"
            stroke="navy"
          />
        </svg>
      </Link>
      <img src="https://www.codewars.com/users/losevo/badges/micro" alt="" />
      <p className="name">Дмитрий Вареник</p>
      <p className="name">(c) 2024</p>
    </footer>
  );
};

export default Footer;
