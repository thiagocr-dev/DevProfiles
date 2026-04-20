import React, { useState } from 'react'
import { useDevelopers } from '../context/DevelopersContext'
import { useNavigate } from 'react-router'
import { FaUser, FaBriefcase, FaCode, FaPlus, FaCamera, FaFilePdf, FaGithub, FaLanguage } from 'react-icons/fa'
import { HiOutlineCube, HiOutlineChartBar, HiOutlineBadgeCheck } from 'react-icons/hi'
import './CreateProfile.css'
import '../pages/Login.css' // Reusing background decoration styles

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
        <div className="create-profile-wrapper">
            {/* Background Decorations */}
            <div className="bg-glow blob-1"></div>
            <div className="bg-glow blob-2"></div>
            
            <div className="bg-item cube-1"><HiOutlineCube /></div>
            <div className="bg-item cube-2"><HiOutlineCube /></div>
            <div className="bg-item cube-3"><HiOutlineCube /></div>
            <div className="bg-item cube-4"><HiOutlineCube /></div>

            <div className="create-profile__container">
                <h1 className="main-title">Crear nuevo perfil de desarrollador</h1>

                <form className="create-form" onSubmit={handleAddDeveloper}>
                    {/* Basic Info Section */}
                    <div className="form-section-card">
                        <div className="section-header">
                            <FaUser className="section-icon" />
                            <h2>Información Básica</h2>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">Nombre completo *</label>
                                <div className="input-with-icon">
                                    <FaUser className="inner-icon" />
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Ej: Pepe Gómez"
                                        value={newName}
                                        onChange={e => setNewName(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="role">Rol/Posición *</label>
                                <div className="input-with-icon">
                                    <FaBriefcase className="inner-icon" />
                                    <input
                                        id="role"
                                        type="text"
                                        placeholder="Ej: Frontend Developer"
                                        value={newRole}
                                        onChange={e => setNewRole(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills & Tech Section */}
                    <div className="form-section-card">
                        <div className="section-header">
                            <HiOutlineBadgeCheck className="section-icon" />
                            <h2>Skills & Tech</h2>
                        </div>
                        <div className="form-group">
                            <label>Tecnologías *</label>
                            <div className="tech-adder-group">
                                <div className="input-with-icon flex-grow">
                                    <FaCode className="inner-icon" />
                                    <input
                                        type="text"
                                        placeholder="Ej: React"
                                        value={techName}
                                        onChange={e => setTechName(e.target.value)}
                                    />
                                </div>
                                <div className="level-slider-container">
                                    <input
                                        type="range"
                                        min="0"
                                        max="100"
                                        value={techLevel}
                                        onChange={e => setTechLevel(parseInt(e.target.value))}
                                        className="neon-slider"
                                    />
                                    <span className="level-badge">{techLevel}%</span>
                                </div>
                                <button type="button" onClick={handleAddTech} className="add-tech-btn">
                                    <FaPlus /> Añadir Tecnología
                                </button>
                            </div>

                            {techs.length > 0 && (
                                <div className="tech-tags-container">
                                    {techs.map((tech, index) => (
                                        <div key={index} className="tech-tag">
                                            <span>{tech.name} <small>{tech.level}%</small></span>
                                            <button
                                                type="button"
                                                onClick={() => handleRemoveTech(index)}
                                                className="tag-remove"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Portfolio & Metrics */}
                    <div className="form-section-card">
                        <div className="section-header">
                            <HiOutlineChartBar className="section-icon" />
                            <h2>Portafolio & Métricas</h2>
                        </div>
                        
                        <div className="upload-row">
                            <div className="upload-box" onClick={() => document.getElementById('avatar').click()}>
                                <FaCamera className="upload-icon" />
                                <div className="upload-text">
                                    <span>Subir foto de perfil</span>
                                    <small>{avatarFileName || 'avatar.png'}</small>
                                </div>
                                <input id="avatar" type="file" accept="image/*" onChange={handleImageUpload} className="hidden-input" />
                            </div>

                            <div className="upload-box" onClick={() => document.getElementById('cv').click()}>
                                <FaFilePdf className="upload-icon" />
                                <div className="upload-text">
                                    <span>Subir CV (PDF)</span>
                                    <small>{cvFileName || 'Documento.pdf'}</small>
                                </div>
                                <input id="cv" type="file" accept=".pdf,application/pdf" onChange={handleCvUpload} className="hidden-input" />
                            </div>
                        </div>

                        <div className="metrics-grid">
                            <div className="metric-input-card">
                                <FaBriefcase className="card-icon" />
                                <div className="card-content">
                                    <h3>+{experienceYears}</h3>
                                    <p>Años de Experiencia</p>
                                    <input type="number" min="0" value={experienceYears} onChange={e => setExperienceYears(e.target.value)} />
                                </div>
                            </div>

                            <div className="metric-input-card">
                                <FaCode className="card-icon" />
                                <div className="card-content">
                                    <h3>{projectsCompleted}</h3>
                                    <p>Proyectos Completados</p>
                                    <input type="number" min="0" value={projectsCompleted} onChange={e => setProjectsCompleted(e.target.value)} />
                                </div>
                            </div>

                            <div className="metric-input-card">
                                <FaGithub className="card-icon" />
                                <div className="card-content">
                                    <h3>{repositories}</h3>
                                    <p>Repositorios</p>
                                    <input type="number" min="0" value={repositories} onChange={e => setRepositories(e.target.value)} />
                                </div>
                            </div>

                            <div className="metric-input-card">
                                <FaLanguage className="card-icon" />
                                <div className="card-content">
                                    <h3>{englishLevel}</h3>
                                    <p>Nivel de Inglés</p>
                                    <select value={englishLevel} onChange={e => setEnglishLevel(e.target.value)}>
                                        <option>Básico</option>
                                        <option>Intermedio</option>
                                        <option>Avanzado</option>
                                        <option>Fluido</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="submit" className="main-submit-btn">
                        Crear desarrollador
                    </button>
                </form>
            </div>
        </div>
    )
}

export default CreateProfile
