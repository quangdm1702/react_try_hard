import React from "react";
import { country } from "../data/country";
// import "./Country.css";
import "./Country.scss";

const Country = () => {
  return (
    <>
      <ul className="country">
        {(country || []).map((itemCountry) => (
          <li className="country__item" key={itemCountry.id}>
            <span className="country__text">{itemCountry.name}</span>
            <ul className="country__sub">
              {(itemCountry.city || []).map((itemCity) => (
                <li className="country__sub-item" key={itemCity.id}>
                  {itemCity.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Country;
