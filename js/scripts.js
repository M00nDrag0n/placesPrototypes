
function Brochure() {
  this.places = [] //this is a folder for files of places to go
  this.currentId = 0
}

Brochure.prototype.addPlace = function (place){//prototypes are functions
  place.id = this.assignId();
  this.places.push(place);
}

Brochure.prototype.assignId = function(){
  this.currentId += 1;
  return this.currentId;
}

Brochure.prototype.findPlace = function (id){
  for (i = 0; i < this.places.length; i++){
    if (this.places[i]){
      if (this.places[i].id == id){
      return this.places[i]
      }
    }
  };
  return false;
}




function Place (country, city, year){ //"Place" contains a file with infos of one place at a time (which is why we called it a brochure, Anise.)

  this.country = country;
  this.city = city;
  this.year = year;

}
var brochure = new Brochure();
var place1 = new Place("China", "Nanjing", "2016");
var place2 = new Place("France", "Paris", "1996");
brochure.addPlace(place1);
brochure.addPlace(place2);
