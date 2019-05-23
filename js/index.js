$(function(){
	$('#prod').hover(function() {
		// 鼠标移入时添加hover类
		$('#project_show').removeClass('project_show_none')
		$('#project_show').removeClass('project_show_active')
		$('#project_show').addClass('project_show_active')
		$('#project_show').hover(function(){
			$('#project_show').removeClass('project_show_none')
			$('#project_show').removeClass('project_show_active')
			$('#project_show').addClass('project_show_active')
		},function(){	
			$('#project_show').addClass('project_show_none')
		})
		},function(){			
			$('#project_show').addClass('project_show_none')
  });
  
})
