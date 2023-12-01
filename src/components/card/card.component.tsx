import Pokemon from '../../models/pokemon';
import './card.styles.css';

const Card = ({pokemon}:{pokemon:Pokemon})=>{
    const {id, name, imageUrl} = pokemon;
    return (

        <div className='card-container' key={id}>
            <img alt={`pokemon ${name}`}
                 src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}/>
            <h2>{name}</h2>
            <p>{id}</p>
        </div>
    );
}
/*class Card extends Component<any, any> {

    render() {
        const {id, name, email} = this.props.monster;
        return (

            <div className='card-container' key={id}>
                <img alt={`monster ${name}`}
                     src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        );
    }
}*/

export default Card;
