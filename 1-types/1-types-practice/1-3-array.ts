{
  // Array
  const fruits: string[] = ['apple', 'banana'];
  const scores: Array<number> = [1,3,4]

  // readonly 는 읽을 수 만 있게하는 타입 지정입니다. 
  function printArr (fruits: readonly string[]) {
    // fruits.push() // Error
  }

  // Tuple -> 서로 다른 타입을 함께 가질 수 있는 배열입니다.
  // Tuple -> interface, type alias, class로 대체해서 사용합니다.
  // Tuple -> 사용은 권장은 하지 않습니다. 가독성이 떨어지고, 유지보수가 어려워집니다.

  let student: [string, number];
  student = ['Jake', 123];
  student[0] // 'Jake'
  student[1] // 123 

  // 대체해서 사용할 수 있는 권장 방법
  const [name, age] = student // Object Destructuring

}