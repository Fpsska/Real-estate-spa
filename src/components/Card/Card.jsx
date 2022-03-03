import React from "react";
import SelectMenu from "../SelectMenu/SelectMenu";
import DistrictInfo from "../DistrictInfo/DistrictInfo";
import project from "../../assets/images/project-1.jpg"
import "./card.scss"

const Card = () => {
    return (
        <div className="card">
            <div className="card__wrapper">
                <div className="card__preview">
                    <img className="card__image" src={project} alt="area" />
                    <span className="card__clarification card__clarification--equipment">Мебилировка зависит от сценария</span>
                    <span className="card__clarification card__clarification--suggestions">134 предложения</span>
                    <div className="card__broadcast">
                        <div className="card__icon"></div>
                        <button className="card__button">Live</button>
                    </div>
                </div>
                <div className="card__information">
                    <div className="card__location district">
                        <DistrictInfo />
                    </div>
                    <SelectMenu />
                </div>
            </div>
        </div>
    )
}

export default Card;