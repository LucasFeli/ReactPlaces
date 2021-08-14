const List = ({places}) => {
    return ( 
        <>
        {places.map((city) =>{
            const{id,place,date,image} = city;
            return <article key={id} className="cities">
                <img src={image} atl={place} width="800" height="400"/>
                <div>
                    <h4>{place}</h4>
                    <p>{date}</p>
                </div>
            </article>
        })}
        </>
     );
}
 
export default List;
