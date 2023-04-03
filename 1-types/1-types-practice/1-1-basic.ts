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

  // 기본타입 #2 

  // unknown : 어떤 타입이 될지 모르는 상태, 타입스크립트에서는 unknown을 잘 사용하지 않습니다.
  let notSure: unknown = 0;
  notSure = 'jake';
  notSure = true;

  // any : 어떤 타입이든 사용할 수 있는 상태, 타입스크립트에서는 any를 잘 사용하지 않습니다.
  let anything: any = 0;
  anything = 'hello';

  // void : 함수에서 아무것도 리턴하지 않는 상태
  function print(): void {
    console.log('hello');
    return;
  }

  // never : 절대 리턴하지 않는 상태
  function throwError(message: string): never {
    //case1
    // message -> server (log)
    throw new Error(message);

    //case2
    while (true) { 
      // ????
    }
    
    // case3
    // return
  }

  // object : object타입은 원시타입이 아닌 것들을 할당할 수 있습니다.
  // object타입또한 잘 사용하지 않고, 사용할 경우 구체적으로 명시하는 것이 좋습니다.
  let obj: object = [1, 4 ,5];
  function acceptSomeObject(obj: object) {}

  acceptSomeObject({name: 'jake'});
  acceptSomeObject({animal: 'dog'});

}