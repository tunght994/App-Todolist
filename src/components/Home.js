import { Add, HelpOutline } from '@mui/icons-material'
import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const Home = () => {
    return (
        <div className='home'>
            <div className="home-left">
                <div className="home-left-title">
                    <h1>Welcome, Hothanhtung12</h1>
                </div>
                <div className="home-left-heading">
                    <div className="home-left-content">
                        <div className="home-left-content-title">
                            <h1>0</h1>
                            <span>Requests for you</span>
                        </div>
                        <div className="underline active"></div>
                    </div>
                    <div className="home-left-content">
                        <div className="home-left-content-title">
                            <h1>0</h1>
                            <span>Requests You've Sent</span>
                        </div>
                        <div className="underline right"></div>
                    </div>
                </div>
            </div>
            <div className="home-right">
                <div className=''>
                    <div className="home-right-title">
                        <button className='home-right-add'>
                            <Add className='home-right-add-icon' />
                            <Link to='/add'>
                                Create
                            </Link>
                        </button>
                        <Link className="home-right-feedback" to='/s'>
                            <HelpOutline className='home-right-feedback-icon' />
                        </Link>
                    </div>
                    <div className="home-right-content ">
                        <div className="home-right-content-title">
                            <h1>3</h1>
                            <span>Suggested for you</span>
                        </div>
                        <div className="underline active"></div>
                    </div>
                </div>
                <div className="home-right-card">
                    <Card />
                    <Card />
                    <Card />

                </div>
            </div>
        </div>
    )
}

export default Home
