let selMonth;

let tdate;
let sudate;
let modate;
let tudate;
let wedate;
let thdate;
let frdate;
let sadate;

let tmonth; 
let tyear;

function getTodayMonth(today) {

switch (today.getMonth()) {
	case 0: 
		document.getElementById('m0').selected = "selected"
		selMonth = document.getElementById('m0').value;
		return "Янв";
		break;
	case 1: 
		document.getElementById('m1').selected = "selected"
		selMonth = document.getElementById('m1').value;
		return "Фев";
		break;
	case 2: 
		document.getElementById('m2').selected = "selected"
		selMonth = document.getElementById('m2').value;
		return "Март";
		break;
	case 3: 
		document.getElementById('m3').selected = "selected"
		selMonth = document.getElementById('m3').value;
		return "Апр";
		break;
	case 4: 
		document.getElementById('m4').selected = "selected"
		selMonth = document.getElementById('m4').value;
		return "Май";
		break;
	case 5: 
		document.getElementById('m5').selected = "selected"
		selMonth = document.getElementById('m5').value;
		return "Июн";
		break;
	case 6: 
		document.getElementById('m6').selected = "selected"
		selMonth = document.getElementById('m6').value;
		return "Июл";
		break;
	case 7: 
		document.getElementById('m7').selected = "selected"
		selMonth = document.getElementById('m7').value;
		return "Авг";
		break;
	case 8: 
		document.getElementById('m8').selected = "selected"
		selMonth = document.getElementById('m7').value;
		return "Сен";
		break;
	case 9: 
		document.getElementById('m9').selected = "selected"
		selMonth = document.getElementById('m9').value;
		return "Окт";
		break;
	case 10: 
		document.getElementById('m10').selected = "selected"
		selMonth = document.getElementById('m10').value;
		return "Ноя";
		break;
	case 11: 
		document.getElementById('m11').selected = "selected"
		selMonth = document.getElementById('m11').value;
		return "Дек";
		break;
}
}

function getTodayYear(today) {

	switch (today.getFullYear()) {
	case 2021: 
		document.getElementById('y1').selected = "selected"
		break;
	case 2022: 
		document.getElementById('y2').selected = "selected"
		break;
	case 2023: 
		document.getElementById('y3').selected = "selected"
		break;
	case 2024: 
		document.getElementById('y4').selected = "selected"
		break;
	case 2025: 
		document.getElementById('y5').selected = "selected"
		break;
}
}




/заполнение дней недели числами из даты/

let today = new Date();
let day;
if (today.getDay() == 0) {
	day = 7;
} else day = today.getDay()
let todyear = getTodayYear(today);

function setTodayDate(today) {

let mon = new Date(today.getTime() - 60*60*24*(day-1)*1000);
document.getElementById('monDate').innerHTML = mon.getDate(); 
document.getElementById('monMonth').innerHTML = getTodayMonth(mon);

let tue = new Date(today.getTime() - 60*60*24*(day-2)*1000);
document.getElementById('tueDate').innerHTML = tue.getDate();
document.getElementById('tueMonth').innerHTML = getTodayMonth(tue);

let wed = new Date(today.getTime() - 60*60*24*(day-3)*1000); 
document.getElementById('wedDate').innerHTML = wed.getDate();
document.getElementById('wedMonth').innerHTML = getTodayMonth(wed);

let thu = new Date(today.getTime() - 60*60*24*(day-4)*1000); 
document.getElementById('thuDate').innerHTML = thu.getDate();
document.getElementById('thuMonth').innerHTML = getTodayMonth(thu);

let fri = new Date(today.getTime() - 60*60*24*(day-5)*1000);
document.getElementById('friDate').innerHTML = fri.getDate(); 
document.getElementById('friMonth').innerHTML = getTodayMonth(fri);

let sat = new Date(today.getTime() - 60*60*24*(day-6)*1000); 
document.getElementById('satDate').innerHTML = sat.getDate(); 
document.getElementById('satMonth').innerHTML = getTodayMonth(sat);

let sun = new Date(today.getTime() - 60 * 60 *24 *(day-7) * 1000); 
document.getElementById('sunDate').innerHTML = sun.getDate(); 
document.getElementById('sunMonth').innerHTML = getTodayMonth(sun);

let inpw1 = document.getElementById('inputWeek1');
inpw1.innerHTML = mon.getDate() + " " + getTodayMonth(mon);

let inpw2 = document.getElementById('inputWeek2');
inpw2.innerHTML = sun.getDate() + " " + getTodayMonth(sun);

}

