let i;

for (i = 0 ;i <5 ;i++)
{
    console.log("numbers are :"+ i);
}

let fruits =["Apple","Banana","lichi"]; 
let x;
for (x in fruits){   //use of in
    console.log(fruits[x]);
}
for (x of fruits){   //use of of
    console.log(x);
}