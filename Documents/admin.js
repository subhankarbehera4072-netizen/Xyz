let students = JSON.parse(localStorage.getItem("students")) || [];

function addStudent(){

const student = {

name:document.getElementById("name").value,
class:document.getElementById("class").value,
roll:document.getElementById("roll").value,
admit:document.getElementById("admit").value,

subjects:{
English:Number(document.getElementById("eng").value),
Math:Number(document.getElementById("math").value),
Science:Number(document.getElementById("science").value),
Odia:Number(document.getElementById("odia").value),
SST:Number(document.getElementById("sst").value)
}

};

students.push(student);

localStorage.setItem("students", JSON.stringify(students));

alert("Student Added");

showStudents();

}

function showStudents(){

let html = `
<table>

<tr>
<th>Name</th>
<th>Class</th>
<th>Roll</th>
</tr>
`;

students.forEach(s => {

html += `
<tr>
<td>${s.name}</td>
<td>${s.class}</td>
<td>${s.roll}</td>
</tr>
`;

});

html += "</table>";

document.getElementById("studentTable").innerHTML = html;

}

showStudents();