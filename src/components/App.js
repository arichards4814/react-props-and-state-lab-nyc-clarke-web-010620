import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  
  state = {
      pets: [],
      filtered: [],
      filters: {
        type: 'all'
      }
    }

    //function that fetch the pets and set that array = the data
  getPets = () => {
    if (this.state.pets.length <= 0){
      fetch("/api/pets")
        .then(resp => resp.json())
        .then(data => {
          this.setState({
            pets: data
          })
        })
    }
    

  }


  //function that changes type => first change the type set to 'dogs' this.filters.setState({type: 'dogs'})
  filterAnimals = (animal) => {  // if animal === 'all' render all array.. else filter the arrray using the prop.type === animal 
    
    this.setState({filters: {type: animal}})

  if (animal !== 'all') {
      this.setState({ 
        filtered: this.state.pets.filter(pet => pet.type === animal) })
         console.log(this.state.filtered)
    }
  }

  adoptPet = (e) => {

    //grab the array make it a new variable
    // find the pet, change its isAdopted
    // take that array and set state with that array

    let petsCopy = this.state.pets

    petsCopy.forEach(pet => {
      if (pet.id === e.target.id) {
        pet.isAdopted = true;
        console.log(pet)
      }
    })
    //console.log(petsCopy)

    this.setState({pets: petsCopy})

    console.log(this.state.pets)
  }


  render() {
     
    return (

      <div className="ui container">
       {this.getPets()}
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filterAnimals={this.filterAnimals}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser adoptPet={this.adoptPet} petsArray={this.state.pets} filteredArray={this.state.filtered} filterType={this.state.filters.type}/>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
