function newMessage() {
    var ajaxRequest = new XMLHttpRequest();
    ajaxRequest.onreadystatechange = function(){
        if(ajaxRequest.readyState == 4) {
            if (ajaxRequest.status == 200) {
                document.getElementById("welcomeMessage").innerHTML = ajaxRequest.responseText;
            }
            else{
                console.log("Status is not ok")
            }
        }
        else {
            console.log("Not done")
        }
    }
    ajaxRequest.open("GET", "file:///C:/Users/priyanka.a.rathi/Desktop/Setup's/Priyanka/code/getText.txt", true);
    ajaxRequest.send();
}