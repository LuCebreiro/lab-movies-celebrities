//  Add your code here
const mongoose = require('mongoose')

const celebritieSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Required field'],
        },
        ocupation: {
            type: String,
            required: [true, 'Required field'],
        },
        catchPhrase: {
            type: String,
            required: [true, 'Required field'],
        }
    },
    {
        timestamps: true,
    }
)

const Celebrity = mongoose.model('Celebrity', celebritieSchema);

module.exports = Celebrity