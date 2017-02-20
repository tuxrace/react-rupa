import React from 'react'
// import { List, ListItem } from 'material-ui/List';

/* import {
  grey900
} from 'material-ui/styles/colors'; */

class Dview extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      list: []
    }
  }

  componentDidMount () {
    let list = this.props.text.map((res) => {
      return <li style={{ float: 'left' }}><p>{res.addresss}</p><iframe width="160" height="160" frameBorder="0" src={"https://www.google.com/maps/embed/v1/streetview?key=AIzaSyCzpbgoECGhplawnFLBNgCVStWyMY30Ku8&location=" + res.latlon + "&heading=210&pitch=10&fov=35"}> </iframe></li>
    })
    this.setState({ list: list })

  }

  render () {
    return <div style={{ height: 200, overflowY: 'auto' }}><ul>{this.state.list}</ul></div>
  }
}

Dview.propTypes = {
  text: React.propTypes.string
}

export default Dview