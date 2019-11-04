import React from 'react'

class CardClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showFront: true }
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillReceiveProps() {
    this.setState( { showFront: true })
  }

  handleClick() {
    this.setState( { showFront: !this.state.showFront })
  }

  render() {
    let content;
    if(!this.state.showFront) {
      content =  this.props.data.method
    } else {
      content = ''
    }
    return <>
      <div className='card' onClick={this.handleClick}>
        <h3>{this.props.data.scheme} &rarr;</h3>
        <p><div className='content'>{content}</div></p>
        <p>{this.props.data.spec}</p>
      </div>
      <style jsx>{`
      .card {
        padding: 18px 18px 24px;
        width: 75%;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
        cursor: pointer;
      }
      .card h3 {
        margin: 0;
        color: #067df7;
        font-size: 30px;
      }
      .card p {
        margin: 0;
        padding: 12px 0 0;
        font-size: 20px;
        color: #333;
      }
      .card * .content {
        height: 120px;
      }
    `}</style>
    </>
  }
}

export default CardClass