const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>REST-Rant</h1>
                <div className='row'>
                    <div className='col-3'>
                        <h4 className='text-center'>Check out all REST-Rants here:</h4>
                    </div>
                    <div className='col-2'>
                        <a href="/places">
                            <button className="btn btn-primary">REST-Rants</button>
                        </a>
                    </div>
                </div>
                <div className='row d-flex justify-content-evenly py-4'>
                    <div className='col-3 col-6-sm'>
                        <img src='/images/chia-fruit-drink.jpg' alt='Chia Fruit Shake' width='100%' height='100%'></img>
                        <div>
                            Photo by <a href='https://unsplash.com/es/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Brenda Godinzel</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                        </div>
                    </div>
                    <div className='col-3 col-6-sm'>
                        <img src='/images/chia-fruit-drink.jpg' alt='Chia Fruit Shake' width='100%' height='100%'></img>
                        <div>
                            Photo by <a href='https://unsplash.com/es/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Brenda Godinzel</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                        </div>
                    </div>
                    <div className='col-3 col-6-sm'>
                        <img src='/images/chia-fruit-drink.jpg' alt='Chia Fruit Shake' width='100%' height='100%'></img>
                        <div>
                            Photo by <a href='https://unsplash.com/es/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Brenda Godinzel</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                        </div>
                    </div>
                </div>
                <div className='row py-4'>
                    <div className='col'>
                        <img src='/images/chia-fruit-drink.jpg' alt='Chia Fruit Shake' width='100%' height='75%'></img>
                        <div>
                            Photo by <a href='https://unsplash.com/es/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Brenda Godinzel</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                        </div>
                    </div>
                </div>
            </main>
        </Def>
    )
}  

module.exports = home
