import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "../../component/pagination/Pagination";
import { listAnimal } from "../../redux/actions/animalActions";
import "./Animal.css";

function Animal() {
  const dispatch = useDispatch();

  //Get animal List
  const animalList = useSelector((state) => state.animalList);
  const { loading, animalData } = animalList;

  //Set pagination
  const [pagination, setPagination] = useState({
    current_page: 1,
    count_per_page: 10,
  });

  const [wait, setWait] = useState(true);
  // const [filter, setFilter] = useState({
  //   page: 1,
  // });

  const handlePageChange = (newPage) => {
    setPagination({
      ...pagination,
      current_page: newPage,
    });
    console.log(newPage);
  };

  useEffect(() => {
    dispatch(listAnimal(pagination));
    setWait(false);
  }, [dispatch, pagination]);

  if (wait) return <h1>Loading page...</h1>;

  return (
    <div className="animal-container">
      {loading ? <h1>Error</h1> : <h1>ANIMAL PAGE</h1>}
      <Pagination pagination={pagination}
       onPageChane={handlePageChange} />
      <ul className="animal-list">
        {animalData &&
          animalData.animals.map((anima) => (
            <li className="animal-item" key={anima.id}>
              {anima.breeds.primary}
            </li>
          ))}
      </ul>

      
    </div>
  );
}

export default Animal;
