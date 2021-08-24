import { connect } from "react-redux";
import moment from 'moment';

import { Modal, Button } from "react-bootstrap";
import { useState } from "react";

const ComingEvent = (props) =>{

    const [modalOpened, setModal] = useState(false);
    const [eventActive, setEvent] = useState({});

    return (
      <div className="ComingEvent">
       
       <Modal show={modalOpened} onHide={() =>{setModal (false);}}>
        <Modal.Header closeButton>
          <Modal.Title>{eventActive.label}</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          <div>Date : {moment(new Date(parseInt(eventActive.date))).format("ll")}</div>

          <p dangerouslySetInnerHTML={{ __html: eventActive.description }}></p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() =>{setModal (false);}}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>
       <section className="event-area section-gap-bottom">
          <div className="container">
            
            <h1 style = {{textAlign: 'center'}}>EVENEMENTS À VENIR</h1>
          <div className="row justify-content-center align-items-center ">

          {
          props.events.map((data) => {
            const date = moment(new Date(parseInt(data.date))).format("ll");

            return (
          <div className="col-lg-6" key = {data.id}>
          
            <div className="single-event"
            onClick = {() => {setModal (true); setEvent(data);}}
            >
            <p>{date}</p>
            <h4>
            <span>{data.label}</span>
            </h4>
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
    const events = state.eventReducer;

    console.log(state)
    return { 
      events: events.events.sort((a,b) => Number (a.date) < Number (b.date) ? -1 : 1)
    };
  };
  
  export default connect(mapStateToProps) (ComingEvent);