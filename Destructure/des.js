
const user = {

    name: 'Tarek',
    age: 22,
    phone: '01254686',

    education:{
        degree: 'HSC'
    }

};

const {name} = user;

console.log(name);

const {phone: mobile } = user;

console.log(mobile);

const {education: {degree: deg}} = user;

console.log(deg);

// Array destructuring

const num = [1,2,3,4,5];
const num2 = [1,2,[3,4],5];

const [a, b] = num;

const [,c,,d] = num;

console.log(a, b, c, d);

const [,x,[y,z],w] = num2;

console.log(x, y, z, w);