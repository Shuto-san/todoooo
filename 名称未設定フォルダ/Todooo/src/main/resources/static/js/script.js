$(document).ready(function(){

  $('.header-list li, .add').click(function(){
    $('#login-modal').fadeIn();
  });

  $('.close-modal').click(function(){
	  $('#login-modal').fadeOut();
  });

  $('#submit-btn').click(function(){
	  
	  var title = $('#title').val();
	  var hours = $('#hours').val();
	  var motivation = $('#motivation').val();
	  var classification = $('#classification').val();
	  var priority = $('#priority').val();
	  var contents = $('#contents').val();
	  
	  var todo = {
	    id : "1",
		title : title,
		hours : hours,
		motivation : motivation,
		classification : classification,
		priority : priority,
		contents : contents
	  }
	  console.log(JSON.stringify(todo));
	  $('#login-modal').fadeOut();

	  $.ajax({
		 type:"post",
		 url:"http://localhost:8080/todoooo/add",
		 data:JSON.stringify(todo),
		 contentType: 'application/json',
		 dataType: "json",
		 success: function(json_data){
			 $('.todo-list-add').append(json_data.title);
			 $('.todo-list-add').append(json_data.contents);
			 
		 }
		 		  
	  });
  });
  
//  $('input[name="check"]').change(function(){
//  });
});
