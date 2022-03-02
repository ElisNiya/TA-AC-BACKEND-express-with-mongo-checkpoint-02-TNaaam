var mongoose = require('mongoose')
var schema = mongoose.schema
var eventSchema = new schema({
    title: {type:String, required:true},
    summary: String,
    host: String,
    start_date: Date,
    end_date: Date,
    event_category: [String],
    location: String,
    likes: Number,
    remarks: [String]
}, {timestamps: true})

var Book = mongoose.model('Book', bookSchema)

module.exports = Book
