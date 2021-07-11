import React, { useState } from 'react'
import SelectedProjects from '../../components/SelectedProjects/SelectedProjects'

export default function ApartamentsSelectedProjects() {
    const [projects,setProjects] = useState([
        {
            projectTitle:"House of Parties",
            url:"../images/selected-project1.png"
        },
        {
            projectTitle:"SB House",
            url:"../images/selected-project2.png"
        },
        {
            projectTitle:"House of Parties",
            url:"../images/selected-project1.png"
        },
        {
            projectTitle:"F House",
            url:"../images/selected-project3.png"
        },
        {
            projectTitle:"SB House",
            url:"../images/selected-project2.png"
        },
        {
            projectTitle:"F House",
            url:"../images/selected-project3.png"
        },
        {
            projectTitle:"House of Parties",
            url:"../images/selected-project1.png"
        },
        {
            projectTitle:"SB House",
            url:"../images/selected-project2.png"
        },
        {
            projectTitle:"SB House",
            url:"../images/selected-project2.png"
        },
        {
            projectTitle:"F House",
            url:"../images/selected-project3.png"
        },
        {
            projectTitle:"F House",
            url:"../images/selected-project3.png"
        },
        {
            projectTitle:"House of Parties",
            url:"../images/selected-project1.png"
        },
    ])
    const pageInfo = {
        pageName:"Apartaments",
        items:projects,
    }
    return (
        <div className ="apartaments-selected-projects">
            <SelectedProjects pageInfo ={pageInfo}/>
        </div>
    )
}
