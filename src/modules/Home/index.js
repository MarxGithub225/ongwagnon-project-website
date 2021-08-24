import React from "react";


import Banner from '../../components/Home/banner';
import RecentEvent from '../../components/Home/recentEvent';
import ComingEvent from '../../components/Home/comingEvent';
import MakeDonation from '../../components/Home/makeDonation';
import Brand from '../../components/Home/brand';


function Home() {

    return (
        <div className="Home">
      
          <Banner/>
          <RecentEvent/>
          {/* <DonationHistorical/> */}
          <ComingEvent/>
          <MakeDonation/>
          <Brand/>
      </div>
    );
}
  

export default Home;