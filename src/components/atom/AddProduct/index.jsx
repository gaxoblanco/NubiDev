import React, { useState } from "react";
import { Parrafo, Icon } from "../../css/styles";

export const AddProduct = ({
  unit,
  selectOptions,
  setSelectOptions,
  stock,
  option,
}) => {
  //funcion de sumar y restar con los botones, retornando una variable
  // console.log("option--", option);
  // const menos = () => {
  //   if (unit > 1) {
  //     setUnit(unit - 1);
  //   }
  // };
  // const more = () => {
  //   if (unit <= stock) {
  //     setUnit(unit + 1);
  //   }
  // };

  // Función para disminuir la cantidad de unidades de la opción específica
  const menos = () => {
    if (option.unit > 1) {
      setSelectOptions((prevOptions) => {
        // Actualizamos solo la unidad de la opción específica
        return prevOptions.map((prevOption) => {
          if (prevOption === option) {
            return { ...prevOption, unit: prevOption.unit - 1 };
          }
          return prevOption;
        });
      });
    }
  };

  // Función para agregar una nueva opción o incrementar su cantidad si ya está presente
  const more = () => {
    // Verificamos si la opción ya está presente en el estado
    const existingOption = selectOptions.find(
      (option) => option.value === option.value
    );

    // Si la opción no está presente, la agregamos al estado con cantidad 1
    if (!existingOption) {
      // agrego option.value y unit = 1 al array setSelectOptions
      setSelectOptions((prevOptions) => [
        ...prevOptions,
        { ...option, unit: 1 },
      ]);
      console.log("existingOption = false");
      console.log("selectOptions", selectOptions);
    } else {
      // Si la opción ya está presente, incrementamos su cantidad en 1
      setSelectOptions((prevOptions) =>
        prevOptions.map((prevOption) =>
          prevOption.value === option.value
            ? { ...prevOption, unit: prevOption.unit + 1 }
            : prevOption
        )
      );
      console.log("existingOption = true");
      console.log("selectOptions", selectOptions);
    }
  };

  return (
    <div className="container-addProduct">
      <button onClick={menos}>
        <Icon
          isSecondaryColor={true}
          is32={true}
          fill="currentColor"
          className="bi bi-dash-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
        </Icon>
      </button>

      <div>
        <p className="text-lg font-semibold">{unit}</p>
        <Parrafo isBold={true} isGray={true}>
          Unidades
        </Parrafo>
      </div>

      <button onClick={more}>
        <Icon
          is32={true}
          fill="currentColor"
          className="bi bi-plus-circle-fill"
          viewBox="0 0 16 16"
        >
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
        </Icon>
      </button>
    </div>
  );
};
