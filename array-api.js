

{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join(', ');
    console.log(result);
  }
  
  // Q2. make an array out of a string
  {
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    // console.log(result);
  }
  
  // Q3. make this array look like this: [5, 4, 3, 2, 1]
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    // console.log(result, array);
  }
  
  // Q4. make new array without the first two elements
  {
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 4);
    // console.log(result, array);
  }
  
  class Student {
    constructor(name, age, enrolled, score) {
      this.name = name;
      this.age = age;
      this.enrolled = enrolled;
      this.score = score;
    }
  }
  const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
  ];
  
  // Q5. find a student with the score 90
  {
      const result = students.find((student) => student.score === 90);
    //   console.log(result);
  }
  
  // Q6. make an array of enrolled students
  {
      const result = students.filter((student) => student.enrolled);
    //   console.log(result);
  }
  
  // Q7. make an array containing only the students' scores
  // result should be: [45, 80, 90, 66, 88]
  {
      const result = students.map((student) => student.score);
    //   console.log(result);
  }
  
  // Q8. check if there is a student with the score lower than 50
  {
      const result = students.some((student) => student.score < 50);
    //   console.log("8", result);

      const result2 = !students.every((student) => student.score >= 50);
    //   console.log("8", !result);
    // some:  요소 하나하나 실행하는데 50보다 낮은게 있으면, 하나라도 만족하면 return true.
    // every : 모든 학생들의 점수가 50보다 낮으면 true
  }
  
  // Q9. compute students' average score
  {
      const average = students.reduce((prev, curr) => {return  prev + curr.score;}, 0);
      console.log(average / students.length);
      console.log(average)
  }
  
  // Q10. make a string containing all the scores
  // result should be: '45, 80, 90, 66, 88'
  {
      const makeString = students
      .map(student => student.score)
      .filter((score) => score >= 50)
      .join()
    //   console.log(makeString)
    //   makeString.
  }
  
  // Bonus! do Q10 sorted in ascending order
  // result should be: '45, 66, 80, 88, 90'
  {
        const sortInAscendingOrder = students
        .map(student => student.score)
        .sort((a, b) => a - b)
        .join();
        console.log(sortInAscendingOrder)

  }