
import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "./actions";


import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const Contact = () =>{

  const initial = {
    name: "",
    email: "",
    subject: "",
    message: ""
  };


  const [message, setMessage] = useState(initial);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMessage({ ...message, [name]: value });
  };


  const save = (e) => {
    e.preventDefault();
    dispatch(sendMessage(message))
    setTimeout(() => {
      setOpen(true);
      setMessage(initial)
    }, 2000);
  };

    return (
        <div className="Contact">
      
      <Snackbar open={open} autoHideDuration={6000} onClose={() => {setOpen(false)}}>
        <Alert onClose={() => {setOpen(false)}} severity="success">
          Votre message a bien été envoyé
        </Alert>
      </Snackbar>
      <section className="contact-page-area section-gap">
<div className="container">
<div className="row">
<div className="map-wrap" style={{width:'100%', height: '445px'}}>
<iframe 
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1986.0359597318454!2d-3.994742664448253!3d5.4060159299821535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc194994ba36619%3A0xa2166eadf4455fce!2sCit%C3%A9%20Angr%C3%A9%20les%20Oscars%2C%20Abidjan!5e0!3m2!1sfr!2sci!4v1627395773946!5m2!1sfr!2sci" 
style={{width:'100%', height: '445px', border: 0}} 
allowfullscreen="" 
loading="lazy"></iframe>
</div>
<div className="col-lg-4 d-flex flex-column address-wrap">
<div className="single-contact-address d-flex flex-row">
<div className="icon">
<span className="lnr lnr-home"></span>
</div>
<div className="contact-details">
<h5>Côte d'Ivoire</h5>
<p>Abidjan, Cocody Angré oscar derrière l'ancienne ambassade de Chine</p>
</div>
</div>
<div className="single-contact-address d-flex flex-row">
<div className="icon">
<span className="lnr lnr-phone-handset"></span>
</div>
<div className="contact-details">
<h5>00 (225) 01 52 03 03 15</h5>
<p>Ouvert de 7H à 18H</p>
</div>
</div>
<div className="single-contact-address d-flex flex-row">
<div className="icon">
<span className="lnr lnr-envelope"></span>
</div>
<div className="contact-details">
<h5><a href="mailto:projetwagnon@gmail.com " className="__cf_email__" >projetwagnon@gmail.com </a></h5>
<p>Ecrivez-nous à tout moment !</p>
</div>
</div>
</div>
<div className="col-lg-8">
  <form className="contact-form text-right" onSubmit={save}>
  <div className="row">
  <div className="col-lg-6 form-group">
  <input
  placeholder="Nom complet"  
  className="common-input mb-20 form-control" 
  id="name"
  required
  value={message.name}
  onChange={handleInputChange}
  name="name" 
  type="text" />


  <input 
  placeholder="E-mail"  
  className="common-input mb-20 form-control" 
  id="email"
  required
  value={message.email}
  onChange={handleInputChange}
  name="email"  
  type="email" />
  <input 
  placeholder="Objet"  
  className="common-input mb-20 form-control" 
  id="subject"
  required
  value={message.subject}
  onChange={handleInputChange}
  name="subject" 
  type="text" />
  <div className="mt-20 alert-msg" style={{textAlign: 'left'}}></div>
  </div>
  <div className="col-lg-6 form-group">
  <textarea 
  className="common-textarea form-control"
  placeholder="Message" 
  id="message"
  required
  value={message.message}
  onChange={handleInputChange}
  name="message" 
  
  ></textarea>
  <button className="primary-btn mt-20 text-white" style={{float: 'right'}} type = "submit">Envoyer</button>
  </div>
  </div>
  </form>
</div>
</div>
</div>
</section>
      </div>
    );
  }
  
  export default Contact;