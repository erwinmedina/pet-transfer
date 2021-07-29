import { useState, useEffect } from "react";
import PetCard from '../../components/PetCard/PetCard'
import * as petsAPI from "../../utilities/pets-api";
import * as catService from "../../utilities/cat-service";
import * as dogService from "../../utilities/dog-service";
import FilterButton from "../../components/AvailablePets/FilterButton";
import "./AvailablePetsPage.css";

export default function AvailablePetsPage({setPet, user}) {
  const [allPets, setAllPets] = useState([]);
  const [catDogObject, setCatDogObject] = useState({
    cats: [],
    dogs: [],
  });
  const [newFormData, setNewFormData] = useState({
      species: "",
      breed: "",
      maxLat: '',
      minLat: '',
      maxLng: '',
      minLng: '',
  })
    
  useEffect(function() {
    async function getSpeciesNames() {
        const dogs = await dogService.getAll();
        const cats = await catService.getAll();
        setCatDogObject({...catDogObject, dogs: Object.keys(dogs.message), cats: cats });
    }
    getSpeciesNames();

    async function filterPets() {
        const pets = await petsAPI.getAll();
        // const filtered = pets.filter(pet => pet.breed === newFormData.breed);
        const filtered = pets.filter(pet => {
          if (
            (pet.breed === newFormData.breed) && 
            (user.location.latitude <= newFormData.maxLat) &&
            (user.location.latitude >= newFormData.minLat) &&
            (user.location.longitude <= newFormData.maxLat) &&
            (user.location.longitude >= newFormData.minLat)) 
            return pet;
          else if (
            (user.location.latitude <= newFormData.maxLat) &&
            (user.location.latitude >= newFormData.minLat) &&
            (user.location.longitude <= newFormData.maxLat) &&
            (user.location.longitude >= newFormData.minLat)) 
            return pet;
          })
        if (filtered.length) {
          setAllPets(filtered);
        } else {
          setAllPets(pets);
        }
    }
    filterPets();
  },[newFormData.breed])

  


  return (
    <div className="Pet">
      <h2 className="homepage-title">Available Pets for Transfer!</h2>
      <hr/>
      <FilterButton catDogObject={catDogObject} newFormData={newFormData} setNewFormData={setNewFormData} user={user}/>
      <PetCard allPets={allPets} setPet={setPet}/>
    </div>
  )
}
