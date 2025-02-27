document.getElementById('login-btn')
.addEventListener('click',function(event){
    event.preventDefault();
    const mobileNumber = document.getElementById('mobile-number').value;

    const Pin = document.getElementById('pin').value;
    const convertedPin =parseInt(Pin);
    if(mobileNumber.length===11){
        if(convertedPin==1234){
            window.location.href='./main.html'
        }
        else{
            alert('Wrong Pin');
        }
        
    }
    else{
        alert('Invalid Number');
    }
})