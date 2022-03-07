document.getElementById("inputText").onclick= function (){addComment()};

function addComment(){
    document.getElementById("comment").innerHTML+= '<div class="comments">' +
        '<div class="raw my-2 p-2 d-flex" style="background-color: #264653;">' +
        '<div class="col-2">' + '<img src="image/ecce-homo.jpg">' + '</div>' +
        ' <div class="col-10">' + '<p>'+document.getElementById("inputComment").value+'</p>' + '</div>' + '</div>' + '</div>';
    document.getElementById("inputComment").value="";
}
