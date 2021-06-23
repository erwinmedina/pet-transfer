import * as catService from "../../utilities/cat-service";
import * as dogService from "../../utilities/dog-service";
import * as petsAPI from "../../utilities/pets-api";
import { useState, useEffect } from "react";
import "./MyPetsPage.css"
import { useHistory } from "react-router-dom";

export default function MyPetsPage( { user } ) {

    const [editPet, setEditPet] = useState(false);
    const [max, setMax] = useState(false);
    const [allPets, setAllPets] = useState([]);
    const [myPets, setMyPets] = useState([]);
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
        sourceURL: "",
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

        async function getAll() {
            const allThePets = await petsAPI.getAll();
            setAllPets(allThePets);
        }
        getAll();

        async function getMyPets() {
            const allThePets = await petsAPI.getAll();
            const tries = allThePets.filter(function(pet) {
                return pet.user === user._id;
            })
            setMyPets(tries);
            if (myPets.length === 2) {
                return setMax(true);
            }
        }
        getMyPets();
    },[])

    async function handleSubmit(event) {
        event.preventDefault();

        if (editPet) {
            const editPet = await petsAPI.updatePet(formData);
            const idx = myPets.findIndex((pet) => {
                return pet._id === editPet._id;
            })
            console.log(document.querySelector('input[type="file"]'));
            const updatedPets = [...myPets];
            updatedPets[idx] = editPet;
            setMyPets(updatedPets);
            setEditPet(!editPet);
        }
        else {
            if (myPets.length === 2) {
                return setMax(true);
            }
            const petData = new FormData();
            const fileField = document.querySelector('input[type="file"]');
            petData.append("name", formData.name);
            petData.append("age", formData.age);
            petData.append("species", formData.species);
            petData.append("breed", formData.breed);
            petData.append("gender", formData.gender);
            petData.append("color", formData.color);
            petData.append("phone", formData.phone);
            petData.append("additional", formData.additional);
    
            // console.log(petData, fileField.files[0]);
            fileField.files.length && petData.append("photo", fileField.files[0]);
            const newPet = await petsAPI.createPet(petData);
            setMyPets([...myPets, newPet]);

            // const newPet = await petsAPI.createPet(formData);
            // setMyPets([...myPets, newPet]);
            // if (myPets.length === 2) {
            //     return setMax(true);
            // }

        }
        
        setFormData({
            name: "",
            age: 0,
            species: "",
            breed: "",
            gender: "",
            color: "",
            phone: "",
            sourceURL: "",
            additional: "",})
    }

    async function handlePetDelete(index) {
        await petsAPI.deletePet(myPets[index]._id);
        const updatedPets = myPets.filter((pet, idx) => idx !== index);
        setMyPets(updatedPets);
    }

    async function handlePetEdit(index) {
        setMax(false);
        setEditPet(!editPet);
        setFormData(myPets[index]);
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
        <div className="myPetsPage">
            <div className="myPetsPageTitle">
                <h2 className="homepage-title">My Pets & Form!</h2>
                <hr/>
            </div>
            <div className="twosides mb-5">
                <div className="myPetsPage-Form maincontainer">
                    <div className="container cardContainer m-5 ">
                        <form onSubmit={handleSubmit} encType="multipart/form-data" className={`${max ? 'disable-form' : ''} card MyPetsPage-AdoptForm cardCardContainer p-3`}>
                            <h3>Adoption Form</h3>
                            <div className="form-group">
                                <label htmlFor="">Pet Name:</label>
                                <input onChange={handleChange} autocomplete="off" name="name" maxlength="15" required value={formData.name} className="form-control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Pet Age:</label>
                                <input onChange={handleChange} name="age" required value={formData.age} className="form-control" min="0" max="30" type="number"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Pet Species:</label>
                                <select onChange={handleChange} name="species" required value={formData.species} class="custom-select my-1 mr-sm-2" id="catdog">
                                    <option value="" disabled hidden></option>
                                    <option value="cat">Cat</option>
                                    <option value="dog">Dog</option>
                                </select>
                            </div>

                            {/* I could make this dryer. Icebox - clean up later */}
                            {animalValue === 'cat' ?
                                <div className="form-group">
                                    <label htmlFor="">Pet Breed</label>
                                        <select onChange={handleChange} name="breed" required value={formData.breed} class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                        <option value="" disabled selected hidden></option>
                                        {catArray.map((catName) => (    
                                            <option  value={catName.name}>{catName.name}</option>
                                        ))}
                                        </select>
                                </div>
                                :
                                <div className="form-group">
                                    <label htmlFor="">Pet Breed:</label>
                                        <select onChange={handleChange} name="breed" required value={formData.breed} class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                        <option value="" disabled selected hidden></option>
                                        {dogArray.map((dogName) => (    
                                            <option value={dogName}>{dogName}</option>
                                        ))}
                                        </select>
                                </div>
                            }

                            <div className="form-group">
                                <label htmlFor="">Pet Gender:</label>
                                <select onChange={handleChange} name="gender" required value={formData.gender} class="custom-select my-1 mr-sm-2" id="inlineFormCustomSelectPref">
                                    <option value="" disabled selected hidden></option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Pet Color:</label>
                                <input onChange={handleChange} autocomplete="off" name="color" maxlength="15" required value={formData.color} className="form-control" type="text"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Phone #:</label>
                                <input onChange={handleChange} autocomplete="off" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="phone" placeholder="xxx-xxx-xxxx" required value={formData.phone} className="form-control" type="text"/>
                            </div>
                            <div className="form-group ">
                                <label htmlFor="">{editPet ? 'Upload Picture - Cannot Edit Picture' : 'Upload Picture:'}</label>
                                <input onChange={handleChange} name="sourceURL" className={`${editPet ? 'disable-form' : ''} uploadPicture form-control`} type="file"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Additional Details:</label>
                                <textarea onChange={handleChange} name="additional" maxlength="150" value={formData.additional} placeholder="Add more details about your pet here! [150 characters max]" className="form-control" type="textarea"/>
                            </div>
                            { max ? 
                                <p className="maxText">Max # of Pets Reached!</p>
                                :
                                ""
                            }
                            <button type="submit" id="image-button" className="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
                {/* {console.log(myPets)} */}

                <div className="container MyPetsAdded">
                    {myPets.map((pet, index) => (
                    <div className="container cardContainer mt-5">
                        <div className={`${editPet ? 'disable-form' : ''} card MyPetsAddedOne cardCardContainer p-3`}>
                            <button onClick={() => handlePetEdit(index)} className="btn btn1 btn-primary">EDIT</button>
                            <div id={index}>
                                <img className="cardPetImage"src={pet.sourceURL} alt="" />
                                <span>{pet.name}</span>
                                ({pet.age})<br/>
                                Breed: {pet.breed}<br/>
                                Color: {pet.color}<br/>
                                Gender: {pet.gender}<br/>
                                {pet.additional}<br/>
                            </div>
                            <button onClick={() => handlePetDelete(index)} className="btn btn2 btn-primary">DELETE</button>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}