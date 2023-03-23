const members = [
    {name: 'Rakesh Gupta', age: 20},
    {name: 'Yash Jangid', age: 40},
    {name: 'Firoz Khan', age: 41},
    {name: 'Amrit Srivastava', age: 17},
    {name: 'Chandraprakash Sharma'},
    {name: 'Swpril Ahuja', age: 45},
    {name: 'Yogesh Khatri', age: 51}
  ];
  let newarr = members.map(function(a){
    return a.name;
  });
for(let i = 0 ;i<newarr.length;i++){
    const st = newarr[i].toString();
    const new1 = st.split(" ") ;
    const new2 = new1[0];
    console.log(new2);
}
  