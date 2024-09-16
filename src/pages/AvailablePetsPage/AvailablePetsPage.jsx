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
    'cats': [],
    'dogs': [],
  });
  const [newFormData, setNewFormData] = useState({
    'filtered': false,
    'species': "",
    'breed': "",
    'maxLat': Math.max(user.location.latitude + ((0.01667) * 25), user.location.latitude - ((0.01667) * 25)),
    'minLat': Math.min(user.location.latitude + ((0.01667) * 25), user.location.latitude - ((0.01667) * 25)),
    'maxLng': Math.max(user.location.longitude + ((0.01667) * 25), user.location.longitude - ((0.01667) * 25)),
    'minLng': Math.min(user.location.longitude + ((0.01667) * 25), user.location.longitude - ((0.01667) * 25)),
        
  })

  
    
  useEffect(function() {
    // JUST CREATES DROPDOWN //
    async function getSpeciesNames() {
        const dogs = await dogService.getAll();
        const cats = await catService.getAll();
        setCatDogObject({...catDogObject, dogs: Object.keys(dogs.message), cats: cats });
    }
    getSpeciesNames();

    // FILTERS THE PETS BY DISTANCE OR BREED
    async function filterPets() {
        const pets = await petsAPI.getAll();
        const filtered = pets.filter(function(pet) {
          if ((pet.user?.location?.latitude <= newFormData.maxLat) &&
            (pet.user?.location?.latitude >= newFormData.minLat) &&
            (pet.user?.location?.longitude <= newFormData.maxLng) &&
            (pet.user?.location?.longitude >= newFormData.minLng) &&
            (newFormData.breed === '' ? true : pet.breed === newFormData.breed))
            return pet;
        })

        if (newFormData.breed !== '' || newFormData.maxLat !== '') {
          setAllPets(filtered);
          console.log(allPets);
        } else {
          setAllPets(pets);
        }
    }
    filterPets();
  },[newFormData])


  return (
    <div className="Pet">
      <h2 className="homepage-title">Available Pets for Transfer!</h2>
      <hr/>
      <FilterButton catDogObject={catDogObject} newFormData={newFormData} setNewFormData={setNewFormData} user={user}/>
      <PetCard allPets={allPets} setPet={setPet}/>

    </div>
  )
}
