
import {useState} from 'react'

const HandleClick = () => {

  const[name,setName] = useState('iman')
  const [age, setAge] = useState(25)

   const newSetName = () => {
    setName('chamileva')
    setAge(30)
   }

 

   return (

    <>
          {/* click et afficher */}
          {/* <button onClick={newSetName}>click</button>
          {name && 
          <p>Iman</p>} */}

          <p>je suis {name} et j'ai {age}</p>
          <button onClick={newSetName}>click</button>
    </>

   )
}


export default HandleClick