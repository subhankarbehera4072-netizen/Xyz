window.onload = () => {
document.getElementById("loader").style.display = "none";
};

const students = [
{
roll:"101",
admit:"5001",
name:"Rahul Kumar",
class:"8",
subjects:{
English:80,
Math:90,
Science:85,
Odia:88,
SST:84
}
}
];

function searchResult(){

const roll = document.getElementById("roll").value;
const admit = document.getElementById("admit").value;

const student = students.find(
s => s.roll === roll && s.admit === admit
);

const resultBox = document.getElementById("resultBox");

if(!student){
resultBox.innerHTML = `
<div class="result-card">
<h2>No Result Found</h2>
</div>
`;
return;
}

let total = 0;

let rows = "";

for(let subject in student.subjects){

let mark = student.subjects[subject];

total += mark;

rows += `
<tr>
<td>${subject}</td>
<td>${mark}</td>
</tr>
`;

}

const percentage = (total / 5).toFixed(2);

let grade = "A";

if(percentage < 90) grade = "B";
if(percentage < 75) grade = "C";
if(percentage < 60) grade = "D";

resultBox.innerHTML = `

<div class="result-card">

<h1 style="text-align:center">
GLOBAL PUBLIC SCHOOL
</h1>

<p style="text-align:center">
Nayakabandha, Bidubazar, Bahanaga
</p>

<hr>

<h2>Student Marksheet</h2>

<p><strong>Name:</strong> ${student.name}</p>

<p><strong>Class:</strong> ${student.class}</p>

<p><strong>Roll:</strong> ${student.roll}</p>

<table>

<tr>
<th>Subject</th>
<th>Marks</th>
</tr>

${rows}

<tr>
<th>Total</th>
<th>${total}</th>
</tr>

<tr>
<th>Percentage</th>
<th>${percentage}%</th>
</tr>

<tr>
<th>Grade</th>
<th>${grade}</th>
</tr>

</table>

<div class="signature">

<div>
EXAM-IN-CHARGE <br>
Rojalin Das
</div>

<div>
PRINCIPAL NAME <br>
SUSHREE POOJA SAW
</div>

</div>

<br><br>

<button onclick="window.print()" class="btn">
Print Result
</button>

<button onclick="downloadPDF()" class="btn btn2">
Download PDF
</button>

</div>
`;

}

function downloadPDF(){

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

doc.text("GLOBAL PUBLIC SCHOOL", 20, 20);

doc.text(document.getElementById("resultBox").innerText, 20, 40);

doc.save("result.pdf");

}

document.getElementById("darkModeBtn").onclick = () => {
document.body.classList.toggle("dark");
};

window.onscroll = () => {

const topBtn = document.getElementById("topBtn");

if(window.scrollY > 200){
topBtn.style.display = "block";
}else{
topBtn.style.display = "none";
}

};

document.getElementById("topBtn").onclick = () => {
window.scrollTo({
top:0,
behavior:"smooth"
});
};