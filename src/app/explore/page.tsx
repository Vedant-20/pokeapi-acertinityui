'use client'
import Image from "next/image";
import Link from 'next/link'
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import  Pokedex  from 'pokedex-promise-v2'
import { useEffect, useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Meteors } from "@/components/ui/meteors";

interface PokemonType {
    slot: number;
    type: {
        name: string;
        url: string;
    };
}

interface Pokemon {
    name: string;
    id:number;
    sprites:any;
    

    weight:number;
    types:PokemonType[];
    base_experience:any;
    
    
    
    
    
    
}
function page() {

    const [pokemons, setPokemons]=useState<Pokemon[]>([])
    const pokedex=new Pokedex()
    


    useEffect(()=>{
        pokedex.getPokemonByName(['pikachu','bulbasaur','charizard','squirtle','dragonite','ditto','raichu','charmander','squirtle','ivysaur','venusaur','charmeleon','blastoise','pidgeot','spearow','ekans','arbok','greninja','unown','wobbuffet','steelix','snubbull','granbull','qwilfish','scizor','shuckle','heracross','snorlax','kingler','gengar','krookodile','dracovish','goodra','infernape','sandslash','nidoking','ninetales','jigglypuff','diglett','psyduck','primeape','growlithe','poliwrath','kadabra','tentacruel','magnemite','gastly','hypno','voltorb','electrode','hitmonlee','rhydon'])
        .then(res=>setPokemons(res))
        .catch(err=>console.log(err))
    },[])

    

    console.log(pokemons)

  return (
    
    <div className="min-h-screen py-12 pt-36">
        <h1 className="text-3xl md:text-7xl text-center font-sans font-bold mb-8 blue-text-gradient">Explore All Pokemons</h1>
        <div className="flex flex-wrap lg:gap-8 justify-center">
            {pokemons.map((pokemon)=>(
                <Link href={`/details?name=${pokemon.name}`}>
                <CardContainer key={pokemon.id} className="inter-var mybg p-5 rounded-2xl">
                <CardBody className="bg-transparent relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold orange-text-gradient text-center "
                  >
                    
                    {pokemon.name.toUpperCase()}
                    
                    
                    
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="green-text-gradient text-sm max-w-sm mt-2 "
                  >
                    Weight: {pokemon.weight}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    rotateX={20}
                    rotateZ={-10}
                    className="w-full mt-4"
                  >
                    <Image
                      src={pokemon.sprites.other.home.front_default}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                      alt="thumbnail"
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    {pokemon.types.map((e)=>(
                        <CardItem
                        translateZ={20}
                        translateX={-40}
                        as="button"
                        className="px-4 py-2 rounded-xl text-sm font-bold pink-text-gradient"
                      >
                       Type: {e.type.name}
                      </CardItem>
                        
                    ))
                        
                    
                  
                    }
                    <CardItem
                    translateZ={20}
                    translateX={40}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black blue-text-gradient  text-xs font-bold"
                  >
                    Experience: {pokemon.base_experience}
                  </CardItem>
                      
                    
                    
                  </div>
                </CardBody>
                <Meteors/>
                
              </CardContainer>
              </Link>
            ))}
            
        </div>
        {/* <BackgroundBeams/> */}
        
    </div>
    
    
    
    
  )
}

export default page




