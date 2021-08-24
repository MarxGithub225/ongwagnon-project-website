import { useState } from "react";
import { useDispatch } from "react-redux";
import { createMember } from "./actions";
import Brand from '../../components/Home/brand';
import MakeDonation from '../../components/Home/makeDonation';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const Aboutvolonteers = () =>{

  const initial = {
    civility : "",
    lastname : "",
    firstname : "",
    nationality : "",
    address : "",
    postalcode : "",
    country : "",
    city : "",
    phone : "",
    email : "",
    djob : "",
    studies : "",
    experience : "",
    domain : "",
    university : "",
    promotion : "",
    type : "",
    state : 1,
    date :  new Date().getTime()
  };

       
  
  const [member, setMember] = useState(initial);
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch();

  const handleInputChange = event => {
    const { name, value } = event.target;
    setMember({ ...member, [name]: value });
  };


  const save = (e) => {
    e.preventDefault();
    dispatch(createMember(member))
    
    setTimeout(() => {
      setOpen(true);
      setMember(initial)
    }, 2000);
  };

    return (
        <div className="Aboutvolonteers">
      
          
      <Snackbar open={open} autoHideDuration={6000} onClose={() => {setOpen(false)}}>
        <Alert onClose={() => {setOpen(false)}} severity="success">
          Votre inscription a bien été réçue.
        </Alert>
      </Snackbar>

<section className="condition-area section-gap">
<div className="container">

      <h1 style = {{marginBottom: '25px'}}>Formulaire d'adhésion</h1>
  <form className="form-area " onSubmit={save}>
  <div className="row">

    <div  className="col-lg-2 form-group">
    <select 
    id="civility"
    required
    value={member.civility}
    onChange={handleInputChange}
    name="civility"
    placeholder="Civilité" className="common-input mb-20 form-control">
      <option value ="Mr.">Mr.</option>
      <option value ="Mlle.">Mlle.</option>
      <option value ="Mme.">Mme.</option>
      <option value ="Dr.">Dr.</option>
      <option value ="Pr.">Pr.</option>
    </select>

    </div>

    <div  className="col-lg-5 form-group">
      <input 
      id="lastname"
      value={member.lastname}
      onChange={handleInputChange}
      name="lastname"
      placeholder="Nom" className="common-input mb-20 form-control" required type="text" />
    </div>

    <div  className="col-lg-5 form-group">    
    <input 
     id="firstname"
     value={member.firstname}
     onChange={handleInputChange}
     name="firstname"
    placeholder="Prénoms" className="common-input mb-20 form-control" required type="text" />

    </div>
  </div>


  <div className="row">

    <div  className="col-lg-6 form-group">
      <input 
       id="nationality"
       value={member.nationality}
       onChange={handleInputChange}
       name="nationality"
      placeholder="Nationalité" className="common-input mb-20 form-control" required type="text" />

    </div>

    <div  className="col-lg-6 form-group">
    <input 
     id="address"
     value={member.address}
     onChange={handleInputChange}
     name="address"
    placeholder="Adresse"  className="common-input mb-20 form-control" required type="text" />
    </div>

  </div>


  <div className="row">

    <div  className="col-lg-2 form-group">
      <input 
       id="postalcode"
       value={member.postalcode}
       onChange={handleInputChange}
       name="postalcode"
      placeholder="Code postal" className="common-input mb-20 form-control" required type="text" />

    </div>

    <div  className="col-lg-3 form-group">
          <select 
            id="country"
            required
            value={member.country}
            onChange={handleInputChange}
            name="country"
            placeholder="Pays" className="common-input mb-20 form-control">
                <option value="">Pays</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Åland Islands">Åland Islands</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="American Samoa">American Samoa</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antarctica">Antarctica</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                <option value="Botswana">Botswana</option>
                <option value="Bouvet Island">Bouvet Island</option>
                <option value="Brazil">Brazil</option>
                <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">Central African Republic</option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Christmas Island">Christmas Island</option>
                <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                <option value="Cook Islands">Cook Islands</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Cote D'ivoire">Cote D'ivoire</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                <option value="Faroe Islands">Faroe Islands</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="French Guiana">French Guiana</option>
                <option value="French Polynesia">French Polynesia</option>
                <option value="French Southern Territories">French Southern Territories</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Gibraltar">Gibraltar</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guernsey">Guernsey</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-bissau">Guinea-bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Isle of Man">Isle of Man</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jersey">Jersey</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                <option value="Korea, Republic of">Korea, Republic of</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macao">Macao</option>
                <option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                <option value="Moldova, Republic of">Moldova, Republic of</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">Netherlands Antilles</option>
                <option value="New Caledonia">New Caledonia</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="Niue">Niue</option>
                <option value="Norfolk Island">Norfolk Island</option>
                <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn">Pitcairn</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russian Federation">Russian Federation</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Helena">Saint Helena</option>
                <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                <option value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor-leste">Timor-leste</option>
                <option value="Togo">Togo</option>
                <option value="Tokelau">Tokelau</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">United Arab Emirates</option>
                <option value="United Kingdom">United Kingdom</option>
                <option value="United States">United States</option>
                <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Viet Nam">Viet Nam</option>
                <option value="Virgin Islands, British">Virgin Islands, British</option>
                <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                <option value="Wallis and Futuna">Wallis and Futuna</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
            </select>
    </div>

      
    <div  className="col-lg-3 form-group">
      <input 
      id="city"
      value={member.city}
      onChange={handleInputChange}
      name="city"
      placeholder="Ville"  className="common-input mb-20 form-control" required type="text" />
    </div>

    <div  className="col-lg-4 form-group">
      <input 
      id="phone"
      value={member.phone}
      onChange={handleInputChange}
      name="phone"
      placeholder="Téléphone"  className="common-input mb-20 form-control" required type="text" />
    </div>

  </div>


  <div className="row">

    <div  className="col-lg-6 form-group">
      <input 
      id="email"
      value={member.email}
      onChange={handleInputChange}
      name="email"
      placeholder="E-mail" className="common-input mb-20 form-control" required type="email" />

    </div>

    <div  className="col-lg-6 form-group">
      <select
      id="djob"
      required
      value={member.djob}
      onChange={handleInputChange}
      name="djob"
      placeholder="Vous êtes" className="common-input mb-20 form-control">
          <option>Vous êtes</option>
          <option>Etudiant</option>
          <option>Doctorant</option>
          <option>Cardre salarié</option>
        </select>
      </div>


    </div>



    <div className="row">

    <div  className="col-lg-4 form-group">
      <input 
      id="studies"
      value={member.studies}
      onChange={handleInputChange}
      name="studies"
      placeholder="Niveau d'études" className="common-input mb-20 form-control" required type="text" />

    </div>

    <div  className="col-lg-4 form-group">
    <input 
    id="experience"
      value={member.experience}
      onChange={handleInputChange}
      name="experience"
    placeholder="Expérience professionnelle" className="common-input mb-20 form-control" required type="text" />

      </div>


      <div  className="col-lg-4 form-group">
      <input 
      id="domain"
      value={member.domain}
      onChange={handleInputChange}
      name="domain"
      placeholder="Domaine" className="common-input mb-20 form-control" required type="text" />

      </div>


    </div>


    <div className="row">

    <div  className="col-lg-4 form-group">
      <input 
      id="university"
      value={member.university}
      onChange={handleInputChange}
      name="university"
      placeholder="Université" className="common-input mb-20 form-control" required type="text" />

    </div>

    <div  className="col-lg-4 form-group">
    <input 
    id="promotion"
      value={member.promotion}
      onChange={handleInputChange}
      name="promotion"
    placeholder="Promotion" className="common-input mb-20 form-control" required type="text" />

      </div>


      <div  className="col-lg-4 form-group">
      <select 
      id="type"
      required
      value={member.type}
      onChange={handleInputChange}
      name="type"
      placeholder="Vous êtes" className="common-input mb-20 form-control">
          <option>J'adhère en qualité de : </option>
          <option value = "Membre actif">Membre actif</option>
          <option value = "Adhérant Sympathisant">Adhérant Sympathisant</option>
        </select>

      </div>


    </div>


  <div className="col-lg-6 form-group">
    <button className="primary-btn mt-20 text-white" style={{float : 'right'}} type = "submit">Adhérer</button>
  </div>

  </form>

</div>
</section>



<MakeDonation/>


        <Brand/>
      </div>
    );
  }
  
  export default Aboutvolonteers;