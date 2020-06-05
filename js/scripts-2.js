const mobileSide = document.getElementsByClassName('mobileSide');
const tabLinks = document.getElementsByClassName('tabLinks');
const uiIcon = document.getElementsByClassName('ui-icon');
const uiIconTab = document.getElementsByClassName('ui-icon-tab');
const tabIconImage = document.getElementsByClassName('tabIconImage');







function closeEditDialog() {  // closes the edit dialog box

	document.getElementById('editDialogContainer').classList.add('d-none');
	document.getElementById('editDialog').classList.add('d-none');

}


function closeExitEditDialog() {  // closes the exit edit dialog box

	document.getElementById('editDialogContainer').classList.add('d-none');
	document.getElementById('exitEditDialog').classList.add('d-none');	
	document.getElementsByClassName('mobileCheckList')[0].classList.remove('d-none');
	document.getElementById('navDocView').classList.remove('d-none');
	document.getElementById('navTextEditView').classList.add('d-none');
	document.getElementById('saveTextEdits').classList.add('d-none');
	document.getElementById('share').classList.remove('d-none');
	document.getElementById('e-sign').classList.remove('d-none');
	
}


function openClose() {

	for (var i = 0; i < document.getElementsByClassName('on-off').length; i++) {

		document.getElementsByClassName('on-off')[i].classList.toggle('d-none');

		if (document.getElementsByClassName('on-off')[i].classList.contains('d-flex')) {

			document.getElementsByClassName('on-off')[i].classList.toggle('d-flex');
		}
	}

	tabLinks[0].classList.toggle('active');
	tabLinks[1].classList.toggle('active');
	tabLinks[1].style.backgroundColor = "rgb(238, 238, 238)";

}




function toggleTabs() {

	var idToAdd = ['nav2', 'nav3', 'print', 'download'];
	// var idToRemove = ['save', 'wysiwyg'];


	if (tabLinks[0].classList.contains('active')) {

		tabLinks[0].classList.remove('active');
		tabLinks[1].classList.add('active');
		tabLinks[1].classList.remove('d-none');
		tabLinks[1].style.backgroundColor = "#eee";
		document.getElementById('wysiwyg').classList.remove('d-none');

		for (var i = 0; i < idToAdd.length; i++) {

			document.getElementById(idToAdd[i]).classList.add('d-none');

		}




	} else if (tabLinks[1].classList.contains('active')) {

		tabLinks[0].classList.add('active');
		tabLinks[1].classList.remove('active');	
		tabLinks[1].style.backgroundColor = "#c1c1c1";	
		document.getElementById('wysiwyg').classList.add('d-none');

		for (var i = 0; i < idToAdd.length; i++) {

			document.getElementById(idToAdd[i]).classList.remove('d-none');

		}


	}


}







// Below are the functions for the sidebar menu 


// Closes the (Edit) tab 
function closeTab() {
	uiIconTab[0].addEventListener('click', function() {

		if (!(tabLinks[1].classList.contains('d-none'))) {

			tabLinks[1].classList.add('d-none');
			uiIconTab[0].classList.add('d-none');
			tabIconImage[0].classList.add('d-none');
			tabIconImage[1].classList.add('d-none');

		}

	});
}




// This toggles the sidebar menu open/close when in mobile
function toggle() {

    document.getElementsByClassName('mobileCheckList')[0].classList.toggle("mobileCheckWidth");
    // document.getElementsByClassName('mobileCheckList')[0].classList.toggle("mobileCloseWidth");
    mobileSide[0].classList.toggle("d-none");
    mobileSide[1].classList.toggle("d-none");
    document.getElementsByClassName('openIcon')[0].classList.toggle("d-none");
    document.getElementsByClassName('closeIcon')[0].classList.toggle("d-none");

}


// When the window resizes, this either collapse (mobile) or expand (desktop) the side menu depending on its width 
window.addEventListener('resize', function() {

	if ( (window.innerWidth >= '992') && (mobileSide[0].classList.contains('d-none')) ) {


		mobileSide[0].classList.remove("d-none");
		mobileSide[1].classList.remove("d-none");

		tabLinks[0].innerText = "Power of Attorney (Original)";
		tabLinks[1].innerText = "Power of Attorney (Edit)";


	} else if ((window.innerWidth <= '992') && (mobileSide[0].style.display = 'block') ) {

		mobileSide[0].classList.add("d-none");
		mobileSide[1].classList.add("d-none");

		tabLinks[0].innerText = "(Original)";
		tabLinks[1].innerText = "(Edit)";

	}


});


// When the window loads, this either collapse (mobile) or expand (desktop) the side menu depending on its width 
window.addEventListener('load', function() {

	if ( (window.innerWidth >= '992') && (mobileSide[0].classList.contains('d-none')) ) {

		mobileSide[0].classList.remove("d-none");
		mobileSide[1].classList.remove("d-none");

	}

});



