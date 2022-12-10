$(document).ready(function() {
    display(location.search);
    $("#hideEn").click(function(){
        console.log("hide");
        $("input").attr("disabled", false);
        $("input").val("");
        $("input").css("border", "3px solid rgb(229, 223, 255)");
    })
    $("#showEn").click(function(){
        document.getElementById("show").innerHTML = "";
        display(location.search);
    })
});

function display(search){
    let year = search.split("?")[1];
    console.log(year);
    $.ajax({
        url: "http://localhost/workSpace/web_project/php/showWords.php",
        type: "POST",
        data: { "year": year }, 
    })
    .done(function(data){
        let obj = JSON.parse(data);
        let tbody = document.getElementById("show");
        for(i = 0; i < 60; i++){
            let tr = document.createElement("tr");
            let input = document.createElement("input");
            input.value = obj[0][i];
            input.type = "text";
            input.disabled = "true";
            let th1 = document.createElement("th");
            let th2 = document.createElement("th");
            let th3 = document.createElement("th");
            th1.appendChild(input);
            th2.innerHTML = obj[1][i];
            th3.innerHTML = 0;
            tr.appendChild(th1);
            tr.appendChild(th2);
            tr.appendChild(th3);
            tbody.appendChild(tr);
        }
    })
}