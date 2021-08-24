
import Brand from '../../components/Home/brand';
import MakeDonation from '../../components/Home/makeDonation';
import griot1 from '../../../src/src/img/griovert/1.png';
import griot2 from '../../../src/src/img/griovert/2.png';
import griot3 from '../../../src/src/img/griovert/3.png';
import griot4 from '../../../src/src/img/griovert/4.png';
import griot5 from '../../../src/src/img/griovert/5.png';
import griot6 from '../../../src/src/img/griovert/6.png';
function Griovert() {

    return (
        <div className="Griovert">
      
                    
          <section className="condition-area section-gap">
              <div className="container">
                  

                  <div className="row  justify-content-center" style = {{marginBottom: '50px'}}>

                  <div className="col-lg-6 col-sm-12">
                        <div className="condition-right">
                        
                        <h2>
                        « <strong>GRIOT VERT</strong> »
                        </h2>

                        <p>
                        PROJET « <strong>GRIOT VERT</strong> » : CAMPAGNE DE SENSIBILISATION + ACCOMPAGNEMENT
                      POUR LA PRESERVATION DE L’ENVIRONNEMENT (auprès des autorités administratives,
                      coutumières et religieuses, association de jeunes, de femmes, opérateur économique, coopérative) +
                      PLANTING D’ARBRES+ ASSAINISSEMENT ET GESTION DES DECHETS

                        </p>

                        
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <div class="owl-carousel owl-event">
                    <img class="img-fluid" src={griot1} alt=""/>
                        <img class="img-fluid" src={griot2} alt=""/>
                        <img class="img-fluid" src={griot3} alt=""/>
                        <img class="img-fluid" src={griot4} alt=""/>
                        <img class="img-fluid" src={griot5} alt=""/>
                        <img class="img-fluid" src={griot6} alt=""/>
                      </div>
                  </div>


                  </div>

                  


              </div>
          </section>



          <MakeDonation/>


        <Brand/>
      </div>
    );
  }
  
  export default Griovert;