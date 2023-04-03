{
  // Type Inference
  // 타입을 정확하게 명시하는 것이 좋기 때문에, 타입 추론은 권장하지 않는다.
  // 하지만, 타입 추론을 사용하면 코드를 더 간결하게 작성할 수 있다.
  

  let text = 'hello';
  text = 'hi';
  // text = 1; // Error

  function print(message = 'hello') {
    console.log(message);
  }

  print('hello');
  // print(1); // Error

  function add(x: number, y: number) {
    return x + y;
  }
}