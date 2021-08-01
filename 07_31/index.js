
const stu=[
    {name:"Aadhi" , gender:"male"},
    {name:"Ahmed" , gender:"male"},
    {name:"Angel" , gender:"female"},
    {name:"Kavi" , gender:"female"}
    ];
    console.log(stu);
    console.log(stu.filter( student => student.gender === "female").map(stu => stu.name))
    console.log(stu.filter( student => student["name"].startsWith("A")).map(stu => stu.name))
    console.log(stu.filter( student => student.gender === "male").length)
