//en esta carpeta main 2 estoy almacenando todos lo datos a usar
// juntando toda la informacion del json con que quiere ordenar y si es asc o desc
let option ={
    cohort:null,
    cohortData: 
    {
      users: null,
      progress: null,
    },
    orderBy: "alazar",
    orderDirection:"alazar",
    search:"",
  } ;
//anidando data de js
const AllData = (Callback) => 
{
  fetch ('../data/cohorts.json')
      .then (function (responseC) 
      {
      fetch ('../data/cohorts/lim-2018-03-pre-core-pw/users.json')
          .then (function (responseU) 
          { 
              fetch ('../data/cohorts/lim-2018-03-pre-core-pw/progress.json')
                  .then (function (responseP)
                   {
                      Promise.all([ responseC.json(), responseU.json(), responseP.json()])
                          .then(data => {
                            
                              Callback(data);
                          })
                  })
          })
  })
}


//anidando el de la forma de ordenar

const selectOrdenValue = (Callback) => {
    
    orderList.addEventListener("change", (event)=>{
      const ordenValue=orderList.value;
      console.log(ordenValue);
      Callback(ordenValue)
    })
    }
//anidando asc o desc

const selectAscDesc = (Callback) => {
      ascDesc.addEventListener("change", (event)=>{
        const orderAscDesc=ascDesc.value;
        console.log(orderAscDesc);
        Callback(orderAscDesc)
      })
      }
const nameSelect = (Callback) => {

    bottonOrden.addEventListener("click", () => {
         let searchFilter = searchUserInTableOrden.value.toUpperCase();
         console.log(searchFilter);
          Callback(searchFilter)
        }) 
    }    

// juntando toda la informacion del json con que quiere ordenar y si es asc o desc
const alldatawithorden = (Callback) =>{
    AllData((data)=>
    {
        option.cohort=data[0];
        option.cohortData.users=data[1];
        option.cohortData.progress=data[2];
        
        selectOrdenValue((ordenValue)=>{
          option.orderBy=ordenValue;  
        })
        selectAscDesc((orderAscDesc)=>{
            option.orderDirection=orderAscDesc;
         
       
        })
        nameSelect((searchFilter)=>{
            option.search=searchFilter;   
        })

        Callback(option)
    })
}

 