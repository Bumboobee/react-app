import React, { Fragment, useState } from "react";
import Planet from "./planet";
import "./style.css";

// import $ from "jquery"

// const show_Message = () => {
//     console.log('Meu primeiro evento 👨‍🎓')
// }
// const click_On_planet = (name) => {
//   console.log(`Clicou no planeta ${name}` + name)
// }

async function getPlanets() {
  let response = await fetch('http://localhost:3000/api/planets.json');
  let data = await response.json();
  return data;
}

// componentDidMount() {
//   getPlanets().then(data => {
//     this.setState(state => ({
//       planets: data['planets']
//     }))
//   })
// }

const Planets = () => {
  const [planets, setPlanets] = useState([
    {
      "id": "mars",
      "name": "Mars",
      "description": "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System after Mercury. In English, Mars carries a name of the Roman god of war and is often referred to as the 'Red Planet'.",
      "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/220px-OSIRIS_Mars_true_color.jpg",
      "link": "https://en.wikipedia.org/wiki/Mars"
    }
  ])

  const removeLast = () => {
    let new_planets = [...planets];
    new_planets.pop();
    setPlanets(new_planets);
  }

  const duplicateLastPlanet = () => {
    let last_planet = planets[planets.legth - 1];
    setPlanets([...planets, last_planet]);
  }

  return (
    <Fragment>
      <div className="main">
        <h3>Planet list</h3>
        <hr />
        <div className="btn-main">
          <button className="btn-remove" onClick={removeLast}>
            Remove last
          </button>
          <button className="btn-remove" onClick={duplicateLastPlanet}>
            Duplicate last
          </button>
        </div>
        {planets.map((planet, index) => (
          <Planet
            id={planet.id}
            name={planet.name}
            description={planet.description}
            link={planet.link}
            img={planet.img}
            // click_On_planet={planet.click_On_planet}
            // gray={planet.gray}
            key={index}
          />
          
        ))}
      </div>
    </Fragment>
  );
};
console.log()
export default Planets;