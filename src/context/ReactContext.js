import React from 'react'

const ReactContext = React.createContext({
  myTripsList: [],
  addTrip: () => {},
  updateTrips: () => {
    console.log('hello')
  },
})

export default ReactContext
