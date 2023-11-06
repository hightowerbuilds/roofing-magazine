import { useState } from "react"

export default function Headlines(){
  
const [ artDisplay, setArtDisplay ] = useState('none')
const [ artDisplayTwo, setArtDisplayTwo ] = useState('none')

function artFx( gg, hh ){
    gg === 'none' ? hh('block') : hh('none')
 }  

function handleMoreOne(){
    artFx(artDisplay, setArtDisplay)
}
function handleMoreTwo(){
    artFx(artDisplayTwo, setArtDisplayTwo)
}


    return (
        <div style={{
           
            marginTop: 10,
            marginLeft: 10,
            border: '1px solid beige',
            width: 1100,
            color: 'beige',
            fontFamily: 'monospace',
            padding: 10
        }}>
            <div style={{margin: 10}}>
            <h1 style={{
                fontSize: 38
            }}>15 LOGICal FALLacies</h1>
            <button onClick={handleMoreOne}>more...</button>
            <p style={{
                display: artDisplay,
                fontSize: 16,
                width: 900,
            
            }}>
                <h1>What are 15 common types of logical fallacies?</h1>
                <p>
                    As youll see below, there are a lot of ways an argument can be flawed. Take a look at fifteen of the most commonly used logical fallacies.</p>
                <p>
                   <h2>1 Ad hominem:</h2>  An ad hominem fallacy is one that attempts to invalidate an opponents position based on a personal trait or fact about the opponent rather than through logic. Example: Katherine is a bad choice for mayor because she didnt grow up in this town. 
                </p>
                <p>
                   <h2>2 Red herring:</h2>  A red herring is an attempt to shift focus from the debate at hand by introducing an irrelevant point. Example: Losing a tooth can be scary, but have you heard about the Tooth Fairy? 
                </p>
                <p>
                    <h2>3 Straw man:</h2> A straw man argument is one that argues against a hyperbolic, inaccurate version of the opposition rather than their actual argument. Example: Erin thinks we need to stop using all plastics, right now, to save the planet from climate change. 
                </p>
                <p>
                    <h2>4 Equivocation:</h2> An equivocation is a statement crafted to mislead or confuse readers or listeners by using multiple meanings or interpretations of a word or simply through unclear phrasing. Example: While I have a clear plan for the campus budget that accounts for every dollar spent, my opponent simply wants to throw money at special interest projects. 
                </p>
                <p>
                    <h2>5 Slippy slope:</h2>
                    With a slippery slope fallacy, the arguer claims a specific series of events will follow one starting point, typically with no supporting evidence for this chain of events. Example: If we make an exception for Bijals service dog, then other people will want to bring their dogs. Then everybody will bring their dog, and before you know it, our restaurant will be overrun with dogs, their slobber, their hair, and all the noise they make, and nobody will want to eat here anymore. 
                </p>
                <p>
                    <h2>6 Hasty generalization:</h2>
                    A hasty generalization is a statement made after considering just one or a few examples rather than relying on more extensive research to back up the claim. Its important to keep in mind that what constitutes sufficient research depends on the issue at hand and the statement being made about it. Example: I felt nauseated both times I ate pizza from Georgios, so I must be allergic to something in pizza. 
                </p>
                <p>
                    <h2>7 Appeal to authority:</h2>
                    In an appeal to authority, the arguer claims an authority figures expertise to support a claim despite this expertise being irrelevant or overstated. Example: If you want to be healthy, you need to stop drinking coffee. I read it on a fitness blog. 
                </p>
                <p>
                    <h2>8 False dilemma</h2>
                    A false dilemma, also known as a false dichotomy, claims there are only two options in a given situation. Often, these two options are extreme opposites of each other, failing to acknowledge that other, more reasonable, options exist. Example: If you dont support my decision, you were never really my friend. 
                </p>
                <p>
                    <h2>9 Bandwagon fallacy:</h2>
                    With the bandwagon fallacy, the arguer claims that a certain action is the right thing to do because its popular. Example: Of course its fine to wait until the last minute to write your paper. Everybody does it!
                </p>
                <p>
                    <h2>10 Appeal to ignorance:</h2>
                    An appeal to ignorance is a claim that something must be true because it hasnt been proven false. It can also be a claim that something must be false because it hasnt been proven true. This is also known as the burden of proof fallacy. Example: There must be fairies living in our attic because nobodys ever proven that there arent fairies living in our attic.
                </p>
                <p>
                    <h2>11 Circular argument:</h2>
                    A circular argument is one that uses the same statement as both the premise and the conclusion. No new information or justification is introduced. Example: Peppers are the easiest vegetable to grow because I think peppers are the easiest vegetable to grow. 
                </p>
                <p>
                    <h2>12 Sunk cost fallacy:</h2>
                    With the sunk cost fallacy, the arguer justifies their decision to continue a specific course of action by the amount of time or money theyve already spent on it. Example: Im not enjoying this book, but I bought it, so I have to finish reading it. 
                </p>
                <p>
                    <h2>13 Appeal to pity:</h2>
                    An appeal to pity attempts to sway a readers or listeners opinion by provoking them emotionally. Example: I know I should have been on time for the interview, but I woke up late and felt really bad about it, then the stress of being late made it hard to concentrate on driving here.
                </p>
                <p>
                    <h2>14 Causal fallacy:</h2>
                    A causal fallacy is one that implies a relationship between two things where one cant actually be proven. Example: When ice cream sales are up, so are shark attacks. Therefore, buying ice cream increases your risk of being bitten by a shark. 
                </p>
                <p>
                    <h2>15 Appeal to hypocrisy:</h2>
                    An appeal to hypocrisy, also known as a tu quoque fallacy, is a rebuttal that responds to one claim with reactive criticism rather than with a response to the claim itself. Example: “You dont have enough experience to be the new leader.” “Neither do you!”
                </p>
                <p>
                    Although this list covers the most commonly seen logical fallacies, its not exhaustive. Other logical fallacies include the no true Scotsman fallacy (“New Yorkers fold their pizza, so you must not really be from New York if you eat yours with utensils.”) and the Texas sharpshooter fallacy (cherry-picking data to support a claim rather than drawing a logical conclusion from a broad body of evidence). 
                </p>
            </p>
            </div>
           
            <div style={{margin: 10}}>
            <marquee style={{
                fontSize: 38
            }}>THINGS are still called THINGS, very special shings, dammit, THINGS</marquee>
            <button onClick={handleMoreTwo}>more...</button>
            <p style={{
                display: artDisplayTwo,
                fontSize: 16,
                width: 800,
            }}>
                
            <p><h1>Shingles </h1> There are several types of shingle materials, but their main purpose is to protect underlying sheathing from the weather. Shingles are traditionally measured in squares. A square of shingles is 100 square feet, so if you know your roof is 2,500 square feet you will need to order 25 squares.
            </p>
            <p><h1>Sheathing </h1> Boards or sheet material that are attached to the rafters that cover your home. This is also referred to as the deck of a roof.</p>
            <p><h1>Trim </h1>Installed to protect the seam in the roof along a hip or ridge.</p>
            <p>Rafters: These are the wood or metal slats inside your home that support the sheathing and shingles. Theyre a bit like the skeleton for your roof.</p>
            <p><h1>Underlayment </h1>Water-resistant, paper-like material that is laid over plywood sheathing to seal it from damaging elements such as rain and snow. This is used with a membrane and vapor barrier, which is typically a sheet of plastic blocking air and water from leaking through.</p>
            <p><h1>Flashing </h1>Sheet metal or other material installed on top of the joints of a roof system to prevent water damage. The joints of your roof are anywhere it changes direction, and flashing is used to help seal these points off from the elements.
            </p>
            <p><h1>Drainage</h1>This is a roof design feature that allows it to shed water. This is measured using the slope, or pitch, of the roof, which is determined by the rise in inches for each foot of horizontal distance — known as the “run.” For example, a roof with a 5-in-12 slope rises five inches for every foot in distance.</p>
            </p>

            </div>
                </div>
    )

}