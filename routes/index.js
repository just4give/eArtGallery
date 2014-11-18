var express = require('express');
var router = express.Router();
var data = require('../data.json'); //import data from data.json file

/* GET Home page. */
router.get('/', function(req, res) {
	var myArtworks= [];

  data.category.forEach (function (item){
  	myArtworks = myArtworks.concat(item.gallery);
  });

  res.render('index', { 
  	title: 'Home' ,
  	artisttitle: data.artist.title,
  	artdescription: data.artist.description,
  	artworks: myArtworks
	});
});

/* GET Gallery page. */
router.get('/gallery', function(req, res) {
  	var myArtworks= [];
  	var myCategories =[];
  data.category.forEach (function (item){
  	myArtworks = myArtworks.concat(item.gallery);
  	myCategories = myCategories.concat(item);
  });

  res.render('index', {
   title: 'Gallery' ,
   artworks: myArtworks,
   categories: myCategories

});
});

/* GET Gallery Detail page. */
router.get('/gallery/:galleryId?', function(req, res) {
	var galleryId = req.params.galleryId;
	var myArtworks= [];
	var myGaleryDetails;

  data.category.forEach (function (item){
  	if(item.shortdescription == galleryId){
  	myArtworks = myArtworks.concat(item.gallery);
  	myGaleryDetails = item;
	}
  });


  res.render('index', { 
  	title: 'Gallery Details' ,
  	artworks: myArtworks,
  	galerydetails : myGaleryDetails
  });
});


module.exports = router;
