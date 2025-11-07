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

  // Garantir que credentials seja sempre 'include' para enviar cookies
  const options: RequestInit = {
    credentials: 'include',
    ...init,
  }

  // Adicionar token via header para todas as rotas autenticadas
  if (
    path.includes('/auth/') ||
    path.includes('/upload/') ||
    path.includes('/projects') ||
    path.includes('/admin')
  ) {
    // Pegar token do cookie (apenas no cliente)
    if (typeof window !== 'undefined') {
      const cookies = document.cookie
      const tokenMatch = cookies.match(/token=([^;]+)/)

      if (tokenMatch) {
        // Se for FormData, não definir Content-Type (deixa o navegador fazer)
        const isFormData = init?.body instanceof FormData
        const existingHeaders = options.headers || {}
        
        // Remover Content-Type se for FormData (navegador define automaticamente)
        if (isFormData && 'Content-Type' in existingHeaders) {
          const { 'Content-Type': _, ...headersWithoutContentType } = existingHeaders as Record<string, string>
          options.headers = {
            ...headersWithoutContentType,
            Authorization: `Bearer ${tokenMatch[1]}`,
          }
        } else {
          options.headers = {
            ...existingHeaders,
            Authorization: `Bearer ${tokenMatch[1]}`,
          }
        }
      }
    }
  }

  return fetch(url, options)
}
