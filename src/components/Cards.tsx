import React from "react";
import "./styles.css";
function Cards() {
  const person={
    image:'/profile-thumbnail.png',
    name:'Sarah Doel',
    title:'Front End Engineer @ Microsoft',
    about:'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.'
  }

  const socialIcons=[
    { icon:"/github.svg", alt:"Github.png",href:'https://www.github.com'},
    { icon:"/linkedin.svg", alt:"linkedIn.png",href:'https://www.linkedin.com'},
    { icon:"/instagram.svg", alt:"Instagram.png",href:'https://www.instagram.com'},
    { icon:"/twitter.svg", alt:"twitter.png" , href:'https://www.twitter.com'}
]

  return (
    <div className="container">
      {/* first division */}
        <div>
          <img src={person.image} width={64} height={64} alt="my_thumbnail"/>
        </div>
        <div className="name">
          <div>
            <h4>{person.name}</h4>
          </div>
          <div className="title">{person.title}</div>
        </div>

        <p>{person.about}</p>
      {/* second division */}
      <div className="btn-container">
        <div>
          <button>
          Contact Me
          </button>        

      </div>

      
    </div>
    <div className="icons-container">
       {socialIcons.map((icons)=>{
        return(
          <>
          <div className="icon-wrapper">
            <a href={icons.href} target="blank">
              <img src={icons.icon} alt={icons.alt} width={36} height={36}/>
              </a>
          </div>
          </>
        )
   })}
      </div>
    </div>
  );
}

export default Cards;
