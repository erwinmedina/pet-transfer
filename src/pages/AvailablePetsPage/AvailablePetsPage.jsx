import { useState, useEffect } from "react";
import PetCard from '../../components/PetCard/PetCard'
import * as petsAPI from "../../utilities/pets-api";

import "./AvailablePetsPage.css";

export default function AvailablePetsPage({setPet}) {
  const [allPets, setAllPets] = useState([]);

  useEffect(function() {
    async function getAll() {
      const allThePets = await petsAPI.getAll();
      setAllPets(allThePets);
    }
    getAll();
  },[]);

  return (
    <div className="Pet">
      <h2 className="homepage-title">Availble Pets for Transfer!</h2>
      <hr/>
      <PetCard allPets = {allPets} setPet={setPet}/>
    </div>
  )
}
