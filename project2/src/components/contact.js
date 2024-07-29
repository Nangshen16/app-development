import React from "react";
import zero from '../images/eatwell.webp'

import one from '../images/eatfish.webp'
import two from '../images/vis.webp'
import three from '../images/drink.webp'
import four from '../images/melt.webp'
import five from '../images/quin.webp'
import User from '../comments'


const Contact = function(){
    return(
        <div>
            <header className='header'>
                <h1 className='headertitle'>
                    Health News
                </h1>
            </header>
            <section className='cardcontainer'>

                <User image={zero} name="I Interviewed 10 Olympians & Here Are 5 Healthy Habits They Do Every Day" comments="Elite Athletes Are Morning People"/>

                <User image={one} name="What Happens to Your Body When You Eat Fish Regularly" comments="Whether you love salmon, tuna or cod, eating the recommended two fish meals per week can offer some impressive health benefits."/>
                <User image={two} name="Eat Your Way to Vision Health: 12 Best Foods That Should Be in Your Diet" comments="Doing the most for your eyes doesn't have to taste bad. These are 12 of the best foods to boost your eye health."/>
                <User image={three} name="New study shows even moderate drinking is unhealthy" comments="You might have heard that drinking some alcohol can be beneficial to your health"/>
                <User image={four} name="I am a gastroenterologist, and this is the seasonal vegetable I recommend for melting fat" comments="Fennel: a nutrient powerhouse for your health"/>
                <User image={five} name="Smell of human stress affects dogs' emotions, study finds" comments="The smell of human stress affects dogs' emotions and could lead to them making more pessimistic choices, new research has suggested."/>

            </section>
        </div>
    )
}

export default Contact;