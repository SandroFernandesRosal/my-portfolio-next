export function api(path: string, init?: RequestInit) {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://api-portfolio-eight.vercel.app'
      : 'http://localhost:3333'

  if (!baseUrl) {
    throw new Error(
      'API URL not configured. Please set NEXT_PUBLIC_API_BASE_URL environment variable.',
    )
  }

  const url = new URL(path, baseUrl)

  // Garantir que credentials seja sempre 'include' para enviar cookies HttpOnly automaticamente
  const options: RequestInit = {
    credentials: 'include',
    ...init,
  }

  // Se for FormData, não definir Content-Type (deixa o navegador fazer)
  if (init?.body instanceof FormData) {
    const existingHeaders = options.headers || {}
    if ('Content-Type' in existingHeaders) {
      const headersWithoutContentType = Object.fromEntries(
        Object.entries(existingHeaders).filter(
          ([key]) => key !== 'Content-Type',
        ),
      )
      options.headers = headersWithoutContentType
    }
  }

  return fetch(url, options)
}
