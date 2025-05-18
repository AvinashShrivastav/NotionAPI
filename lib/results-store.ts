// Using a Map instead of a plain object for better key management
const resultsMap = new Map<string, any>()

// Set a result with an expiration time (default 30 minutes)
export const setResult = (id: string, result: any) => {
  resultsMap.set(id, {
    ...result,
    createdAt: Date.now(),
  })
}

// Update an existing result
export const updateResult = (id: string, update: any) => {
  const existing = resultsMap.get(id)
  if (existing) {
    resultsMap.set(id, { ...existing, ...update })
  }
}

// Get a result, with optional cleanup for expired results
export const getResult = (id: string) => {
  const result = resultsMap.get(id)

  // If no result found, return null
  if (!result) {
    return null
  }

  // Check if result has expired (30 minutes)
  const MAX_AGE = 30 * 60 * 1000 // 30 minutes in milliseconds
  if (Date.now() - result.createdAt > MAX_AGE) {
    resultsMap.delete(id)
    return null
  }

  return result
}

// For debugging - get all results (don't expose this in production)
export const getAllResults = () => {
  return Array.from(resultsMap.entries()).map(([id, data]) => ({
    id,
    status: data.status,
    createdAt: new Date(data.createdAt).toISOString(),
  }))
}
