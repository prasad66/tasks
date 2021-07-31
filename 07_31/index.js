// let a={name: "Afghanistan", topLevelDomain: Array(1), alpha2Code: "AF", alpha3Code: "AFG"}
// fetch(' https://restcountries.eu/rest/v2/all')
//   .then(response => response.json()).forEach(element => {
//       console.log(element)
//   });
//   .then(data => console.log(data));

// var obj1 = { name: "Person 1", age:5 };
// var obj2 = { age:5, name: "Person 1" };
// console.log( _.isEqual(obj1,obj2))

const stu=[
    {name:"Aadhi" , gender:"male"},
    {name:"Ahmed" , gender:"male"},
    {name:"Angel" , gender:"female"},
    {name:"Kavi" , gender:"female"}
    ];
    console.log(stu.filter( student => student.gender === "female").map(stu => stu.name))
    console.log(stu.filter( student => student["name"].startsWith("A")).map(stu => stu.name))
    console.log(stu.filter( student => student.gender === "male").length)