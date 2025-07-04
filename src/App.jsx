import { useState } from "react";
import "./App.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Container, Typography } from "@mui/material";
import { useEffect } from "react";

function App() {
  const [pokemonUrl, setPokemonUrl] = useState("");
  const [lowRange, setLowRange] = useState(1);
  const [highRange, setHighRange] = useState(1025);
  const [pokemonName, setPokemonName] = useState();
  const [pokemonId, setPokemonId] = useState(0);
  const [pokemonWrongId1, setPokemonNameWrong1] = useState(0);
  const [pokemonWrongId2, setPokemonNameWrong2] = useState(0);
  const [pokemonWrongId3, setPokemonNameWrong3] = useState(0);

  useEffect(() => {
    getRandomPokemon();
    // fetchPokemon(pokemonId);
  }, []);

  async function fetchPokemon(num) {
    const fetchResponse = await fetch("https://pokeapi.co/api/v2/pokemon/" + num);
    const result = await fetchResponse.json()

    console.log(result);
    let pokeInfo = {
      url: result.sprites.front_default,
      name: result.forms[0].name
    };
    
return pokeInfo

  }

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


  async function getRandomPokemon() {
    const randomId = Math.floor(Math.random() * highRange) + lowRange;
    const randomIdWrong1 = Math.floor(Math.random() * highRange) + lowRange;
    const randomIdWrong2 = Math.floor(Math.random() * highRange) + lowRange;
    const randomIdWrong3 = Math.floor(Math.random() * highRange) + lowRange;
    setPokemonId(randomId);
    const correctPokeInfo = await fetchPokemon(randomId);
    setPokemonUrl(correctPokeInfo.url)
    setPokemonName(correctPokeInfo.name)
    console.log("correct", correctPokeInfo)
    

        const wrongPokemonInfo = await fetchPokemon(randomIdWrong1);
        const wrongPokemonInfo2 = await fetchPokemon(randomIdWrong2);
        const wrongPokemonInfo3 = await fetchPokemon(randomIdWrong3);
    // fetchPokemon(randomIdWrong3);

    setPokemonNameWrong1(wrongPokemonInfo.name);
    setPokemonNameWrong2(wrongPokemonInfo2.name);
    setPokemonNameWrong3(wrongPokemonInfo3.name);


  }


  function ShowPokemonName() {}

  console.log(pokemonName);

  return (
    //main container
    <Container
      sx={{
        gap: 5,
        display: "flex",
        border: "25px solid",
        color: "grey.800",
        borderColor: "grey.300",
        display: "flex",
        flexDirection: "column",
        height: "auto",
        width: "auto",
      }}
    >
      {/* container2 */}
      <Container maxWidth="sm">
        <Typography
          sx={{
            fontSize: "30px",
          }}
        >
          WHO'S THAT POKEMON
        </Typography>
      </Container>
      {/* box3 */}
      <Box
        sx={{
          gap: 10,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-start",
          color: "grey.800",
          "& > *": {
            border: "3px solid",
            color: "grey.800",
            borderColor: "grey.300",
            width: "15vw",
          },
        }}
      >
        {/* item3A */}
        <Box maxWidth="sm">Gen1</Box>
        <Box maxWidth="sm">Gen2</Box>
        <Box maxWidth="sm">Gen3</Box>
        <Box maxWidth="sm">Gen4</Box>
      </Box>

      {/* box4 */}
      <Box
        sx={{
          gap: 2,
          display: "flex",
          display: "flex",
          flexDirection: "row",
          mx: "auto",
          "& > *": {
            border: "4px solid",
            color: "grey.800",
            borderColor: "grey.300",
            width: "15vw",
            height: "65vh",
          },
        }}
      >
        {/* item4A */}
        <Box
          sx={{
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          Box 1
          <img src={pokemonUrl} style={{ width: "100%", height: "auto" }} />
        </Box>

        {/* item4B */}
        <Box
          sx={{
            gap: 1,
            display: "flex",
            flexDirection: "column",
            mx: "auto",
            "& > *": {
              border: "4px solid",
              color: "grey.800",
              borderColor: "grey.300",
              width: "12vw",
              height: "14vh",
            },
          }}
        >
          Box 2{/* container4Ba */}
          { shuffleArray([
            <Container maxWidth="sm">{pokemonName}</Container>,
            <Container maxWidth="sm">{pokemonWrongId1}</Container>,
            <Container maxWidth="sm">{pokemonWrongId2}</Container>,
            <Container maxWidth="sm">{pokemonWrongId3}</Container>,
          ]) }
          
        </Box>

        {/* item 3 */}
        <Box
          sx={{
            gap: 5,
            display: "flex",
            justifyContent: "-moz-initial",
            flexDirection: "column",
            mx: "auto",
            "& > *": {
              border: "4px solid",
              color: "grey.800",
              borderColor: "grey.300",
              width: "12vw",
              height: "14vh",
            },
          }}
        >
          Box 3{/* container4Ca */}
          <Container maxWidth="sm"></Container>
          {/* container4Cb */}
          <Container maxWidth="sm"></Container>
          {/* container 4Cc */}
          <Container maxWidth="sm"></Container>
        </Box>
      </Box>
    </Container>
  );
}
export default App;

// <TextField
//   id="outlined-controlled"
//   label="Name"
//   value={""}
//   onChange={(event) => {
//     // empty for now
//   }}

// />
