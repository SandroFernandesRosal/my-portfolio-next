import { Suspense } from 'react'

import { CurrentSearch } from './current-search'

export default function SearchLoading() {
  return (
    <div className="flex flex-col gap-4 px-8">
      <Suspense fallback={<p>loading...</p>}>
        <CurrentSearch />
      </Suspense>

      <div>Loading...</div>
    </div>
  )
}
