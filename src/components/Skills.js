import React from 'react';
import SingleSkill from './singleSkill';

const skills = [
    {
        name: 'Reactjs',
        imgPath:'react.png'
    },
    {
        name: 'Node.js',
        imgPath:'nodejs-new-pantone-black.png'
    },
    {
        name: 'MongoDB',
        imgPath: 'mongodb.png'
    },
    {
        name: 'HTML5',
        imgPath:'HTML5_Badge_512.png'
    },
    {
        name: 'CSS3',
        imgPath:'css3.png'
    },
    {
        name: 'jQuery',
        imgPath:'jquery_bumper.sh-340x340.png'
    },
    {
        name: 'Git',
        imgPath: 'git_logo.png'
    },
    {
        name: 'AJAX',
        imgPath: 'AJAX_logo_by_gengns.svg.png'
    },
    {
        name: 'Express',
    },
    {
        name: 'Webpack',
    },
    {
        name: 'Github',
    },
    {
        name: 'NPM',
    },

];

export const Skills = (props) => {
    const createSkill = () => {
        return (
           skills.map((skill) => {
               return <SingleSkill 
               key={skill.name}
               name={skill.name} 
            //    img = {skill.imgPath}
               />
           })
        );
    };

    const createSkillImg = () => {
        return (
            skills.map((skill) => {
                if (skill.imgPath) return <SkillImgs 
                key={skill.name}
                img = {skill.imgPath}
                />
            })
        )
    };

    return(
        <div className='skills-container'>
            <div className='skill-img-container'>
                {createSkillImg()}
            </div>
            <h1 className='skills-heading'>Some of the technologies I have experience with are:</h1>
            <div className='skill-list'>
                {createSkill()}
            </div>
        </div>
    )
}

const SkillImgs = (props) => {
    return (
        <div className='skill-img-wrapper'>
            <img className='skill-img' src={require(`../images/${props.img}`)} alt={props.name} />
        </div>
    );
};

export default Skills;