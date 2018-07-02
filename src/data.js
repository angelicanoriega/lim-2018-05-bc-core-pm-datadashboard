
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
    console.log('data.js', 'users 220')
    console.log(users)
    return users
  }

const processCohortData = (options) => {
  courses=options[0].coursesIndex;
  users=options[1];
  progress=options[2];
 
  let compudetdata= computeUsersStats (users, progress, courses) ;
  console.log('data.js', 'compudetdata 231')
  console.log(compudetdata);
  
 return compudetdata
  
  
}

const sortUsers = (users, orderBy, orderDirection) => {
}
const filterUsers = (users, search) => {
}



  window.computeUsersStats = computeUsersStats;
  window.sortUsers = sortUsers;
  window.processCohortData = processCohortData;
  window.filterUsers = filterUsers;
  