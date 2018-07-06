describe('data', () => {

  it('debería exponer función computeUsersStats en objeto global', () => {
    assert.isFunction(computeUsersStats);
  });

  it('debería exponer función sortUsers en objeto global', () => {
    assert.isFunction(sortUsers);
  });

  it('debería exponer función filterUsers en objeto global', () => {
    assert.isFunction(filterUsers);
  });

  it('debería exponer función processCohortData en objeto global', () => {
    assert.isFunction(processCohortData);
  });
const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
  describe('computeUsersStats(users, progress, courses)', () => {

    
    const { users, progress } = fixtures;
    
    it('debería retornar arreglo de usuarios con propiedad stats', () => {
      const processed = computeUsersStats(users, progress, courses);
      assert.equal(users.length, processed.length);

      processed.forEach(user => {
        assert.ok(user.hasOwnProperty('stats'));
        assert.isNumber(user.stats.percent);
        assert.isObject(user.stats.exercises);
        assert.isObject(user.stats.quizzes);
        assert.isObject(user.stats.reads);
      });
    });

    describe('user.stats para el primer usuario en data de prueba - ver carpeta data/', () => {

      const processed = computeUsersStats(users, progress, courses);

      it(
        'debería tener propiedad percent con valor 53',
        () => assert.equal(processed[0].stats.percent, 53)
      );

      it('debería tener propiedad exercises con valor {total: 2, completed: 1, percent: 50}', () => {
        assert.deepEqual(processed[0].stats.exercises, {
          total: 2,
          completed: 1,
          percent: 50,
        });
      });

      it('debería tener propiedad quizzes con valor {total: 3, completed: 2, percent: 67, scoreSum: 57, scoreAvg: 19}', () => {
        assert.deepEqual(processed[0].stats.quizzes, {
          total: 3,
          completed: 2,
          percent: 67,
          scoreSum: 57,
          scoreAvg: 19,
        });
      });

      it('debería tener propiedad reads con valor {total: 11, completed: 6, percent: 55}', () => {
        assert.deepEqual(processed[0].stats.reads, {
          total: 11,
          completed: 6,
          percent: 55,
        });
      });

    });

  });

  describe('sortUsers(users, orderBy, orderDirection)', () => {
   
    let cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    let courses = Object.keys(cohort.coursesIndex);
    let { users, progress } = fixtures;
    let lista = computeUsersStats(users, progress, courses);
 

    console.debug("orden");
    it('debería retornar arreglo de usuarios ordenado por nombre ASC',()=>{
    const orden=sortUsers(lista ,"Nombre" ,"ASC");
    console.debug("orden");
    console.debug(orden);
    assert.equal(orden[0].name,"adriana vizcarra paitán")});

    it('debería retornar arreglo de usuarios ordenado por nombre DESC',()=>{
      const orden=sortUsers(lista ,"Nombre" ,"DESC");
      console.debug("orden");
      console.debug(orden);
      assert.equal(orden[0].name,"Zurisadai Rosas Aramburú") 
    });
    
    it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC',()=>{
      const orden=sortUsers(lista ,"Porcentaje" ,"ASC");
      console.debug("orden");
      console.debug(orden);
      assert.equal(orden[0].stats.percent,0) 
    });

    it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC',()=>{
      const orden=sortUsers(lista ,"Porcentaje" ,"DESC");
      console.debug("orden");
      console.debug(orden);
      assert.equal(orden[0].stats.percent,100) 
    });

    it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC',()=>{
      const orden=sortUsers(lista ,"Ejercicios" ,"ASC");
      console.debug("orden");
      console.debug(orden);
      assert.equal(orden[0].stats.exercises.percent,0) 
    });

    it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC',()=>{
      const orden=sortUsers(lista ,"Ejercicios" ,"DESC");
      console.debug("orden");
      console.debug(orden);
      assert.equal(orden[0].stats.exercises.percent,100) 
    });

    it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC',()=>{
      const orden=sortUsers(lista ,"PQuizes" ,"ASC");
      console.debug("orden");
      console.debug(orden);
      assert.equal(orden[0].stats.quizzes.percent,0) 
    });

    it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC',()=>{
      const orden=sortUsers(lista ,"PQuizes" ,"DESC");
      console.debug("orden");
      console.debug(orden);
      assert.equal(orden[0].stats.quizzes.percent,100) 
    });

    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC',()=>{
      const orden=sortUsers(lista ,"Quizes" ,"ASC");
      console.debug("orden");
      console.debug(orden);
      assert.equal(orden[0].stats.quizzes.scoreAvg,0) 
    });

    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC',()=>{
      const orden=sortUsers(lista ,"Quizes" ,"DESC");
      console.debug("orden");
      console.debug(orden);
      assert.equal(orden[0].stats.quizzes.scoreAvg,99) 
    });

    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC',()=>{
      const orden=sortUsers(lista ,"Lectura","ASC");
      console.debug("orden");
      console.debug(orden);
      assert.equal(orden[0].stats.reads.percent,0) 
    });

    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC',()=>{
      const orden=sortUsers(lista ,"Lectura","DESC");
      console.debug("orden");
      console.debug(orden);
      assert.equal(orden[0].stats.reads.percent,100) 
    });

  });

  describe('filterUsers(users, filterBy)', () => {
    const usersFilter = fixtures.users;

    it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)',()=>{
      const filter=filterUsers(usersFilter,"maria")
      assert.equal(filter[0].name,"Maria del Carmen Samaniego Chunga")

    });

  });

  describe('processCohortData({ cohortData, orderBy, orderDirection, filterBy })', () => {
    const { users, progress } = fixtures;
  let option = {
    cohortData: {
      users: users,
      progress: progress
    },
    orderBy:"alazar",
    orderDirection: "alazar",
    search: "milagros"
  };
  let data = processCohortData(option);

    it('debería retornar arreglo de usuarios con propiedad stats y aplicar sort y filter',()=>{
      assert.deepEqual(data[0].name, "Erika Milagros");
      

    });

  });

});
