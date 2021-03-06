//conectando html
const countryAll = document.getElementById("listCountry");
const orderList = document.getElementById("listOrder");
const ascDesc = document.getElementById("listSort");
const nombreUsuariosOrdenado = document.getElementById("ordenado");
const bottonfilter = document.getElementById("botton");
const textfilter = document.getElementById("text");
const bottonOrden = document.getElementById("botton-orden");
let inArray = document.getElementById("prueba")
const selection = document.getElementById("listCohorts");
const selectionUsers = document.getElementById("listUsers");
const allPercentUser = document.getElementById("general");
const allPercentUserExercise = document.getElementById("generalexercises");
const allPercentUserRead = document.getElementById("generalreadings");
const allPercentUserQuiz = document.getElementById("generalquiz");
const qualificationUserQuiz = document.getElementById("generalscore");
const percentUserU1 = document.getElementById("unit1");
const percentUserUnitOneRead = document.getElementById("firstUnitReading");
const percentUserUnitOneQuiz = document.getElementById("firstUnitQuiz");
const qualificationUserUnitOneQuiz = document.getElementById("firstUnitScore");
const percentUserUnit2 = document.getElementById("unit2");
const percentUserU2exercises = document.getElementById("secondUnitExercises");
const percentUserU2Read = document.getElementById("secondUnitReading");
const percentUserU2Quiz = document.getElementById("secondUnitQuiz");
const qualificationUserU2Quiz = document.getElementById("secondUnitScore");
const percentUserU3 = document.getElementById("unit3");
const percentUserU3Read = document.getElementById("threeUnitReading");
const percentUserU3Quiz = document.getElementById("threeUnitQuiz");
const qualificationUserU3Quiz = document.getElementById("threeUnitScore");
let nameUser = document.getElementById("searchUsers");
let searchUserInTableOrden = document.getElementById("search");
let searchBotton = document.getElementById("search");


//llamando a todos  los cohorts
countryAll.addEventListener("change", (event) => {
  AllData((data) => {
    cohorts = data[0];

    let clean = "";
    cohorts.forEach(nameCohort => {
      const cohortId = nameCohort.id;
      const cohortSplit = cohortId.split("-");
      if (countryAll.value === cohortSplit[0]) {
        clean += "<option value=" + cohortId + " >" + cohortId + "</option>";
      }
      selection.innerHTML = clean;
    })
  })
})

//llamando usuarios segun el cohort indicado
selection.addEventListener("change", (event) => {
  
  if (selection.value === "lim-2018-03-pre-core-pw") {
    AllData((data) => {
      let users = data[1];
      let progress = data[2];
      for (let userElement of users) {
        let userId = userElement.id;
        let nameUser = userElement.name;
        selectionUsers.innerHTML += "<option value=" + userId + " >" + nameUser + "</option>";
      };

    })
    //aparecera sin hacer el evento click a bottonOrden
    alldatawithorden((option) => {
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
        tabla += '<td id= "nombrestabla">' + element.name + '</td>';
        tabla += '<td>' + element.stats.percent + '</td>';
        tabla += '<td>' + element.stats.exercises.percent + '</td>';
        tabla += '<td>' + element.stats.quizzes.percent + '</td>';
        tabla += '<td>' + element.stats.quizzes.scoreAvg + '</td>';
        tabla += '<td>' + element.stats.reads.percent + '</td>';

        tabla += '</tr>';
        nombreUsuariosOrdenado.innerHTML = tabla;
      })
    })
    //aparecera al hacer hacer el evento click a bottonOrden
    bottonOrden.addEventListener("click", () => {
      alldatawithorden((option) => {
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
          tabla += '<td id= "nombrestabla">' + element.name + '</td>';
          tabla += '<td>' + element.stats.percent + '</td>';
          tabla += '<td>' + element.stats.exercises.percent + '</td>';
          tabla += '<td>' + element.stats.quizzes.percent + '</td>';
          tabla += '<td>' + element.stats.quizzes.scoreAvg + '</td>';
          tabla += '<td>' + element.stats.reads.percent + '</td>';

          tabla += '</tr>';

          nombreUsuariosOrdenado.innerHTML = tabla
        })
      })
    })
  } else {
    alert("no hay datos");
  }
})

// aqui empieza la informacion incluyendo lo de las unidades

nameUser.addEventListener("keyup", (event) => {

  AllData((data) => {

    let users = data[1];
    let nameSelect = nameUser.value.toUpperCase();
    for (i = 0; i < selectionUsers.length; i++) {
      let name = selectionUsers[i].innerHTML.toUpperCase();
      if (name.indexOf(nameSelect) > -1) {
        selectionUsers[i].style.display = "";
      } else {
        selectionUsers[i].style.display = "none";
      }
    }
  })
})

