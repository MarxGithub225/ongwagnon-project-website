import logo from '../src/img/logoWagnon.PNG';
import {a} from "react-router-dom";
function Header() {
    return (
      <div className="Header">
        <header id="header">
          <div className="container">
            <div className="row align-items-center justify-content-between d-flex">
              <div id="logo" style = {{width : '50%'}}>
              <a href="/"><img src={logo} alt="" title="" /></a>
              </div>
              <nav id="nav-menu-container">
                <ul className="nav-menu">
                  <li className="menu-active"><a href = "/"> Accueil</a></li>
                  <li className="menu-has-children"><a href="/">A propos</a>
                    <ul>
                    <li><a href = "/about-us">A propos de nous</a></li>
                    <li><a href = "/become-member">Adhérer à l'ONG</a></li>
                    </ul>
                  </li>

                  <li className="menu-has-children"><a href="/">Nos projets</a>
                    <ul>
                    <li><a href = "/grio-vert">Griot vert</a></li>
                    <li><a href = "/eco-souklou">Eco souklou</a></li>
                    <li><a href = "/ohho-yesseh">Ohho yesseh</a></li>
                    </ul>
                  </li>

                  <li><a href="/blog">Actualités</a></li>
  
                  <li><a href="/contacts">Contact</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
  
      </div>
    );
  }
  
  export default Header;