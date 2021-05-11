import * as catService from "../../utilities/cat-service.js";
import * as dogService from "../../utilities/dog-service.js";
import { useState, useEffect } from "react";
import "./MyPets.css"

export default function MyPets() {
    
    const [catArray, setCatArray] = useState([]);
    const [dogArray, setDogArray] = useState([]);
    
    // useEffect - gets Cat API info //
    useEffect(function() {
        async function getCats() {
            const cats = await catService.getAll();
            setCatArray(cats);
        }
        getCats();
    },[])

    // useEffect - gets Dog API info //
    useEffect(function() {
        async function getDogs() {
            const dogs = await dogService.getAll();
            setDogArray(Object.keys(dogs.message));
        }
        getDogs();
    }, [])

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
                        <input className="form-control" min="0" max="30" type="number"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Pet Species:</label>
                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option value="" disabled selected hidden>Choose..</option>
                            <option value="cat">Cat</option>
                            <option value="dog">Dog</option>
                        </select>
                    </div>
                


                    <div className="form-group">
                        <label htmlFor="">Pet Breed CAT</label>
                            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option value="" disabled selected hidden>Choose..</option>
                            {catArray.map((catName) => (    
                                <option value={catName.name}>{catName.name}</option>
                            ))}
                            </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="">Pet Breed DOG</label>
                            <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option value="" disabled selected hidden>Choose..</option>
                            {dogArray.map((dogName) => (    
                                <option value={dogName}>{dogName}</option>
                            ))}
                            </select>
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="">Pet Gender:</label>
                        <select class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                            <option value="" disabled selected hidden>Choose..</option>
                            <option value="Boy">Boy</option>
                            <option value="Girl">Girl</option>
                        </select>
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