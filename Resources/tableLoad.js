exports.tableMaker = function() {

        var tableWin = Ti.UI.createWindow({
                fullscreen : true,
                backgroundColor : "#ccc"
        });
        var back = Ti.UI.createButton({
                title : "Return",
                top : 0,
                left : 0,
                height : "50dp",
                width : "25%",
                backgroundColor : "#ccc"
        });
        back.addEventListener('click', function() {
                win.open();
                tableWin.close();
        });
        var handbasket = new loadOrm();
        var dataArray = handbasket.read();
        var rowArray = [];
        for (var i in dataArray) {

                var tableRow = Ti.UI.createTableViewRow({
                        height : "8%",
                        object : dataArray[i]
                });

                var nameLabel = Ti.UI.createLabel({
                        left : 5,
                        top : 5,
                        text : dataArray[i].title
                });
                var lastLabel = Ti.UI.createLabel({
                        left : 5,
                        top : 25,
                        text : dataArray[i].last

                });
                var ageLabel = Ti.UI.createLabel({
                        left : "35%",
                        top : 15,
                        text : dataArray[i].ageVal

                });
                tableRow.add(lastLabel);
                tableRow.add(nameLabel);
                tableRow.add(ageLabel);
                rowArray.push(tableRow);
        };
        var tableView = Ti.UI.createTableView({
                top : "50dp",
                data : rowArray
        });

        tableWin.add(back);
        tableWin.add(tableView);
        tableWin.open();

        tableView.addEventListener('click', function(evt) {

                var option = Ti.UI.createOptionDialog({
                        cancel : 2,
                        options : ['Update', 'Delete', 'Cancel'],
                        selectedIndex : 2,
                        destructive : 1,
                        title : 'What would you like to do?',
                        object : evt.rowData.object
                });
                option.show();
                option.addEventListener('click', function(e) {
                		var first = e.source.object.title;
                		var last = e.source.object.last;
                		var age = e.source.object.ageVal;
                		var id = e.source.object.id;
                        switch(e.index) {

                        case 0:
                                loadEdit(first, last, age, id);
                                tableWin.close();
                                break;
				
                        case 1:
                                handbasket.dele(e.source.object.id);
                                loadTable();
                                tableWin.close();
                                break;

                        };
                });
        });
}; 
