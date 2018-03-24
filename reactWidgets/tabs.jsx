import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selected: 0};
  }

  changeSelected(idx) {
    this.setState({selected: idx});
    console.log("Clicked");
  }

  render() {

    return (
      <div  className='tabs'>
        <ul className='dracos'>
          {
            this.props.dracos.map((draco, idx) => {
            return <li key={idx} onClick={() => this.changeSelected(idx)}>{draco.title}</li>;
            })
          }
        </ul>
        <article className='draco-content'>
          <img src={this.props.dracos[this.state.selected].img}></img>
          {this.props.dracos[this.state.selected].content}
        </article>
      </div>
    );
  }
}

export default Tabs;
