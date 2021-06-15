import React, { useState, useEffect } from 'react';
import APICall from '../components/apicall';
import axios from 'axios';


export default function App({ selectedID }) {
    const [pokemonName, setPokemonName] = useState("");
    const [pokemonImgURL, setPokemonImgURL] = useState("");
    const [pokemonFlavourText, setPokemonFlavourText] = useState("");
    const [pokemonType, setPokemonType] = useState([]);
  
    const fetchPokemonFlavourText = async (selectedID) => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon-species/${selectedID}`
        );
        //console.log(res); 
        for (var i = 0; res.data.flavor_text_entries.length - 1; i++) {
            if(res.data.flavor_text_entries[i].language.name === "en") {
                setPokemonFlavourText(res.data.flavor_text_entries[i].flavor_text.replace("\f", " "));
                break;
            }       
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    const fetchPokemonData = async (selectedID) => {
      try {
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${selectedID}`
        );
        //console.log(res);
        setPokemonName(res.data.name);
        setPokemonImgURL(res.data.sprites.front_default);
        setPokemonType(       
            res.data.types.map ((type, index) => 
                type.type.name + " "
            )
        );

      } catch (err) {
        console.log(err);
      }
    };
  
    useEffect(() => {
      fetchPokemonFlavourText(selectedID);
      fetchPokemonData(selectedID);
    }, [selectedID]);
  
    return (
        <>
        <APICall> 
            <APICall.Pane>
                <APICall.Picture src={pokemonImgURL} alt={pokemonName} />
                <APICall.Text>
                    Name: {pokemonName} <br />
                    Type(s): {pokemonType}<br /><br />
                    {pokemonFlavourText}<br />
                </APICall.Text>
           </APICall.Pane>



        </APICall>
        </>
    );
  }
