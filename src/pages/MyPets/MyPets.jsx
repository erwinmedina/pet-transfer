import "./MyPets.css"

export default function MyPets() {
    return (
        <div className="container">
             <div className="container cardContainer mt-5">
                <div className="card cardCardContainer p-3">
                    <h3>Adoption Form</h3>
                    <div className="form-group">
                        <label htmlFor="">Pet Name:</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Age:</label>
                        <input className="form-control" type="number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Gender:</label>
                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option value="" disabled selected hidden>Choose..</option>
                            <option value="M">M</option>
                            <option value="F">F</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Breed 1:</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Breed 2:</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Color:</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email:</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Phone #:</label>
                        <input className="form-control" type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Additional Details:</label>
                        <textarea className="form-control" type="textarea"/>
                    </div>
                    <div id="image-button" className="btn btn-primary">Submit</div>
                </div>
            </div>
        </div>
    )
}