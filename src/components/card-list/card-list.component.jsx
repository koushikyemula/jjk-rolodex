import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({monsters}) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return  <Card monster = {monster} />
        })}
    </div>
)


export default CardList;

// {filteredMonsters.map((monster) => {
//     return (
//     <div key={monster.id}> 
//     <h1>{monster.name}</h1>
//     </div>
//     )
//   })}
