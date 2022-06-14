import React from "react";
import "./Card.css";

const Card = ({weathers}) => {
  return (
    <div className="frame">
      <div className="moon">
        <div className="moon-crater1" />
        <div className="moon-crater2" />
      </div>
      <div className="hill-bg-1" />
      <div className="hill-bg-2" />
      <div className="hill-fg-1" />
      <div className="hill-fg-2" />
      <div className="hill-fg-3" />
      <div className="front">
        <div>
          <div className="temperature">{weathers.current && weathers.current.temp_c}°</div>
          <div className="icons">
            <i className="fas fa-wind" />
            <br />
            <i className="fas fa-tint" />
          </div>
          <div>
            <div className="info">
               {weathers.current && weathers.current.vis_km}<br /> {weathers.current && weathers.current.humidity}%
            </div>
            <table className="preview">
              <tbody>
                <tr>
                  
                  <td>{weathers.location && weathers.location.name}</td>
                </tr>
                <tr>
                  <td>Wed</td>
                  <td>23° | 10°</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="proverb">
          “Frogs croaking in the lagoon,
          <br />
          Means rain will come real soon.”
        </div>
      </div>
      <div className="drop-big-1" />
      <div className="drop-big-2" />
      <div className="drop-big-3" />
      <div className="drop-big-4" />
      <div className="drop-big-5" />
      <div className="drop-big-6" />
      <div className="drop-big-7" />
      <div className="drop-big-8" />
      <div className="drop-big-9" />
      <div className="drop-big-10" />
      <div className="drop-medium-1" />
      <div className="drop-medium-2" />
      <div className="drop-medium-3" />
      <div className="drop-medium-4" />
      <div className="drop-medium-5" />
      <div className="drop-medium-6" />
      <div className="drop-medium-7" />
      <div className="drop-medium-8" />
      <div className="drop-medium-9" />
      <div className="drop-medium-10" />
      <div className="drop-small-1" />
      <div className="drop-small-2" />
      <div className="drop-small-3" />
      <div className="drop-small-4" />
      <div className="drop-small-5" />
      <div className="drop-small-6" />
      <div className="drop-small-7" />
      <div className="drop-small-8" />
      <div className="drop-small-9" />
      <div className="drop-small-10" />
    </div>
  )
};

export default Card;
