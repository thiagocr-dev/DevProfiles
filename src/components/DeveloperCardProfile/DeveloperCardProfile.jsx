import './DeveloperCardProfile.css'
import { useState } from 'react'
import TechBadge from '../TechBadge/TechBadge'


function DeveloperCardProfile({ developer }) {
    const [isDownloaded, setIsDownloaded] = useState(false)

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = developer.cv;
        link.download = developer.cv.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        setIsDownloaded(true)
        setTimeout(() => setIsDownloaded(false), 4000) // volver a estado dsp de 4 seg
    }

    return (
        <div className="card__profile">
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
            <button
                onClick={handleDownloadCV}
                className={`cv-btn ${isDownloaded ? 'cv-btn--downloaded' : ''}`}>
                {isDownloaded ? '✓ Descargado' : 'Descargar CV'}
            </button>
        </div>
    )
}

export default DeveloperCardProfile