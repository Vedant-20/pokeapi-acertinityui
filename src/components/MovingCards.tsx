'use client'

import React, { useEffect, useState } from 'react'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import  Pokedex  from 'pokedex-promise-v2'

interface Pokemon {
    name: string;
    id:number;
    sprites:any;
        
    
}

function MovingCards() {

    const [pokemon,setPokemon]=useState<Pokemon[]>([])
    const pokedex=new Pokedex()

    

    useEffect(()=>{
        pokedex.getPokemonByName(['greninja','unown','wobbuffet','steelix','snubbull','granbull','qwilfish','scizor','shuckle','heracross','snorlax','raichu','kingler','gengar','krookodile','dracovish','goodra','infernape'])
        .then(res=>setPokemon(res))
        .catch(err=>console.log(err))
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    

    console.log()

  return (
    <div className='h-[40rem] w-full bg-grid-white/[0.2] relative flex flex-col justify-center items-center overflow-hidden'>
        <h1 className='text-7xl orange-text-gradient font-bold text-center'>Explore Infinite Pokemons</h1>
        <div className='flex justify-center mt-8 w-full overflow-hidden px-4 sm:px-6 lg:px-8'>
            <div className='w-full max-w-6xl'>
            <InfiniteMovingCards
                items={pokemon}
                direction="right"
                speed="fast"
            />
            </div>
        </div>
    </div>
  )
}

export default MovingCards