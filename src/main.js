
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
let search_botton=document.getElementById("search");

//llamando a todos  los cohorts
countryAll.addEventListener("change", (event)=>
{
    AllData( (data) =>
    {
      cohorts=data[0];
    
      let clean = "";
      cohorts.forEach (nameCohort =>
      {
        const cohortId = nameCohort.id;
        const cohortSplit = cohortId.split("-");
        if(countryAll.value === cohortSplit[0])
        {
        clean += "<option value=" + cohortId + " >" + cohortId + "</option>";
        }
        selection.innerHTML = clean; 
      })         
    })
})

//llamando usuarios segun el cohort indicado
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
    //aparecera sin hacer el evento click a botton_orden
    alldatawithorden((option)=>
    { 
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
        usersWithStats.forEach(element => {
        tabla += '<td id= "nombrestabla">'+element.name + '</td>';
        tabla += '<td>' + element.stats.percent + '</td>';
        tabla += '<td>' + element.stats.exercises.percent+ '</td>';
        tabla += '<td>' + element.stats.quizzes.percent + '</td>';
        tabla += '<td>' + element.stats.quizzes.scoreAvg + '</td>';
        tabla += '<td>' +element.stats.reads.percent+ '</td>';

        tabla += '</tr>';

        nombreUsuariosordenado.innerHTML = tabla
        })
    })  
    //aparecera al hacer hacer el evento click a botton_orden
    botton_orden.addEventListener("click",()=>
    {
      alldatawithorden((option)=>
      { 
        let usersWithStats = processCohortData(option);
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
          usersWithStats.forEach(element => {
          tabla += '<td id= "nombrestabla">'+element.name + '</td>';
          tabla += '<td>' + element.stats.percent + '</td>';
          tabla += '<td>' + element.stats.exercises.percent+ '</td>';
          tabla += '<td>' + element.stats.quizzes.percent + '</td>';
          tabla += '<td>' + element.stats.quizzes.scoreAvg + '</td>';
          tabla += '<td>' +element.stats.reads.percent+ '</td>';
          
          tabla += '</tr>';
          
          nombreUsuariosordenado.innerHTML = tabla
          })
      })  
    }) 
  }
})

// aqui empieza la informacion incluyendo lo de las unidades

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

