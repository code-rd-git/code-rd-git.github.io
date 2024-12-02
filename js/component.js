export function createJobsCard(data) 
{
    return `
        <div class="card">
            <img src="${data.image}"/>
            <h1>${data.title}</h1>
            <h3><span class="material-symbols-outlined">calendar_month</span>${data.time.start} - ${data.time.end ?? 'Today'}<h3>
            <h2><a href="${data.society.link}" target="_blank">${data.society.name}</a></h2>
            <p>${data.description}</p>
        </div>
    ` 
}

export function createSkillsCard(data) 
{
    return `
        <a class="card" href="${data.link}" target="_blank" title="Click to access ${data.title} documentation">
            <img src="${data.image}"/>
            <span>${data.title}</span>
        </a>
    ` 
}

export function createProjectsCard(data)
{
    return `
        <div class="card">
            <h1>${data.title}</h1>
            <div>${data.tags.map(tag => `<span class="badge">${tag}</span>`).toString().replaceAll(',', '')}</div>
            <div>
                <a href="${data.repo}" target="_blank">
                    <button>
                        <span class="material-symbols-outlined">open_in_new</span> Show repo
                    </button>
                </a>
                <a  href="${data.link}" target="_blank">
                    <button>
                        <span class="material-symbols-outlined">open_in_new</span> Live demo
                    </button>
                </a>
            </div>
        </div>
    `
}