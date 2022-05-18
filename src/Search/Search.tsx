// Types
// Styles
import { Wrapper } from './Search.styles';
import * as React from "react";



export default class Search extends React.Component <{}> {

  render() {
    return (
        <Wrapper>
          <label >
            <input type="text" placeholder="Location..." className="search-left" />
          </label>
              <select className="dropdown">
                <option value="activities">What you want to see?</option>
                <option value="reindeers">Reindeers</option>
                <option value="huskies">Huskies</option>
                <option value="snowMobiles">Snow mobiles</option>
              </select>
              <div className="button">Search</div>
        </Wrapper>
    );
  }
}

