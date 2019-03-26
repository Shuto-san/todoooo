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
				id : null,
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
				$('.todo-list').append(`<div class="todolist" id="${json_data.id}"></div>`);
				$('.todolist:last').append(`<input type="checkbox" name="check" class="check">`);
				$('.todolist:last').append(`<div>${json_data.title}</div>`);			 
				$('.todolist:last').append(`<div>${json_data.contents}</div>`);			 
			}		 		  
		});  
	});

	$(document).on('change', '.check', function(){
		alert('check!');
		var elements = document.getElementsByName('check');
		for(var i = 0 ; i < elements.length ; i++){
			if(elements[i].checked == true){
				var $element = elements[i].parentElement;
				var id = elements[i].parentElement.id;
			}
		}
		$.ajax({
			type:"delete",
			url:`http://localhost:8080/todoooo/delete/${id}`,
			contentType: 'application/json',
			dataType: "json",
			success: function(json_data){
				$element.remove();
			}

		});
	});
});
