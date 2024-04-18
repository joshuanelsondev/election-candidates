/* eslint-disable react/prop-types */
//Card.jsx


const Card = ({ candidate }) => {
  return (
    <div>
      <h3>Name: {candidate.name}</h3>
      <p>Party: {candidate.party}</p>
      <p>State: {candidate.state}</p>
    </div>
  )
}

export default Card