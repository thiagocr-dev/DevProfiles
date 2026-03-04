import React, { useState } from 'react'
import { useDevelopers } from '../context/DevelopersContext'
import { useNavigate } from 'react-router'
import './CreateProfile.css'

function CreateProfile() {
    const { addDeveloper } = useDevelopers()
    const navigate = useNavigate()

    const [newName, setNewName] = useState("")
    const [newRole, setNewRole] = useState("")
    const [techs, setTechs] = useState([])
    const [techName, setTechName] = useState("")
    const [techLevel, setTechLevel] = useState(50)
    const [newCv, setNewCv] = useState("")
    const [cvFileName, setCvFileName] = useState("")
    const [newAvatar, setNewAvatar] = useState("")
    const [avatarFileName, setAvatarFileName] = useState("")
    const [experienceYears, setExperienceYears] = useState(0)
    const [projectsCompleted, setProjectsCompleted] = useState(0)
    const [repositories, setRepositories] = useState(0)
    const [englishLevel, setEnglishLevel] = useState("Básico")

    const handleImageUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setAvatarFileName(file.name)
            const reader = new FileReader()
            reader.onloadend = () => {
                setNewAvatar(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleCvUpload = (e) => {
        const file = e.target.files[0]
        if (file) {
            setCvFileName(file.name)
            const reader = new FileReader()
            reader.onloadend = () => {
                setNewCv(reader.result)
            }
            reader.readAsDataURL(file)
        }
    }

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

        if (experienceYears < 0) {
            alert("Por favor ingrese una experiencia válida");
            return;
        }
        if (projectsCompleted < 0) {
            alert("Por favor ingrese una cantidad válida de proyectos completados");
            return;
        }
        if (repositories < 0) {
            alert("Por favor ingrese una cantidad válida de repositorios");
            return;
        }
        if (!englishLevel) {
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
        setCvFileName("")
        setNewAvatar("")
        setAvatarFileName("")
        setExperienceYears(0)
        setProjectsCompleted(0)
        setRepositories(0)
        setEnglishLevel("Básico")

        alert("Desarrollador agregado exitosamente")
        navigate("/")
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
                    <label htmlFor="avatar">Foto de Perfil (Avatar)</label>
                    <div className="file-input-container">
                        <input
                            id="avatar"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="file-input"
                        />
                        <button
                            type="button"
                            className="upload-btn"
                            onClick={() => document.getElementById('avatar').click()}
                        >
                            Subir imagen local
                        </button>
                        {avatarFileName && <span className="file-name">{avatarFileName}</span>}
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="cv">CV en formato PDF (opcional)</label>
                    <div className="file-input-container">
                        <input
                            id="cv"
                            type="file"
                            accept=".pdf,application/pdf"
                            onChange={handleCvUpload}
                            className="file-input"
                        />
                        <button
                            type="button"
                            className="upload-btn"
                            onClick={() => document.getElementById('cv').click()}
                        >
                            Subir CV local
                        </button>
                        {cvFileName && <span className="file-name">{cvFileName}</span>}
                    </div>
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
