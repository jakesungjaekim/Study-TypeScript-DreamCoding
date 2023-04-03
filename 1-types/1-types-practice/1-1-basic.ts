{
  // JS에서 변수를 선언할 때는, let, const사용합니다. 
  //  Primitive: number, string, boolean, bigint (*숫자타입과 비슷하지만 더 큰 숫자의 범위를 할당하는*), symbol, null, undefined
  //  Object: function, array.....

  // number
  const num: number  = 77 ; // number타입에 string을 할당하면 에러가 발생합니다.

  // string
  const str: string = 'hello'

  // boolean
  const bool: boolean = true;

  // undefined : 값이 할당되지 않은 상태
  let name: undefined; // 이렇게 작성하지 않습니다.
  let age: number | undefined; // 이렇게 작성합니다.

  age = undefined;
  age = 11;

  function findNumber(): number | undefined {
    return undefined;
  }

  // null : 값이 비어있는 상태 (개발자가 의도적으로 비워둔 상태)
  let person: null // 이렇게 작성하지 않습니다.
  let person2: string | null; // 이렇게 작성합니다.

  person2 = null;
  person2 = 'Jake';
}