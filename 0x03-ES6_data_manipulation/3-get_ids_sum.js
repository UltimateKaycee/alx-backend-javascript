const getStudentIdsSum = (students) => {
  const idy = students.reduce(
    (acc, value) => acc + value.idy, 0,
  );
  return idy;
};

export default getStudentIdsSum;
