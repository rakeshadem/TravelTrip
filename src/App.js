import {Route, Switch} from 'react-router-dom'
import {Component} from 'react'
import ReactContext from './context/ReactContext'
import Login from './components/Login'
import Home from './components/Home'
import BookANewTrip from './components/BookANewTrip'
import MyTrips from './components/MyTrips'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import './App.css'

// Note: Use the lists in your code to pass the test cases

// Replace your code here
class App extends Component {
  state = {
    myTripsList: [],
  }

  addTrip = values => {
    const {myTripsList} = this.state
    this.setState({myTripsList: [values, ...myTripsList]})
  }

  updateTrips = deleteId => {
    const {myTripsList} = this.state
    const filteredList = myTripsList.filter(each => each.id !== deleteId)
    this.setState({myTripsList: filteredList})
  }

  render() {
    const {myTripsList} = this.state
    console.log(myTripsList)
    return (
      <ReactContext.Provider
        value={{
          myTripsList,
          addTrip: this.addTrip,
          updateTrips: this.updateTrips,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute
            exact
            path="/book-a-new-trip"
            component={BookANewTrip}
          />
          <ProtectedRoute exact path="/my-trips" component={MyTrips} />
          <Route exact path="/bad-path" component={NotFound} />
          <Route component={NotFound} />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default App
