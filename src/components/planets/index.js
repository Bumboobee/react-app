import React, {Fragment} from 'react';
import Planet from './planet';
import './style.css';
// import $ from "jquery"

// const show_Message = () => {
//     console.log('Meu primeiro evento 👨‍🎓')
// }
const click_On_planet = (name) => {
  console.log(`Clicou no planeta ${name}` + name)
}

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      planets: [
        {
            name: "Earth",
            description: "Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.",
            img: "https://img.freepik.com/fotos-gratis/salve-nosso-mundo-blue-planet-earth-on-space-show-america-eua-mapa-mundi-universo-campo-de-estrelas-no-espaco-dia-da-terra-salvar-o-meio-ambiente-conceito-de-sol-eclipse-da-terra-imagem-3d-render-mundial-fornecida-pela-nasa_45716-101.jpg?w=2000",
            click_On_planet: {click_On_planet},
            title_with_undeline: true,
            gray: true
        },
        {
            name: "Jupiter",
            description: "Jupiter has a long history of surprising scientists – all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.", 
            img: "https://i.pinimg.com/originals/a5/69/91/a569915a6a76efade6c8f6d8f504f5ea.jpg",
            link: "https://solarsystem.nasa.gov/planets/jupiter/overview/",
            click_On_planet: {click_On_planet}
        }, 
        {
            name: "Mars",
            description: "Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war. Mars is a terrestrial planet with a thin atmosphere, and has a crust primarily composed of elements similar to Earth's crust, as well as a core made of iron and nickel. Mars has surface features such as impact craters, valleys, dunes, and polar ice caps. It also has two small and irregularly shaped moons, Phobos and Deimos.",
            link: "https://en.wikipedia.org/wiki/Mars",
            img: "https://img.olhardigital.com.br/wp-content/uploads/2021/09/marte-planeta.jpg",
            click_On_planet: {click_On_planet},
            gray: true
        },
        {
            name: "Pluto",
            description: "Pluto is a dwarf planet in the Kuiper Belt, a donut-shaped region of icy bodies beyond the orbit of Neptune. There may be millions of these icy objects, collectively referred to as Kuiper Belt objects (KBOs) or trans-Neptunian objects (TNOs), in this distant region of our solar system.",
            link: "https://solarsystem.nasa.gov/planets/dwarf-planets/pluto/overview/",
            img: "https://www.worldatlas.com/upload/05/17/9e/shutterstock-1622384599.jpg",
            click_On_planet: {click_On_planet},
        }, 
        {
            name: "Saturn",
            description: "Saturn is the sixth planet from the Sun and the second-largest planet in our solar system. Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings – made of chunks of ice and rock – but none are as spectacular or as complicated as Saturn.",
            link: "https://solarsystem.nasa.gov/planets/saturn/overview/",
            img: "https://i.pinimg.com/originals/ff/51/b0/ff51b0244cc6f533b9c4de88ee39d39c.jpg",
            click_On_planet: {click_On_planet},
        },
        {
            name: "Uranus",
            description: "Uranus is the seventh planet from the Sun, and has the third-largest diameter in our solar system. It was the first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star.",
            link: "https://solarsystem.nasa.gov/planets/uranus/overview/",
            img: "https://ak.picdn.net/shutterstock/videos/1012855547/thumb/1.jpg",
            click_On_planet: {click_On_planet},
            gray: true
        }  
      ]

    }
  }

  removeLast = () => {
    let new_planets = [...this.state.planets]
    new_planets.pop()
    this.setState(state => ({
      planets: new_planets
    }))
  }

  render(){
    return (  
      <Fragment>
        <div className="main">
          <h3>Planet list</h3>
          <hr />
          <div className='btn-main'>
          <button className='btn-remove' onClick={this.removeLast}>Remove last</button>            
          </div>
          <hr />
          {this.state.planets.map((planet) =>
          <Planet
            name={planet.name}
            description={planet.description}
            link={planet.link}
            img={planet.img}
            click_On_planet={planet.click_On_planet}
            gray={planet.gray}
          />
          )}
        </div>
      </Fragment>
    );
  }
}
// const Planets = () => {    
  
// }

export default Planets;