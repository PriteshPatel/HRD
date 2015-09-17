var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('hrd', ['typeOfDiseases', 'diseases']);

//console.log(__dirname);
app.use(express.static(__dirname + '/app'));

app.get('/typeOfDiseases', function (req, res) {
    //console.log('I received a GET request');

    db.typeOfDiseases.find(function (err, docs) {
        //console.log(docs);
        res.json(docs);
    });
});

//var mongoose = require('mongoose');
//var Schema = mongoose.Schema;

//var diseasesSchema = new Schema({
//    typeofdiseasesID: Number,
//    name: String,
//    description: String,
//    createddate: String,
//    modifieddate: String,
//    symptoms: String,
//    viewarea: String,
//    diagnosed: String,
//    prevenation: String,
//    treatment: String,
//});
//var diseases = mongoose.model('diseases', diseasesSchema);
app.get('/diseases/:id', function (req, res) {
    var id = req.params.id;
    db.diseases.find({ typeofdiseasesID: parseInt(id) }, function (err, doc) {
        res.json(doc);
    });
});

app.listen(3000);
console.log("Server running on port 3000");