setTodayDate(today);

let tasks = [];
let tasksFind = [];
!localStorage.tasks ? tasks = [] : tasks = JSON.parse(localStorage.tasks)

let y = 0;
if (tasks != null) {
	for (let t of tasks) {
		tasksFind[y] = t.numbox;
		y++;
	}
}

function FillSells() {
	if (today.getDay() == 0) {day = 7} else day = today.getDay()
	let modate = new Date(today.getTime() - 60 * 60 *24 *(day-1) * 1000)
		console.log(modate)
	let tudate = new Date(today.getTime() - 60 * 60 *24 *(day-2) * 1000)
		console.log(tudate)
	let wedate = new Date(today.getTime() - 60 * 60 *24 *(day-3) * 1000)
		console.log(wedate)
	let thdate = new Date(today.getTime() - 60 * 60 *24 *(day-4) * 1000)
		console.log(thdate)
	let frdate = new Date(today.getTime() - 60 * 60 *24 *(day-5) * 1000)
		console.log(frdate)
	let sadate = new Date(today.getTime() - 60 * 60 *24 *(day-6) * 1000)
		console.log(sadate)
	let sudate = new Date(today.getTime() - 60 * 60 *24 *(day-7) * 1000)
		console.log(sudate)

	let tmonth = today.getMonth();
		console.log(tmonth)
	let tyear = today.getFullYear();
		console.log(tyear)

	for (let t of tasks) {
		if (t.date == modate.getDate() && t.month == modate.getMonth() && t.year == modate.getFullYear() || 
			t.date == tudate.getDate() && t.month == tudate.getMonth() && t.year == tudate.getFullYear()||
			t.date == wedate.getDate() && t.month == wedate.getMonth() && t.year == wedate.getFullYear()||
			t.date == thdate.getDate() && t.month == thdate.getMonth() && t.year == thdate.getFullYear()||
			t.date == frdate.getDate() && t.month == frdate.getMonth() && t.year == frdate.getFullYear()||
			t.date == sadate.getDate() && t.month == sadate.getMonth() && t.year == sadate.getFullYear()||
			t.date == sudate.getDate() && t.month == sudate.getMonth() && t.year == sudate.getFullYear()) {

				document.getElementById(t.numbox).innerHTML = t.description.substring(0, 20) + "\r"+ t.description.substring(20, 40)
					if (t.prosr) document.getElementById(t.numbox).style.backgroundColor = 'red'

					if (t.zav) document.getElementById(t.numbox).style.backgroundColor = 'green'
		}
	else {
		let docbut = document.getElementsByClassName('button1')
		for (let b of docbut) {
			b.innerHTML = ""
			b.style.backgroundColor = 'white'
		}
	}
	}
	
}

FillSells();

document.getElementById('monchose').onchange = function(){
	let selMonth1 = document.getElementById('monchose').selectedIndex;
	today.setMonth(selMonth1);
	if (today.getDay() == 0) {day = 7} 
	else day = today.getDay();
	setTodayDate(today);
	FillSells();
}

document.getElementById('ych').onchange = function(){
	let selYear = document.getElementById('ych').selectedIndex;
	today.setFullYear(2021 + selYear);
	if (today.getDay() == 0) {day = 7} 
	else day = today.getDay();
	setTodayDate(today);
	FillSells();
}

document.getElementById('buttonWeek1').onmouseover = function() {
	document.getElementById('buttonWeek1').style.color = 'blue';}
