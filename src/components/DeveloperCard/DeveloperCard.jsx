import './DeveloperCard.css'
import { Link } from "react-router"
import TechBadge from "../TechBadge/TechBadge"

function DeveloperCard({ developer }) {
    return (
        <div className="card">
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

            <Link to={`/profile/${developer.id}`} className="profile-btn">Ver Perfil</Link>
        </div>
    )
}

export default DeveloperCard