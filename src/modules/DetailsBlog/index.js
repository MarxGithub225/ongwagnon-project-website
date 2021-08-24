
import { connect } from "react-redux";
import moment from 'moment';
import { withRouter } from "react-router-dom";

import {useDispatch} from "react-redux";
import {setNew} from '../../modules/Blog/actions';
import url from '../../env.js';
import { Link } from "react-router-dom";
import { useEffect } from "react";

const baseUrl = url.replace('/routes', '');

const DetailsBlog = (props) =>{

  const dispatch = useDispatch();


  const handleClick = () => {
    props.history.push("/");
  }

  useEffect (() => {
    window.scroll(0,0);
  }, [])
    return (
        <div className="DetailsBlog">
      
        { props.news ? (
          <section className="blog_area single-post-area section-gap">
          <div className="container">
          <div className="row">
          <div className="col-lg-8 posts-list">
          <div className="single-post row">
          <div className="col-lg-12">
          <div className="feature-img">
          <img className="img-fluid" src={baseUrl + props.news.images[0].link} alt=""/>
          </div>
          </div>
          <div className="col-lg-3  col-md-3">
          <div className="blog_info text-right">

          <ul className="blog_meta list">

          <li><a href="http">{moment(new Date(parseInt(props.news.saveon))).format("ll")}<i className="lnr lnr-calendar-full"></i></a></li>
          <li><a href="http">{Number(props.news.views) + 1} Vues<i className="lnr lnr-eye"></i></a></li>
          </ul>

          </div>
          </div>
          <div className="col-lg-9 col-md-9 blog_details">
          <h2>{props.news.title}</h2>
          <p className="excert" dangerouslySetInnerHTML={{ __html: props.news.description }}>
          </p>

          </div>
          <div className="col-lg-12">
            <div className="row">

              {props.news.images.map ((img => {
                return (
                  <div className="col-6">
                    <img className="img-fluid" src={baseUrl + img.link} alt="" />
                  </div>
                );
              }))
                
              }
              

            </div>
          </div>
          </div>


          </div>
          <div className="col-lg-4">
          <div className="blog_right_sidebar">

          <aside className="single_sidebar_widget popular_post_widget">
          <h3 className="widget_title">Les plus populaires</h3>
          {props.newsDatas.map((data => {
            return (
              <div className="media post_item"
              onClick = {() => {dispatch(setNew(data))}}
              key = {data.id}
              >
                <img src={baseUrl + data.images[0].link} alt="post" style = {{width : '100px', height : 'auto'}}/>
                <div className="media-body">
                <Link to="/details-blog">
                <h3>{data.title}</h3>
                </Link>
                <p>{moment(new Date(parseInt(data.saveon))).format("ll")}</p>
                </div>
              </div>
            );
          }))}


          <div className="br"></div>
          </aside>

          </div>
          </div>
          </div>
          </div>
    </section>
        ) : (<section className="blog_area single-post-area section-gap">
              <div className="container">
                <div className = "row justify-content-center align-items-center">
                    <div className = "col-lg-12" style = {{textAlign: "center"}}>
                          
                          <h1 style = {{color: '#666'}}>Une erreur est survenue, veuillez revenir à l'accueil.</h1>

                          <button className = "btn btn-warning" onClick={handleClick} type="button">Revenir</button>
                    </div>
                </div>
                
              </div>
            </section>
          )

        }
        
      </div>
    );
  }
  
  const mapStateToProps = state => {
    const news = state.newsReducer;

    console.log(state)
    return { 
      news: news.newSelected,
      newsDatas: news.news.sort((a,b) => Number (a.views) > Number (b.views) ? -1 : 1).slice(0,4)
    };
  };
  
  export default connect(mapStateToProps) (withRouter(DetailsBlog));