{
  // function: login -> success, fail
type SuccessState = {
  result: 'sucess'

  response: {
    body: string;
  };
};

type FailState = {
  result: 'fail'

  reason: string;
};

type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'sucess',

      response: {
        body: 'logged in!',
      },
    };
  }

  // printLoginState(state)
  // success -> 🎉 body
  // fail -> 😭 reason

  function printLoginState(state: LoginState) {
    state.result // success or fail


    if (state.result === 'sucess') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
}

}