import { GoogleGenerativeAI } from '@google/generative-ai'

if (!process.env.GEMINI_API_KEY) {
  throw new Error('GEMINI_API_KEY is not defined')
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)

// Модели
export const MODELS = {
  FLASH: 'gemini-2.0-flash-exp',
  EMBEDDING: 'text-embedding-004',
} as const

/**
 * Генерация текста через Gemini 2.0 Flash
 */
export async function generateText(prompt: string, options?: {
  model?: string
  temperature?: number
  maxTokens?: number
}) {
  const model = genAI.getGenerativeModel({
    model: options?.model || MODELS.FLASH,
    generationConfig: {
      temperature: options?.temperature || 0.7,
      maxOutputTokens: options?.maxTokens || 2048,
    },
  })

  const result = await model.generateContent(prompt)
  return result.response.text()
}

/**
 * Streaming генерация (для чатов)
 */
export async function* generateTextStream(prompt: string) {
  const model = genAI.getGenerativeModel({ model: MODELS.FLASH })

  const result = await model.generateContentStream(prompt)

  for await (const chunk of result.stream) {
    yield chunk.text()
  }
}

/**
 * Генерация JSON (structured output)
 */
export async function generateJSON<T>(prompt: string, schema?: string): Promise<T> {
  const fullPrompt = schema
    ? `${prompt}\n\nОТВЕТ СТРОГО В ФОРМАТЕ JSON:\n${schema}`
    : `${prompt}\n\nОТВЕТ СТРОГО В ФОРМАТЕ JSON (без markdown, без дополнительного текста).`

  const result = await generateText(fullPrompt, { temperature: 0.3 })

  // Очистка от markdown ```json и ```
  const cleaned = result.replace(/```json\n?/g, '').replace(/```\n?/g, '').trim()

  try {
    return JSON.parse(cleaned) as T
  } catch {
    console.error('Failed to parse JSON:', cleaned)
    throw new Error('Failed to parse AI response as JSON')
  }
}

export default genAI

