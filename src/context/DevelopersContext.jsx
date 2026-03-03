import { createContext, useContext, useState } from 'react'
import developers from '../data/developers'

const DevelopersContext = createContext()

export function DevelopersProvider({ children }) {
    const [devs, setDevs] = useState(developers)

    const addDeveloper = (name, role, techs, cv, avatar, metrics) => {
        const nextId = devs.length > 0 ? Math.max(...devs.map(d => d.id)) + 1 : 1
        
        let techArray = Array.isArray(techs) 
            ? techs 
            : techs
                .split(',')
                .map(t => ({ name: t.trim(), level: 0 }))
                .filter(t => t.name.length > 0)

        const newDev = {
            id: nextId,
            name,
            role,
            tech: techArray,
            avatar: avatar || 'https://via.placeholder.com/80',
            bio: '',
            metrics: metrics || {
                experience_years: 0,
                projects_completed: 0,
                repositories: 0,
                english_level: '',
            },
            cv: cv || '',
        }

        setDevs([...devs, newDev])
    }

    const deleteDeveloper = (id) => {
        setDevs(devs.filter(dev => dev.id !== id))
    }

    const updateDeveloper = (id, updatedData) => {
        setDevs(devs.map(dev => dev.id === id ? { ...dev, ...updatedData } : dev))
    }

    return (
        <DevelopersContext.Provider value={{ devs, addDeveloper, deleteDeveloper, updateDeveloper }}>
            {children}
        </DevelopersContext.Provider>
    )
}

export function useDevelopers() {
    const context = useContext(DevelopersContext)
    if (!context) {
        throw new Error('useDevelopers debe usarse dentro de DevelopersProvider')
    }
    return context
}