//llamando datos por unidades de los usuarios
selectionUsers.addEventListener("change", (event) => {
  const userIdData = selectionUsers.value;
  AllData((data) => {
    const user = data[1];

    const progress = data[2];
    user.forEach(element => {
      if (element.hasOwnProperty('id')) {
        const idUser = element.id
        if (idUser === userIdData) {
          const nameUser = element.name;
          inArray.innerHTML = nameUser;
        }
      }
    });
    if (progress.hasOwnProperty(userIdData)) {
      const userIDinProgress = progress[userIdData];
      if (userIDinProgress.hasOwnProperty('intro')) {

        const introInProgress = userIDinProgress.intro;
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
          const generalAllUnitPercent = (introInProgress.percent)
          const percentUnit1 = parseInt(inUnit1.percent)
          const percentUnit2 = parseInt(inUnit2.percent)
          const percentUnit3 = parseInt(inUnit3.percent)

          const percentReadU1 = parseInt((readCompletU1 / 4) * 100)
          const percentReadU2 = parseInt((readCompletU2 / 4) * 100)
          const percentReadU3 = parseInt((readCompletU3 / 3) * 100)
          const generalAllReadPercentx = parseInt((percentReadU1 * 4 + percentReadU2 * 4 + percentReadU3 * 3) / 11);

          const percentQuizU1 = parseInt(quizCompletU1 * 100)
          const percentQuizU2 = parseInt(quizCompletU2 * 100)
          const percentQuizU3 = parseInt(quizCompletU3 * 100)
          const generalAllQuizPercent = parseInt((percentQuizU1 + percentQuizU2 + percentQuizU3) / 3);

          let scoreQuizU1 = parseInt(quizScoreU1)
          let scoreQuizU2 = parseInt(quizScoreU2)
          let scoreQuizU3 = parseInt(quizScoreU3)
          let generalAllQuizScore = parseInt((scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3);

          let generalExercisesOnlyUnitTwoPercent = parseInt(((exercisesCompletdU2 + exercisesCompletdUnitTwo2) / 2) * 100);

          allPercentUser.innerHTML = generalAllUnitPercent;
          allPercentUserExercise.innerHTML = generalExercisesOnlyUnitTwoPercent;
          allPercentUserRead.innerHTML = generalAllReadPercentx;
          allPercentUserQuiz.innerHTML = generalAllQuizPercent;

          percentUserU1.innerHTML = percentUnit1;
          percentUserUnitOneRead.innerHTML = percentReadU1;
          percentUserUnitOneQuiz.innerHTML = percentQuizU1;


          percentUserUnit2.innerHTML = percentUnit2;
          percentUserU2exercises.innerHTML = generalExercisesOnlyUnitTwoPercent;
          percentUserU2Read.innerHTML = percentReadU2;
          percentUserU2Quiz.innerHTML = percentQuizU2;

          percentUserU3.innerHTML = percentUnit3;
          percentUserU3Read.innerHTML = percentReadU3;
          percentUserU3Quiz.innerHTML = percentQuizU3;

          if (percentQuizU1 === 0) {
            scoreQuizU1 = 0;
            let generalAllQuizScore = ((scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3);
            qualificationUserQuiz.innerHTML = generalAllQuizScore.toFixed();
            document.getElementById("firstUnitScore").innerHTML = scoreQuizU1;
            qualificationUserU2Quiz.innerHTML = scoreQuizU2;
            qualificationUserU3Quiz.innerHTML = scoreQuizU3;
          }
          if (percentQuizU1 !== 0) {
            scoreQuizU1 = scoreQuizU1;
            let generalAllQuizScore = ((scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3);
            qualificationUserQuiz.innerHTML = generalAllQuizScore.toFixed();
            document.getElementById("firstUnitScore").innerHTML = scoreQuizU1;
            qualificationUserU2Quiz.innerHTML = scoreQuizU2;
            qualificationUserU3Quiz.innerHTML = scoreQuizU3;
          }


          if (percentQuizU2 === 0) {
            scoreQuizU2 = 0;
            let generalAllQuizScore = ((scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3);
            qualificationUserQuiz.innerHTML = generalAllQuizScore.toFixed();
            document.getElementById("firstUnitScore").innerHTML = scoreQuizU1;
            qualificationUserU2Quiz.innerHTML = scoreQuizU2;
            qualificationUserU3Quiz.innerHTML = scoreQuizU3;
          }

          if (percentQuizU2 !== 0) {
            scoreQuizU2 = scoreQuizU2;
            let generalAllQuizScore = ((scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3);
            qualificationUserQuiz.innerHTML = generalAllQuizScore.toFixed();
            document.getElementById("firstUnitScore").innerHTML = scoreQuizU1;
            qualificationUserU2Quiz.innerHTML = scoreQuizU2;
            qualificationUserU3Quiz.innerHTML = scoreQuizU3;
          }


          if (percentQuizU3 === 0) {
            scoreQuizU3 = 0;
            let generalAllQuizScore = ((scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3);
            qualificationUserQuiz.innerHTML = generalAllQuizScore.toFixed();
            document.getElementById("firstUnitScore").innerHTML = scoreQuizU1;
            qualificationUserU2Quiz.innerHTML = scoreQuizU2;
            qualificationUserU3Quiz.innerHTML = scoreQuizU3;
          }
          if (percentQuizU3 !== 0) {
            scoreQuizU3 = scoreQuizU3;
            let generalAllQuizScore = ((scoreQuizU1 + scoreQuizU2 + scoreQuizU3) / 3);
            qualificationUserQuiz.innerHTML = generalAllQuizScore.toFixed();
            document.getElementById("firstUnitScore").innerHTML = scoreQuizU1;
            qualificationUserU2Quiz.innerHTML = scoreQuizU2;
            qualificationUserU3Quiz.innerHTML = scoreQuizU3;
          }

        }
      }
    }
  })
})
