//////////////////////////////////////////////////////////////

/* cannot input variable */

// let propertiesName = "age";

// let obj = {
//   propertiesName: 20, // จะได้ key เป็น propertiesName
// }

// console.log(obj);





///////////////////////////////////////////////////////////////////
/* caninput variable */

// let propertiesName = "age",hello = "name" ,a=20;

// let obj = {
//     [propertiesName]: 20,
// }


// obj[hello] = a;
// console.log(obj);


//////////////////////////////////////////////////////////////////////

/* example 1 example*/

// let input=null,value=null;
// let data = {};

// input = prompt(`input`);
// value = prompt(`value`);

// data[input] = value  ;
// console.log(data);

////////////////////////////////////////////////////

/* loop */

let input=null,value=null;

let data = {};

while(true){
    input = prompt(`input`);
    if(input==`stop`) break;
    value = prompt(`value`);
    data[input]=value;
    console.log(data);
}





//////////////////////////////////////////////////////////////////






// let data = {};

// let hello = 'age';

// data[hello];
