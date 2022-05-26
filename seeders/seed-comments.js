const Place = require('../models/schemas/places')
const Comment = require('../models/schemas/comment')

async function seed() {
    await Place.findOne({ name: 'H-Thai-ML'}, (err,doc) => {
        if (err) {
            console.log(err)
            return;
        } else {
            console.log(doc)
        }
    })
    // let place = await Place.findOne({ name: 'H-Thai-ML' }, (err,doc) => {
    //     if (err) console.log(err)
    //     else console.log(doc)
    // })

    // let comment = await Comment.create({
    //     author: 'Famished Fran',
    //     rant: false,
    //     stars: 5.0,
    //     content: 'Wow, simply amazing! Highly recommended!'
    // })

    // await place.save()

    process.exit()
}

seed()