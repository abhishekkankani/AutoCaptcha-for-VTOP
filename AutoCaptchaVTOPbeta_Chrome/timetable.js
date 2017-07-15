function loadmydiv(urlPattern, callback) {

	$.ajax({
		type: "POST",
		url : urlPattern,
		success : function(response) {
			//console.log(response);
			$("#page-wrapper").html(response);			
			callback();
		},
		error : function(e) {
			 $("#myModal").modal();
		}
	});
}



$(document).ready(function(){
	loadmydiv('academics/common/StudentTimeTable', function() {
		document.getElementsByClassName("form-groups")[0].children[1].children[0].value = "VL2017181";
		document.getElementsByClassName("btn btn-md btn-primary btn-block")[0].click();
	});		
});


