
$(document).ready(function(){

$('button').click(function(){
$(".results").html(" ");
    var input = $('input').val();
    console.log(input);
    var j = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+input+"&format=json&callback=?";
    $.getJSON(j)
    .done(function(data){

        

        for (var i = 0; i < data[1].length; i++) {
            $(".results").append("<div class=result>"+data[1][i]+"<br>"+data[2][i]+"<br>"+"<a href='"+data[3][i]+"' target='_blank'>Read in Wikipedia</a>"+"</div>");
        }

    })
    .fail(function(error){
        alert(error);
    });
  
});
});