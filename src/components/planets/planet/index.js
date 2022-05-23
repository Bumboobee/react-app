import React, { Fragment } from "react";
import "./style.css";
import GrayImg from "../../shared/gray-img";
import DescriptionWithLink from "../../shared/description_with_link";

const Planet = (props) => {
  const names = ["a", "b", "c", "d"];

  let title;
  if (props.title_with_undeline)
    title = (
      <h4>
        <u>{props.name}</u>
      </h4>
    );
  else title = <h4>{props.name}</h4>;
  return (
    <div onClick={() => props.click_On_planet(props.name)}>
      {title}
      <DescriptionWithLink description={props.description} link={props.link} />
      <GrayImg img_url={props.img} gray={props.gray} />
      <h4>Satélites</h4>
      <ul>
        {names.map((n) => (
          <li>Satélite {n}</li>
        ))}
      </ul>
      <hr />
    </div>
  );
};

export default Planet;
