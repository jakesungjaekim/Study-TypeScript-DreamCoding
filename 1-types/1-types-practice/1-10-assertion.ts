{
 // Type Assertions 
 // 타입 단언은 타입스크립트가 타입을 추론할 수 없는 상황에서 타입을 정확하게 지정해주는 방법이다.


 function jsStrFunc(): any {
   return 'heelloo';
 }
  const result = jsStrFunc();
  result.length; // Error
  console.log((result as string).length); // OK
  console.log((<string>result).length); // OK

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // Warning

  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers();
  numbers.push(2); // Error
  numbers!.push(2); // OK
  

  const button = document.querySelector('class');
  button.nodeValue; // Error
  button!.nodeValue; // OK
  
}