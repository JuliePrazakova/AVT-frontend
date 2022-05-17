import Button from '@material-ui/core/Button';
// Types
// Styles
import { Wrapper } from './Search.styles';
import * as React from "react";
import {HashRouter as Router, Link} from "react-router-dom";
import Logo from "../partials/Logo.png";



export default class Search extends React.Component <{}> {

  render() {
    return (
        <Wrapper>
            <input type="text" placeholder="Location..." />
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

