
const computeUsersStats = (users, progress, courses) =>
{   
 let userwithstas='';
  users.forEach(travelusers => {
    const ID_users = travelusers.id;

    if (progress.hasOwnProperty(ID_users)) {
          const travelprogress=progress[ID_users];
          
        if(travelprogress.hasOwnProperty('intro')){
          const Itro_in_Progress=travelprogress.intro;
          
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
              
              const Percent_Read_U1=(ReadComplet_U1);
              const Percent_Read_U2=(ReadComplet_U2);
              const Percent_Read_U3=(ReadComplet_U3);   
              const General_AllREad_PERCENT=(Percent_Read_U1+Percent_Read_U2+Percent_Read_U3)/11;
              
              const Percent_Quiz_U1=QuizComplet_U1;
              const Percent_Quiz_U2=QuizComplet_U2;
              const Percent_Quiz_U3=QuizComplet_U3; 
              const General_AllQuiz_PERCENT=(Percent_Quiz_U1+Percent_Quiz_U2+Percent_Quiz_U3)/3;
              
              let Score_Quiz_U1=QuizScore_U1;
              let Score_Quiz_U2=QuizScore_U2;
              let Score_Quiz_U3=QuizScore_U3;
              let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;

              let General_ExercisesonlyU2_PERCENT=((Exercises_Completd_U2+Exercises_Completd_U2_2)/2);
            
              if(Percent_Quiz_U1 === 0 )
               {
                 Score_Quiz_U1=0; 
                 let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                 travelusers.stats = 
                         {
                           percent:General_AllUnit_PERCENT,
                           exercises:{
                                       total:2,
                                       completed:Math.round(General_ExercisesonlyU2_PERCENT*2),
                                       percent: Math.round(General_ExercisesonlyU2_PERCENT*100),
                                     },
                           reads:{
                                  total:11,
                                  completed:Math.round(General_AllREad_PERCENT*11),
                                  percent: Math.round(General_AllREad_PERCENT*100),
                                 },   
                           quizzes:{
                                     total:3,
                                     completed:Math.round(General_AllQuiz_PERCENT*3),
                                     percent: Math.round(General_AllQuiz_PERCENT*100),
                                     scoreSum:Math.round(General_AllQuiz_Score*3),
                                     scoreAvg:Math.round(General_AllQuiz_Score),
                                   }
                         }
                }
                if(Percent_Quiz_U1 !== 0 )
                {
                  Score_Quiz_U1=Score_Quiz_U1; 
                  let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                  travelusers.stats = 
                         {
                          percent:General_AllUnit_PERCENT,
                          exercises:{
                                      total:2,
                                      completed:Math.round(General_ExercisesonlyU2_PERCENT*2),
                                      percent: Math.round(General_ExercisesonlyU2_PERCENT*100),
                                    },
                          reads:{
                                 total:11,
                                 completed:Math.round(General_AllREad_PERCENT*11),
                                 percent: Math.round(General_AllREad_PERCENT*100),
                                },   
                          quizzes:{
                                    total:3,
                                    completed:Math.round(General_AllQuiz_PERCENT*3),
                                    percent: Math.round(General_AllQuiz_PERCENT*100),
                                    scoreSum:Math.round(General_AllQuiz_Score*3),
                                    scoreAvg:Math.round(General_AllQuiz_Score),
                                  }
                         }
                
                 }
               if(Percent_Quiz_U2 === 0 )
               {
                 Score_Quiz_U2=0; 
                 let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                 travelusers.stats = 
                          {
                            percent:General_AllUnit_PERCENT,
                            exercises:{
                                        total:2,
                                        completed:Math.round(General_ExercisesonlyU2_PERCENT*2),
                                        percent: Math.round(General_ExercisesonlyU2_PERCENT*100),
                                      },
                            reads:{
                                   total:11,
                                   completed:Math.round(General_AllREad_PERCENT*11),
                                   percent: Math.round(General_AllREad_PERCENT*100),
                                  },   
                            quizzes:{
                                      total:3,
                                      completed:Math.round(General_AllQuiz_PERCENT*3),
                                      percent: Math.round(General_AllQuiz_PERCENT*100),
                                      scoreSum:Math.round(General_AllQuiz_Score*3),
                                      scoreAvg:Math.round(General_AllQuiz_Score),
                                    }
                         }
                }
              if(Percent_Quiz_U2 !== 0 )
              {
                Score_Quiz_U2=Score_Quiz_U2; 
                let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                travelusers.stats = 
                         {
                          percent:General_AllUnit_PERCENT,
                           exercises:{
                                       total:2,
                                       completed:Math.round(General_ExercisesonlyU2_PERCENT*2),
                                       percent: Math.round(General_ExercisesonlyU2_PERCENT*100),
                                     },
                           reads:{
                                  total:11,
                                  completed:Math.round(General_AllREad_PERCENT*11),
                                  percent: Math.round(General_AllREad_PERCENT*100),
                                 },   
                           quizzes:{
                                     total:3,
                                     completed:Math.round(General_AllQuiz_PERCENT*3),
                                     percent: Math.round(General_AllQuiz_PERCENT*100),
                                     scoreSum:Math.round(General_AllQuiz_Score*3),
                                     scoreAvg:Math.round(General_AllQuiz_Score),
                                   }
                         }
              }
               if(Percent_Quiz_U3 === 0 )
              {
                Score_Quiz_U3=0; 
                let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                travelusers.stats = 
                         {
                          percent:General_AllUnit_PERCENT,
                           exercises:{
                                       total:2,
                                       completed:Math.round(General_ExercisesonlyU2_PERCENT*2),
                                       percent: Math.round(General_ExercisesonlyU2_PERCENT*100),
                                     },
                           reads:{
                                  total:11,
                                  completed:Math.round(General_AllREad_PERCENT*11),
                                  percent: Math.round(General_AllREad_PERCENT*100),
                                 },   
                           quizzes:{
                                     total:3,
                                     completed:Math.round(General_AllQuiz_PERCENT*3),
                                     percent: Math.round(General_AllQuiz_PERCENT*100),
                                     scoreSum:Math.round(General_AllQuiz_Score*3),
                                     scoreAvg:Math.round(General_AllQuiz_Score),
                                   }
                         }
               }
               if(Percent_Quiz_U3 !== 0 )
              {
                Score_Quiz_U3=Score_Quiz_U3; 
                let General_AllQuiz_Score=(Score_Quiz_U1+Score_Quiz_U2+Score_Quiz_U3)/3;
                travelusers.stats = 
                {
                           percent:General_AllUnit_PERCENT,
                           exercises:{
                                       total:2,
                                       completed:Math.round(General_ExercisesonlyU2_PERCENT*2),
                                       percent: Math.round(General_ExercisesonlyU2_PERCENT*100),
                                     },
                           reads:{
                                  total:11,
                                  completed:Math.round(General_AllREad_PERCENT*11),
                                  percent: Math.round(General_AllREad_PERCENT*100),
                                 },   
                           quizzes:{
                                     total:3,
                                     completed:Math.round(General_AllQuiz_PERCENT*3),
                                     percent: Math.round(General_AllQuiz_PERCENT*100),
                                     scoreSum:Math.round(General_AllQuiz_Score*3),
                                     scoreAvg:Math.round(General_AllQuiz_Score),
                                   }
                  }
                }

            }
        } else {
          travelusers.stats = 
                         {
                          percent: 0,
                          exercises:{
                                      total: 0,
                                      completed: 0,
                                      percent: 0,
                                    },
                          reads:{
                                 total: 0,
                                 completed: 0,
                                 percent: 0,
                                },   
                          quizzes:{
                                    total: 0,
                                    completed: 0,
                                    percent: 0,
                                    scoreSum: 0,
                                    scoreAvg: 0,
                                  }
                         }
        }
      }

    });    
    return users
  }



