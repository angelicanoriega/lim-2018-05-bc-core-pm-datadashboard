const computeUsersStats = (users, progress, courses) =>
{   
  let userwithstas='';
   users.forEach(travelusers => {
     const idUsers = travelusers.id;
 
     if (progress.hasOwnProperty(idUsers)) {
           const travelProgress=progress[idUsers];

      if (travelProgress.hasOwnProperty('intro')) {
        const introInProgress = travelProgress.intro;

        const inUnit1 = introInProgress.units['01-introduction'];

        const inUnit2 = introInProgress.units['02-variables-and-data-types'];
        const inUnit3 = introInProgress.units['03-ux-design'];

        const readCompletU1 = inUnit1.parts["00-welcome-and-orientation"].completed + inUnit1.parts["03-your-first-website"].completed + inUnit1.parts["02-why-learn-to-code"].completed + inUnit1.parts["01-growth-mindset"].completed;
        const readCompletU2 = inUnit2.parts["01-variables"].completed + inUnit2.parts["02-self-learning-MDN"].completed + inUnit2.parts["03-comments"].completed + inUnit2.parts["00-values-data-types-and-operators"].completed;
        const readCompletU3 = inUnit3.parts["00-development-team"].completed + inUnit3.parts["02-ux-design-vs-ui-design"].completed + inUnit3.parts["01-ux-design"].completed;

        const quizCompletU1 = inUnit1.parts["04-quiz"].completed;
        const quizCompletU2 = inUnit2.parts["05-quiz"].completed;
        const quizCompletU3 = inUnit3.parts["03-quiz"].completed;

        const quizScoreU1 = inUnit1.parts["04-quiz"].score;
        const quizScoreU2 = inUnit2.parts["05-quiz"].score;
        const quizScoreU3 = inUnit3.parts["03-quiz"].score;

        const exercisesCompletdU2 = inUnit2.parts["06-exercises"].completed;
        const exercisesCompletdUnitTwo2 = inUnit2.parts["04-guided-exercises"].completed;
        if (introInProgress.hasOwnProperty('percent')) {
          const generalAllUnitPercent = introInProgress.percent;

          const percentUnit1 = inUnit1.percent;
          const percentUnit2 = inUnit2.percent;
          const percentUnit3 = inUnit3.percent;

          const percentReadU1 = (readCompletU1);
          const percentReadU2 = (readCompletU2);
          const percentReadU3 = (readCompletU3);
          const generalAllReadPercentx = (percentReadU1 + percentReadU2 + percentReadU3) / 11;

          const percentQuizU1 = quizCompletU1;
          const percentQuizU2 = quizCompletU2;
          const percentQuizU3 = quizCompletU3;
          const generalAllQuizPercent = (percentQuizU1 + percentQuizU2 + percentQuizU3) / 3;

          let scoreQuizU1 = quizScoreU1;
          let scoreQuizU2 = quizScoreU2;
          let scoreQuizU3 = quizScoreU3;
          let generalAllQuizScore = (scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3;

          let generalExercisesOnlyUnitTwoPercent = ((exercisesCompletdU2 + exercisesCompletdUnitTwo2) / 2);

          if (percentQuizU1 === 0) {
            scoreQuizU1 = 0;
            let generalAllQuizScore = (scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3;
            travelusers.stats =
              {
                percent: generalAllUnitPercent,
                exercises: {
                  total: 2,
                  completed: Math.round(generalExercisesOnlyUnitTwoPercent * 2),
                  percent: Math.round(generalExercisesOnlyUnitTwoPercent * 100),
                },
                reads: {
                  total: 11,
                  completed: Math.round(generalAllReadPercentx * 11),
                  percent: Math.round(generalAllReadPercentx * 100),
                },
                quizzes: {
                  total: 3,
                  completed: Math.round(generalAllQuizPercent * 3),
                  percent: Math.round(generalAllQuizPercent * 100),
                  scoreSum: Math.round(generalAllQuizScore * 3),
                  scoreAvg: Math.round(generalAllQuizScore),
                }
              }
          }
          if (percentQuizU1 !== 0) {
            scoreQuizU1 = scoreQuizU1;
            let generalAllQuizScore = (scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3;
            travelusers.stats =
              {
                percent: generalAllUnitPercent,
                exercises: {
                  total: 2,
                  completed: Math.round(generalExercisesOnlyUnitTwoPercent * 2),
                  percent: Math.round(generalExercisesOnlyUnitTwoPercent * 100),
                },
                reads: {
                  total: 11,
                  completed: Math.round(generalAllReadPercentx * 11),
                  percent: Math.round(generalAllReadPercentx * 100),
                },
                quizzes: {
                  total: 3,
                  completed: Math.round(generalAllQuizPercent * 3),
                  percent: Math.round(generalAllQuizPercent * 100),
                  scoreSum: Math.round(generalAllQuizScore * 3),
                  scoreAvg: Math.round(generalAllQuizScore),
                }
              }

          }
          if (percentQuizU2 === 0) {
            scoreQuizU2 = 0;
            let generalAllQuizScore = (scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3;
            travelusers.stats =
              {
                percent: generalAllUnitPercent,
                exercises: {
                  total: 2,
                  completed: Math.round(generalExercisesOnlyUnitTwoPercent * 2),
                  percent: Math.round(generalExercisesOnlyUnitTwoPercent * 100),
                },
                reads: {
                  total: 11,
                  completed: Math.round(generalAllReadPercentx * 11),
                  percent: Math.round(generalAllReadPercentx * 100),
                },
                quizzes: {
                  total: 3,
                  completed: Math.round(generalAllQuizPercent * 3),
                  percent: Math.round(generalAllQuizPercent * 100),
                  scoreSum: Math.round(generalAllQuizScore * 3),
                  scoreAvg: Math.round(generalAllQuizScore),
                }
              }
          }
          if (percentQuizU2 !== 0) {
            scoreQuizU2 = scoreQuizU2;
            let generalAllQuizScore = (scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3;
            travelusers.stats =
              {
                percent: generalAllUnitPercent,
                exercises: {
                  total: 2,
                  completed: Math.round(generalExercisesOnlyUnitTwoPercent * 2),
                  percent: Math.round(generalExercisesOnlyUnitTwoPercent * 100),
                },
                reads: {
                  total: 11,
                  completed: Math.round(generalAllReadPercentx * 11),
                  percent: Math.round(generalAllReadPercentx * 100),
                },
                quizzes: {
                  total: 3,
                  completed: Math.round(generalAllQuizPercent * 3),
                  percent: Math.round(generalAllQuizPercent * 100),
                  scoreSum: Math.round(generalAllQuizScore * 3),
                  scoreAvg: Math.round(generalAllQuizScore),
                }
              }
          }
          if (percentQuizU3 === 0) {
            scoreQuizU3 = 0;
            let generalAllQuizScore = (scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3;
            travelusers.stats =
              {
                percent: generalAllUnitPercent,
                exercises: {
                  total: 2,
                  completed: Math.round(generalExercisesOnlyUnitTwoPercent * 2),
                  percent: Math.round(generalExercisesOnlyUnitTwoPercent * 100),
                },
                reads: {
                  total: 11,
                  completed: Math.round(generalAllReadPercentx * 11),
                  percent: Math.round(generalAllReadPercentx * 100),
                },
                quizzes: {
                  total: 3,
                  completed: Math.round(generalAllQuizPercent * 3),
                  percent: Math.round(generalAllQuizPercent * 100),
                  scoreSum: Math.round(generalAllQuizScore * 3),
                  scoreAvg: Math.round(generalAllQuizScore),
                }
              }
          }
          if (percentQuizU3 !== 0) {
            scoreQuizU3 = scoreQuizU3;
            let generalAllQuizScore = (scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3;
            travelusers.stats =
              {
                percent: generalAllUnitPercent,
                exercises: {
                  total: 2,
                  completed: Math.round(generalExercisesOnlyUnitTwoPercent * 2),
                  percent: Math.round(generalExercisesOnlyUnitTwoPercent * 100),
                },
                reads: {
                  total: 11,
                  completed: Math.round(generalAllReadPercentx * 11),
                  percent: Math.round(generalAllReadPercentx * 100),
                },
                quizzes: {
                  total: 3,
                  completed: Math.round(generalAllQuizPercent * 3),
                  percent: Math.round(generalAllQuizPercent * 100),
                  scoreSum: Math.round(generalAllQuizScore * 3),
                  scoreAvg: Math.round(generalAllQuizScore),
                }
              }
          }

        }
      } else {
        travelusers.stats =
          {
            percent: 0,
            exercises: {
              total: 0,
              completed: 0,
              percent: 0,
            },
            reads: {
              total: 0,
              completed: 0,
              percent: 0,
            },
            quizzes: {
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
  if (orderBy === "Nombre") {
    if (orderDirection === "ASC") {
      users.sort(function (a, b) {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB)
          return -1
        if (nameA > nameB)
          return 1
        return 0
      })
    }
    if (orderDirection === "DESC") {
      users.sort(function (a, b) {
        let nameA = a.name.toLowerCase();
        let nameB = b.name.toLowerCase();
        if (nameA < nameB)
          return 1
        if (nameA > nameB)
          return -1
        return 0
      })
    }
  }
  //porcentaje
  if (orderBy === "Porcentaje") {
    if (orderDirection === "ASC") {
      users.sort(function (a, b) {
        let nameA = a.stats.percent;
        let nameB = b.stats.percent;

        return nameA - nameB
      })
    }
    if (orderDirection === "DESC") {
      users.sort(function (a, b) {
        let nameA = a.stats.percent;
        let nameB = b.stats.percent;

        return nameB - nameA
      })
    }
  }
  //"Ejercicios"
  if (orderBy === "Ejercicios") {
    if (orderDirection === "ASC") {
      users.sort(function (a, b) {
        let nameA = a.stats.exercises.percent;
        let nameB = b.stats.exercises.percent;

        return nameA - nameB
      })
    }
    if (orderDirection === "DESC") {
      users.sort(function (a, b) {
        let nameA = a.stats.exercises.percent;
        let nameB = b.stats.exercises.percent;

        return nameB - nameA
      })
    }
  }
  //"Lectura"
  if (orderBy === "Lectura") {
    if (orderDirection === "ASC") {
      users.sort(function (a, b) {
        let nameA = a.stats.reads.percent;
        let nameB = b.stats.reads.percent;

        return nameA - nameB
      })
    }
    if (orderDirection === "DESC") {
      users.sort(function (a, b) {
        let nameA = a.stats.reads.percent;
        let nameB = b.stats.reads.percent;

        return nameB - nameA
      })
    }
  }
  // "Quizes"           
  if (orderBy === "Quizes") {
    if (orderDirection === "ASC") {
      users.sort(function (a, b) {
        let nameA = a.stats.quizzes.scoreAvg;
        let nameB = b.stats.quizzes.scoreAvg;

        return nameA - nameB
      })
    }
    if (orderDirection === "DESC") {
      users.sort(function (a, b) {
        let nameA = a.stats.quizzes.scoreAvg;
        let nameB = b.stats.quizzes.scoreAvg;

        return nameB - nameA
      })
    }
  }
  //porcentaje de quizes completados           
  if (orderBy === "PQuizes") {
    if (orderDirection === "ASC") {
      users.sort(function (a, b) {
        let nameA = a.stats.quizzes.percent;
        let nameB = b.stats.quizzes.percent;

        return nameA - nameB
      })
    }
    if (orderDirection === "DESC") {
      users.sort(function (a, b) {
        let nameA = a.stats.quizzes.percent;
        let nameB = b.stats.quizzes.percent;

        return nameB - nameA
      })
    }
  }
  return users

}

const filterUsers = (users, search) => {

  return users.filter((user) => {
    return user.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
  })


}
const processCohortData = (options) => {

  courses = options.cohort;
  users = options.cohortData.users;
  progress = options.cohortData.progress;
  orderBy = options.orderBy;
  orderDirection = options.orderDirection;
  searchName = options.search;
  let compudetdata = computeUsersStats(users, progress, courses);

  let ordenUsers = sortUsers(compudetdata, orderBy, orderDirection);
  let searchNmame = filterUsers(ordenUsers, searchName);

  return searchNmame
}

window.computeUsersStats = computeUsersStats;
window.sortUsers = sortUsers;
window.processCohortData = processCohortData;
window.filterUsers = filterUsers;
