import "./PetCard.css"

export default function PetCard({allPets}) {
    return (
        <div className="petBoxContainer">
            <div className="petBox">
                {allPets.map((pet) => (
                    <div className="card petBox-card">
                        <div className="card-body">
                            <img className="card-img-top" src={pet.sourceURL} alt="Card cap"/>
                            <p className="petBox-Text card-text">
                                <span>{pet.name}</span><br/>
                                Age: {pet.age}<br/>
                                {pet.color} {pet.breed}<br/>
                                {pet.phone}<br/>
                                {pet.additional}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}