document.getElementById('buttonWeek1').onmouseout = function() {
	document.getElementById('buttonWeek1').style.color = 'black';}



document.getElementById('buttonWeek2').onmouseover = function() {
	document.getElementById('buttonWeek2').style.color = 'blue';}
document.getElementById('buttonWeek2').onmouseout = function() {
	document.getElementById('buttonWeek2').style.color = 'black';}



document.getElementById('buttonWeek1').onclick = function() {
	today = new Date(today.getTime() - 60*60*24*7*1000);
	let f22 = getTodayYear(today);

	mon = new Date(today.getTime() - 60*60*24*(day-1)*1000);
	document.getElementById('monDate').innerHTML = mon.getDate(); 
	document.getElementById('monMonth').innerHTML = getTodayMonth(mon);

	tue = new Date(today.getTime() - 60*60*24*(day-2)*1000);
	document.getElementById('tueDate').innerHTML = tue.getDate();
	document.getElementById('tueMonth').innerHTML = getTodayMonth(tue);

	wed = new Date(today.getTime() - 60*60*24*(day-3)*1000); 
	document.getElementById('wedDate').innerHTML = wed.getDate();
	document.getElementById('wedMonth').innerHTML = getTodayMonth(wed);

	thu = new Date(today.getTime() - 60*60*24*(day-4)*1000); 
	document.getElementById('thuDate').innerHTML = thu.getDate();
	document.getElementById('thuMonth').innerHTML = getTodayMonth(thu);

	fri = new Date(today.getTime() - 60*60*24*(day-5)*1000);
	document.getElementById('friDate').innerHTML = fri.getDate(); 
	document.getElementById('friMonth').innerHTML = getTodayMonth(fri);

	sat = new Date(today.getTime() - 60*60*24*(day-6)*1000); 
	document.getElementById('satDate').innerHTML = sat.getDate(); 
	document.getElementById('satMonth').innerHTML = getTodayMonth(sat);

	sun = new Date(today.getTime() - 60 * 60 *24 *(day-7) * 1000); 
	document.getElementById('sunDate').innerHTML = sun.getDate(); 
	document.getElementById('sunMonth').innerHTML = getTodayMonth(sun);

	inpw1 = document.getElementById('inputWeek1');
	inpw1.innerHTML = mon.getDate() + " " + getTodayMonth(mon);

	inpw2 = document.getElementById('inputWeek2');
	inpw2.innerHTML = sun.getDate() + " " + getTodayMonth(sun);
	FillSells();
}



document.getElementById('buttonWeek2').onclick = function() {
	today = new Date(today.getTime() + 60*60*24*7*1000);
	let f22 = getTodayYear(today);

	mon = new Date(today.getTime() - 60*60*24*(day-1)*1000);
	document.getElementById('monDate').innerHTML = mon.getDate(); 
	document.getElementById('monMonth').innerHTML = getTodayMonth(mon);

	tue = new Date(today.getTime() - 60*60*24*(day-2)*1000);
	document.getElementById('tueDate').innerHTML = tue.getDate();
	document.getElementById('tueMonth').innerHTML = getTodayMonth(tue);

	wed = new Date(today.getTime() - 60*60*24*(day-3)*1000); 
	document.getElementById('wedDate').innerHTML = wed.getDate();
	document.getElementById('wedMonth').innerHTML = getTodayMonth(wed);

	thu = new Date(today.getTime() - 60*60*24*(day-4)*1000); 
	document.getElementById('thuDate').innerHTML = thu.getDate();
	document.getElementById('thuMonth').innerHTML = getTodayMonth(thu);

	fri = new Date(today.getTime() - 60*60*24*(day-5)*1000);
	document.getElementById('friDate').innerHTML = fri.getDate(); 
	document.getElementById('friMonth').innerHTML = getTodayMonth(fri);

	sat = new Date(today.getTime() - 60*60*24*(day-6)*1000); 
	document.getElementById('satDate').innerHTML = sat.getDate(); 
	document.getElementById('satMonth').innerHTML = getTodayMonth(sat);

	sun = new Date(today.getTime() - 60 * 60 *24 *(day-7) * 1000); 
	document.getElementById('sunDate').innerHTML = sun.getDate(); 
	document.getElementById('sunMonth').innerHTML = getTodayMonth(sun);

	inpw1 = document.getElementById('inputWeek1');
	inpw1.innerHTML = mon.getDate() + " " + getTodayMonth(mon);

	inpw2 = document.getElementById('inputWeek2');
	inpw2.innerHTML = sun.getDate() + " " + getTodayMonth(sun);

	FillSells();
}


