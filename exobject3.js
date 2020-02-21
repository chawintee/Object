let fruit=null, value=null ,f;

let allfruit = {};

// fruit += `s`;
while(true) {
    
    fruit = prompt('input you fruit');
    if (fruit == `stop`) break;
    value = +prompt(`input your number of fruit`);
    
    if (value > 1) {
        fruit += `s`;
    }
    
    allfruit[fruit]=value;
    
    console.log(allfruit);

}