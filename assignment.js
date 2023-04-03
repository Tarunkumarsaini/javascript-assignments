const members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];
  const firstNames = members.map((a) => {
    const firstNames = a.name.split(" ")[0];
    return firstNames;
  });
  console.log(firstNames);

  const lastNames = members.map((a) => {
    const lastNames = a.name.split(" ")[1];
    return lastNames.toString().toUpperCase();
  });
  for(let j = 0; j<7;j++){
   console.log(firstNames[j] +" " + lastNames[+j]);}

const sortages = members.filter((item)=>{
  return item.age >=41 && item.age <=60 ;
});
console.log(sortages);