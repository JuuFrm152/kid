//console.log('Hello world')
            
//var prompt= prompt('what is your name')

//console.log(prompt)


function verifyAge (age) {
  var age = prompt('what is your age?');
  console.log(age)

  if (age < 18) {
   alert(' you are a minor ');
  } else if (age >= 18 && age <= 65){
    alert('you are old get out of here');
  }{
    alert('you are a senor citizen!');
  }

  
}