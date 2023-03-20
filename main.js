// Javascript array
const city = ['Dhaka', 'Rangpur', 'Dinajpur'];
for(var i = 0; i < city.length; i++){
    console.log(city[i]);
}


// Array concat
const city1 = ['Dhaka', 'Rangpur', 'Dinajpur'];
const city2 = ['Barisal', 'Rajshahi', 'Sylhet'];
const cities = city1.concat(city2);
console.log(cities);


// Array From
const name = Array.from('Azharul Islam');
console.log(name);
const letter = ['a', 'b', 'abc'];
console.log(Array.from(letter));

// Array Filter
var marks = [50,40,45,37,55];
marks.filter(function(mark){
    console.log(mark > 40)
})








