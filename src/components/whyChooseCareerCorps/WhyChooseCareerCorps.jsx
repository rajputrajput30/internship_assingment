import React from 'react'
import './whyChooseCareerCorps.css'
import ProgramsDetails from './Programs_details/ProgramsDetails'
import rectangle from './../../images/Rectangle.png'
import BestsellerCareerDevelopmentPrograms_grid from './bestsellerCareerDevelopmentPrograms_grid/BestsellerCareerDevelopmentPrograms_grid'

import rec1 from './../../images/Rectangle3.png'
import rec2 from './../../images/Rectangle2.png'
import rec3 from './../../images/Rectangle1.png'


const WhyChooseCareerCorps = () => {
  return (
    <div>
       <div id="main_whyChooseCareerCorps">
              <div id="bestsellerCareerDevelopmentPrograms">
                     <h1><span>Bestseller</span> Career Development Programs</h1>
                     <div id="bestsellerCareerDevelopmentPrograms_Programs">
                            <ProgramsDetails img={rectangle} name="Full Stack"/>
                            <ProgramsDetails img={rectangle} name="Blockchain"/>
                            <ProgramsDetails img={rectangle} name="Human Resources"/>
                     </div>
                     <div id="bestsellerCareerDevelopmentPrograms_grid">
                            <h1>Why choose <br /> <span>Career Corps?</span> </h1>
                            <BestsellerCareerDevelopmentPrograms_grid img={rec1} name="Placement Guarentee" />
                            <BestsellerCareerDevelopmentPrograms_grid img={rec2} name="Way of learning"/>
                            <BestsellerCareerDevelopmentPrograms_grid img={rec3} name="Alumni support" />
                     </div>
              </div>
       </div>
      
    </div>
  )
}

export default WhyChooseCareerCorps