//llamando datos por unidades de los usuarios
selectionusers.addEventListener("change", (event)=>
{
    const useriddata=selectionusers.value;
    AllData((data)=>
    {
      const user=data[1];
   
      const progress=data[2];
      user.forEach(element =>
      {
         if ( element.hasOwnProperty('id') ) 
         {        
            const IDuser=element.id          
            if(IDuser === useriddata)
            {
            const nameuser = element.name;
            inarray.innerHTML=nameuser;
            }
         }
      });
      if (progress.hasOwnProperty(useriddata)) 
      {
        const User_IDin_Progress=progress[useriddata];
        if(User_IDin_Progress.hasOwnProperty('intro'))
        {

            const Itro_in_Progress=User_IDin_Progress.intro;
            const InUnit1 = Itro_in_Progress.units['01-introduction'];
            const InUnit2 = Itro_in_Progress.units['02-variables-and-data-types'];
            const InUnit3 = Itro_in_Progress.units['03-ux-design'];

            const ReadComplet_U1=InUnit1.parts["00-welcome-and-orientation"].completed+InUnit1.parts["03-your-first-website"].completed+InUnit1.parts["02-why-learn-to-code"].completed+InUnit1.parts["01-growth-mindset"].completed ;
            const ReadComplet_U2=InUnit2.parts["01-variables"].completed+InUnit2.parts["02-self-learning-MDN"].completed+InUnit2.parts["03-comments"].completed+InUnit2.parts["00-values-data-types-and-operators"].completed;
            const ReadComplet_U3=InUnit3.parts["00-development-team"].completed+InUnit3.parts["02-ux-design-vs-ui-design"].completed+InUnit3.parts["01-ux-design"].completed;

            const QuizComplet_U1=InUnit1.parts["04-quiz"].completed ;
            const QuizComplet_U2=InUnit2.parts["05-quiz"].completed ;
            const QuizComplet_U3=InUnit3.parts["03-quiz"].completed ;
        
            const QuizScore_U1=InUnit1.parts["04-quiz"].score ;
            const QuizScore_U2=InUnit2.parts["05-quiz"].score;
            const QuizScore_U3=InUnit3.parts["03-quiz"].score;
            
            const Exercises_Completd_U2=InUnit2.parts["06-exercises"].completed; 
            const Exercises_Completd_U2_2=InUnit2.parts["04-guided-exercises"].completed  ;     
          
            
            if(Itro_in_Progress.hasOwnProperty('percent'))
            {  
              const General_AllUnit_PERCENT=Itro_in_Progress.percent;
              const Percent_Unit1=InUnit1.percent;
              const Percent_Unit2=InUnit2.percent;
              const Percent_Unit3=InUnit3.percent;
              
              const Percent_Read_U1=(ReadComplet_U1/4)*100;
              const Percent_Read_U2=(ReadComplet_U2/4)*100;
              const Percent_Read_U3=(ReadComplet_U3/3)*100;   
              const General_AllREad_PERCENT=(Percent_Read_U1*4+Percent_Read_U2*4+Percent_Read_U3*3)/11;
              
              const Percent_Quiz_U1=QuizComplet_U1*100;
              const Percent_Quiz_U2=QuizComplet_U2*100;
              const Percent_Quiz_U3=QuizComplet_U3*100; 
              const General_AllQuiz_PERCENT=(Percent_Quiz_U1+Percent_Quiz_U2+Percent_Quiz_U3)/3;
              
              let Score_Quiz_U1=QuizScore_U1;
              let Score_Quiz_U2=QuizScore_U2;
              let Score_Quiz_U3=QuizScore_U3;
              let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;

              let General_ExercisesonlyU2_PERCENT=((Exercises_Completd_U2+Exercises_Completd_U2_2)/2)*100;

              AllPercent_User.innerHTML="<th>Porcentaje general: "+General_AllUnit_PERCENT+"% </th>";
              AllPercent_User_exercise.innerHTML="<th>Porcentaje general Ejercicios: "+General_ExercisesonlyU2_PERCENT+"% </td>"
              AllPercent_User_read.innerHTML="<th>Porcentaje general Lectura: "+General_AllREad_PERCENT+"% </td>";
              AllPercent_User_quiz.innerHTML="<th>Porcentaje general Quiz: Completo el "+General_AllQuiz_PERCENT+"% </td>";

              Percent_User_U1.innerHTML="<td>Porcentaje general Unidad 1: "+Percent_Unit1+"% </td>";
              Percent_User_U1_read.innerHTML="<td>Lecturas: "+Percent_Read_U1+"% </td>";
              Percent_User_U1_quiz.innerHTML="<td>Quiz: Completo el "+Percent_Quiz_U1+"% </td>";
            
            
              Percent_User_U2.innerHTML="<td>Porcentaje general Unidad 2: "+Percent_Unit2+"%</td>";
              Percent_User_U2_exercises.innerHTML="<td>Ejercicios: "+General_ExercisesonlyU2_PERCENT+"%</td>";
              Percent_User_U2_read.innerHTML="<td>Lecturas: "+Percent_Read_U2+"%</td>";
              Percent_User_U2_quiz.innerHTML="<td>Quiz: Completo el "+Percent_Quiz_U2+"%</td>";

              Percent_User_U3.innerHTML="<td>Porcentaje general Unidad 3: "+Percent_Unit3+"%</td>";
              Percent_User_U3_read.innerHTML="<td>Lecturas: "+Percent_Read_U3+"%</td>";
              Percent_User_U3_quiz.innerHTML="<td>Quiz: Completo el "+Percent_Quiz_U3+"%</td>";
              
               if(Percent_Quiz_U1 === 0 )
               {
                 Score_Quiz_U1=0; 
                 let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                 Qualification_User_quiz.innerHTML="<th>Nota general: Su nota fue "+General_AllQuiz_Score+"</th>";
                 Qualification_User_U1_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U1+"</td>";
                 Qualification_User_U2_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U2+"</td>";
                 Qualification_User_U3_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U3+"</td>";
                }
                if(Percent_Quiz_U1 !== 0 )
                {
                  Score_Quiz_U1=Score_Quiz_U1; 
                  let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                  Qualification_User_quiz.innerHTML="<th>Nota general: Su nota fue "+General_AllQuiz_Score+"</th>";
                  Qualification_User_U1_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U1+"</td>";
                  Qualification_User_U2_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U2+"</td>";
                  Qualification_User_U3_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U3+"</td>";
                 }
               
           
               if(Percent_Quiz_U2 === 0 )
               {
                 Score_Quiz_U2=0; 
                 let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                 Qualification_User_quiz.innerHTML="<th>Nota general: Su nota fue "+General_AllQuiz_Score+"</th>";
                 Qualification_User_U1_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U1+"</td>";
                 Qualification_User_U2_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U2+"</td>";
                 Qualification_User_U3_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U3+"</td>";
                }
               
              if(Percent_Quiz_U2 !== 0 )
              {
                Score_Quiz_U2=Score_Quiz_U2; 
                let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                Qualification_User_quiz.innerHTML="<th>Nota general: Su nota fue "+General_AllQuiz_Score+"</th>";
                Qualification_User_U1_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U1+"</td>";
                Qualification_User_U2_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U2+"</td>";
                Qualification_User_U3_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U3+"</td>";
                }
                
             
               if(Percent_Quiz_U3 === 0 )
              {
                Score_Quiz_U3=0; 
                let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                Qualification_User_quiz.innerHTML="<th>Nota general: Su nota fue "+General_AllQuiz_Score+"</th>";
                Qualification_User_U1_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U1+"</td>";
                Qualification_User_U2_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U2+"</td>";
                Qualification_User_U3_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U3+"</td>";
               }
               if(Percent_Quiz_U3 !== 0 )
              {
                Score_Quiz_U3=Score_Quiz_U3; 
                let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                Qualification_User_quiz.innerHTML="<th>Nota general: Su nota fue "+General_AllQuiz_Score+"</th>";
                Qualification_User_U1_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U1+"</td>";
                Qualification_User_U2_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U2+"</td>";
                Qualification_User_U3_quiz.innerHTML="<td>Nota: Su nota fue "+Score_Quiz_U3+"</td>";
                }
                
           }
         }
       }          
    })
})



