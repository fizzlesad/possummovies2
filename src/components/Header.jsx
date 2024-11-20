import logo from "../assets/PossumLogo2.png";
import './Header.css'

function Header() {
  return (
    <div class="opaque-top-rectangle">
      <img class="possum-logo" src={logo} alt="Possum Logo" />
      <p class="title">Possum</p>
      <button class="sign-in-button">Sign In</button>
      <button class="sign-up-button">Sign Up</button>
    </div>
  );
}

export default Header;
