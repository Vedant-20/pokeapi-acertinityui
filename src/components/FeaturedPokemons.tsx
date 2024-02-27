"use client"

import Link from 'next/link'
import  Pokedex  from 'pokedex-promise-v2'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/moving-border'
import { BackgroundGradient } from './ui/background-gradient'


interface Pokemon {
    name: string;
    id:number;
    sprites:any;
    
    
}

function FeaturedPokemons() {

    const [popularPokemon, setPopularPokemon]=useState<Pokemon[]>([])
    const pokedex=new Pokedex()

    

    useEffect(()=>{
        pokedex.getPokemonByName(['pikachu','bulbasaur','charizard','squirtle','dragonite','ditto'])
        .then(res=>setPopularPokemon(res))
        .catch(err=>console.log(err))
    },[])

    console.log(popularPokemon)
  return (
    <div className='py-12 bg-gray-900'>
        <div>
            <div className="text-center">
                <h2 className='text-base text-teal-500 font-semibold tracking-wide uppercase'>Popular Pokemons</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight orange-text-gradient sm:text-4xl'>Power of the Most Dangerous Pokemons</p>
            </div>
        </div>
        <div className='mt-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {popularPokemon.map((pokemon)=>(
                    <div key={pokemon.id} className='flex justify-center'>
                        <BackgroundGradient className='flex flex-col rounded-[22px] bg-black/80 dark:bg-zinc-900 overflow-hidden h-full max-w-sm'>
                            <Link href={`/details/${pokemon.id}`}>
                            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                <img className='w-[200px] h-[250px]' src={pokemon.sprites.front_default
} alt={pokemon.name} />
                                
                                <p className='text-3xl pink-text-gradient font-bold'>{pokemon.name}</p>
                                
                            </div>

                            </Link>
                            
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className='mt-20 text-center'>
            <Link href={'/explore'}>
                <Button className="bg-transparent text-lg font-bold dark:bg-black orange-text-gradient dark:text-white border-neutral-200 dark:border-slate-800" borderRadius="1.75rem">View All Pokemons ☠</Button>
            </Link>
        </div>
    </div>
  )
}

export default FeaturedPokemons