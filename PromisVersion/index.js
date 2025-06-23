//consider as black box for now
//itna to dikh raha hai ki yaha milisecond me khel raha hai 
function setTimeoutPromisified(ms){
    return new Promise(resolve => setTimeout(resolve, ms));

}
//solution 1 for call back hell
setTimeoutPromisified(100)
   .then(function() {
    console.log("hi");
    return setTimeoutPromisified(300);
   })
   .then(function() {
    console.log("hello");
    return setTimeoutPromisified(500);
   })
   .then(function (){
    console.log("kuch bhi");
    return setTimeoutPromisified(600);

   })
   .then(function (){
    console.log("java script and JAVA both of you heartly thank you for come in my life at correct timing")
   })