'use client'

import { useEffect, useState } from 'react'
import api from '@/services/api'
import Image from 'next/image'

export interface Repoprops {
  id: number
  name: string
  url: string
  description: string
  created_at: string
  owner: {
    avatar_url: string
    login: string
  }
}

export default function Repos() {
  const [repos, setRepos] = useState([])

  useEffect(() => {
    api
      .get('/users/SandroFernandesRosal/repos')
      .then((response) => {
        setRepos(response.data)
      })
      .catch((error) => {
        console.error('Erro ao buscar repositórios: ', error)
      })
  }, [])

  return (
    <div>
      <ul className="flex flex-wrap gap-4 justify-center">
        {repos.map((repo: Repoprops) => (
          <li
            key={repo.id}
            className="w-[45%] max-w-[250px] h-[300px] bg-bgligh dark:bg-bgdark shadow-shadowlight dark:shadow-shadowdark"
          >
            <Image
              src={repo.owner.avatar_url}
              alt=""
              height={300}
              width={300}
            />
            <h1 className="text-center text-lg">{repo.name}</h1>

            <p>{repo.created_at}</p>
            <p>{repo.owner.login}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
