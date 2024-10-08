export default function updateStudentGradeByCity(students, city, newGrades) {
  if (!Array.isArray(students) || !Array.isArray(newGrades)) {
    return [];
  }
  // Filter by location
  // Change or add grade in newGrades
  // If no filtered student, Grades => grade = N/A

  const cStudents = students.filter((student) => student.location === city).map((student) => {
    const item2 = newGrades.find((student2) => student.id === student2.studentId);
    // });
    // console.log('FOUND STUDENT1: ', student);
    // console.log('FOUND ITEM2: ', item2);
    // console.log(item2 ? {...student, ...item2} : student.grade = 'N/A', student);
    // if (!itemb) {
    //   student.grade = 'N/A'; // eslint-disable-line no-param-reassign
    // }
    return { ...student, grade: item2 ? item2.grade : 'N/A' };
    // return itemb ? {...student, ...itemb} : student,  student.grade = 'M/A';
  });
  return cStudents;
}
