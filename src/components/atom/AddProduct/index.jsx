import React, { useState } from "react";
import { Parrafo, Icon } from "../../css/styles";

export const AddProduct = ({
  selectOptions,
  setSelectOptions,
  stock,
  option,
}) => {
  // inicializo unit en 0
  option.unit = 0;
  const [unit, setUnit] = useState(option.unit); // Estado para almacenar la cantidad de unidades

  // Función para disminuir la cantidad de unidades de la opción específica
  const less = () => {
    // Verificamos si la opción ya está presente en el estado
    const indexOption = selectOptions.findIndex(
      (op) => op.value === option.value
    );
    // consulto si indexOption es mayor a -1, si es mayor a -1 significa que la opción ya está presente en el estado
    if (indexOption > -1) {
      // si la cantidad de unidades es mayor a 0, disminuyo la cantidad de unidades
      if (unit > 0) {
        setSelectOptions((prevOptions) => {
          return prevOptions.map((prevOption, index) => {
            if (index === indexOption) {
              return { ...prevOption, unit: prevOption.unit - 1 };
            }
            return prevOption;
          });
        });
        setUnit((prevUnit) => prevUnit - 1);
      }
    }
  };

  // Función para agregar una nueva opción o incrementar su cantidad si ya está presente
  const more = () => {
    // Verificamos si la opción ya está presente en el estado
    const existingOption = selectOptions.find(
      (op) => op.value === option.value
    );
    // si existingOption es undefined, significa que la opción no está presente y la agrego en el arreglo selectOptions
    if (!existingOption) {
      // Crear una copia del objeto option y actualizar el campo unit en la copia
      const updatedOption = { ...option, unit: 1 };

      // Agregar la copia actualizada al arreglo selectOptions
      setSelectOptions([...selectOptions, updatedOption]);

      // Aumentar la cantidad de unidades (no estoy seguro de dónde obtienes el valor de setUnit, así que esto podría variar dependiendo de tu implementación)
      setUnit(1);
    }
    // si existingOption es true, significa que la opción ya está presente y actualizo la cantidad
    else {
      // Verificamos si la opción ya está presente en el estado
      const indexOption = selectOptions.findIndex(
        (op) => op.value === option.value
      );
      // en setSelectOptions guardo todo lo que tengo y al elemento en el indexOption le sumo 1
      setSelectOptions((prevOptions) => {
        return prevOptions.map((prevOption, index) => {
          if (index === indexOption) {
            return { ...prevOption, unit: prevOption.unit + 1 };
          }
          return prevOption;
        });
      });
      setUnit((prevUnit) => prevUnit + 1); // Aumento la cantidad de unidades
    }
  };

  return (
    <div className="container-addProduct">
      <button onClick={less}>
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
