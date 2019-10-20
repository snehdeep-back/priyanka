function newMessage() {
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function(){
        if(ajaxRequest.readyState == 4) {
            if (ajaxRequest.status == 200) {
                document.getElementById("welcomeMessage").innerHTML = ajaxRequest.responseText;
            }
            else{
                console.log("The Status is not okay")
            }
        }
        else {
            console.log("It's not done")
        }
    }
    ajaxRequest.open("GET", "file:///C:/Users/priyanka.a.rathi/Desktop/Setup's/Priyanka/code/getText.txt", true);
    ajaxRequest.send();
}
