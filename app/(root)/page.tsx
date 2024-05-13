import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn ={firstName :'Nithish'}
  return (
    <section className='home'>
      <div className="home-content">
        <header className="home-header">
          <HeaderBox 
          type='greeting' 
          title='Welcome' 
          user={loggedIn?.firstName||'Guest'}
          subtext ="Access and Manage your account and transactions" 
          ></HeaderBox>

          <TotalBalanceBox  
          accounts={[]}
          totalBanks={1}
          totalCurrentBalance={1250.36}
          >

          </TotalBalanceBox>
        </header>
      </div>
    </section>
  )
}

export default Home
