exports.loadEdit = function(first, last, age, id) {
	var id = id;
	var handbasket = new loadOrm();
	var editWin = Ti.UI.createWindow({
		fullscreen : true,
		backgroundColor : "#ccc"
	});
	var updater = Ti.UI.createButton({
		title : "Update",
		bottom : "15%",
		height : "8%",
		width : "35%",
		borderRadius : "10dp",
		backgroundColor : "#000",
		color : "#fff"
	});
	var firstUpdate = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top : "44%",
		width : "80%",
		height : "6%",
		hintText : "Please enter your first name.",
		value : first
	});
	var lastUpdate = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top : "51%",
		width : "80%",
		height : "6%",
		hintText : "Please enter your last name.",
		value : last
	});
	var ageUpdate = Ti.UI.createTextField({
		borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
		top : "58%",
		width : "80%",
		height : "6%",
		hintText : "Please enter your age.",
		value : age
	});
	updater.addEventListener('click', function(e){
		var tf1 = firstUpdate.value;
		var tf2 = lastUpdate.value;
		var tf3 = ageUpdate.value;
		
		if (tf1 == '' || tf2 == '' || tf3 == '') {
                alert("Please make sure that all fields are properly filled in!");
        } else {
                handbasket.update(tf1, tf2, tf3, id);
                alert("Thank you for updating!");
                loadTable();
                editWin.close();
        };
	});

	editWin.add(updater);
	editWin.add(firstUpdate);
	editWin.add(lastUpdate);
	editWin.add(ageUpdate);
	editWin.open();
}; 