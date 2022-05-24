// Implementar el código aqui

// Escuchar el evento 'submit'

const form = document.querySelector('form');

form.addEventListener('submit', function(e){
    e.preventDefault();
    
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    const imc = (weight / ((height*height)/10000))

    console.log("1 "+height)
    console.log("2 "+weight)

    if(height<=1){
        console.log("no eres un gnomo no mides  "+height)

    }
    else if(weight>=800){
        console.log("eres pesado pero no tanto  ")

    }
    else{
        console.log("3 "+imc)
        results.innerHTML = `<span>${imc}</span>`


    }
 



});

console.log("1 "+height)
console.log("2 "+weight)