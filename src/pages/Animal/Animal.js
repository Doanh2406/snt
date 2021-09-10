import React, { useEffect, useState } from "react";
import "./Animal.css";
import { useDispatch, useSelector } from "react-redux";
import { listAnimal } from "../../redux/actions/animalActions";

function Animal() {
  const dispatch = useDispatch();
  const animalList = useSelector((state) => state.animalList);
  const { loading, animalData, error } = animalList;

  const [aniData, setAniData] = useState({animalData});

  useEffect(() => {
    dispatch(listAnimal());
    console.log("asd", aniData);
  }, [aniData]);

  return (
    <div className="animal-container">
      {loading ? <h1>Error</h1> : <h1>hello. this is animal page</h1>}

      <ul className="animal-list">
        {aniData &&
          aniData.animals.map((anima) => (
            <li className="animal-item" key={anima.id}>
              {anima.breeds.primary}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Animal;
