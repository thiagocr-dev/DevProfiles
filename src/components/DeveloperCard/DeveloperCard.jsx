import './DeveloperCard.css'
import { Link, useNavigate } from "react-router"
import TechBadge from "../TechBadge/TechBadge"

function DeveloperCard({ developer }) {
    const navigate = useNavigate()
    
    // Determine gradient class based on primary tech
    const primaryTech = developer.tech[0]?.name?.toLowerCase() || ''
    let glowClass = 'glow-default'
    if (primaryTech.includes('react')) glowClass = 'glow-react'
    else if (primaryTech.includes('node') || primaryTech.includes('mongo') || primaryTech.includes('vue')) glowClass = 'glow-node'
    else if (primaryTech.includes('angular') || primaryTech.includes('aws') || primaryTech.includes('java')) glowClass = 'glow-angular'
    else if (primaryTech.includes('python') || primaryTech.includes('data')) glowClass = 'glow-python'

    return (
        <div className={`card ${glowClass}`} onClick={() => navigate(`/profile/${developer.id}`)}>
            <img
                src={developer.avatar}
                alt={developer.name}
                className="avatar"
                onError={(e) => { e.target.onerror = null; e.target.src = "https://via.placeholder.com/80" }}
            />
            <h3 className="name">{developer.name}</h3>
            <p className='role'>{developer.role}</p>

            <div className="tech-badges">
                {developer.tech.map((tech, index) => (
                    <TechBadge key={index} tech={tech} />
                ))}
            </div>

            <div className="card-footer">
                <div className="card-stats">
                    <span>Experiencia: {developer.metrics?.experience_years || 0} años</span>
                    <span>Proyectos: {developer.metrics?.projects_completed || 0}</span>
                </div>
                <Link to={`/profile/${developer.id}`} className="profile-btn" onClick={(e) => e.stopPropagation()}>Ver Perfil ↗</Link>
            </div>
        </div>
    )
}

export default DeveloperCard