// Windows
var win = Ti.UI.createWindow({
        fullscreen: true,
        backgroundColor : "#ccc"
});
// win Buttons
var submit = Ti.UI.createButton({
        title : "Submit",
        bottom : "15%",
        height : "8%",
        width : "35%",
        borderRadius : "10dp",
        backgroundColor : "#000",
        color : "#fff"
});
var entry = Ti.UI.createButton({
        title : "Entry View",
        bottom : "6%",
        height : "8%",
        width : "35%",
        borderRadius : "10dp",
        backgroundColor : "#000",
        color : "#fff"
});
// Table
// win Input Fields
var firstName = Ti.UI.createTextField({
        borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top : "44%",
        width : "80%",
        height : "6%",
        hintText : "Please enter your first name."
});
var lastName = Ti.UI.createTextField({
        borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top : "51%",
        width : "80%",
        height : "6%",
        hintText : "Please enter your last name."
});
var age = Ti.UI.createTextField({
        borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        top : "58%",
        width : "80%",
        height : "6%",
        hintText : "Please enter your age."
});
var loadTable = require("tableLoad").tableMaker;
var loadEdit = require("editLoad").loadEdit;
var loadOrm = require("orm").orm;

// Ui Listeners
submit.addEventListener('click', function() {
        var handbasket = new loadOrm();
        var first = firstName.value;
        var last = lastName.value;
        var ageVal = age.value;
       
        if (first == '' || last == '' || ageVal == '') {
                alert("Please make sure that all fields are properly filled in!");
        } else {
                handbasket.create(first, last, ageVal);
                alert("Thank you for submitting! Feel free to add more data!");
                age.value = "";
                firstName.value = "";
                lastName.value = "";
        };
});
//test();
entry.addEventListener('click', loadTable);
// Additions
win.add(entry);
win.add(firstName);
win.add(lastName);
win.add(age);
win.add(submit);
win.open();

