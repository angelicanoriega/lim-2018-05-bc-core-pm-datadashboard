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
