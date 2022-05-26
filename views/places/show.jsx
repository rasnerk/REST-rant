const React = require('react')
const Def = require('../default')

function SinglePlace (data) {
    return (
        <Def>
            <main>
                <div className='row'>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name} style={ {width: '100%', height: '100%'}} />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                    <div className='col-sm-6'>
                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4>Serving {data.place.cuisines}</h4>
                    </div>
                </div>
                <a href={`/places/${data.place._id.toHexString()}/edit`} className="btn btn-warning"> 
                    Edit
                </a>     
                <form method="POST" action={`/places/${data.place._id.toHexString()}?_method=DELETE`}> 
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>     
          </main>
        </Def>
    )
}

module.exports = SinglePlace