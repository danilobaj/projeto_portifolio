import { useState } from 'react'
import './App.css'

import TesteGIF from './assets/gif-teste.gif'
import GitHubLogo from './assets/github-logo.png'
import LinkedinLogo from './assets/lkd-logo.png'

import {FlexBox} from './components/FlexBox/FlexBox.styled'

function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <section className='container'>
        <div className='divHeader'>
          <p className='dev'>Dev</p>
          <div className='titulo'>Danilo Freitas</div>
        </div>
        <div className='boxSocialMedia'>
          <div className='cardLogo'>
            <img src={GitHubLogo} className='logo' srcset="" />
          </div>

          <div className='cardLogo'>
            <img src={LinkedinLogo} className='logo' srcset="" />
          </div>
        </div>
        <div className="divBody">
          <div className="boxProjects btn1">
            Projects
            <img src={TesteGIF} alt="" srcset="" className='imgGif' />
          </div>
          <div className="boxMe">
            <div className="boxWorkAboutMe">
              <div className='boxWork btn'>Work</div>
              <div className='boxAboutMe btn'>About me</div>
            </div>
            <div className="contact btn">
              Contact Us

            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
