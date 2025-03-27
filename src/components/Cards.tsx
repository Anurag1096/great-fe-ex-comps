import React from "react";
import "./styles.css";
function Cards() {
  const person={
    image:'/profile-thumbnail.png',
    name:'Sarah Doel',
    title:'Front End Engineer @ Microsoft',
    about:'I turn coffee into bugs which are fixed by someone else. Certified Stack Overflow and ChatGPT developer.'
  }

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
        <div><button>
          button
          </button>        

      </div>

      <div>
        social media icons
      </div>
    </div>
    </div>
  );
}

export default Cards;