FillSells();

let var11;

let as = document.getElementsByClassName('button1')
for (let a of as) {
	a.onmouseover = function() {
		a.style.color = 'blue';
	}
	a.onmouseout = function() {
		a.style.color = 'black';
	}
	a.onclick = function() {
		let bdt = document.getElementById('tbl11')
		let divExt = document.createElement('div')
		divExt.id = "divExt"
		divExt.style.height = "300px"
		divExt.style.width = "800px"
		divExt.style.border = "3px solid"
		divExt.style.borderRadius = "30px"
		divExt.style.position = "fixed"
		divExt.style.backgroundColor = "white"
		divExt.style.padding = "5px"
		a.before(divExt)

		let div1 = document.createElement('div')
		div1.style.height = "25px"
		div1.style.width = "220px"
		div1.style.position = "sticky"
		div1.style.display = "inline-block"
		div1.style.textAlign = "left"
		div1.innerHTML = "Еженедельная"
		div1.style.border = "2px solid"
		div1.style.borderRadius = "5px"
		div1.style.marginLeft = "12px"
		div1.style.marginRight = "12px"
		div1.style.paddingLeft = "10px"
		divExt.append(div1)

		let but1 = document.createElement('input')
		but1.style.position = "sticky"
		but1.type = "checkbox"
		but1.style.marginLeft = "100px"
		div1.append(but1)

		let div2 = document.createElement('div')
		div2.style.height = "25px"
		div2.style.width = "220px"
		div2.style.position = "sticky"
		div2.style.display = "inline-block"
		div2.style.textAlign = "center"
		div2.innerHTML = "Ежемесячная"
		div2.style.border = "2px solid"
		div2.style.borderRadius = "5px"
		div2.style.marginLeft = "12px"
		div2.style.marginRight = "12px"
		divExt.append(div2)

		let but2 = document.createElement('input')
		but2.style.position = "sticky"
		but2.type = "checkbox"
		but2.style.marginLeft = "100px"
		div2.append(but2)

		let div3 = document.createElement('div')
		div3.style.height = "25px"
		div3.style.width = "220px"
		div3.style.position = "sticky"
		div3.style.display = "inline-block"
		div3.style.textAlign = "center"
		div3.innerHTML = "Ежегодная"
		div3.style.border = "2px solid"
		div3.style.borderRadius = "5px"
		div3.style.marginLeft = "12px"
		div3.style.marginRight = "12px"
		divExt.append(div3)

		let but3 = document.createElement('input')
		but3.style.position = "sticky"
		but3.type = "checkbox"
		but3.style.marginLeft = "100px"
		div3.append(but3)

		let inp1 = document.createElement('input')
		inp1.type='text'
		inp1.form = "text11"
		inp1.style.height = "150px"
		inp1.style.width = "750px"
		inp1.style.borderRadius = "30px"
		inp1.style.marginTop = "5px"
		inp1.style.marginBottom = "5px"
		inp1.value = a.innerHTML
		inp1.style.position = "sticky"
		div3.after(inp1)

		let div4 = document.createElement('div')
		div4.style.height = "25px"
		div4.style.width = "150px"
		div4.style.position = "sticky"
		div4.style.display = "inline-block"
		div4.style.textAlign = "center"
		div4.innerHTML = "Завершенная"
		div4.style.border = "2px solid"
		div4.style.borderRadius = "5px"
		div4.style.marginLeft = "40px"
		div4.style.marginRight = "40px"
		div4.style.marginBottom = "10px"
		inp1.after(div4)

		let but4 = document.createElement('input')
		but4.name = "state"
		but4.style.position = "sticky"
		but4.type = "radio"
		but4.style.marginLeft = "20px"
		but4.style.marginTop = "5px"
		div4.append(but4)

		let div5 = document.createElement('div')
		div5.style.height = "25px"
		div5.style.width = "150px"
		div5.style.position = "sticky"
		div5.style.display = "inline-block"
		div5.style.textAlign = "center"
		div5.innerHTML = "Просроченная"
		div5.style.border = "2px solid"
		div5.style.borderRadius = "5px"
		div5.style.marginLeft = "40px"
		div5.style.marginRight = "40px"
		div5.style.marginBottom = "10px"
		inp1.after(div5)

		let but5 = document.createElement('input')
		but5.name = "state"
		but5.style.position = "sticky"
		but5.type = "radio"
		but5.style.marginLeft = "20px"
		but5.style.marginTop = "5px"
		div5.append(but5)

		let div6 = document.createElement('div')
		div6.style.height = "25px"
		div6.style.width = "150px"
		div6.style.position = "sticky"
		div6.style.display = "inline-block"
		div6.style.textAlign = "center"
		div6.innerHTML = "Без статуса"
		div6.style.border = "2px solid"
		div6.style.borderRadius = "5px"
		div6.style.marginLeft = "40px"
		div6.style.marginRight = "40px"
		div6.style.marginBottom = "10px"
		inp1.after(div6)

		let but6 = document.createElement('input')
		but6.name = "state"
		but6.checked = "checked"
		but6.style.position = "sticky"
		but6.type = "radio"
		but6.style.marginLeft = "20px"
		but6.style.marginTop = "5px"
		div6.append(but6)


		let mbut1 = document.createElement('button')
		mbut1.className = "button3"
		mbut1.innerHTML = "Удалить задачу"
		mbut1.style.position = "sticky"
		mbut1.type = "button"
		mbut1.style.marginLeft = "40px"
		mbut1.style.marginRight = "40px"
		divExt.append(mbut1)

		let mbut2 = document.createElement('button')
		mbut2.className = "button2"
		mbut2.innerHTML = "Сохранить"
		mbut2.style.position = "sticky"
		mbut2.type = "button"
		mbut2.style.marginLeft = "40px"
		mbut2.style.marginRight = "40px"
		divExt.append(mbut2)


	mbut2.onclick = function() {
		a.innerHTML = inp1.value.substring(0, 20) + "\r"+ inp1.value.substring(20, 40)
		divExt.remove()

		prstate = but5.checked;
		if(prstate) {
			a.style.backgroundColor = "red"
		}

		zavstate = but4.checked;
		if(zavstate) {
			a.style.backgroundColor = "green"
		}

		let task = {
			day: today.getDay(),
			date: today.getDate(),
			month: today.getMonth(),
			year: today.getFullYear(),
			description: inp1.value,
			prosr: prstate,
			zav: zavstate,
			numbox: a.id
		}

		let found = tasksFind.indexOf(a.id)

		if (found != -1) {
			tasks.splice(found, 1)
			tasksFind.splice(found, 1)
				
		}

		tasks.push(task);
		tasksFind.push(task.numbox)

		const updateLocal = () => {
			localStorage.setItem('tasks', JSON.stringify(tasks))
		}
		updateLocal();
		inp1.value = task.descritpion
	}

		


	mbut1.onclick = function() {
			a.innerHTML = ""
			divExt.remove()
			but4.checked = false;
			but5.cheked = false
			a.style.backgroundColor = "white";
			a.style.color = "black"

			let found = tasksFind.indexOf(a.id)

			if (found != -1) {
				tasks.splice(found, 1)
				tasksFind.splice(found, 1)
			}	

			const updateLocal = () => {
				localStorage.setItem('tasks', JSON.stringify(tasks))
			}
			updateLocal();
		}
	}
}