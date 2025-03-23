
mypromis = new Promise((reslove ,reject)=> {
    setTimeout( () => {
        let success= false
        if(success == true){
            reslove('hello')
        }
        else{
            reject('error')
        }
    },2000)
}
)
mypromis
.then(response => {
    console.log(response)
})
.catch(error => {
    console.log(error)
})


fetch ("https://jsonplaceholder.typicode.com/todos/1")
.then(response => response.json())
.then(data => console.log(data))

.catch(error => console.log(error))

.finally('hey i am fnally');



function changecolor (button){
    color =button.style.color
    if (color == 'red'){
        button.style.backgroundColor = 'blue'
    }
    else{
        button.style.color = 'red'
    }
}

let test = document.getElementById('btn-3')
test.addEventListener('click' , () => {
    if (test.innerText == 'Buy Now'){
        test.innerText = 'Added to Cart'
    }
    else if(test.innerText == 'Added to Cart'){
        test.innerText = 'Buy Now'
    }
        
    }
)



async function hello() {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")

    let data = response.json();
    console.log(data)

    
}
