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
  console.log(option);
  

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

const Select_ordenvalue = (Callback) => {
    
    Orderlist.addEventListener("change", (event)=>{
      const ordenvalue=Orderlist.value;
      console.log(ordenvalue);
      Callback(ordenvalue)
    })
    }
//anidando asc o desc

const Select_ASC_or_DESC = (Callback) => {
      Asd_des.addEventListener("change", (event)=>{
        const orderAsd_des=Asd_des.value;
        console.log(orderAsd_des);
        Callback(orderAsd_des)
      })
      }
const nameSelect = (Callback) => {

    botton_orden.addEventListener("click", () => {
         let search_filter = search_user_in_table_orden.value.toUpperCase();
         console.log(search_filter);
          Callback(search_filter)
        }) 
    }    

// juntando toda la informacion del json con que quiere ordenar y si es asc o desc
const alldatawithorden = (Callback) =>{
    AllData((data)=>
    {
        option.cohort=data[0];
        option.cohortData.users=data[1];
        option.cohortData.progress=data[2];
        
        Select_ordenvalue((ordenvalue)=>{
          option.orderBy=ordenvalue;  
        })
        Select_ASC_or_DESC((orderAsd_des)=>{
            option.orderDirection=orderAsd_des;
         
       
        })
        nameSelect((search_filter)=>{
            option.search=search_filter;   
        })

        Callback(option)
    })
}

 