/*
  eslint-disable react/prefer-stateless-function, react/jsx-boolean-value,
  no-undef, jsx-a11y/label-has-for
*/

window.helpers = (function () {

  function func() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var rnd = Math.random() * 16 | 0, v = c === 'x' ? rnd : (rnd & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  var UUID = func();

  function newTimer(attrs = {}) {
    const timer = {
      title: attrs.title || 'Timer',
      project: attrs.project || 'Project',
      id: UUID,
      elapsed: 0,
    };
    return timer;
  }

  // const findById = (array, id) => {
  //   array.forEach((element) => {
  //     if (element.id === id) {
  //       return element
  //     }
  //   });
  // }

  function findById(array, id, callback) {
    array.forEach(el => {
      if (el.id === id) {
        return callback(el);
      }
    });
  }


  // const findUserById = (arr, id) => {
  //   arr.forEach(user => {
  //     return user.id === id;
  //   })

  // }

  function renderElapsedString(elapsed, runningSince) {
    let totalElapsed = elapsed;
    if (runningSince) {
      totalElapsed += Date.now() - runningSince;
    }
    return millisecondsToHuman(totalElapsed);
  }

  function millisecondsToHuman(ms) {
    const seconds = Math.floor((ms / 1000) % 60);
    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    const humanized = [
      pad(hours.toString(), 2),
      pad(minutes.toString(), 2),
      pad(seconds.toString(), 2),
    ].join(':');

    return humanized;
  }

  function pad(numberString, size) {
    let padded = numberString;
    while (padded.length < size) padded = `0${padded}`;
    return padded;
  }
  let result = millisecondsToHuman();
  let result1 = newTimer();
  let result2 = findById();
  let result3 = renderElapsedString();


}());
