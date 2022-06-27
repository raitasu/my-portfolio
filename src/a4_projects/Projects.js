import React from 'react'
import styles from './Projects.module.scss';
import {Project} from "./project/Project";
import Title from "../common/components/title/Title";
import imgOne from './../assets/images/gallery-photo-1.png'
import imgTwo from '../assets/images/gallery-photo-2.png'
import imgThree from '../assets/images/gallery-photo-3.png'
import imgFour from '../assets/images/gallery-photo-4.png'
import imgFive from '../assets/images/gallery-photo-5.png'
import imgSix from '../assets/images/gallery-photo-6.png'
import imgEight from '../assets/images/gallery-photo-8.png'


function Projects() {
    return (
        <div className={styles.projectsBlock} id='portfolio'>
            <div className={styles.projectsContainer}>
                <Title title={'My portfolio'}/>
                <div className={styles.projects}>
                    <Project
                        title={"Todolist"}
                        img={imgOne}
                        description={"CSS, JavaScript, TypeScript, React, Redux, Material UI,Using TypeScript for best code control,Bug fixing, deploying,Covering code with unit tests."}
                        link={"https://raitasu.github.io/todolist"}/>
                    <Project
                        title={"Counter"}
                        img={imgTwo}
                        description={"My first project with React/Redux/TS.I left It here as a memory."}
                        link={"https://raitasu.github.io/todolist"}/>

                    <Project
                        title={"The social network"}
                        img={imgThree}
                        description={"SCSS,JavaScript,TypeScript,React,Redux,Redux-thunk,Formik,Axios,Reselect,TypeScript,Refactoring,bug fixing,deploying,Organizing correct app architecture; Covering code with unit tests. "}
                        link={"https://raitasu.github.io/sotial-network/"}/>

                    <Project
                        title={"Study Point"}
                        img={imgFour}
                        description={"It was a command work. App for learning some cards"}
                        link={"https://raitasu.github.io/todolist"}/>

                    <Project
                        title={"Midas pizza"}
                        img={imgFive}
                        description={"ReactJS,TypeScript,Redux Toolkit, React Router v6, Axios + Fetch,React Hooks,Prettier,CSS-Modules/SCSS,React Content Loader,React Pagination,Lodash.Debounce,Code Splitting, React Loadable, useWhyDidYouUpdate"}
                        link={"https://raitasu.github.io/midas-pizza"}/>

                    <Project
                        title={"future project"}
                        img={imgSix}
                        description={"...in progress"}
                        link={"link #6"}/>

                    <Project
                        title={"future project"}
                        img={'https://thumbs.dreamstime.com/b/clock-11436808.jpg'}
                        description={"...in progress"}
                        link={"link #1"}/>

                    <Project
                        title={"future project "}
                        img={imgEight}
                        description={"...in progress"}
                        link={"link #2"}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;