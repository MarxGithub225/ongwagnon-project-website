
import Brand from '../../components/Home/brand';
import MakeDonation from '../../components/Home/makeDonation';

import eco1 from '../../../src/src/img/ecosouklou/1.png';
import eco2 from '../../../src/src/img/ecosouklou/2.png';
import eco3 from '../../../src/src/img/ecosouklou/3.png';
import eco4 from '../../../src/src/img/ecosouklou/4.png';
import eco5 from '../../../src/src/img/ecosouklou/5.png';
import eco6 from '../../../src/src/img/ecosouklou/6.png';
import eco7 from '../../../src/src/img/ecosouklou/7.png';
import eco8 from '../../../src/src/img/ecosouklou/8.png';
import eco9 from '../../../src/src/img/ecosouklou/9.png';
import eco10 from '../../../src/src/img/ecosouklou/10.png';
import eco11 from '../../../src/src/img/ecosouklou/11.png';
import eco12 from '../../../src/src/img/ecosouklou/12.png';
function EcoSouklou() {

    return (
        <div className="EcoSouklou">
      
      

            <section className="condition-area section-gap">
            <div className="container">
                <div className="row justify-content-center" style = {{marginBottom: '50px'}}>
                  <div className="col-lg-6 col-sm-12">
                      <div className="condition-right">
                      <h2>
                      « <strong>ECO-SOUKLOU</strong> »
                      </h2>
                      <p>
                                    PROJET « <strong>ECO-SOUKLOU</strong> » : EDUCATION POPULAIRE INFANTILE : FORMATION ET
            SENSIBILISATION SUR LA PRESERVATION DE L’ENVIRONNEMENT PAR LA CULTURE
            (conte, dessins, chant, peinture, poésie, écriture arts, ...) PRISE EN CHARGES SCOLAIRES.
            Trois enjeux éducatifs se dégagent : – un enjeu environnemental de reconnaitre que les enfants sont des
            agents du changement et donc les placer au centre des stratégies et des actions. _ un enjeu pour
            l’humanité, celui de faire vivre et partager les valeurs de paix, d’amour, de solidarité, de travail, de
            discipline, d’égalité, de laïcité, de justice– un enjeu pour le développement de la personne de l’enfant,
            son épanouissement, en considérant leur besoin d’apprendre, de jouer.

                                    </p>

                      
                      </div>
                  </div>

                  <div className="col-lg-6 col-sm-12">
                    <div class="owl-carousel owl-event">
                        <img class="img-fluid" src={eco1} alt=""/>
                        <img class="img-fluid" src={eco2} alt=""/>
                        <img class="img-fluid" src={eco3} alt=""/>
                        <img class="img-fluid" src={eco4} alt=""/>
                        <img class="img-fluid" src={eco5} alt=""/>
                        <img class="img-fluid" src={eco6} alt=""/>
                        <img class="img-fluid" src={eco7} alt=""/>
                        <img class="img-fluid" src={eco8} alt=""/>
                        <img class="img-fluid" src={eco9} alt=""/>
                        <img class="img-fluid" src={eco10} alt=""/>
                        <img class="img-fluid" src={eco11} alt=""/>
                        <img class="img-fluid" src={eco12} alt=""/>
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
  
  export default EcoSouklou;