import React, { Component } from "react"
import Title from "./Titele"
import PhotoWall from "./PhotoWall"
import AddPhoto from "./AddPhoto"
import { Route } from 'react-router-dom'
import { removePost } from '../redux/action'
import { Link } from "react-router-dom"
import Single from './Single'
class Main extends Component {
  constructor() {
    super();
  }

  render() {
    return (

      <div>
        <h1>
          <Link to="/">PhotoWall</Link>
        </h1>
        <Route exact path="/" render={() => (
          <div>
            <PhotoWall {...this.props} />
          </div>

        )} />

        <Route path="/AddPhoto" render={({ history }) => (
          <AddPhoto {...this.props} onHistory={history} />
        )} />
        <Route path="/single/:id" render={(prams)=>(
        <Single {...this.props}  {...prams} />
        )}/>
      </div>
    )
  }
}
export default Main