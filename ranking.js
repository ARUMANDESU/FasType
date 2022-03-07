function addToTable(num,username,wpm,keystrokes,ago){
    document.getElementById("ranking").innerHTML+='<tr>' + '<td>'+num+'.'+'</td>' + '<td>'+username+'</td>' + '<td>'+wpm+'</td>' + '<td>'+keystrokes+'</td>' + '<td>'+ago+'</td>' + '</tr>';
}

addToTable(4,"Someone",'50',600,1);