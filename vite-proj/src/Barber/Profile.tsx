import React from 'react'

const Profile =({barber})=>{
    console.log(barber)
  return(
    <div>
  <div>
    <div>
      <h3>{barber.firstName}</h3>
      <h3>{barber.lastName}</h3>
    </div>
    <div>
      <p>{barber.description}</p>]<p>{barber.price}</p>
    </div>
    <div>
      <p>{barber.rate}</p>
    </div>
  </div>
  <div>
    {barber.review?.map((coment) => {
      return (
        <div>
          <h4>{coment.author}</h4>
          <p>{coment.comment}</p>
          <p>{coment.score}</p>
        </div>
      );
    })}
  </div>
</div>
  )
}

export default Profile;