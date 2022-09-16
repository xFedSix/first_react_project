import React from "react";
import { useSelector } from "react-redux";

const DataFromStore = () => {
  const dataFromLS = JSON.parse(localStorage.getItem("FormDataKey"));
  const dataFromStore = useSelector(
    (state) => state.addFormDataReducer.formData
  );

  return (
    <div className="dataFromStore mb-4 d-flex justify-content-center">
      {dataFromStore.name.toLowerCase() === "admin" && (
        <div className="dataFromStore__text">
          <p>{`Username: ${dataFromLS.name}`}</p>
          <p>{`Email: ${dataFromLS.email}`}</p>
          <p>{`Phone Number: ${dataFromLS.number}`}</p>
          <p>{`User message: ${dataFromLS.message}`}</p>
        </div>
      )}
      {dataFromStore.name.toLowerCase() === "user" && <p>У вас нет доступа</p>}
    </div>
  );
};
export default DataFromStore;
