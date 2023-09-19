const button = document.querySelectorAll('.btn');
const text = document.querySelector('textarea');
const dlt = document.querySelector('.dlt');
const shift = document.querySelector('.shift');
const space = document.querySelector('.space') ;
const enter = document.querySelector('.enter');
const tab = document.querySelector('.tab_key');

let array = [];

button.forEach(btn =>{
    btn.addEventListener('click' ,()=>{
        text.value += btn.innerText;
        array = text.value.split('');
        console.log(array);
    })
})

dlt.addEventListener('click',()=>{
array.pop();
text.value = array.join('');
})

space.addEventListener('click',()=>{
    text.value += " ";
})

shift.addEventListener('click',()=>{
    button.forEach(btn=>{
        btn.classList.toggle('upper')
    })
})


enter.addEventListener('click',function(e){
    e.preventDefault()
    const currentValue = text.value
    text.value = currentValue+ "\n"
    console.log(currentValue);

})

tab.addEventListener('click',()=>{
    text.value += "   ";
}
    )



