const React = require('react')
const Def = require('../default')

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className='col-2 col-4-sm'>
          <h2 className='text-center'>{place.name}</h2>
          <p className='text-center'>
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name} height='250px' width='100%' />
          <p className='text-center'>
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })

    return (
      <Def>
          <main>
              <h1>Places to Rant or Rave About</h1>
              <div className='row'>
                {placesFormatted}
              </div>
          </main>
      </Def>
  )
}  

module.exports = index