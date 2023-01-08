import * as petsAPI from "../../utilities/pets-api";
import { useHistory } from "react-router-dom";
import "./PetCard.css"

export default function PetCard({allPets, setPet}) {
    const history = useHistory();
    async function handleClick(petId) {
        const pet = await petsAPI.petFindOne(petId);
        setPet(pet);
        history.push("/availablepetsdetail");
    }

    return (
        <div className="petBoxContainer">
            {allPets.length ?
            <div className="petBox">
                {allPets.map((pet) => (
                    <div onClick={() => handleClick(pet._id)} className="card petBox-card">
                        <div className="card-body">
                            <img className="card-img-top" src={pet.sourceURL} alt="Card cap"/>
                            <p className="petBox-Text card-text">
                                <span>{pet.name}</span><br/>
                                Age: {pet.age}<br/>
                                {pet.color} {pet.breed}<br/>
                                {pet.additional}</p>
                        </div>
                    </div>
                ))}
            </div>
            :
            <div className="noPets">
                No pets available under this specific criteria
            </div>
            }
        </div>
    )
}