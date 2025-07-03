import { useState } from 'react'
import './App.css'
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import { useEffect } from "react";

function App() {

const [pokemonUrl, setPokemonUrl] = useState("");
const [lowRange, setLowRange] = useState(1);
const [highRange, setHighRange] = useState(1025);
const [pokemonId, setPokemonId] = useState(() => {
      return Math.floor(Math.random() * (highRange - lowRange + 1)) + lowRange;
});
  
   useEffect(() => {
      // getRandomPokemon();
      fetchPokemon(pokemonId);
    }, [pokemonId]) ;


function fetchPokemon(pokemonId){
fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
  .then((response) => response.json())
  .then((result) => {
      console.log(result)
      setPokemonUrl(result.sprites.front_default)
  })
  .catch((error) => console.error(error));


}

function getRandomPokemon(){
      const randomId = Math.floor(Math.random() * highRange) + lowRange;
      setPokemonId(randomId)
      fetchPokemon(randomId)
            
  }




  return (
    //main container
<Container
sx = {{
  gap: 5,
  display: 'flex' , 
  border: '4px solid',
  color: 'grey.800',
  borderColor: 'grey.300',
  display: 'flex', 
  flexDirection: "column",
  height: "90vh",
  width: "100vw",
 
}}>

      {/* container2 */}
<Container maxWidth="sm">
  <Typography sx = {{
    fontSize: '30px'
  }}>
    WHO'S THAT POKEMON
    </Typography>

</Container>
      {/* box3 */}
<Box  sx={{  
  gap: 10,
  display: 'flex' , 
  flexDirection: "row",
  justifyContent: "center", 
  alignItems: "flex-start",
  //height: "10h",
 // width: "100vw",
 // border: '3px solid',
  color: 'grey.800',
  //borderColor: 'grey.300',
  '& > *': {
        border: '3px solid',
            color: 'grey.800',
            borderColor: 'grey.300',
            width: "15vw"
  }
  
  }}>

      {/* item3A */}
        <Box maxWidth= "sm">Gen1</Box>
        <Box maxWidth= "sm">Gen2</Box>
        <Box maxWidth= "sm">Gen3</Box>
        <Box maxWidth= "sm">Gen4</Box>

</Box>

      {/* box4 */}
<Box 
sx = {{
  gap: 2,
  display: 'flex' , 
  display: 'flex' , 
  flexDirection: "row",
  mx: 'auto',
'& > *': {
  border: '4px solid',
  color: 'grey.800',
  borderColor: 'grey.300',
  width: "25vw",
  height: "65vh"
}
}}
>
      {/* item4A */}
<Box sx = {{
      alignItems: 'center',
      overflow: 'hidden'
}}
>
      Box 1
      <img
        src={pokemonUrl}
    style={{ width: '100%', height: 'auto' }}
  />
      </Box>

      {/* item4B */}
<Box sx = {{
  gap: 1,
  display: 'flex' ,
  flexDirection: "column",
  mx: 'auto',
'& > *': {
  border: '4px solid',
  color: 'grey.800',
  borderColor: 'grey.300',
  width: "22vw",
  height: "14vh"
}
}}
>Box 2
   
      {/* container4Ba */} 
<Container maxWidth="sm">
</Container>

      {/* container4Bb */} 
<Container maxWidth="sm">
</Container>

      {/* container4Bc */} 
<Container maxWidth="sm">
</Container>

      {/* container4Bd */} 
<Container maxWidth="sm">
</Container>

</Box>

      {/* item 3 */}
<Box
sx = {{
  gap: 5,
  display: 'flex' ,
  justifyContent: '-moz-initial',
  flexDirection: "column",
  mx: 'auto',
'& > *': {
  border: '4px solid',
  color: 'grey.800',
  borderColor: 'grey.300',
  width: "22vw",
  height: "14vh"
}
}}
>Box 3

      {/* container4Ca */}
  <Container maxWidth="sm">
</Container>
      {/* container4Cb */}
<Container maxWidth="sm">
</Container>
      {/* container 4Cc */}
<Container maxWidth="sm">
</Container>


</Box>
  
</Box>

</Container>
  )
}

export default App



// <TextField
//   id="outlined-controlled"
//   label="Name"
//   value={""}
//   onChange={(event) => {
//     // empty for now
//   }}
  
// />