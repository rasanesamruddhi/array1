let employee=["sahil","ram","shyam","radha","rahul"];
employee.reverse();
console.log(employee);
let country=[
    {
        name:"japan",
        capital:"tokyo",
        population:"20,000",

    },
    {
        name:"france",
        capital:"paris",
        population:"500",
    },
    {
        name:"brazil",
        capital:"brasilia",
        population:"900",
    },
    {
       name:"germani",
       capital:"berlin",
       population:"15000",
    },
    {
        name:"italy",
        capital:"rome",
        population:"2000",
        } 
        ] 
        let countries=country.filter(country=>country.population>"2000");
        console.log(countries);