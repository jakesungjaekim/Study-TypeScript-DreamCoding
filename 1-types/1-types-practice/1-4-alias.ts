{
  // Type Aliases

  type Text = string;

  const name: Text = 'Jake';
  const address: Text = 'Korea';

  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'Jake',
    age: 12,
  };

  // String Literal Types

  type Name = 'name';
  let JakeName: Name;
  JakeName = 'name';
  // JakeName = 'age'; // Error
  

} 