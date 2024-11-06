import { useState } from 'react'
import './App.css'

function App() {
  const [team, setTeam] = useState ([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);
  const [zombieFighters, setzombieFighters] = useState ([
    {
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://via.placeholder.com/150/92c952',
    },
    {
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://via.placeholder.com/150/771796',
    },
    {
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://via.placeholder.com/150/24f355',
    },
    {
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/d32776',
    },
    {
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://via.placeholder.com/150/1ee8a4',
    },
    {
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://via.placeholder.com/150/66b7d2',
    },
    {
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://via.placeholder.com/150/56acb2',
    },
    {
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://via.placeholder.com/150/8985dc',
    },
    {
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://via.placeholder.com/150/392537',
    },
    {
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://via.placeholder.com/150/602b9e',
    },
  ]);

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log("Not enough money");
      return
    }
    const updatedTeam = [...team, fighter];
    setTeam (updatedTeam);
    setMoney ((prevMoney) => prevMoney - fighter.price);
    sumStrength(updatedTeam);
    sumAgility(updatedTeam);
  }

  const handleRemoveFighter = (fighter) => {
    const updatedTeam = team.filter(member => member.name !== fighter.name);
    setTeam (updatedTeam);
    setMoney ((prevMoney) => prevMoney + fighter.price);
    sumStrength(updatedTeam);
    sumAgility(updatedTeam);
  }

  const sumStrength = (currentTeam)=> {
   const total = currentTeam.reduce((acc, member) => acc + member.strength, 0);
    setTotalStrength(total);
  };

  const sumAgility = (currentTeam) => {
    const total = currentTeam.reduce((acc, member) => acc + member.agility, 0);
    setTotalAgility(total);
  }
  return (
    <>
      <h1>Zombie Fighters</h1>
      <div className='teamStats'>
        <div>Money: {money} </div>
        <div>Team Strength:{totalStrength} </div>
        <div>Team Agility: {totalAgility} </div>
        <div>Team:
          {team.length === 0 ? ( <p>Pick some team members!</p>) : (
            <ul>
              {team.map((member, index) => (
                <li key={index}>
                  <img src={member.img} alt ={member.name}/>
                  <div>{member.name}</div>
                  <div>Price: {member.price}</div>
                  <div>Strength: {member.strength}</div>
                  <div>Agility: {member.agility}</div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      <ul>
        {zombieFighters.map((zombieFighter, index) => (
          <li key={index}> 
            <img src={zombieFighter.img} alt={zombieFighter.name}/>
            <div>{zombieFighter.name}</div>
            <div>Price: {zombieFighter.price}</div>
            <div>Strength: {zombieFighter.strength}</div>
            <div>Agility: {zombieFighter.agility}</div>
            <button onClick={()=> handleAddFighter(zombieFighter)}>Add</button> 
          </li>
        ))}
      </ul>
    </>
  )
}
export default App