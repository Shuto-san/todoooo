$(document).ready(function(){

	$('.add').click(function(){
		$('.todo-list').append(`<div class="todolist" id=""></div>`);
		$('.todolist:last').append(`<input type="checkbox" name="check" class="check">`);
		$('.todolist:last').append(`<input type="text" class="form inlineblock" value="">`);
		$('.todolist:last').find('.form').focus();
	});
	
	$(document).on('keypress', '.form', function(code){
		//エンターキーを押して、TODOを更新する
		if (code.which == 13) {
			var titleonly = $(this).val();
			var id = $(this).parent().attr('id');
			alert(id);
			if (id == "") {
				var todo = {
						id : null,
						title : titleonly,
						hours : 1,
						motivation : 1,
						classification : 1,
						priority : 1,
						contents : titleonly
				}
				$.ajax({
					type:"post",
					url:"http://localhost:8080/todoooo/add",
					data:JSON.stringify(todo),
					contentType: 'application/json',
					dataType: "json",
					success: function(json_data){
						id = String(json_data.id);
						$('.todolist:last').attr('id', id);
					}		 		  
				});
				
			} else {
				var todo = {
						id : id,
						title : titleonly,
						hours : 1,
						motivation : 1,
						classification : 1,
						priority : 1,
						contents : titleonly
				}
				$.ajax({
					type:"put",
					url:"http://localhost:8080/todooo/put",
					data:JSON.stringify(todo),
					contentType: 'application/json',
					dataType: "json",
					success: function(json_data){
						alert('update!!');
					}		 		  
				});  				
			}			
			$(this).blur();
		}
	});

	$(document).on('change', '.check', function(){
		var elements = document.getElementsByName('check');
		for(var i = 0 ; i < elements.length ; i++){
			if(elements[i].checked == true){
				var $element = elements[i].parentElement;
				var id = elements[i].parentElement.id;
			}
		}
		
		if (id == "") {
			$element.remove();
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
