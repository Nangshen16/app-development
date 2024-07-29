import React from 'react'
import zero from '../images/micro.webp'
import one from '../images/health.webp'



import User from '../comments'
const Home = function(){
    return(
        <>
            <header className='header'>
                <h1 className='headertitle'>Home</h1>
            </header>
            <section className='cardcontainer'>
                <User image={zero} name="Technology is a rapidly evolving field, and staying updated on the latest advancements, trends, and innovations helps individuals and businesses remain current and competitive." comments="For professionals in the tech industry, staying informed about new tools, programming languages, and methodologies is crucial for career growth and job opportunities."/>

                <User image={one} name="Health news helps individuals make better-informed decisions about their health and well-being." comments="By staying updated on health news, people can learn about the latest recommendations for disease prevention and management, such as vaccinations, screenings, and healthy lifestyle choices."/>
                





            
            </section>
        </>
    )
}

export default Home