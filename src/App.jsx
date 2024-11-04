import { useState } from "react";

const App = () => {
  const [team, setTeam] = ([]) /* 1. Create a new state variable named team and set the initial state to an empty array []. */
  const [money, setMoney] = useState(100) /* 2. Create a new state variable named money and set the initial state to 100. */
  const [zombieFighters, setZombieFighters] = [ /* 3. Create a new state variable named zombieFighters and set the initial state to the following array of objects: */
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
  ];

  /* 6. Create a function named handleAddFighter. This function will be triggered when you click the Add button for any character in the zombieFighters list. */
  const handleAddFighter = (fighter) => {
    if(money < fighter.price) {
      console.log("Not enough money") /* 6.3 Before adding a character to the team, check if you have enough money to afford them. If your money is less than the character’s price, you shouldn’t be able to add them. In such cases, log a message to the console such as "Not enough money". */
      return
    }
    const updatedTeam = [...team, fighter]
    setTeam(updatedTeam)
    setMoney((prevMoney) => prevMoney - fighter.price) /* 6.2 Each character comes with a price. Upon adding a character to your team, subtract the character’s price from your current money value. Think of it as spending money to recruit a team member. */
    sumStrength(updatedTeam)
  }

  const sumStrength = (currentTeam)=> {
    const total = currentTeam.reduce((acc, member) => acc + member.strength, 0)
    setTotalStrength(total)
  }
  
  return (
    <>
      <h1>Hello world!</h1>
      </>
  );
}
<>
  <h1>Zombie Fighters</h1> {/* 4. Display the list of zombieFighters by mapping the array into the UI of App.jsx. (We’ve provided some helpful CSS assuming you use a ul and lis) */}
  <div>
    <ul>
      <li>Money: {money}</li> {/* 5. Display the current value of money in the UI. */}
      <li>Team Strength: {totalStrength} </li>
      <li>Team Agility: </li>
      <li>Team: {team.length === 0 ? (<p>Pick some team members!</p>)
      : (
        <ul>
          {team.map((member, index) => (
            <li key={index}>
              <img src={member.img} alt={member.name} />
              <div>{member.name}</div>
              <div>Price: {member.price}</div>
              <div>Strength: {member.strength}</div>
              <div>Agility: {member.agility}</div>
            </li>
          ))}
        </ul>
      )}
      </li>
    </ul>
  </div>
    <ul>
    {/* 4.1 Each character should have an image, name, price, strength, and agility. */}
    {zombieFighters.map((zombieFighter, index) => (
      <li key={index}> 
        <img src={zombieFighter.img} alt={zombieFighter.name}/>
        <div>{zombieFighter.name}</div>
        <div>Price: {zombieFighter.price}</div>
        <div>Strength: {zombieFighter.strength}</div>
        <div>Agility: {zombieFighter.agility}</div>
        <button onClick={()=> handleAddFighter()}>Add</button> {/* 4.2 Each character’s UI should also have an Add button to add them to your team. 6.1 When you click Add on a character, this function should add the selected character’s object to the team state array. This is how you build your team. */}
      </li>
    ))}
  </ul>
</>

export default App

