import * as catService from "../../utilities/cat-service";
import * as dogService from "../../utilities/dog-service";
import * as petsAPI from "../../utilities/pets-api";
import { useState, useEffect } from "react";
import "./MyPetsPage.css"
import { createPet } from "../../utilities/pets-api.js";

export default function MyPetsPage() {
    
    const [myPet, setMyPet] = useState([]);
    const [catArray, setCatArray] = useState([]);
    const [dogArray, setDogArray] = useState([]);
    const [animalValue, setAnimalValue] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        age: 0,
        species: "",
        breed: "",
        gender: "",
        color: "",
        phone: "",
        additional: "",
    })
    
    // useEffect - gets both Cat && Dog API info //
    useEffect(function() {
        async function getCats() {
            const cats = await catService.getAll();
            setCatArray(cats);
        }
        getCats();

        async function getDogs() {
            const dogs = await dogService.getAll();
            setDogArray(Object.keys(dogs.message));
        }
        getDogs();
    },[])

    async function handleSubmit(event) {
        event.preventDefault();
        const newPet = await petsAPI.createPet(formData);
        // addPet(formData);
        console.log(newPet);
        // const newPet = await createPet;
    }

    function handleChange(event) {
        const newFormData = {
            ...formData,
            [event.target.name]: event.target.value
        };
        setFormData(newFormData);
        setAnimalValue(newFormData.species);
    }

    return (
        <div className="twosides">
            <div className="container">
                <div className="container cardContainer mt-5">
                    <form onSubmit={handleSubmit} className="card cardCardContainer p-3">
                        <h3>Adoption Form</h3>
                        <div className="form-group">
                            <label htmlFor="">Pet Name:</label>
                            <input onChange={handleChange} name="name" value={formData.name} className="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Pet Age:</label>
                            <input onChange={handleChange} name="age" value={formData.age} className="form-control" min="0" max="30" type="number"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Pet Species:</label>
                            <select onChange={handleChange} name="species" value={formData.species} class="custom-select my-1 mr-sm-2" id="catdog">
                                <option value="" disabled selected hidden></option>
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                            </select>
                        </div>

                        {/* I could make this dryer. Icebox - clean up later */}
                        {animalValue === 'cat' ?
                            <div className="form-group">
                                <label htmlFor="">Pet Breed</label>
                                    <select onChange={handleChange} name="breed" value={formData.breed} class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                    <option value="" disabled selected hidden></option>
                                    {catArray.map((catName) => (    
                                        <option  value={catName.name}>{catName.name}</option>
                                    ))}
                                    </select>
                            </div>
                            :
                            <div className="form-group">
                                <label htmlFor="">Pet Breed</label>
                                    <select onChange={handleChange} name="breed" value={formData.breed} class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                    <option value="" disabled selected hidden></option>
                                    {dogArray.map((dogName) => (    
                                        <option value={dogName}>{dogName}</option>
                                    ))}
                                    </select>
                            </div>
                        }

                        <div className="form-group">
                            <label htmlFor="">Pet Gender:</label>
                            <select onChange={handleChange} name="gender" value={formData.gender} class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                <option value="" disabled selected hidden></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Pet Color:</label>
                            <input onChange={handleChange} name="color" value={formData.color} className="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Phone #:</label>
                            <input onChange={handleChange} name="phone" value={formData.phone} className="form-control" type="text"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Additional Details:</label>
                            <textarea onChange={handleChange} name="additional" value={formData.additional} placeholder="Add more details about your pet here!" className="form-control" type="textarea"/>
                        </div>
                        <button type="submit" id="image-button" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

            {/* <div className="container">
                <div className="container cardContainer mt-5">
                    <div className="card cardCardContainer p-3">
                        {myPet.map((pet) => (
                            <div>{pet.name}</div>
                        ))}
                    </div>
                </div>
            </div> */}

        </div>
    )
}