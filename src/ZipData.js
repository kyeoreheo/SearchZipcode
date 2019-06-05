import React, {Component} from 'react';

class ZipData extends Component
{
  render()
  {
    let{
      Zipcode,
      City,
      State,
      WorldRegion,
      Country,
      EstimatedPopulation,
      TotalWages,
    } = this.props.data;
    return (
      <div align = "left">
      <p>zip: {Zipcode}</p> <br/>
      <p>city: {City}</p> <br/>
      <p>state: {State}</p> <br/>
      <p>world region: {WorldRegion}</p> <br/>
      <p>county: {Country}</p> <br/>
      <p>population: {EstimatedPopulation}</p> <br/>
      <p>wage: {TotalWages}</p>
      </div>
    );
  }
}

export default ZipData;
