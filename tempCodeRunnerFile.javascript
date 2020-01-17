const familyMember = [
    {
        name: "rene",
        age: 32,
        position: "father"
    },
    {
        name: "mateus",
        age: 3,
        position: "oldest son",
    }
];

let animals = ["bird", "cat", "fish"];

animals.push('dog');

animals.forEach(currentItem => {
    console.log(`I love ${currentItem}`);
});

const filterAnimal = ()=>{
    const result = animals.filter(word => word.length > 3);
    console.log(result);
} 
