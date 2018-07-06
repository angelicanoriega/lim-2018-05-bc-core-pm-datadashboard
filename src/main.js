
//conectando html
const countryAll = document.getElementById("listCountry");
const Orderlist = document.getElementById("listorder");
const Asd_des=document.getElementById("listASD/DESC");
const nombreUsuariosordenado = document.getElementById("ordenado");
const bottonfilter = document.getElementById("botton");
const textfilter = document.getElementById("text");
const botton_orden=document.getElementById("botton-orden");
let inarray = document.getElementById("prueba")
const selection = document.getElementById("listcohorts");
const selectionusers = document.getElementById("listusers");
const AllPercent_User=document.getElementById("General");
const AllPercent_User_exercise=document.getElementById("generalexercises");
const AllPercent_User_read=document.getElementById("generalreadings");
const AllPercent_User_quiz=document.getElementById("generalquiz");
const Qualification_User_quiz=document.getElementById("generalscore");
const Percent_User_U1=document.getElementById("unit1");
const Percent_User_U1_read=document.getElementById("1Unitreading");
const Percent_User_U1_quiz=document.getElementById("1Unitquiz");
const Qualification_User_U1_quiz=document.getElementById("1Uscore");
const Percent_User_U2=document.getElementById("unit2");
const Percent_User_U2_exercises=document.getElementById("2UnitExercises");
const Percent_User_U2_read=document.getElementById("2Unitreading");
const Percent_User_U2_quiz=document.getElementById("2Unitquiz");
const Qualification_User_U2_quiz=document.getElementById("2Uscore");
const Percent_User_U3=document.getElementById("unit3");
const Percent_User_U3_read=document.getElementById("3Unitreading");
const Percent_User_U3_quiz=document.getElementById("3Unitquiz");
const Qualification_User_U3_quiz=document.getElementById("3Uscore");
let nameUser = document.getElementById("searchUsers");
let search_user_in_table_orden=document.getElementById("search");
let search_botton=document.getElementById("botton-filter");

function validar()
{
  var userName = document.getElementById("userName").value;
  var pass = document.getElementById("pass").value;
  if(userName == "Alejandra" && pass == "12345")
  {
   location.href= "http://127.0.0.1:5500/src/index.html";
  }
  else
  {
  alert("Ingrese usuario y password");
  }
}

//llamando  los cohorts
countryAll.addEventListener("change", (event)=>
{
    AllData( (data) =>
    {
      cohorts=data[0];
    
      let clean = "";
      for (let nameCohort of cohorts) 
      {
        const cohortId = nameCohort.id;
        const cohortSplit = cohortId.split("-");
        if(countryAll.value === cohortSplit[0])
        {
        clean += "<option value=" + cohortId + " >" + cohortId + "</option>";
        }
        selection.innerHTML = clean; 
      }        
    })
})

//llamando usuarios
selection.addEventListener("change", (event) =>
{
  if (selection.value === "lim-2018-03-pre-core-pw")
  {
    AllData( (data) =>
    {
      let users=data[1];
      let progress=data[2];
      for(let user_element of users) 
      {
        let userid=user_element.id;
        let nameuser=user_element.name;
        selectionusers.innerHTML+= "<option value=" +userid +" >" +nameuser + "</option>";
      }; 
     
    })
    //filtrando 
//aparecera sin hacer el evento click a botton_orden
alldatawithorden((option)=>
{ console.log(option);
 
 let usersWithStats = processCohortData(option);
 console.log(usersWithStats)
 let tabla = '';
 tabla += '<tr>';
 tabla += '<th> Nombres </th>';
 tabla += '<th> General % </th>';
 tabla += '<th> Ejercicios % </th>';
 tabla += '<th> Quiz % </th>';
 tabla += '<th> Nota Quiz  </th>';
 tabla += '<th> Lecturas % </th>';
 tabla += '</tr>'
 tabla += '<tr>';
for (i = 0; i < usersWithStats.length; i++) 
{ 
 tabla += '<td id= "nombrestabla">' + usersWithStats[i].name + '</td>';
 tabla += '<td>' + usersWithStats[i].stats.percent + '</td>';
 tabla += '<td>' + usersWithStats[i].stats.exercises.percent+ '</td>';
 tabla += '<td>' + usersWithStats[i].stats.quizzes.percent + '</td>';
 tabla += '<td>' + usersWithStats[i].stats.quizzes.scoreAvg + '</td>';
 tabla += '<td>' +usersWithStats[i].stats.reads.percent+ '</td>';

 tabla += '</tr>';

 nombreUsuariosordenado.innerHTML = tabla
}
 })  

//aparecera al hacer hacer el evento click a botton_orden
   botton_orden.addEventListener("click",()=>
   {
   alldatawithorden((option)=>
  { console.log(option);
   
   let usersWithStats = processCohortData(option);
   console.log(usersWithStats)
   let tabla = '';
   tabla += '<tr>';
   tabla += '<th> Nombres </th>';
   tabla += '<th> General % </th>';
   tabla += '<th> Ejercicios % </th>';
   tabla += '<th> Quiz % </th>';
   tabla += '<th> Nota Quiz  </th>';
   tabla += '<th> Lecturas % </th>';
   tabla += '</tr>'
   tabla += '<tr>';
  for (i = 0; i < usersWithStats.length; i++) 
 { 
   tabla += '<td id= "nombrestabla">' + usersWithStats[i].name + '</td>';
   tabla += '<td>' + usersWithStats[i].stats.percent + '</td>';
   tabla += '<td>' + usersWithStats[i].stats.exercises.percent+ '</td>';
   tabla += '<td>' + usersWithStats[i].stats.quizzes.percent + '</td>';
   tabla += '<td>' + usersWithStats[i].stats.quizzes.scoreAvg + '</td>';
   tabla += '<td>' +usersWithStats[i].stats.reads.percent+ '</td>';

   tabla += '</tr>';

   nombreUsuariosordenado.innerHTML = tabla
 }
   })    
}) 


  }
})


//filtrando usuarios
nameUser.addEventListener("keyup", (event) => {
  
  AllData((data) => {
    let users = data[1];
    let nameSelect = nameUser.value.toUpperCase();
    for (i = 0; i < selectionusers.length; i++) {
      let name = selectionusers[i].innerHTML.toUpperCase();
      if (name.indexOf(nameSelect) > -1) {
        selectionusers[i].style.display = "";
      } else {
        selectionusers[i].style.display = "none";
      }
    }
  })
})

/*bottonfilter.addEventListener("click",()=>{
  const search=textfilter.value;
  const search_user=search.toLowerCase();

  AllData((data)=>{
    
    let usersWithStats = processCohortData(data);
    console.log(usersWithStats);
    
    let filter =filterUsers(usersWithStats,search);
    console.log(filter);
    
  alert("ol")
  
  })
})*/

