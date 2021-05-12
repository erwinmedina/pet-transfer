import "./PetCard.css"

export default function PetCard({allPets}) {
    console.log(allPets);
    return (
        <div className="petBoxContainer">
            <div className="petBox">
                {allPets.map((pet) => (
                    <div className="card">
                        <div className="card-body">
                            <p className="card-text">{pet.name}<br/>Orange County, CA<br/>2yrs</p>
                        </div>
                    </div>
                ))}
                    {/* // <img className="card-img-top" src="https://www.peta.org/wp-content/uploads/2020/09/oreo3-602x452.jpeg" alt="Card cap"/> */}
            </div>
        </div>
    )
}