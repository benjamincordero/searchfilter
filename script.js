$(function(){

	$.each(data, function(key, value){
			$('tbody').append('<tr id="'+value.id+'" name="'+value.first_name+'"><td>'+value.id+'</td><td>'+value.first_name+'</td><td>'+value.email+'</td><td>'+value.gender+'</td></tr>');

	});
});

function filtro(inputname){
	inputname = inputname.replace(/á/gi, "a").replace(/é/gi, "e").replace(/í/gi, "i").replace(/ó/gi, "o").replace(/ú/gi, "u");
	var names = $('tr[name]'); 


	$.each(names, function(key, value){ 
		var a_name = $(value).attr('name').replace(/á/gi, "a").replace(/é/gi, "e").replace(/í/gi, "i").replace(/ó/gi, "o").replace(/ú/gi, "u"); 

		if (a_name.toUpperCase().match(inputname.toUpperCase())) { 
			$(value).removeAttr('style'); 
			$(value).removeAttr('hidden'); 
		}else{
			value.style = 'display:none;'; 
		}
	});

}

var data = [{"id":1,"first_name":"Quint Haburne","email":"qhaburne0@skyrock.com","gender":"Male"},
{"id":2,"first_name":"Blaine Canter","email":"bcanter1@dropbox.com","gender":"Male"},
{"id":3,"first_name":"Celestyn Yeend","email":"cyeend2@dedecms.com","gender":"Female"},
{"id":4,"first_name":"Hubert Kidsley","email":"hkidsley3@vkontakte.ru","gender":"Male"},
{"id":5,"first_name":"Audi Surgood","email":"asurgood4@chronoengine.com","gender":"Female"},
{"id":6,"first_name":"Elinor Freed","email":"efreed5@rambler.ru","gender":"Female"},
{"id":7,"first_name":"Elga Minerdo","email":"eminerdo6@earthlink.net","gender":"Female"},
{"id":8,"first_name":"Ira Heinecke","email":"iheinecke7@wunderground.com","gender":"Male"},
{"id":9,"first_name":"Gun MacQuist","email":"gmacquist8@fotki.com","gender":"Male"},
{"id":10,"first_name":"Dennison Goor","email":"dgoor9@bloglovin.com","gender":"Male"},
{"id":11,"first_name":"Roddie De Simone","email":"rdea@theatlantic.com","gender":"Male"},
{"id":12,"first_name":"Conway Worsnop","email":"cworsnopb@free.fr","gender":"Male"},
{"id":13,"first_name":"Aundrea Roskeilly","email":"aroskeillyc@census.gov","gender":"Female"},
{"id":14,"first_name":"Ase Carle","email":"acarled@reverbnation.com","gender":"Male"},
{"id":15,"first_name":"Anestassia Allsebrook","email":"aallsebrooke@tuttocitta.it","gender":"Female"},
{"id":16,"first_name":"Merle Blevin","email":"mblevinf@joomla.org","gender":"Female"},
{"id":17,"first_name":"Cookie Connochie","email":"cconnochieg@nyu.edu","gender":"Female"},
{"id":18,"first_name":"Bernardina Bodsworth","email":"bbodsworthh@360.cn","gender":"Female"},
{"id":19,"first_name":"Hobart Bole","email":"hbolei@cnet.com","gender":"Male"},
{"id":20,"first_name":"Greggory Mowlam","email":"gmowlamj@deviantart.com","gender":"Male"},
{"id":21,"first_name":"Flin Antoniutti","email":"fantoniuttik@wordpress.org","gender":"Male"},
{"id":22,"first_name":"Susanne Stansfield","email":"sstansfieldl@exblog.jp","gender":"Female"},
{"id":23,"first_name":"Pall Chapier","email":"pchapierm@geocities.jp","gender":"Male"},
{"id":24,"first_name":"Audry Milsted","email":"amilstedn@soup.io","gender":"Female"},
{"id":25,"first_name":"Kenyon Vaar","email":"kvaaro@pbs.org","gender":"Male"},
{"id":26,"first_name":"Rickie Godehard.sf","email":"rgodehardsfp@opera.com","gender":"Male"},
{"id":27,"first_name":"Brnaba Bellward","email":"bbellwardq@ftc.gov","gender":"Male"},
{"id":28,"first_name":"Farlay Garnsworthy","email":"fgarnsworthyr@cisco.com","gender":"Male"},
{"id":29,"first_name":"Manda Corneil","email":"mcorneils@miitbeian.gov.cn","gender":"Female"},
{"id":30,"first_name":"Shay Spelman","email":"sspelmant@studiopress.com","gender":"Female"},
];
