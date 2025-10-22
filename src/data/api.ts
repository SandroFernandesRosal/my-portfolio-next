export function api(path: string, init?: RequestInit) {
  const baseUrl = 'http://localhost:3333'
  const url = new URL(path, baseUrl)

  // Garantir que credentials seja sempre 'include' para enviar cookies
  const options: RequestInit = {
    credentials: 'include',
    ...init,
  }

  // Para rotas de upload, adicionar token via header também
  if (path.includes('/upload/')) {
    // Pegar token do cookie
    const cookies = document.cookie
    const tokenMatch = cookies.match(/token=([^;]+)/)
    if (tokenMatch) {
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${tokenMatch[1]}`,
      }
    }
  }

  return fetch(url, options)
}
