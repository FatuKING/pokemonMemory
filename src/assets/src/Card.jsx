import { useState } from 'react'

export function Card ({ img }) {
  const [isFront, setIsFront] = useState(true)

  const handleClick = () => {
    setIsFront(!isFront)
  }

  return (
    <>
      <div class='flip-card' onClick={handleClick}>
        <div class='flip-card-inner'>
          {
            isFront
              ? (
                <div class='flip-card-back'>
                  <img src={img} alt={img} />
                </div>
                )
              : <div class='flip-card-front' />
          }
        </div>
      </div>
    </>
  )
}
