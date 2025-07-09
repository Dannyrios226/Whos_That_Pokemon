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

  const [options, setOptions] = useState([])
  const [Score, setScore] = useState(0);
  let number = 0;

  useEffect(() => {
    getRandomPokemon();
    // fetchPokemon(pokemonId);
  }, []);

  async function fetchPokemon(num) {
    const fetchResponse = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + num
    );
    const result = await fetchResponse.json();

    console.log(result);
    let pokeInfo = {
      url: result.sprites.front_default,
      name: result.forms[0].name,
    };
    console.log(pokeInfo);
    return pokeInfo;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  async function getRandomPokemon() {
    const randomId =
      Math.floor(Math.random() * (highRange - lowRange + 1)) + lowRange;
    const randomIdWrong1 =
      Math.floor(Math.random(highRange - lowRange + 1)) + lowRange;
    const randomIdWrong2 =
      Math.floor(Math.random() * (highRange - lowRange + 1)) + lowRange;
    const randomIdWrong3 =
      Math.floor(Math.random() * (highRange - lowRange + 1)) + lowRange;
    setPokemonId(randomId);
    const correctPokeInfo = await fetchPokemon(randomId);
    setPokemonUrl(correctPokeInfo.url);
    setPokemonName(correctPokeInfo.name);
    console.log("correct", correctPokeInfo);

    const wrongPokemonInfo = await fetchPokemon(randomIdWrong1);
    const wrongPokemonInfo2 = await fetchPokemon(randomIdWrong2);
    const wrongPokemonInfo3 = await fetchPokemon(randomIdWrong3);
    // fetchPokemon(randomIdWrong3);

    setPokemonNameWrong1(wrongPokemonInfo.name);
    setPokemonNameWrong2(wrongPokemonInfo2.name);
    setPokemonNameWrong3(wrongPokemonInfo3.name);
  }

  console.log(pokemonName);

  return (
    //main container
    <Container
      sx={{
        gap: 5,
        display: "flex",
        border: "25px solid",
        color: "grey.800",
        borderColor: "#333",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to bottom, #FFCDD2, #E57373)",
        height: "auto",
        width: "auto",
      }}
    >
      {/* container2 */}
      <Container maxWidth="sm">
        <Typography
          sx={{
            display: "flex",
            fontSize: "30px",
            justifyContent: "center",
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
          color: "#D32F2F",
          "& > *": {
            border: "3px solid",
            color: "#333",
            borderColor: "#333",
            backgroundColor: "##DCDCDC ",
            width: "15vw",
            fontWeight: "bold",
          },
        }}
      >
        {/* item3A */}
        <button
          onClick={() => {
            setLowRange(1);
            setHighRange(151);
            alert("NOW SHOWING ONLY FIRST GENERATION POKEMON");
            getRandomPokemon();
          }}
        >
          <Box maxWidth="sm"> FIRST GEN</Box>
        </button>

        <button
          onClick={() => {
            setLowRange(152);
            setHighRange(251);
            alert("NOW SHOWING ONLY SECOND GENERATION POKEMON");
            getRandomPokemon();
          }}
        >
          <Box maxWidth="sm">SECOND GEN</Box>
        </button>

        <button
          onClick={() => {
            setLowRange(252);
            setHighRange(386);
            alert("NOW SHOWING ONLY THIRD GENERATION POKEMON");
            getRandomPokemon();
          }}
        >
          <Box maxWidth="sm">THIRD GEN</Box>
        </button>

        <button
          onClick={() => {
            setLowRange(387);
            setHighRange(493);
            alert("NOW SHOWING ONLY FOURTH GENERATION POKEMON");
            getRandomPokemon();
          }}
        >
          <Box maxWidth="sm">FOURTH GEN</Box>
        </button>
      </Box>

      {/* box4 */}
      <Box
        sx={{
          gap: 2,
          display: "flex",
          display: "flex",
          flexDirection: "row",
          mx: "auto",
          padding: 2,
          "& > *": {
            border: "4px solid",
            borderColor: "#333",
            backgroundColor: "#FAF3E0",
            borderColor: "##000000 ",
            width: "15vw",
            height: "60vh",
            backgroundColor: "#FFFF",
            padding: 2,
          },
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <img src={pokemonUrl} style={{ width: "100%", height: "auto" }} />
        </Box>
        <Box
          sx={{
            gap: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mx: "auto",
            "& > *": {
              border: "4px solid",
              color: "#333",
              borderColor: "##000000 ",
              background: "#E0E0E0",
              fontWeight: "bold",
              width: "12vw",
              height: "14vh",
            },
          }}
        >
          {shuffleArray([
            <button
              onClick={() => {
                getRandomPokemon();
                setScore((prev) => prev + 5);
              }}
            >
              <Container maxWidth="sm">{pokemonName}</Container>
            </button>,

            <button
              onClick={() => {
                getRandomPokemon();
                alert("WRONG ANSWER");
              }}
            >
              <Container maxWidth="sm">{pokemonWrongId1}</Container>
            </button>,

            <button
              onClick={() => {
                getRandomPokemon();
                alert("WRONG ANSWER");
              }}
            >
              <Container maxWidth="sm">{pokemonWrongId2}</Container>
            </button>,

            <button
              onClick={() => {
                getRandomPokemon();
                alert("WRONG ANSWER");
              }}
            >
              <Container maxWidth="sm">{pokemonWrongId3}</Container>
            </button>,
          ])}
        </Box>

        {/* item 3 */}
        <Box
          sx={{
            gap: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            mx: "auto",
            "& > *": {
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              border: "4px solid",
              color: "#333",
              borderColor: "##000000 ",
              background: "#E0E0E0",
              fontWeight: "bold",
              width: "12vw",
              height: "14vh",
            },
          }}
        >
          <Container maxWidth="sm">SCORE: {Score}</Container>
          <button
            onClick={() => {
              setScore(0);
            }}
          >
            <Container maxWidth="sm">RESET SCORE</Container>
          </button>

          {/* container 4Cc */}
          <button
            onClick={() => {
              setLowRange(1);
              setHighRange(1025);
              alert("NOW SHOWING ALL POKEMON");
              getRandomPokemon();
            }}
          >
            <Container maxWidth="sm"> SHOW ALL POKEMON</Container>
          </button>
        </Box>
      </Box>
    </Container>
  );
}
export default App;
