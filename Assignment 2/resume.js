function getjson(file,callback){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json")
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function() {
		if (xhr.readyState === 4 && xhr.status =="200") {
			callback(xhr.responseText);
		}
	}
xhr.send();
}
getjson("resume.json",function(text){
	var data=JSON.parse(text);
	console.log(data);
	mydetails(data.details);
	hobbies(data.Hobbies);
	lang(data.Languages);
	carobj(data.carobj);
	edu(data.Education);
	skills(data.skills);
})
var parent = document.querySelector(".parent-div");
var div1= document.querySelector(".div1");
var div2=document.querySelector(".div2");
function mydetails(r){
	var d=document.createElement("div");
	d.classList.add("basicdetails");
	div1.appendChild(d)
	parent.appendChild(div1);

	var i=document.createElement("img");
	i.src=r.image;
	i.alt="Invalid picture";
	d.appendChild(i);

	var name=document.createElement("h4");
	name.textContent=r.name;
	d.appendChild(name);
	var email=document.createElement("h4");
	email.textContent=r.email;
	d.appendChild(email);
	var phone=document.createElement("h4");
	phone.textContent=r.phoneno;
	d.appendChild(phone);
	var addr=document.createElement("h4");
	addr.textContent=r.address;
	d.appendChild(addr);
	d.appendChild(document.createElement("hr"));

}
function hobbies(h){
	var d=document.createElement("div");
	div1.appendChild(d);
	parent.appendChild(div1);
	d.classList.add("Hobbies");
	var k=document.createElement("h1");
	k.textContent="HOBBIES:";
	d.appendChild(k);
	var ol=document.createElement("ul");
	for(var i=0;i<h.length;i++){
		var li=document.createElement("li")	
		li.textContent=h[i];
		ol.appendChild(li);
	}
	d.appendChild(ol);
	d.appendChild(document.createElement('hr'));
}
function lang(k){
	var d=document.createElement("div");
	div1.appendChild(d);
	parent.appendChild(div1);
	d.classList.add("lang");
	var l=document.createElement("h1");
	l.textContent="LANGUAGES_KNOWN:";
	d.appendChild(l);
	var ol=document.createElement("ul");
	for(var i=0;i<k.length;i++){
		var li=document.createElement("li")	
		li.textContent=k[i];
		ol.appendChild(li);
	}
	d.appendChild(ol);
}

function carobj(c){
	var d=document.createElement("div");
	div2.appendChild(d);
	parent.appendChild(div2);
	d.classList.add("carobj");
	var k=document.createElement("h1");
	k.textContent="CAREER_OBJECTIVE";
	d.appendChild(k);
	var p=document.createElement("p");
	var i=0;
	p.textContent=c.para;
	d.appendChild(p);
}
function edu(e){
	var d=document.createElement("div");
	div2.appendChild(d);
	parent.appendChild(div2);
	d.classList.add("edu");
	var h=document.createElement("h1");
	h.textContent="EDUCATIONAL DETAILS";
	d.appendChild(h);

	var table=document.createElement("table");
	var row="";
	for (var i = 0; i < e.length; i++) {
		row+="<tr><td>"+e[i].year+"</td><td>"+e[i].institution+"</td><td>"+e[i].degree+"</td><td>"+e[i].percentage+"</td></tr>";
  }
 table.innerHTML=row; 
 d.appendChild(table);
}
function skills(s){
	var d=document.createElement("div");
	div2.appendChild(d);
	parent.appendChild(div2);
	d.classList.add("skills");
	var l=document.createElement("h1");
	l.textContent="SKILLS";
	d.appendChild(l);
	var ol=document.createElement("ul");
	for(var i=0;i<s.length;i++){
		var li=document.createElement("li")	
		li.textContent=s[i];
		ol.appendChild(li);
	}
	d.appendChild(ol);
}