import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {


  renderPets = () => {
    if(this.props.filterType === 'all'){
      return this.props.petsArray.map(pet => {return <Pet adoptPet={this.props.adoptPet} key={pet.id} {...pet}/>})
    } else {
      return this.props.filteredArray.map(pet => {return <Pet adoptPet={this.props.adoptPet} key={pet.id} {...pet}/>})
    }
  }

  render() {
    return <div className="ui cards">{this.renderPets()}</div>
  }

}

export default PetBrowser
