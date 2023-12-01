//import {Component} from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";
import Pokemon from "../../models/pokemon";

const CardList = ({ pokemons }: { pokemons: Pokemon[] }) => {
  
  return (
    <div className="card-list">
      {pokemons.map((pokemon) => {
        //const {name,email,id} = monster;
        return <Card pokemon={pokemon} key={pokemon.id}/>;
      })}
    </div>
  );
};
/*
class CardList extends Component<any, any>{

    render() {
        console.log("render card list");
        const {monsters} = this.props;
        return <div className='card-list'>
            {monsters.map((monster:{ name: string, id: number,email:string }) =>{
                const {name,email,id} = monster;
                return (
                    <Card monster={monster}/>
                )
            })}
        </div>;
    }
}
*/

export default CardList;
