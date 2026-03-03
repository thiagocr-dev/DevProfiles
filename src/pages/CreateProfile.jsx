import React, { useState } from 'react'
import { useDevelopers } from '../context/DevelopersContext'
import './CreateProfile.css'

function CreateProfile() {
    const { addDeveloper } = useDevelopers()
    
    const [newName, setNewName] = useState("")
    const [newRole, setNewRole] = useState("")
    const [techs, setTechs] = useState([])
    const [techName, setTechName] = useState("")
    const [techLevel, setTechLevel] = useState(50)
    const [newCv, setNewCv] = useState("")
    const [newAvatar, setNewAvatar] = useState("")
    const [experienceYears, setExperienceYears] = useState(0)
    const [projectsCompleted, setProjectsCompleted] = useState(0)
    const [repositories, setRepositories] = useState(0)
    const [englishLevel, setEnglishLevel] = useState("Básico")

    const handleAddTech = () => {
        if (techName.trim()) {
            setTechs([...techs, { name: techName, level: techLevel }])
            setTechName("")
            setTechLevel(50)
        }
    }

    const handleRemoveTech = (index) => {
        setTechs(techs.filter((_, i) => i !== index))
    }

    const handleAddDeveloper = (e) => {
        e.preventDefault()
        
        if (!newName.trim() || !newRole.trim()) {
            alert("Por favor completa el nombre y el rol")
            return
        }

        if (techs.length === 0) {
            alert("Por favor agrega al menos una tecnología")
            return
        }

        if(experienceYears < 0){
            alert("Por favor ingrese una experiencia válida");
            return;
        }
        if(completedProjects < 0){
            alert("Por favor ingrese una cantidad válida de proyectos completados");
            return;
        }
        if(repositories < 0){
            alert("Por favor ingrese una cantidad válida de repositorios");
            return;
        }
        if(!englishLevel){
            alert("Por favor selecciona un nivel de inglés válido");
            return;
        }
        
        addDeveloper(
            newName, 
            newRole, 
            techs, 
            newCv, 
            newAvatar,
            {
                experience_years: parseInt(experienceYears),
                projects_completed: parseInt(projectsCompleted),
                repositories: parseInt(repositories),
                english_level: englishLevel
            }
        )
        
        setNewName("")
        setNewRole("")
        setTechs([])
        setTechName("")
        setTechLevel(50)
        setNewCv("")
        setNewAvatar("")
        setExperienceYears(0)
        setProjectsCompleted(0)
        setRepositories(0)
        setEnglishLevel("Básico")
        
        alert("Desarrollador agregado exitosamente")
    }

    return (
        <div className="create-profile__container">
            <h1>Crear nuevo perfil de desarrollador</h1>
            
            <form className="create-form" onSubmit={handleAddDeveloper}>
                <div className="form-group">
                    <label htmlFor="name">Nombre completo *</label>
                    <input
                        id="name"
                        type="text"
                        placeholder="Ej: Pepe Gómez"
                        value={newName}
                        onChange={e => setNewName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="role">Rol/Posición *</label>
                    <input
                        id="role"
                        type="text"
                        placeholder="Ej: Frontend Developer"
                        value={newRole}
                        onChange={e => setNewRole(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label>Tecnologías *</label>
                    <div className="tech-input-group">
                        <input
                            type="text"
                            placeholder="Ej: React"
                            value={techName}
                            onChange={e => setTechName(e.target.value)}
                        />
                        <div className="level-input">
                            <input
                                type="range"
                                min="0"
                                max="100"
                                value={techLevel}
                                onChange={e => setTechLevel(parseInt(e.target.value))}
                            />
                            <span className="level-display">{techLevel}%</span>
                        </div>
                        <button type="button" onClick={handleAddTech} className="add-tech-btn">
                            Agregar
                        </button>
                    </div>

                    {techs.length > 0 && (
                        <div className="tech-list">
                            <h4>Tecnologías agregadas:</h4>
                            {techs.map((tech, index) => (
                                <div key={index} className="tech-item">
                                    <span>{tech.name} - {tech.level}%</span>
                                    <button
                                        type="button"
                                        onClick={() => handleRemoveTech(index)}
                                        className="remove-tech-btn"
                                    >
                                        ✕
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="avatar">URL del Avatar</label>
                    <input
                        id="avatar"
                        type="text"
                        placeholder="https://example.com/avatar.jpg"
                        value={newAvatar}
                        onChange={e => setNewAvatar(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="cv">URL del CV</label>
                    <input
                        id="cv"
                        type="text"
                        placeholder="Ej: /cv-juan.pdf"
                        value={newCv}
                        onChange={e => setNewCv(e.target.value)}
                    />
                </div>

                <fieldset className="metrics-fieldset">
                    <legend>Métricas del Desarrollador</legend>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="experience">Años de Experiencia</label>
                            <input
                                id="experience"
                                type="number"
                                min="0"
                                max="50"
                                value={experienceYears}
                                onChange={e => setExperienceYears(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="projects">Proyectos Completados</label>
                            <input
                                id="projects"
                                type="number"
                                min="0"
                                max="999"
                                value={projectsCompleted}
                                onChange={e => setProjectsCompleted(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="repositories">Repositorios</label>
                            <input
                                id="repositories"
                                type="number"
                                min="0"
                                max="999"
                                value={repositories}
                                onChange={e => setRepositories(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="english">Nivel de Inglés</label>
                            <select
                                id="english"
                                value={englishLevel}
                                onChange={e => setEnglishLevel(e.target.value)}
                            >
                                <option>Básico</option>
                                <option>Intermedio</option>
                                <option>Avanzado</option>
                                <option>Fluido</option>
                            </select>
                        </div>
                    </div>
                </fieldset>

                <button type="submit" className="submit-btn">
                    Crear desarrollador
                </button>
            </form>
        </div>
    )
}

export default CreateProfile
