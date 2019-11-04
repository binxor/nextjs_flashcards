import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'
import Card from '../components/card'
import Button from '../components/button'
import data from '../data/flashcardData.json'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clickCounter: 0, cardData: data[Math.floor(Math.random()*6)] }
    this.shuffleCard = this.shuffleCard.bind(this)
  }

  shuffleCard() {
    this.setState({ clickCounter: this.state.clickCounter + 1, cardData: data[Math.floor(Math.random()*6)] })
  }

  render() {
    return <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Nav />
      
      <div className='hero'>
        <h1 className='title'>Learn It!</h1>
        <p className='description'>
          Click the card to see the answer. {this.state.clickCounter}
        </p>
        <div className='row'>
          <Button label='Next' onClick={this.shuffleCard}></Button>
        </div>
        <div className='row'>
          <Card id={this.state.clickCounter} data={this.state.cardData} />
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 20px auto 30px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
      `}</style>
    </div>
  }
}

export default Home
