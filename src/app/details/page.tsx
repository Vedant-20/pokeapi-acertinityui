'use client'
import { BackgroundBeams } from '@/components/ui/background-beams';
import { Meteors } from '@/components/ui/meteors';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation'

import  Pokedex  from 'pokedex-promise-v2'
import { useEffect, useState } from 'react';

type QueryParam = string;

interface PokemonAbility {
    ability: {
        name: string;
        url: string;
    };
}

interface PokeDetails{
    abilities: PokemonAbility[];
    base_experience: any;
    
    
    
    height: number;
    held_items: any[]; 
    id: number;
    
    
    name: string;
    
    
    sprites: any;
    stats: any[]; 
    types: any[]; 
    weight: number;
    
}
function page() {

    const [pokemonDetails,setPokemonDetails]=useState<PokeDetails | null>(null)
    
    const searchParams=useSearchParams()
    const name:QueryParam=searchParams.get('name') || ''
    const pokedex=new Pokedex()
    
    const getPokemonDetails = async (pokemonName: string) => {
        try {
            const pokemon = await pokedex.getPokemonByName(pokemonName);
            console.log('Detailscsdsaf',pokemon);
            setPokemonDetails(pokemon)
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        if (name !== null) {
            getPokemonDetails(name);
        } else {
            console.log('No name query parameter found.');
        }
    }, [name]);

    
    
  return (
    <div className='w-full h-screen'>
        <div className='mt-8'>
            <h1 className='text-3xl orange-text-gradient text-center font-extrabold'>{pokemonDetails?.name.toUpperCase()}</h1>
        </div>
        <div>
           <Image src={pokemonDetails?.sprites.other.home.front_default} height="1000"
                      width="1000"
                      className="h-60 w-full object-contain rounded-xl " alt='pokemon image'/>
        </div>
        

        <div className='flex flex-col justify-center items-center mt-10'>
            <p><span className='pink-text-gradient text-lg font-bold'>Height :   </span> <span className='blue-text-gradient text-lg font-bold'>  {pokemonDetails?.height}</span></p>
            <p><span className='pink-text-gradient text-lg font-bold'>Weight :   </span> <span className='blue-text-gradient text-lg font-bold'>  {pokemonDetails?.weight}</span></p>
            <p><span className='pink-text-gradient text-lg font-bold'>Base Experience :   </span> <span className='blue-text-gradient text-lg font-bold'>  {pokemonDetails?.base_experience}</span></p>
            <div >
            <p><span className='pink-text-gradient text-lg font-bold'>Held Items :   </span>
                {pokemonDetails?.held_items?.map((e)=>(
                     <span className='blue-text-gradient text-lg font-bold'>  {e?.item?.name}</span>
                ))}
            </p>  
            <p><span className='pink-text-gradient text-lg font-bold'>Type :   </span>
                {pokemonDetails?.types?.map((e)=>(
                     <span className='blue-text-gradient text-lg font-bold'>  {e?.type?.name}</span>
                ))}
            </p>  


            </div>
            <div>
                <h1 className='text-2xl font-bold orange-text-gradient'>Stats :</h1>
                {pokemonDetails?.stats?.map((e)=>(
            <p><span className='pink-text-gradient text-lg font-bold'>{e?.stat?.name}  :  </span>
                
                     <span className='blue-text-gradient text-lg font-bold'>  {e?.base_stat}</span>
                     </p>
                ))}
            

            </div>

        </div>
        <Meteors/>
        <BackgroundBeams/>
    </div>
  )
}

export default page