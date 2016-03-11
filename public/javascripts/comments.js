	$(document).ready(function(){
	    $("#serialize").click(function(){
		var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val()};
		jobj = JSON.stringify(myobj);
		$("#json").text(jobj);

		var url = "comment";
	$.ajax({
	  url:url,
	  type: "POST",
	  data: jobj,
	  contentType: "application/json; charset=utf-8",
	  success: function(data,textStatus) {
	      $("#done").html(textStatus);
		var comment = new Comment({name: req.body.Name, comment: req.body.Comment}); //[3]
console.log(comment);

	  }
	});		


    });


      $("#getThem").click(function() {
      $.getJSON('comment', function(data) {
        console.log(data);
        var everything = "<ul class='white'>";
        for(var comment in data) {
          com = data[comment];
          everything += "<li>Name: " + com.Name + " -- Comment: " + com.Comment + "</li>";
        }
        everything += "</ul>";
        $("#comments").html(everything);
      });
    });


});
