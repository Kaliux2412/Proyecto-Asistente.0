const factorial = (n)=>{
    let i = n-1
    for( let f = i; f > 0; f-- ){
        let x = n * f
        n = x
        
    }
    console.log(n)
}

factorial(6)

function pqep(n){
    if(n === 0 || n === 1){
        return 1
    }else{
        let x =  0
        for(let i = 0; i = n-1; i++){
            x = i + x
            
        }
    }
}



function palindromo(palabra){
    let separar = palabra.split('')
    console.log(separar)
    for(let n = 0; n < palabra.length; n++){
        console.log(separar[n])
    }
}
palindromo('radar')