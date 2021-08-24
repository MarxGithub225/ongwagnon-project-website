
import Brand from '../../components/Home/brand';
import MakeDonation from '../../components/Home/makeDonation';

import yesseh1 from '../../../src/src/img/yesseh/1.png';
import yesseh2 from '../../../src/src/img/yesseh/2.png';
import yesseh3 from '../../../src/src/img/yesseh/3.png';
import yesseh4 from '../../../src/src/img/yesseh/4.png';
import yesseh5 from '../../../src/src/img/yesseh/5.png';
import yesseh6 from '../../../src/src/img/yesseh/6.png';
function Yesseh() {

    return (
        <div className="Yesseh">
      
      <section className="condition-area section-gap">
              <div className="container">
                  

                  <div className="row  justify-content-center" style = {{marginBottom: '50px'}}>

                  <div className="col-lg-6 col-sm-12">
                        <div className="condition-right">
                        <h2>
                        « <strong>OHHO YESSEH</strong> »
                        </h2>
                        
                        <p>
                        PROJET « <strong>OHHO YESSEH</strong> » OU « JOLIE VILLE » ou « VILLE VERTE ET CREATIVE »
Mise en action des projets GRIOT VERT ET ECO-SOUKLOU + SUIVI ET EVALUATION
ENVIRONNEMENTAL+ ECOTOURISME.

                        </p>

                        
                        </div>
                    </div>
                    <div className="col-lg-6 col-sm-12">
                    <div class="owl-carousel owl-event">
                        <img class="img-fluid" src={yesseh1} alt=""/>
                        <img class="img-fluid" src={yesseh2} alt=""/>
                        <img class="img-fluid" src={yesseh3} alt=""/>
                        <img class="img-fluid" src={yesseh4} alt=""/>
                        <img class="img-fluid" src={yesseh5} alt=""/>
                        <img class="img-fluid" src={yesseh6} alt=""/>
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
  
  export default Yesseh;