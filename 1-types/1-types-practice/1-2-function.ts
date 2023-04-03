{
  // // JS
  // function javascriptAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // JS -> TS
  // function typescriptAdd(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JS
  // function javascriptFetchNum(id) {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // JS -> TS 
  // function typescriptFetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JS -> TS 
  // Optional parameter
  function printPersonName(fristName: string, lastName: string) {
    console.log(fristName);
    console.log(lastName);
  }
  printPersonName('Jake', 'Kim');
  // printPersonName('Jake'); // Error

  function printPersonName2(fristName: string, lastName?: string){
    console.log(fristName);
    console.log(lastName);
  }

  printPersonName2('Jake', 'Kim');
  printPersonName2('Jake');
  printPersonName2('Jake', undefined);

  // Default parameter
  function printMsg(message: string = 'default message') {
    console.log(message);
  }

  // Rest parameter
  function addNumber(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumber(1, 2));
  console.log(addNumber(1, 2, 3, 4));
  console.log(addNumber(1, 2, 3, 4, 5, 0));
  
}