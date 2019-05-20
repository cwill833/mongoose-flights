const Flight = require('../models/flight');
const today = Date.now()

function index (req, res){
    Flight.find({}, function(err, flights){
        res.render('flights/index', {
        title: 'All Flights',
        today,
        flights
        })
    })
}

function newFlight (req, res){
   res.render('flights/new', {
       title: 'Add Flight'
   })
}

function create (req, res){
    var flight = new Flight(req.body)
    console.log(flight)
    flight.save(function(err){
        if(err){
            console.log(flight, err)
        }
        res.redirect('flights')
    })
}

function show(req,res){
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', { 
            flight,
            title: 'show'
        })
    }
)}



module.exports = {
    index,
    new: newFlight,
    create,
    show
}