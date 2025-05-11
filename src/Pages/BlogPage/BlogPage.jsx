import './BlogPage.css'
import NavBar from '../../Components/NavBar/NavBar'
import { useState } from 'react'

export default function BlogPage() {

  const [ firstSelection, setFirstSelection ] =  useState('none')
  const handleSelection = () => {
    if (firstSelection === 'none'){
      setFirstSelection('contents')
    } else if (firstSelection === 'contents'){
      setFirstSelection('none')
    }
  }

  const [ secondSelection, setSecondSelection ] =  useState('none')
  const handleSecondSelection = () => {
    if (secondSelection === 'none'){
      setSecondSelection('contents')
    } else if (secondSelection === 'contents'){
      setSecondSelection('none')
    }
  }




  return (
    <div className='blogMainContainer'>
       <NavBar />
      <div className='blogHeading'>
        Sum of All Fingertips
          
      </div>
    

      <div className='blogFirstSelection'>
        <h2>why be a roofer?</h2> <button onClick={handleSelection}>show article</button>
          <br /><br />
        <p style={{ display: firstSelection}}>
          I've been posed with a question, a question that stands night and day at some 30 odd degrees beckoning my response or some kind of upward momentum towards its slopes. Why do I love roofing? My course has been tried a mere year at the be-footed and hammered talent, the trade of the billy goat, long-armed pine percher. Did you love climbing trees as a kid? You like jumping off bridges and cliffs into some ice cold run off? Does the sound of screw gun sort of calm you down? You may love roofing as well. But, as seen over the past year or so you probably won't. 
          <br />
          <br />
          It seems roofing is a slice of life that has most people searching for something else. So what does roofing actually entail. The answer ought to be clear. Block water from entering the home. We create a barrier design to let anything run right off the roof. One might suggest ask of one self the direction that water runs 
        </p>
      </div>

      <div className='blogSecondSelection'>
        <h2>raM and Mountain</h2> <button onClick={handleSecondSelection}>read story</button>
        <br /><br />
        <p style={{ display: secondSelection}}>
            <h4>
              FIRST
            </h4>
            <br />
            Pertinence, love,<br />
            lips embrace and categorize in the library of electricity,<br />
            an embrace of palms to hips and legs to feet and tights and jeans and dark clothes ripped away in a drousy flooded basement,
            of ruffling of feathers and laughter, an impression under, on and around the sheets,
            the drooping of eye lids at last in love again to drift and twitch through night and awaken months later to a glean of sun streaking through the window to your face and my eyes looking at your face.
            It breaks. And it breaks up. Up and up.
            But now I must run for bad weather to find a feat. The mountain is toppling. I heard it! I saw it! I psychically intuited the other side of this cozy coin, the constraint must return quickly and harshly, run, rip, tear apart its features, purge it all, the blankets will be stripped away, expurgate, expectorate rapidly over and over, cringe and sneer at the drowning reflections for they will take you! You will suffer their attention. All will be lost and lonelier than you can prepare for.
            <br /><br />
            Did you really think it would be everlasting?
            <br /><br />
            Yes, Yes I did! Forgive me for I have no vision of the whole, I saw her. I fell for her and then loved. And sacrificed.
            <br /><br />
            Why?
            <br /><br />
            To keep her. I reply honestly. Keep. I repeat.
            <br /><br />
            Ha! You fool! You knew what would come. Why sacrifice for her? She left the moment she came, the moment she let her skin down for your arms to protect her, the moment you teased each other, goaded each other to slide, to abscond, down the hill embalming into one another’s bedrooms and away from any other sentience. You knew! So why did you do this! You knew it, you Ram. You knew this mountain would issue only respect. It will only try you. Run and hide and scream and snap. Slam any where you like and the mountain will not listen. The mountain has no ears for those looking to turn. Make noise as you drill away at the mass it takes to steady your climb. Stringently consider the soul. Trim your chasm and leave, or die.
            <br /><br />
            Why? I ask. Why do this, but for her?
            <br /><br />
            Do it for yourself you twit!
            <br /><br />
            The mountain slaps my cheek. It ripples and inflames. I’m perplexed mountain! For myself? I know nothing of the sort.
            <br /><br />
            You don’t know yourself? Ha! You idiot! Here I’ll show it to you.
            <br /><br />
            Snap, boom, thud! A boulder appears from a fracture in the rocky skin, but a freckle on this figure’s daunt. It rolls and bounces according to code, it bounds nearer.
            <br /><br />
            Why would you do this? I ask again. The boulder hits me in the face.
            <br /><br />
            Do you remember now Ram? Can you conjugate this pain into the proper lamentation! Don’t you remember who you were before she came to you?
            <br /><br />
            I fly. I roll down the hill, feeling the curl then feeling the stop. My ankle! I cry. I rest involuntarily on a ledge. The wind is heavy and squeezes me into the rock, a bird struggles and squawks in broken sky, snow floats hastily to land like dancers zipping across stage before their call.
            <br /><br />
            No mountain! I can withstand more. This pain will transcend to her preeminence and her immunity.
            <br /><br />
            Oh? The mountain inquires with amusement. A laugh, a gigantic rumble comes from another power. Ha! Even more than a mountain the sky will determine you. Crack! Cshh! A bolt streaks across the sky and finds ground upon my forehead. My horn snaps. I shriek in agony.
            <br /><br />
            Ah! But her! I cry. It is her that I will love! The blood drips from my broken ankle. The snow scrapes my trembling body like needles, like frozen cacti, like the thought of her new home, a new smitten suitor. I see my horn tumble down the crags of this acute face I’m stranded to.
            <br /><br />
            Is hers your love? Did you see her with another? Did you see her smile in relief to at last not be with you, you Ram, you overly determined ass?
            <br /><br />
            I did, I did! But I will not submit mountain for I can endure much more than you can imagine, sky and mountain, snow and now electricity.
            <br /><br />
            Oh? What do you believe will become of your horn you stupid Ram?
            <br /><br />
            It will be hers, it will be a frame for her bed, it will make her dinner, provide a safe ride home on dreary nights, it will be a vacation via airplane, a seamless fafsa application, oils, hand soaps, days off, my horn will be hers! Ha!
            <br /><br />
            Ram you idiot! The mountain said. Watch Ram for your eye sight is keen! Watch what becomes of your horn.
            <br /><br />
            <h4>SECOND effort</h4>
            <br />
            I waited. The red blood dripped out of my ankle and froze to the blue rock. My rectangular iris focused in and out like an elevator in a busy office building if one watched it from below. Where is this vision with which the mountain will torture me? I cried out. I lapped at my wound unable to taste even my own blood awaiting the horror, straining my eyes down the cliff face to gander at the happenings of my amputated horn. The suitor, I assumed, he will clutch the fracture from my forehead and use it. Yes he will use it for her. For anything but me its function will become! Come vision I am ready for your torture.
            <br /><br />
            Shut up Ram! Won’t you understand? The mountain said.
            <br /><br />
            Where is the letterbox for I have grievances to claim? I respond.
            <br /><br />
            Your dullness is fervent Ram. That is undeniable.
            <br /><br />
            No! Mountain, I am no fool I already know how it will come, bring the torture for I am more capable! Already I have I cracked my two most pertinent pieces, destroy a third and I will show you that I will not quit!
            <br /><br />
            Imbecility!
            <br /><br />
            Very well mountain name me as you wish and I will overcome, my hooves, my beard, my broad pallet, take it all you mountain and she will be safe, she will never hurt again I assure you. Test the Ram you mountain! I’m sure it will be awful and I will take it. I can digest anything mountain! Anything!
            <br /><br />
            Right.
            <br /><br />
            I, the ram of great stride and upward mobility, I peer, I peer anticipating my peer, my former beloved counterpart to encounter my broken horn and do something with it in the sentiment of utter betrayal for that will mean that I have loved her even more. Come hither vision! Show yourself! Here it must come, it must hurry, the vision of torture of certain vindication, revenge against me, the obsessed mammal that will climb mountains to prove love. The closer it gets I smell it. I’m certain the vision of my horn will tatter and hiss upon by her eminence, by her emotive being I was once locked with. Come vision, vision of flooding emotion, a deluge of changed opinions, of my broken horn in her hooves.
            <br /><br />
            Take it Ram! Take it, here, take it!
            <br /><br />
            There is nothing here. You bluff.
            <br /><br />
            Your vision is slighted Ram!
            <br /><br />
            The mountain booms its loudest thrice.
            <br /><br />
            I know what comes Mountain!
            <br /><br />
            Do you? You stupid Ram. Run Ram!
            <br /><br />
            But why run and how? The ankle cries longer and deeper as its fumes linger near my nostrils. Haven’t you seen how I will learn? I leap and clamber three and one half legged through the pinching rocks and miserly branches up to ledges and vistas of lengthy and shear land. I look and know nothing. I will learn to slide through these ravines and turn back to notice my own trail and hear stories from the drops of each cave and growl into in the face of fear, but for the moment Mountain I will learn what is here and take pain from the next disaster for I am willing and I will not confide in the sturdiness to move on. I will see the next chapter and its succession. I will wait.
            <br /><br />
            You remain an idiot dear Ram. Did you not heed my hint, a large hint, a hint the size of a mountain dear Ram?
            <br /><br />
            Mountain have you not heard a word I’ve given you? This is the moment to survive, when torrential twists into greatness! Rock slides have their probability dear Mountain and I luck of a champion for I have chosen the higher road dear mountain, don’t you see? Boom! Boulders hustle down the decline toward my position.
            <br /><br />
            Run Ram!
            <br /><br />
            Nary here nor anywhere Mountain! I lunged. An alcove received me. The weight of many small houses shrunk into a single rock tumbled over me, unapproachable and uncatchable booming overhead. The shape of the mountain clutched me. The largest components of the slide passed and now only a small spray of pebbles dribbled after.
            <br /><br />
            Ram.
            <br /><br />
            Rain sprays down across my face and across my flanks. A red drizzle runs away from my hips. I cringe at the sight of the bottom half of me under this anxious slab of granite trembling like a fish no longer in the company of water. Oh mountain you are full of mighty evasions, many places to bare many hopes, to hide dear Mountain and I am grateful.
            <br /><br />
            You have only fooled yourself Ram! You are not righteous in this shape. I told of what would come and you became stubborn and ruined yourself to new scales. Again Ram, why are you here? Did we give you invitation? Who gives you the title to wreck yourself here? We, all of us elements, will continue only as we have.
            <br /><br />
            You know not the pang of love dear mountain yet you are the fortune who bears it. Yet you hold your shape as it presses and digs into your veins as it unloads its entropy in the quietude of your slants and scrags, under the roughage, under every rock a love beats. You are unable to hear it dear Mountain! Why can you not see? Ha! From what soil does your question even grow?
            <br /><br />
            Ha! Ram you are lost if love is your goal. Don’t you know Ram? You have no choice in the matter. Love comes and love goes. That is why you and apparently many others rest on me, hide in my icy concaves, and infect yourselves with injury as though it were a bandolier, as though a parade will encircle you shortly for your heroism. You are no different than I Ram! We have come and we will go!
            <br /><br />
            Why must you learn so harshly Ram?
            <br /><br />
            Oh Mountain I learn more harshly with every turn for I have not learned enough. If I am no more or less than you mountain then show me the patience of love, the elongated stillness that can ride upon only a mote of dust, that understands these epic lessons will bring fruit. Even small, fruit are fruit.
            <br /><br />
            <h4>LAST</h4>
            <br />
            You ass Ram! Your eyes are popped! How long have you been out here muscling away at your self-dug grave. Your emotional outbursts are callous dear Ram. Why won’t you leave me and lend your injuries to the bandages of even terrain. How long will those eyes twirl in an imaginary love? You’re in love with your mind Ram! And look at your body! Can you even walk?
            <br /><br />
            Walk? I will run mountain. I will leap over an entire tree someday, the day she remembers how it could be, how our scopes were aligned and innocent and how the return is inevitable. My body will absorb the buff making nights of rocks and storms, of bites and gang green. I will look upon nothing else dear mountain. Worry not for you have a friend here, an ally in the march to your tops even as you prohibit. I will show you mountain. You will feel what it takes. Come mountain continue as you were, as you are, as you have stated of your natural forces connect to the twitchy indecision of soul that we cannot hear, us that only feel and misconstrue, us that will leap within doubt of where the landing will truly be. Ours is a precocious moving part in comparison with you, tripping before or after you, left or right of you. For mountain your will is invisible! Your hopes are transparent. Your eminence is innocent in its ruthlessness. I will be grounded by you dear mountain and it may go on unknown; it will be unseen when the summit is taken and we will meet no one.
        </p>
      </div>
    </div>
  )
}
