import React, {useState, useEffect} from 'react';


function Footer() {

    const [date , setDate] = useState();

    const getYear = () =>  setDate(new Date().getFullYear())

    useEffect(() => {
      getYear();
    }, [])
    return (
      <div className="Footer">
        <footer className="footer-area section-gap">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 col-sm-6">
                <div className="single-footer-widget">
                  <h6>Qui somme-nous ?</h6>
                  <p style = {{color: '#777777'}}>
                    WAGNON est une ONG Africaine qui signifie en langue krumen (Ethnie du sud-ouest de la côte d’ivoire) « ce qui apporte le bonheur ». L’objet de notre ONG est de promouvoir et de réaliser en Afrique des actions en faveur de l’environnement en vue d’un développement durable par le moyen de la culture Africaine.
                  </p>
                  <p className="footer-text" style = {{color: '#777777'}}>
                    Copyright &copy; {date} Tous droits réservés.
                  </p>
                </div>
              </div>
              
              <div className="col-lg-2 col-md-6 col-sm-6 social-widget">
                <div className="single-footer-widget">
                  <h6>Suivez-nous</h6>
                  <p style = {{color: '#777777'}}>Soyons sociables</p>
                  <div className="footer-social d-flex align-items-center" style = {{color: '#777777'}}>
                    <a href="https://www.facebook.com/WagnonProject"><i className="fa fa-facebook"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </footer>
      </div>
    );
  }
  
  export default Footer;