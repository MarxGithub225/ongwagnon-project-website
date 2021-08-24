import brand1 from '../../src/img/brands/b1.png';
import brand2 from '../../src/img/brands/b2.png';
import brand3 from '../../src/img/brands/b3.png';
import brand4 from '../../src/img/brands/b4.png';
import brand5 from '../../src/img/brands/b5.png';
import brand6 from '../../src/img/brands/b6.png';
import brand7 from '../../src/img/brands/b7.png';
import brand8 from '../../src/img/brands/b8.png';
import brand9 from '../../src/img/brands/b9.png';


const Brand = () =>{

    return (
      <div className="Brand">
       
       <section className="brand-area section-gap-bottom">
        <div className="container">
        <div className="owl-brand owl-carousel">
        <div className="item">
        <img src={brand1} alt="" />
        </div>
        <div className="item">
        <img src={brand2} alt="" />
        </div>
        <div className="item">
        <img src={brand3} alt="" />
        </div>
        <div className="item">
        <img src={brand4} alt="" />
        </div>
        <div className="item">
        <img src={brand5} alt="" />
        </div>

        <div className="item">
        <img src={brand6} alt="" />
        </div>
        <div className="item">
        <img src={brand7} alt="" />
        </div>
        <div className="item">
        <img src={brand8} alt="" />
        </div>
        <div className="item">
        <img src={brand9} alt="" />
        </div>
        </div>
        </div>
        </section>
       
      </div>
    );
  }
  
  export default Brand;