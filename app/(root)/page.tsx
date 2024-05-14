import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/ui/HeaderBox'
import React from 'react'

const Home = () => {
  const loggedIn ={firstName :'Nithish',lastname:'KMS',email:'nithish031105@gmail.com'}
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
        recent transactions
      </div>

      <RightSidebar 
      user={loggedIn}
      transactions={[]}
      banks={[{ currentBalance:123.50},{currentBalance:500}]}
      ></RightSidebar>
   
    </section>

  )
}

export default Home
