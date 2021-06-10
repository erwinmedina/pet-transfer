import "./PetCard.css"

export default function PetCard({allPets}) {
    return (
        <div className="petBoxContainer">
            <div className="petBox">
                {allPets.map((pet) => (
                    <div className="card">
                        <div className="card-body">
                            <img className="card-img-top" src="https://www.peta.org/wp-content/uploads/2020/09/oreo3-602x452.jpeg" alt="Card cap"/>
                            <p className="card-text">{pet.name}<br/>{pet.age}<br/>{pet.color} {pet.breed}<br/>{pet.phone}<br/>{pet.additional}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}