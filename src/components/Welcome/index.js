import {Component} from 'react'
class Welcome extends Component {
  render() {
    const {name} = this.props
    return <h1>Welcome user {name}</h1>
  }
}

export default Welcome
