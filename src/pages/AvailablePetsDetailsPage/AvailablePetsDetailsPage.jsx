import * as petsAPI from "../../utilities/pets-api";
import * as usersAPI from "../../utilities/users-api";
import { useEffect, useState } from "react";
import "./AvailablePetsDetailsPage.css"
import GoogleMap from "../../components/GoogleMap/GoogleMap";

export default function AvailablePetsDetailsPage({pet}) {
    console.log(pet);
    const [message, setMessage] = useState(false);

    function handleMessage() {
        setMessage(true);
    }
    function discardSend() {
        setMessage(false);
    }

    function lowerUpperCase(string) {
        string = string.toLowerCase();
        string = string[0].toUpperCase() + string.slice(1);
        return string;
    }

    return (
        <div className="AvailablePetsDetailsPage">
            <hr/>
            <div className={`DetailsPageContainer ${message ? 'disablePage' : ''}`}>
                <div className="leftHand">
                    <div className="leftHandImage">
                        <img className="" src={pet.sourceURL} alt=""/>
                    </div>
                    <div className="leftHandDetails">
                        <span className="leftHandDetailsName">{lowerUpperCase(pet.name)}</span>
                        <div className="leftHandDetailsColumns">
                            <div className="columnLeftPill">
                                <p>Type: </p>
                                <p>{lowerUpperCase(pet.species)}</p>
                            </div>
                            <div className="columnLeftPill">
                                <p>Breed: </p>
                                <p>{lowerUpperCase(pet.breed)}</p>
                            </div>
                            <div className="columnLeftPill">
                                <p>Age: </p>
                                <p>{lowerUpperCase(pet.age)} yr(s) old</p>
                            </div>
                            <div className="columnLeftPill">
                                <p>Sex: </p>
                                <p>{lowerUpperCase(pet.gender)}</p>
                            </div>
                            <div className="columnLeftPill">
                                <p>Color: </p>
                                <p>{lowerUpperCase(pet.color)}</p>
                            </div>
                            <div className="columnLeftPill">
                                <p>Details: </p>
                                <p>{pet.additional}</p>
                            </div>
                        </div>
                    </div>
                </div>
                            
                {/* Map/Location and Contact Owner Info */}
                <div className="rightHand">
                    <div className="rightHandMap">
                        <GoogleMap pet={pet}/>
                    </div>
                    <div className="rightHandOwner">
                        <p>Contact the Owner</p>
                        <div className="columnLeftPill">
                            <p>Username: </p>
                            <p>{pet.user.name}</p>
                        </div>
                        <div className="columnLeftPill">
                            <p>Email: </p>
                            <p>{pet.user.email}</p>
                        </div>
                        <div className="columnLeftPill">
                            <p>Phone #: </p>
                            <p>{pet.phone}</p>
                        </div>
                        <div className="buttonContainer">
                            <div onClick={() => handleMessage()} className="btn btn-primary">
                                <i class="far fa-comment"></i> 
                                Message
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Image and Animal Details */}
            
            { message &&
                <div className="messageContainer">
                    <div className="message">
                        <h2>Message Owner</h2>
                        <div className="subjectLine">
                            <label >Subject:</label>
                            <input placeholder={`${pet.name} inquiries..`}type="text" />
                        </div>
                        <br />
                        <div className="messageBox">
                            <label>Message:</label>
                            <textarea name="" id="" cols="30" rows="4"></textarea>
                        </div>
                        <div className="messageButtonContainer">
                            <div onClick={discardSend} className="btn btn-danger">
                                <i class="fas fa-trash"></i>
                                Discard
                            </div>
                            <div onClick={discardSend} className="btn btn-success">
                                <i class="far fa-paper-plane"></i>
                                Send
                            </div>
                        </div>
                    </div>
                    
                </div>
            }


        </div>
    )
}