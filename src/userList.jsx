import './userList.module.css'

import { useEffect, useState } from 'react'
import { api } from './api/api'

function UserList() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        async function fetchUsers(){
            try {
                const response = await api.get('/users')
                setUsers(response.data)
                // console.log(response.data)
            } catch (error) {
                setError('Erro ao carregar usuários', error)
            } finally {
                setLoading(false)
            }
        }
        fetchUsers()
    }, [])

    if (loading) return <p>Carregando usuarios...</p>
    if (error) return <p>{error}</p>

    return(
        <div style={{padding: '2rem'}}>
            <h1>Lista de usuários</h1>
            <ul>
                {users.map((item) => (
                    <li key={item.id}>
                    <strong>{item.name}</strong> - <i>{item.email}</i>
                </li>
                ))}
            </ul>
        </div>
    )
}

export default UserList