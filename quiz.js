function check(){
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question2.value;
    var q3=document.quiz.question3.value;
    var q4=document.quiz.question4.value;
    var q5=document.quiz.question5.value;
    var result=document.getElementById('result');
    var quiz=document.getElementById("quiz");
    if(q1=="january10") {c++}
    if(q2=="jcs") {c++}
    if(q3=="bla") {c++}
    if(q4=="bat1") {c++}
    if(q5=="ash") {c++}
    //quiz.style.display=null;
    

    if(c<=4){

        result.textContent=`Your Result is ${c}. Not good, please refresh and try again.`
    
}else{

    result.textContent=`Your Result is ${c}. You're definitely an Imposter.`

}

}