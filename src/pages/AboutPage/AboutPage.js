import React from 'react';
import { useParams } from 'react-router-dom';
import { CONTENST } from '../../components/Contents';
import "./About.css"
function AboutPage(props) {
  const { id } = useParams();
  const filteredProject = CONTENST.filter(thisProject => thisProject.id === id);
  console.log(filteredProject)
  return (
    <p className='about'>
      <b>
        Hi i'm {filteredProject[0].name}.
      </b>
       &nbsp;Im {filteredProject[0].age} years old.
    </p>
  )
}

export default AboutPage;