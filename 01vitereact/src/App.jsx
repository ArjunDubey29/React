import Chai from './chai.jsx'

function App() {
  const username = "Arjun"
  return (
    //Called Fragment<></>
    // {username} -> known as expression (evaluated expression he likh skte waha aap)
    <> 
    <Chai />
    <h1>{username} is Good</h1>
    <p>{username} is a good boy</p>
    </>
  )
}

export default App
