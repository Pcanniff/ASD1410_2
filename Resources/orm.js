exports.orm = function() {
	var db = Titanium.Database.open('database');
	db.execute('CREATE TABLE IF NOT EXISTS userdata (id INTEGER PRIMARY KEY, title TEXT, lastname TEXT, age INTEGER)');
	db.close();
	
	this.create = function(first, last, age) {
		var db = Titanium.Database.open('database');
		db.execute('INSERT INTO userdata (title, lastname, age) VALUES (?, ?, ?)', first, last, age);
		db.close();
	};
	this.read = function() {
		var dataArray = [];
		var db = Ti.Database.open('database');
		var rows = db.execute('SELECT id, title, lastname, age FROM userdata');
		while (rows.isValidRow()) {
			dataArray.push({
				id : rows.fieldByName('id'),
				title : rows.fieldByName('title'),
				last : rows.fieldByName('lastname'),
				ageVal : rows.fieldByName('age')
			});
			rows.next();
		}
		rows.close();
		db.close();
		return dataArray;
	};
	this.update = function(first, last, age, id) {
		var db = Titanium.Database.open('database');
		db.execute('UPDATE userdata SET title=?, lastname=?, age=? WHERE id=?', first, last, age, id);
		db.close();
	};
	this.dele = function(id) {
		var db = Titanium.Database.open('database');
		db.execute('DELETE FROM userdata WHERE id= ?', id);
		db.close();
	};

}; 