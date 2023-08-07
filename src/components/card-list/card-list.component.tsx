import { Monster } from "../../App";
import Card from "../card/card.component";
import "./card-list.styles.css";

type CardListProps = {
    monsters: Monster[];
}

const CardList = ({monsters}: CardListProps) => (
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
