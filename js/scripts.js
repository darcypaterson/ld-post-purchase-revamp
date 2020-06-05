const mobileSide = document.getElementsByClassName('mobileSide');
const tabLinks = document.getElementsByClassName('tabLinks');
const uiIcon = document.getElementsByClassName('ui-icon');
const uiIconTab = document.getElementsByClassName('ui-icon-tab');
const tabIconImage = document.getElementsByClassName('tabIconImage');



	// function closeEditor() {

	// uiIcon[0].addEventListener('click', function() {

	// 	tabLinks[1].classList.add('d-none');

	// });






function closeEditDialog() {  // closes the edit dialog box

	uiIcon[0].addEventListener('click', function() {

		document.getElementById('editDialogContainer').classList.add('d-none');
		document.getElementById('editDialog').classList.add('d-none');


	});
}


function closeExitEditDialog() {  // closes the exit edit dialog box

	uiIcon[1].addEventListener('click', function() {

		document.getElementById('editDialogContainer').classList.add('d-none');
		document.getElementById('exitEditDialog').classList.add('d-none');	

	});

}




function openEditor() {

	if (document.getElementsByClassName('tabItem')[1].classList.contains('d-none')) {

		document.getElementsByClassName('tabItem')[1].classList.remove('d-none');

	}

	document.getElementById('editDialogContainer').classList.remove('d-none');
	document.getElementById('editDialog').classList.remove('d-none');
	document.getElementById('exitEditDialog').classList.add('d-none');
	document.getElementById('exitEditDialog').classList.remove('d-flex');
	uiIconTab[0].classList.remove('d-none');
	tabIconImage[0].classList.remove('d-none');
	tabIconImage[1].classList.remove('d-none');
	toggleTabs();

}


function closeEditor() {

	if (!(document.getElementsByClassName('tabItem')[1].classList.contains('d-none'))) {

		document.getElementsByClassName('tabItem')[1].classList.add('d-none');

	}

	document.getElementById('editDialogContainer').classList.remove('d-none');
	document.getElementById('exitEditDialog').classList.remove('d-none');



	// uiIconTab[0].classList.remove('d-none');
	// tabIconImage[0].classList.remove('d-none');
	// tabIconImage[1].classList.remove('d-none');
	// toggleTabs();

}





function toggleTabs() {

	var idToAdd = ['nav2', 'nav3', 'print', 'download'];
	var idToRemove = ['save', 'wysiwyg'];


	if (tabLinks[0].classList.contains('active')) {

		tabLinks[0].classList.remove('active');
		tabLinks[1].classList.add('active');
		tabLinks[1].classList.remove('d-none');
		tabLinks[1].style.backgroundColor = "#eee";

		for (var i = 0; i < idToAdd.length; i++) {

			document.getElementById(idToAdd[i]).classList.add('d-none');

		}

		for (var i = 0; i < idToRemove.length; i++) {

			document.getElementById(idToRemove[i]).classList.remove('d-none');

		}


	} else if (tabLinks[1].classList.contains('active')) {

		tabLinks[0].classList.add('active');
		tabLinks[1].classList.remove('active');	
		tabLinks[1].style.backgroundColor = "#c1c1c1";	

		for (var i = 0; i < idToAdd.length; i++) {

			document.getElementById(idToAdd[i]).classList.remove('d-none');

		}

		for (var i = 0; i < idToRemove.length; i++) {

			document.getElementById(idToRemove[i]).classList.add('d-none');

		}

	}

}




// Closes the (Edit) tab 
function closeTab() {
	uiIconTab[0].addEventListener('click', function() {

		if (!(tabLinks[1].classList.contains('d-none'))) {

			tabLinks[1].classList.add('d-none');
			uiIconTab[0].classList.add('d-none');
			tabIconImage[0].classList.add('d-none');
			tabIconImage[1].classList.add('d-none');

		}

		toggleTabs();

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







closeEditDialog();
closeExitEditDialog();
closeTab();