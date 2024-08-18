const getStudentsByLocation = (students, city) => {
  const arrObj = students.filter((funtion) => funtion.location === city);
  return arrObj;
};

export default getStudentsByLocation;
