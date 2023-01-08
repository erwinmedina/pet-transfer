import "./FilterButton.css";
import { useState} from 'react';

export default function FilterButton({catDogObject, newFormData, setNewFormData, user}) {
    const [breedDisable, setBreedDisable] = useState(true);
    
    function handleChange(event) {
        const newerFormData = {
            ...newFormData,
            [event.target.name]: event.target.value
        };
        newerFormData.filtered = true;
        setNewFormData(newerFormData);
    }
    function handleRadius(event) {
        let maxLat = Math.max(user.location.latitude + ((0.01667) * event.target.value), user.location.latitude - ((0.01667) * event.target.value));
        let minLat = Math.min(user.location.latitude + ((0.01667) * event.target.value), user.location.latitude - ((0.01667) * event.target.value));
        let maxLng = Math.max(user.location.longitude + ((0.01667) * event.target.value), user.location.longitude - ((0.01667) * event.target.value));
        let minLng = Math.min(user.location.longitude + ((0.01667) * event.target.value), user.location.longitude - ((0.01667) * event.target.value));
        const newerFormData = {
            ...newFormData,
            maxLat,
            minLat,
            maxLng,
            minLng,
        };
        setNewFormData(newerFormData);
    }

    function handleDisable() {
        setBreedDisable(false)
    }
    
    return (
        <div className="filterButtonsContainer">
            <label>Filter</label>
            <div className="filterButtons">
                <div className="form-group">
                    <select onClick={handleDisable} onChange={handleChange} class="custom-select my-1 mr-sm-2" name="species" id="catdog">
                        <option value="" disabled selected hidden>Cat or Dog</option>
                        <option value="cat">Cat</option>
                        <option value="dog">Dog</option>
                    </select>
                </div>
                <div className="form-group">
                    <select disabled={breedDisable} onChange={handleChange} name="breed" required class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                    <option value="" disabled selected hidden>Breed</option>
                    
                    {/* IF CAT OR DOG */}
                    <option value=''>All</option>
                    {newFormData.species === 'cat' ?
                        catDogObject.cats.map((catName) => (    
                        <option value={catName.name}>{catName.name}</option>
                        ))
                        :
                        catDogObject.dogs.map((dogName) => (    
                        <option value={dogName}>{dogName}</option>
                        ))}

                    </select>
                </div>
                <div className="form-group">
                    <select onChange={handleRadius} class="custom-select my-1 mr-sm-2" name="location" id="location">
                        <option disabled selected hidden>Miles..</option>
                        <option value='25'>25 miles</option>
                        <option value='50'>50 miles</option>
                        <option value='75'>75 miles</option>
                        <option value='100'>100 miles</option>
                        <option value='150'>150 miles</option>
                    </select>
                </div>
            </div>
      </div>
    )
}