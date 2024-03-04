import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";


function HeroSection() {
  return (
    <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
        <div className="p-4 relative z-10 w-full text-center ">
        <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="yellow"
      />
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">Captivating World of Pokemon Database</h1>
            <p className="mt-4 font-normal text-base md:text-lg text-lime-400 max-w-lg mx-auto">Welcome to our Pokémon information hub! Explore a vast array of Pokémon species, from classic favorites to elusive legends. Our web app offers detailed insights, stats, and trivia about each Pokémon, making it the ultimate destination for all Pokémon enthusiasts.</p>
            <div className="mt-4">
                <Link href={'/explore'}>
                    <Button className="bg-transparent dark:bg-black text-lime-400 dark:text-white border-neutral-200 dark:border-slate-800" borderRadius="1.75rem">Explore Pokemons!</Button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default HeroSection