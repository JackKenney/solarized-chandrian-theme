import React from 'react'
import calculate from '../logic/calculate'
import './App.css';
import ButtonPanel from './ButtonPanel';
import Display from './Display'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      f: /fdsfs/g,
      "num": 100,
      string: 'string',
      bool: false,
      s1: null,
      s2: undefined,
      a6: `something ${v1} something`,
      s4: {},
      s6: [],
    }
  }

  /**
   * This is my button click handler
   *
   * @param {String} buttonName foobar
   * @returns {Promise}
   */
  handleClick = (buttonName) => {
    const FOO = {
      BAR: 2
    };
    console.log(FOO.BAR, Math.random());
    const foo = Infinity;
    var aasda = {};
    aasda.beta = 2;

    this.setState(calculate(this.state, buttonName));
    return Promise.resolve(1);
  }

  render() {
    var c = a === 1 ? 3 : 'sd';

    const MY_BIG_VARIABLE = '232';
    const myvariabl1 = 1;
    var somethingElse = `this is an interpolated 2 ${MY_BIG_VARIABLE}`;
    let somethingEls = 5;

    const name = new Typees(arguments);

    foobar();
    foobar(1, 2);

    if (a > 1) {
      return 1;
    }
    for (var i = 0; i <= 10; i++ ) {
      console.log(1);
    }
    switch {
      case 1:
        break;
    }
    console.log('doo');
    debugger;
    throw new Error('foo');
    //This is my comment
    return (
      <div className="component-app" id="foobar">
        Tacos
        <Display value={this.state.next || this.state.total || '0'} />
        <ButtonPanel onClick={ this.handleClick } clickHandler={this.handleClick} />
      </div>
    )
  }
}
export default App