const sortUsers = (users, orderBy, orderDirection) => {
//nombre
if(orderBy === "Nombre")
{
 if(orderDirection ==="ASC")
 {
    users.sort(function(a, b)
    {
    let nameA=a.name.toLowerCase();
    let nameB=b.name.toLowerCase();
    if (nameA < nameB) 
        return -1 
    if (nameA > nameB)
        return 1
    return 0 
    })
 }
 if(orderDirection ==="DESC")
 {
    users.sort(function(a, b)
    {
    let nameA=a.name.toLowerCase();
    let nameB=b.name.toLowerCase();
    if (nameA < nameB) 
        return 1
    if (nameA > nameB)
        return -1
    return 0 
    })
 }  
} 
//porcentaje
if(orderBy === "Porcentaje")
{
  if(orderDirection ==="ASC")
  {
    users.sort(function(a, b)
    {
    let nameA=a.stats.percent;
    let nameB=b.stats.percent;
    
    return nameA-nameB 
    })
  }
  if(orderDirection ==="DESC")
  {
    users.sort(function(a, b)
    {
    let nameA=a.stats.percent;
    let nameB=b.stats.percent;
    
    return nameB-nameA 
    })
  }
}   
//"Ejercicios"
if(orderBy === "Ejercicios")
{
  if(orderDirection ==="ASC")
  {
    users.sort(function(a, b)
    {
    let nameA=a.stats.exercises.percent;
    let nameB=b.stats.exercises.percent;
    
    return nameA-nameB 
    })
  }
  if(orderDirection ==="DESC")
  {
    users.sort(function(a, b)
    {
    let nameA=a.stats.exercises.percent;
    let nameB=b.stats.exercises.percent;
    
    return nameB-nameA 
    })
  }
}     
//"Lectura"
if(orderBy === "Lectura")
{
  if(orderDirection ==="ASC")
  {
    users.sort(function(a, b)
    {
    let nameA=a.stats.reads.percent;
    let nameB=b.stats.reads.percent;
    
    return nameA-nameB 
    })
  }
  if(orderDirection ==="DESC")
  {
    users.sort(function(a, b)
    {
    let nameA=a.stats.reads.percent;
    let nameB=b.stats.reads.percent;
    
    return nameB-nameA 
    })
  }
} 
// "Quizes"           
if(orderBy === "Quizes")
{
  if(orderDirection ==="ASC")
  {
    users.sort(function(a, b)
    {
    let nameA=a.stats.quizzes.scoreAvg;
    let nameB=b.stats.quizzes.scoreAvg;
    
    return nameA-nameB 
    })
  }
  if(orderDirection ==="DESC")
  {
    users.sort(function(a, b)
    {
    let nameA=a.stats.quizzes.scoreAvg;
    let nameB=b.stats.quizzes.scoreAvg;
    
    return nameB-nameA 
    })
  }
}  
//porcentaje de quizes completados           
if(orderBy === "PQuizes")
{
  if(orderDirection ==="ASC")
  {
    users.sort(function(a, b)
    {
    let nameA=a.stats.quizzes.percent;
    let nameB=b.stats.quizzes.percent;
    
    return nameA-nameB 
    })
  }
  if(orderDirection ==="DESC")
  {
    users.sort(function(a, b)
    {
    let nameA=a.stats.quizzes.percent;
    let nameB=b.stats.quizzes.percent;
    
    return nameB-nameA 
    })
  }
}  
 return users
 
}

const filterUsers = (users, search) => {
  console.log(users);
  
  return users.filter((user) => {
    return user.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
  })
  
  
}
const processCohortData = (options) => {
  
  courses=options.cohort;
  users=options.cohortData.users;
  progress=options.cohortData.progress; 
  orderBy=options.orderBy;
  orderDirection=options.orderDirection;
  searchName=options.search;
 let compudetdata= computeUsersStats (users, progress, courses) ;

 let ordenUsers =sortUsers (compudetdata, orderBy, orderDirection);
 let searchNmame= filterUsers(ordenUsers, searchName);
 
  return searchNmame
}





  window.computeUsersStats = computeUsersStats;
  window.sortUsers = sortUsers;
  window.processCohortData = processCohortData;
  window.filterUsers = filterUsers;
  