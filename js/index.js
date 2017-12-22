var date = new Date();
date  = date.valueOf()
date  = date  - 3 * 24 * 60 * 60 * 1000;
date  = new Date(date);

year = date.getFullYear();
month = date.getMonth() + 1;
date = date.getDate();
document.getElementById("HiddenDate").innerText = year + "/" + month + "/" + date + " 00:00:00";
InitDate();

function Choose(obj){
	var id = obj.id;
	for(var i = 1;i < 8;i++)
	{
	document.getElementById("custom" + i).className = "";
	}
	document.getElementById(id).className = "customChoose";
}

function TurnLeft(){
	var date = new Date(document.getElementById("HiddenDate").innerText);
	date  = date.valueOf()
	date  = date  - 7 * 24 * 60 * 60 * 1000;
	date  = new Date(date);
	year = date.getFullYear();
	month = date.getMonth() + 1;
	date = date.getDate();
	document.getElementById("HiddenDate").innerText = year + "/" + month + "/" + date + " 00:00:00";
	InitDate();
}

function TurnRight(){
	var date = new Date(document.getElementById("HiddenDate").innerText);
	date  = date.valueOf()
	date  = date  + 7 * 24 * 60 * 60 * 1000;
	date  = new Date(date);
	year = date.getFullYear();
	month = date.getMonth() + 1;
	date = date.getDate();
	document.getElementById("HiddenDate").innerText = year + "/" + month + "/" + date + " 00:00:00";
	InitDate();
}

function InitDate(){
	for(var i = 1;i < 8;i++)
	{
	document.getElementById("custom" + i).className = "";
	}
	document.getElementById("custom4").className = "customChoose";
	for(var i = 1;i <= 7;i++)
	{
	date = document.getElementById("HiddenDate").innerText;
	document.getElementById("custom" + i).innerText = GetDate(date,i - 1);
	}

}

function GetDate(currentDate,num){
	var date = new Date(currentDate);
	date  = date.valueOf()
	date  = date + num * 24 * 60 * 60 * 1000;
	date  = new Date(date);
	this.year = date.getFullYear();
	this.month = date.getMonth() + 1;
	this.date = date.getDate();
	this.day = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六")[date.getDay()];
	this.hour = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
	this.minute = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
	this.second = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
	var currentTime = this.month + "月" + this.date + "\n"+ this.day;
	return currentTime;

}