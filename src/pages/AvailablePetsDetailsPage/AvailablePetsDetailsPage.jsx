import * as petsAPI from "../../utilities/pets-api";
import * as usersAPI from "../../utilities/users-api";
import { useEffect, useState } from "react";
import "./AvailablePetsDetailsPage.css"

export default function AvailablePetsDetailsPage({pet}) {
    function lowerUpperCase(string) {
        string = string.toLowerCase();
        string = string[0].toUpperCase() + string.slice(1);
        return string;
    }

    return (
        <div className="AvailablePetsDetailsPage">

            {/* Image and Animal Details */}
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
                    <img className="" src="https://www.coolbusinessideas.com/wp-content/uploads/2018/10/Google-Map-Now-Tells-You-Offers-From-Your-Favourite-Places-.jpg" alt=""/>
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
                        <div className="btn btn-primary">
                            <i class="far fa-comment"></i> 
                            Message
                        </div>
                        <div className="btn btn-primary">
                            <i class="fas fa-envelope-open-text"></i>
                            Email
                        </div>
                        <div className="btn btn-primary">
                            <i class="fas fa-phone"></i>
                            Call
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}