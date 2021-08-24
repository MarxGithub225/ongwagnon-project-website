import condition from '../../src/img/condition/xc1.jpg.pagespeed.ic.V-6wgC3QDy.jpg';

import Whoweare from '../../components/Aboutus/whoweare';
import Brand from '../../components/Home/brand';
import DonationHistorical from '../../components/Home/donationHistorical';
import MakeDonation from '../../components/Home/makeDonation';
function Aboutpartners() {

    const data = {title: 'Nos partenaires'}
    return (
        <div className="Aboutpartners">
      


<Whoweare data = {data}/>
<section className="condition-area section-gap">
<div className="container">
<div className="row align-items-center justify-content-center">
<div className="col-lg-6 col-md-8 col-sm-10">
<div className="condition-left owl-carousel owl-condition">
<img className="img-fluid" src={condition} alt="" />
<img className="img-fluid" src={condition} alt="" />
</div>
</div>
<div className="offset-lg-1 col-lg-5">
<div className="condition-right">
<h2>
New way <br />
to give back
</h2>
<p>
If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may
see some for as low as each. If you are looking at blank cassettes on the web, you may be very confused at the
difference in price You may see.
</p>
<ul>
<li>If you are looking at blank cassettes on the web.</li>
<li>Difference in price You may see some as low as each.</li>
<li>May be very confused at the difference in price.</li>
<li>If you are looking at blank cassettes on the web.</li>
</ul>
</div>
</div>
</div>
</div>
</section>


<DonationHistorical />


<MakeDonation/>


        <Brand/>
      </div>
    );
  }
  
  export default Aboutpartners;