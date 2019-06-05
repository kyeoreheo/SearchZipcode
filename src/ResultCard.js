import React, {Component} from 'react';
import axios from 'axios';
import './ResultCard.css';
import ZipData from './ZipData';

class ResultCard extends Component
{
  constructor(props)
  {
    super(props);
    this.state =
    {
      inputAddress_ : 'http://ctp-zip-api.herokuapp.com/zip/',
      data:[]
    };
  }

  fetchZipData()
  {
    axios.get(this.state.inputAddress_ + this.props.inputZip).then(response =>
    {
      const result = response.data
      this.setState({data: result});
    }).catch(err => console.log(err));
  }

  componentDidUpdate (prevProps)
  {
    if (prevProps.inputZip !== this.props.inputZip) {
      this.fetchZipData();
    }
  }

  render()
  {
    let myCard = this.state.data.map((zipdata, index)=>
    {
      return (
              <div className = "center resultBox" key={zipdata.RecordNumber}>
              <li> <ZipData data = {zipdata} /> </li>
            </div>)
    })

    return(
    <div className="center">
      <ul className="flexContainer">
        {myCard}
      </ul>
    </div>
    );
  }
}

export default ResultCard;
