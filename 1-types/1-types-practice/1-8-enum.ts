{
  // enum
  // enum은 타입스크립트에서 새로운 타입을 만들 때 사용하는 키워드입니다.
  // enum 사용은 권장되지 않는다. 대신에 union 타입을 사용하는 대안이 있기 때문이다.

  
  // TS
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  console.log(Days.Tuesday);

  const day = Days.Saturday; // 5

  console.log(day);

  enum Shoes {
    Nike = '나이키',
    Puma = '퓨마',
    Adidas = '아디다스',
    Gucci = '구찌',
  }

  console.log(Shoes.Adidas)
  console.log(Shoes.Gucci)
}