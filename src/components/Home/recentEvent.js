import { connect } from "react-redux";
import {useDispatch} from "react-redux";
import {setNew, updateNew} from '../../modules/Blog/actions';
import url from '../../env.js';
import { Link } from "react-router-dom";

const baseUrl = url.replace('/routes', '');


const RecentEvent = (props) => {

  const dispatch = useDispatch();
    return (
      <div className="RecentEvent">
       
       <section className="causes-area section-gap">
          <div className="container">
          <div className="row justify-content-center">
          <div className="col-md-7 section-title">
        <h2>ACTUALITÉS RÉCENTES</h2>
        {/* <!-- <p>
        The French Revolution constituted for the conscience of the dominant aristocratic class a fall from innocence the
        natural chain of events.
        </p> --> */}
        </div>
        </div>
        <div className="row">
        
        {
          props.news.map((data) => {
            return (
              <div className="col-lg-4 col-md-6" key = {data.id}>
                <div className="single-cause"
                onClick = {() => {dispatch(setNew(data)); dispatch(updateNew(data))}}
                >
                <div className="top">
                <div className="thumb">
                <img className="c-img img-fluid" src={baseUrl + data.images[0].link} alt=""/>
                </div>
                <Link to="/details-blog">
                <h3>{data.title}</h3>
                </Link>
                <p className="text" dangerouslySetInnerHTML={{ __html: data.description }}>
                </p>
                </div>
                <div className="bottom d-flex justify-content-between align-items-center flex-wrap">
                  <Link to="/details-blog" className="primary-btn offwhite">Détails</Link>
                  </div>
                </div>
                </div>
            );
          })
        }
        

        
        </div>
        </div>
        </section>
       
      </div>
    );
  }
  
  const mapStateToProps = state => {
    const news = state.newsReducer;

    console.log(state)
    return { 
      news: news.news.sort((a,b) => Number (a.saveon) < Number (b.saveon) ? -1 : 1)
    };
  };
  
  export default connect(mapStateToProps) (RecentEvent);