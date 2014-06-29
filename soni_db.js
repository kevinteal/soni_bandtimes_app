// JavaScript Document

function set_up_soni_db(){
	//alert("DB");
	var db = openDatabase('soni_db', '1.0', 'soni band db', 2 * 1024 * 1024);
		db.transaction(function (tx) {
		//tx.executeSql('DROP TABLE bands');
		tx.executeSql('CREATE TABLE IF NOT EXISTS bands (id unique, band_name, stage, day, start_time, finish_time, band_fav)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (1, "turbowolf", "bohemia", 2, 0930, 1020, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (2, "metalica", "apollo", 3, 2030, 2320, 0)');
		tx.executeSql('INSERT INTO bands (id, band_name, stage, day, start_time, finish_time, band_fav) VALUES (3, "anthra", "saturn", 1, 2130, 2320, 1)');
	});
}