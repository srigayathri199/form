var  fr =  document.querySelector('.mar');
let submitbtn = document.querySelector('.submit');
let checkbox = document.querySelector('.chk');
let message = document.querySelector('.message');
let ipvalues = document.querySelectorAll('input');
let h1 = document.querySelector('h1')

//check all input values are given
const checkFilled = function(){
    const nodevalues = Array.from(ipvalues).filter((el)=>{
        if(el.type !='radio' && el.type !='checkbox')
        return [el.value];
    });

    const checkValue = nodevalues.map((el)=>{
        if(el.value){
            return true
        }else{
            return false
        }
    });

    let bool = false;
    const u = new Set(checkValue);
    if(u.size === 1 && u.has(true)){
        bool = true
    } 
    return bool;
}



// Gender selection
function gender(){
    var categories = document.getElementsByName('gender');
    var genValue = false;

    for(var i=0; i<categories.length;i++){
        if(categories[i].checked == true){
            genValue = true;    
        }
    }
    return genValue;
}

//Submit handler and modal display
submitbtn.addEventListener('click',function(e){
        e.preventDefault();
        const radio = gender();
        const values =  checkFilled();
        console.log(values);
        if(checkbox.checked && radio && values){
    
            fr.style.display = 'none';
            h1.style.display = 'none';
            document.body.style.backgroundColor = 'white'

             message.style.cssText = "display:block;textAlign :center;position :absolute;top :50%;left :25% ; fontSize:2rem";

        }else if(!radio) alert('Choose the Gender')
        else if(!values) alert('fill complete details')
        else if(!checkbox.checked)  alert('Please agree the terms')
})

