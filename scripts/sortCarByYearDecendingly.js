function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  for (let i = 0; i < result.length; i++) {
    let flag = result.length - i - 1;
    for (let j = 0; j < flag; j++) {
      const x = result[j];
      const y = result[j + 1];
      if (result[j + 1].year > result[j].year) {
        result[j] = y;
        result[j + 1] = x;
      }
    }
  }
  // result.sort((s1, s2) => s2.year - s1.year);

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
