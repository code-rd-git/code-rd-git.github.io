import {createJobsCard ,createProjectsCard, createSkillsCard} from './js/component.js'

const HTML_JOB = document.getElementById('job')
const HTML_PROJECT = document.getElementById('project')
const HTML_TECH = document.getElementById('tech')

if (HTML_TECH) fetch('./resource/technologies.json')
    .then(response => response.json())
    .then(data => HTML_TECH.innerHTML = data.map(createSkillsCard).toString().replaceAll(',', ''))

if (HTML_PROJECT) fetch('./resource/projects.json')
    .then(response => response.json())
    .then(data => HTML_PROJECT.innerHTML = data.map(createProjectsCard).toString().replaceAll(',', ''))

if (HTML_JOB) fetch('./resource/jobs.json')
    .then(response => response.json())
    .then(data => HTML_JOB.innerHTML = data.map(createJobsCard).toString().replaceAll(',', ''))
