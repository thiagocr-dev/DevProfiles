import "./Home.css"
import { useState } from "react"
import { FiSearch, FiFilter } from "react-icons/fi"
import DeveloperCard from "../components/DeveloperCard/DeveloperCard"
import { useDevelopers } from "../context/DevelopersContext"


function Home({profiles}){

    const { devs } = useDevelopers()
    const [search, setSearch] = useState("")
    const [selectedTech, setSelectedTech] = useState("Todos");
    const allTechs = ["Todos", ...new Set(devs.flatMap(dev => dev.tech.map(t => t.name)))]

    const filteredDevelopers = 
    devs.filter(dev => {
        const searchLower = search.toLowerCase();

        const MatchSearch =
            dev.name.toLowerCase().includes(searchLower)
            ||
            dev.role.toLowerCase().includes(searchLower)
            ||
                dev.tech.some(tech => 
                tech.name.toLowerCase().includes(searchLower)
            )
        const matchTech = 
            selectedTech === "Todos" 
            || 
            dev.tech.some(t => t.name === selectedTech);
            return matchTech && MatchSearch
        })
    
    return(
    
        <div className="home__container">
            <section className="home__leyend">
                <h1 className="title">Descubre desarrolladores</h1>
                <p className="subtitle">Explora perfiles y conecta con talento tech</p>
            </section>
            
            <div className="search-container">
                <FiSearch className="search-icon" />
                <input 
                    type="text"
                    placeholder="Buscar desarrollador..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="search-input"
                />
            </div>

            <div className="tech-filter-container">
                <div className="tech-filter">
                    <label htmlFor="tech-select" className="tech-filter-label">
                        <FiFilter className="filter-icon" /> Filtrar por tecnología
                    </label>
                    <div className="filter-controls">
                        <select
                            id="tech-select"
                            value={selectedTech}
                            onChange={e => setSelectedTech(e.target.value)}
                            className="tech-filter-select"
                        >
                            {allTechs.map((tech, index) => (
                                <option key={index} value={tech}>{tech}</option>
                            ))}
                        </select>
                        <div className="filter-pills">
                            {["React", "Node.js", "Python", "Seniority", "Location"].map((pill, idx) => (
                                <button 
                                    key={idx} 
                                    className={`filter-pill ${selectedTech === pill ? 'active' : ''}`}
                                    onClick={() => setSelectedTech(pill)}
                                >
                                    [{pill}]
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
                <div className="cards-container">
                    {filteredDevelopers.length > 0 ? (
                        filteredDevelopers.map((dev) => (
                            <DeveloperCard key={dev.id} developer={dev} />
                        ))
                    ) : (
                        <p className="no-results">No se encontraron desarrolladores</p>
                    )}
                </div>
            </div>
    )
}

export default Home