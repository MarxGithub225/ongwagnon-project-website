import event from '../../src/img/events/ed1.jpg';

import Whoweare from '../../components/Aboutus/whoweare';
function DetailsEvent() {

    const data = {title: 'Evenement'}
    return (
        <div className="DetailsEvent">
      


<Whoweare data = {data}/>

<section className="condition-area event-details-area section-gap">
<div className="container">
<div className="row align-items-center justify-content-center">
<div className="col-lg-6 col-md-8 col-sm-10">
<div className="condition-left">
<img className="img-fluid" src={event} alt="" />
</div>
</div>
<div className="offset-lg-1 col-lg-5">
<div className="condition-right">
<h2>
Spreading Peace <br/>
Around the Worldwide
</h2>
<p>
If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may
see some for as low as each. If you are looking at blank cassettes on the web, you may be very confused at the
difference in price You may see.
</p>
<p>
If you are looking at blank cassettes on the web, you may be very confused at the difference in price You may
see some for as low as each. If you are looking at blank cassettes on the web, you may be very confused at the
difference in price You may see.
</p>
<ul>
<li>Saturday, 15th September, 2018</li>
<li>Rocky beach Church</li>
<li>Los Angeles, USA.</li>
</ul>
</div>
</div>
</div>
</div>
</section>
      </div>
    );
  }
  
  export default DetailsEvent;