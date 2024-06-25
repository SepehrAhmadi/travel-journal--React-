import Header from "./Header.jsx"
import Card from "./Card.jsx"
import CardData from "./CardData.jsx"

function App() {

  const cards = CardData.map( data => <Card 
                                          key={data.id}
                                          // title={data.title} 
                                          // location={data.location}
                                          // googleMaoUrl={data.googleMaoUrl}
                                          // startData={data.startData}
                                          // endData={data.endData}
                                          // description={data.description}
                                          // imageUrl={data.imageUrl}

                                          {...data}
                                      />)

  return( <>
            <Header />
            {cards}
          </>)
}

export default App
