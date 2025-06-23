function callback(){
    console.log("hi jie");
}

setTimeout(function() {
    console.log("hi");
    setTimeout(function() {
        console.log("hello")
        setTimeout(function(){
            console.log("just check first")
           setTimeout(function(){
            console.log("hey")
           }, 70000);
        }, 2000);
    }, 1000);
   
}, 5000);