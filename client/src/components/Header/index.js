import React from "react";

import Score from '../Score';
import Boton from '../Button';
// import Counter from '../Counter';

const Header = (props) => {

  const {title, counter} = props;

  return (

    <header className="header">
      <div className="header-container">
        <div className="title">
          <h4>{title}</h4>
          <h4>Paper</h4>
          <h4>Scissors</h4>
          <h4>Lizard</h4>
          <h4>Spock</h4>
        </div>

        <div className="score">

          <Score score = "Score" />

          <div className="counter-number">
            <h2>{counter}</h2>
            {/* <Boton /> */}
          </div>

          
        </div>
      </div>
    </header>
  );
};



// class Header extends Component {

//   state = {
//     nombre: '',
//     apellido: ''
//   }

//   render() {
//     return (
//       <div>
//         Header
//       </div>
//     );
//   }
// }

export default Header;
