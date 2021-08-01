
const stu=[
    {name:"Aadhi" , gender:"male"},
    {name:"Ahmed" , gender:"male"},
    {name:"Angel" , gender:"female"},
    {name:"Kavi" , gender:"female"}
    ];
    console.log('Total students =>',stu);
    console.log("Female Students=>",stu.filter( student => student.gender === "female").map(stu => stu.name))
    console.log("Students name starting with 'A' =>",stu.filter( student => student["name"].startsWith("A")).map(stu => stu.name))
    console.log("Male students =>",stu.filter( student => student.gender === "male").length)
