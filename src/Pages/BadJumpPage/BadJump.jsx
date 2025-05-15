import { useEffect, useRef, useState } from 'react'
import './BadJump.css'
import NavBar from '../../Components/NavBar/NavBar'
import { supabase } from '../../services/supabase'


export default function BadJump() {

  const [ backgroundImage, setBackgroundImage ] = useState();

  useEffect(() => {
    async function loadImage() {
       const { data, error } = await supabase.storage.from('images').getPublicUrl('background/volcano-background.png')
       if (error) {
        console.log('error fetching') 
       } else {
        setBackgroundImage(data.publicUrl)
       }
    } 
      loadImage();
  }, [])








  const canvasRef = useRef(null)
  const blockRef = useRef({
    x: 100,
    y: 0, // Will be set to bottom of screen
    width: 50,
    height: 50,
    velocity: 5,
    velocityY: 0,
    isJumping: false,
    hasLeftGround: false
  })
  const speechRef = useRef(null)

  // Define initial platforms with collectibles
  const initialPlatforms = [
    { x: 0, y: 0, width: 100, height: 20, hasCollectible: true, collectibleType: 'circle' },      // Ground platform
    { x: 200, y: 200, width: 100, height: 20, hasCollectible: true, collectibleType: 'circle' },  // First step
    { x: 400, y: 400, width: 100, height: 20, hasCollectible: true, collectibleType: 'patriot' },  // Second step
    { x: 600, y: 600, width: 100, height: 20, hasCollectible: true, collectibleType: 'circle' },  // Third step
    { x: 800, y: 800, width: 100, height: 20, hasCollectible: true, collectibleType: 'circle' },  // Fourth step
    { x: 1000, y: 1000, width: 100, height: 20, hasCollectible: true, collectibleType: 'circle' }, // Fifth step
  ]

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const block = blockRef.current

    // Initialize speech synthesis
    speechRef.current = window.speechSynthesis
    const coinUtterance = new SpeechSynthesisUtterance('coin!')
    const pledgeUtterance = new SpeechSynthesisUtterance('I pledge allegiance')
    const taxUtterance = new SpeechSynthesisUtterance('tax day, now give me your money')
    coinUtterance.rate = 1.2
    pledgeUtterance.rate = 1.0
    taxUtterance.rate = 1.0
    coinUtterance.pitch = 1.2
    pledgeUtterance.pitch = 1.0
    taxUtterance.pitch = 0.8 // Lower pitch for tax collector

    // Game constants
    const GRAVITY = 0.1
    const JUMP_FORCE = -12
    const SCROLL_THRESHOLD = 300 // When to start scrolling
    const SCROLL_SPEED = 2 // How fast platforms move down
    const PLATFORM_SPACING = 200 // Vertical space between platforms
    const PLATFORM_WIDTH = 100 // Half the original width
    const PLATFORM_HEIGHT = 20

    // Game state
    const gameState = {
      platforms: [...initialPlatforms],
      scrollOffset: 0,
      highestY: Math.max(...initialPlatforms.map(p => p.y)),
      gameOver: false,
      gameOverTime: 0,
      score: 0
    }

    // Generate new platform
    const generatePlatform = () => {
      const lastPlatform = gameState.platforms[gameState.platforms.length - 1]
      const rand = Math.random()
      let collectibleType = 'circle'
      
      // 5% chance for tax collector, 15% chance for patriotic block, 80% chance for coin
      if (rand < 0.05) {
        collectibleType = 'tax'
      } else if (rand < 0.2) {
        collectibleType = 'patriot'
      }

      const newPlatform = {
        x: Math.random() * (canvas.width - PLATFORM_WIDTH),
        y: lastPlatform.y - PLATFORM_SPACING,
        width: PLATFORM_WIDTH,
        height: PLATFORM_HEIGHT,
        hasCollectible: true,
        collectibleType
      }
      gameState.platforms.push(newPlatform)
      gameState.highestY = Math.min(gameState.highestY, newPlatform.y)
    }

    // Set canvas size to window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      // Set block position at bottom of screen
      block.y = canvas.height - block.height
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Handle keyboard input
    const keys = {
      ArrowUp: false,
      ArrowDown: false,
      ArrowLeft: false,
      ArrowRight: false
    }

    const handleKeyDown = (e) => {
      if (Object.prototype.hasOwnProperty.call(keys, e.key)) {
        keys[e.key] = true
        // Jump when up arrow is pressed and block is on ground
        if (e.key === 'ArrowUp' && !block.isJumping) {
          block.velocityY = JUMP_FORCE
          block.isJumping = true
          block.hasLeftGround = true
        }
      }
    }

    const handleKeyUp = (e) => {
      if (Object.prototype.hasOwnProperty.call(keys, e.key)) {
        keys[e.key] = false
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    const checkPlatformCollision = () => {
      for (const platform of gameState.platforms) {
        // Check if block is above platform
        if (block.y + block.height > platform.y &&
            block.y + block.height < platform.y + platform.height &&
            block.x + block.width > platform.x &&
            block.x < platform.x + platform.width) {
          block.y = platform.y - block.height
          block.velocityY = 0
          block.isJumping = false
          return true
        }
      }
      return false
    }

    // Check collectible collection
    const checkCollectibleCollection = () => {
      for (const platform of gameState.platforms) {
        if (platform.hasCollectible) {
          const collectibleX = platform.x + platform.width / 2
          const collectibleY = platform.y
          const collectibleSize = platform.width / 6

          // Check if block is close enough to collect
          const distance = Math.sqrt(
            Math.pow(block.x + block.width/2 - collectibleX, 2) +
            Math.pow(block.y + block.height/2 - collectibleY, 2)
          )

          if (distance < collectibleSize + block.width/2) {
            platform.hasCollectible = false
            
            // Handle different collectible types
            if (platform.collectibleType === 'circle') {
              gameState.score += 1
              if (speechRef.current) {
                speechRef.current.speak(coinUtterance)
              }
            } else if (platform.collectibleType === 'patriot') {
              gameState.score += 2
              if (speechRef.current) {
                speechRef.current.speak(pledgeUtterance)
              }
            } else if (platform.collectibleType === 'tax') {
              // Take all points except 1
              if (gameState.score > 1) {
                gameState.score = 1
                if (speechRef.current) {
                  speechRef.current.speak(taxUtterance)
                }
              }
            }
          }
        }
      }
    }

    // Draw scoreboard
    const drawScoreboard = () => {
      ctx.fillStyle = '#000000'
      ctx.font = 'bold 24px Arial'
      ctx.textAlign = 'right'
      ctx.fillText(`Score: ${gameState.score}`, canvas.width - 20, canvas.height - 20)
    }

    const animate = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      if (gameState.gameOver) {
        // Draw red background
        ctx.fillStyle = '#FF0000'
        ctx.fillRect(0, 0, canvas.width, canvas.height)

        // Draw "YOU SUCK" text
        ctx.fillStyle = '#FFFFFF'
        ctx.font = 'bold 48px Arial'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText('YOU SUCK', canvas.width / 2, canvas.height / 2)

        // Draw final score
        ctx.fillStyle = '#FFFFFF'
        ctx.font = 'bold 24px Arial'
        ctx.textAlign = 'center'
        ctx.fillText(`Final Score: ${gameState.score}`, canvas.width / 2, canvas.height / 2 + 50)

        // Check if 2 seconds have passed
        if (Date.now() - gameState.gameOverTime > 2000) {
          window.location.reload()
        }

        requestAnimationFrame(animate)
        return
      }

      // Generate new platforms if needed
      if (block.y < SCROLL_THRESHOLD) {
        generatePlatform()
      }

      // Scroll platforms down
      if (block.y < SCROLL_THRESHOLD) {
        gameState.scrollOffset += SCROLL_SPEED
        block.y += SCROLL_SPEED
        gameState.platforms.forEach(platform => {
          platform.y += SCROLL_SPEED
        })
      }

      // Draw platforms
      gameState.platforms.forEach(platform => {
        // Draw the purple platform
        ctx.fillStyle = '#4c785d' // Purple color
        ctx.fillRect(platform.x, platform.y, platform.width, platform.height)
        
        // Draw collectible if it exists
        if (platform.hasCollectible) {
          if (platform.collectibleType === 'circle') {
            // Draw yellow circle
            ctx.fillStyle = '#f6a309' // Bright yellow
            ctx.beginPath()
            ctx.arc(
              platform.x + platform.width / 2,
              platform.y,
              platform.width / 6,
              0,
              Math.PI * 2
            )
            ctx.fill()
          } else if (platform.collectibleType === 'patriot') {
            // Draw patriotic rectangle
            const rectWidth = platform.width / 3
            const rectHeight = platform.width / 4
            const rectX = platform.x + platform.width / 2 - rectWidth / 2
            const rectY = platform.y - rectHeight / 2

            // Draw red stripe
            ctx.fillStyle = '#443535'
            ctx.fillRect(rectX, rectY, rectWidth, rectHeight / 3)
            
            // Draw white stripe
            ctx.fillStyle = '#FFFFFF'
            ctx.fillRect(rectX, rectY + rectHeight / 3, rectWidth, rectHeight / 3)
            
            // Draw blue stripe
            ctx.fillStyle = '#00ff7b'
            ctx.fillRect(rectX, rectY + (rectHeight * 2 / 3), rectWidth, rectHeight / 3)
          } else if (platform.collectibleType === 'tax') {
            // Draw black box
            const boxSize = platform.width / 4
            const boxX = platform.x + platform.width / 2 - boxSize / 2
            const boxY = platform.y - boxSize / 2

            // Draw black box
            ctx.fillStyle = '#000000'
            ctx.fillRect(boxX, boxY, boxSize, boxSize)

            // Draw small red circle on top
            ctx.fillStyle = '#FF0000'
            ctx.beginPath()
            ctx.arc(
              boxX + boxSize / 2,
              boxY + boxSize / 4,
              boxSize / 6,
              0,
              Math.PI * 2
            )
            ctx.fill()
          }
        }
      })

      // Check for collectible collection
      checkCollectibleCollection()

      // Apply gravity
      block.velocityY += GRAVITY
      block.y += block.velocityY

      // Check platform collisions
      if (!checkPlatformCollision()) {
        // Ground collision if not on a platform
        if (block.y + block.height > canvas.height) {
          block.y = canvas.height - block.height
          block.velocityY = 0
          block.isJumping = false
          // Game over if block hits bottom after leaving ground
          if (block.hasLeftGround) {
            gameState.gameOver = true
            gameState.gameOverTime = Date.now()
          }
        }
      }

      // Update horizontal position based on keyboard input
      if (keys.ArrowLeft && block.x > 0) {
        block.x -= block.velocity
      }
      if (keys.ArrowRight && block.x < canvas.width - block.width) {
        block.x += block.velocity
      }

      // Draw block
      ctx.fillStyle = '#20f427'
      ctx.fillRect(block.x, block.y, block.width, block.height)

      // Draw scoreboard
      drawScoreboard()

      // Continue animation
      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      if (speechRef.current) {
        speechRef.current.cancel()
      }
    }
  }, [])

  return (
    <div  className="badJumpContainer">
      <NavBar />
      <canvas ref={canvasRef} className="gameCanvas" />

      </div>
  )
}

