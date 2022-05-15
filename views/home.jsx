const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src='/images/chia-fruit-drink.jpg' alt='Chia Fruit Shake' width='100%' height='100%'></img>
                    <div>
                        Phot by <a href='https://unsplash.com/es/@cravethebenefits?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Brenda Godinzel</a> on <a href='https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}  

module.exports = home
