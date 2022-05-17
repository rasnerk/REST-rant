const React = require('react')
const Def = require('../default')

function newPlace () {
    return (
        <Def>
            <main>
                <h1>Add a New Place</h1>
                <div id='new-place-container'>
                    <form method="POST" action="/places">
                        <div className="form-group">
                            <label htmlFor="name">Place Name</label>
                            <input className="form-control" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="pic">Place Picture</label>
                            <input className="form-control" id="pic" name="pic" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input className="form-control" id="city" name="city" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="state">State</label>
                            <input className="form-control" id="state" name="state" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="cuisines">Cuisines</label>
                            <input className="form-control" id="cuisines" name="cuisines" required />
                        </div>
                        <input className="btn btn-primary my-2" type="submit" value="Add Place" />
                    </form>
                </div>
            </main>
        </Def>
    )
}  

module.exports = newPlace
