'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$('.project a').click(addProjectDetails);

	$('#colorBtn').click(randomizeColors);
}

/*
 * Make an AJAX call to retrieve project details and add it in
 */
function addProjectDetails(e) {
	// Prevent following the link
	e.preventDefault();

	// Get the div ID, e.g., "project3"
	var projectID = $(this).closest('.project').attr('id');
	// get rid of 'project' from the front of the id 'project3'
	var idNumber = projectID.substr('project'.length);

	console.log("User clicked on project " + idNumber);
	$.get("http://localhost:3000/project/"+idNumber, callBackFn);)
}

function callBackFn(result){
	console.log(result.image);
	console.log("#"+result.id+" "+".details");
	$("#project"+result.id+" "+".details").append("<img class=detailsImage src="+result.image+" />");
 	$("#project"+result.id+" "+".details").append("<h5>"+result.title+"</h5>");
 	$("#project"+result.id+" "+".details").append(result.summary);
}

// function addProject(result) {
//   var projectHTML = '<a href="#" class="thumbnail">' +
//     '<img src="' + result['image'] + '" class="img">' +
//     '<p>' + result['title'] + '</p>' +
//     '<p><small>' + result['date'] +
//     '</small></p></a>'; 
// }

// $.get("http://URL", callBackFn)

// $.post("http://URL", {"json":"json"}, callBackFn)
