const React = require('react')
const Def = require('../default')

function SinglePlace (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
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