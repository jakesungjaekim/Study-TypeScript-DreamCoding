{
  // Union Types: OR
  type Direction = 'left' | 'right' | 'up' | 'down';

  function moveDirection (direction: Direction) {
    console.log(direction);
  }

  moveDirection('left');
  moveDirection('right');
  moveDirection('up');
  moveDirection('down');
  // moveDirection('hello'); // Error

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;
  // const tile: TileSize = 44; // Error

  // function: login -> success, fail
type SuccessState = {
  response: {
    body: string;
  };
};

type FailState = {
  reason: string;
};

type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state)
  // success -> 🎉 body
  // fail -> 😭 reason

  function printLoginState(state: LoginState) {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}