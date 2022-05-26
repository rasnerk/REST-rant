const React = require('react')
const Def = require('../default')

function SinglePlace (data) {
    let comments = (
        <h3 className='inactive'>
            No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className='border comment'>
                    <h2 className='rant'>{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className='row py-4'>
                    <div className='col-sm-6'>
                        <img src={data.place.pic} alt={data.place.name} style={ {width: '100%', height: '100%'}} />
                        <h3>Located in {data.place.city}, {data.place.state}</h3>
                    </div>
                    <div className='col-sm-6'>
                        <h2>Description</h2>
                        <h3>{data.place.showEstablished()}</h3>
                        <h4>Serving {data.place.cuisines}</h4>
                        <div className='options'>
                             <a href={`/places/${data.place._id.toHexString()}/edit`} className="btn btn-warning mx-2"> 
                                Edit
                            </a>     
                            <form method="POST" action={`/places/${data.place._id.toHexString()}?_method=DELETE`} className='mx-2'> 
                                <button type="submit" className="btn btn-danger">
                                    Delete
                                </button>
                            </form> 
                        </div>
                    </div>
                </div>
                <hr />
                <div className='row py-4'>
                    <h2 className='rant'>Comments</h2>
                    <div className='comments-container d-flex justify-content-evenly'>
                        {comments}
                    </div>
                </div>
                <hr />
                <h3>Got Your Own Rant or Rave?</h3>
                <form className='p-4' method='POST' action={`/places/${data.place._id.toHexString()}/comment`}>
                    <div className='row'>
                        <div className='col'>
                            <div className='form-group'>
                                <label htmlFor='content'>Content</label>
                                <textarea id='content' className='form-control' name='content'></textarea>
                            </div>
                        </div>
                    </div>
                    <div className='row py-4'>
                        <div className='col'></div>
                        <div className='col-sm-2'>
                            <div className='form-group'>
                                <label htmlFor='author'>Author</label>
                                <input id='author' name='author' type='text' className='form-control' placeholder='Author' />
                            </div>
                        </div>
                        <div className='col-sm-3'>
                            <div className='form-group'>
                                <label htmlFor='star'>Star Rating</label>
                                <input id='star' name='stars' type='range' className='form-range' step="0.5" min="0" max="5" />
                            </div>
                        </div>
                        <div className='col-sm-2'>
                            <div className='form-group'>
                                <label htmlFor='rant'>Rant?</label>
                                <div className='form-check d-flex justify-content-center'>
                                    <input id='rant' name='rant' className='form-check-input' type='checkbox' />
                                </div>
                            </div>
                        </div>
                        <div className='col'></div>
                    </div>
                    <div className='py-4'>
                        <button type='submit' className='btn btn-primary'>Add Comment</button>
                    </div>
                </form>    
          </main>
        </Def>
    )
}

module.exports = SinglePlace