/* globals $ */

$(document).ready(() => {
	var subheader = $(".subheader-block");
	var modalDialog = $(".modal-dialog");
	var header = $("header");

	$("#modalDialog").on('show.bs.modal', () => {
		var headerHeight = header.height();
		var scrollTop = $(window).scrollTop();

		var margin = -25;
		if (scrollTop < headerHeight) {
			margin += headerHeight - scrollTop;
		}
		modalDialog.css("margin-top", margin + "px");
  });
});
