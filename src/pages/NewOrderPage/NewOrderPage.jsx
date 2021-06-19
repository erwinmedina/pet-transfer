import { useState, useEffect } from "react";
import PetCard from '../../components/PetCard/PetCard'
import * as petsAPI from "../../utilities/pets-api";

import "./NewOrderPage.css";

export default function NewOrderPage({ user }) {
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
      {console.log(allPets, user)}
      <PetCard allPets = {allPets}/>
    </div>
  )
}
