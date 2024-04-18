// List.jsx
import Card from './Card';

const List = () => {
    const candidates = [
      {
        id: '99cdceab-10a9-416b-841c-e07ba0fd19fc',
        name: "William Cotter",
        age: 45,
        party: 'Democratic',
        state: 'NJ'
      }, 
      {
        id: '11b9858c-6206-4837-8b11-ffd075183242',
        name: 'Rizel Jackson',
        age: '38',
        party: 'Independent',
        state: 'NY' 
      }, 
      {
        id: 'c4a2b5a8-3d9a-445b-9a4b-eb2f144efe8f',
        name: 'Tarry LaCraig',
        age: '50',
        party: 'Republican',
        state: 'SC' 
      }, 
      
    ];

  return (
    <div>
        <h2>List</h2>
        {candidates.map(candidate => {
          return (
            <Card key={candidate.id} candidate={candidate}/>
          )
        })}
    </div>
  )
}

export default List