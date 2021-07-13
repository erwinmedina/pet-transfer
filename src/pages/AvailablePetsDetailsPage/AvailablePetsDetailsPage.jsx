import "./AvailablePetsDetailsPage.css"

export default function AvailablePetsDetailsPage({pet}) {
    return (
        <div className="AvailablePetsDetailsPage">
                <div className="leftHand">
                    <img className="" src={pet.sourceURL} alt=""/>
                    <div className="leftHand-details">
                        <span>{pet.name}</span>
                        <span>{pet.breed}</span>
                        <span>{pet.age}</span>
                        <span>{pet.gender}</span>
                        <span>{pet.species}</span>
                        <span>{pet.color}</span>
                        <span>{pet.phone}</span>
                        <span>{pet.additional}</span>
                    </div>
                </div>
            <div className="rightHand">

            </div>

        </div>
    )
}