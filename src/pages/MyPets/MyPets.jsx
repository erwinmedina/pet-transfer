export default function MyPets() {
    return (
        <div className="container">
             <div class="container mt-5">
                <div class="card">
                    <div className="form-group">
                        <label htmlFor="">Pet Name:</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Age:</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Gender:</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Breed 1:</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Breed 2:</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Color:</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Email:</label>
                        <input type="text"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Phone #:</label>
                        <input type="text"/>
                    </div>
                    <div className="btn btn-primary">Submit</div>
                </div>
            </div>
        </div>
    )
}