import banner from '../../src/img/banner-img.jpg';

function Whoweare(props) {

    return (
      <div className="Whoweare">
       
       <section className="home-banner-area relative banner-area">
          <div className="container-fluid">
          <div className="row  d-flex align-items-center justify-content-center">
          <div className="header-left col-lg-5 col-md-6 ">
          <h1 className="text-white ">&nbsp;</h1>
          <h2>{props.data.title}</h2>
          <p className="pt-10 pb-20">
          WAGNON qui signifie en langue krumen (Ethnie du sud-ouest de la côte d’ivoire) « ce qui apporte le bonheur ». L’objet de notre ONG est de promouvoir et de réaliser en Afrique des actions en faveur de l’environnement en vue d’un développement durable par le moyen de la culture Africaine.
          </p>
          </div>
          <div className="col-lg-7 col-md-6 col-sm-8 header-right">
          <div className="">
          <img className="img-fluid w-100" src={banner} alt=""/>
          </div>
          
          </div>
          </div>
          </div>
          </section>
       
      </div>
    );
  }
  
  export default Whoweare;