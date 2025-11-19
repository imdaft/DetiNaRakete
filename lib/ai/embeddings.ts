import { GoogleGenerativeAI } from '@google/generative-ai'
import { MODELS } from './gemini'

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!)

/**
 * Генерирует embedding для текста
 * Размерность: 768 (text-embedding-004)
 */
export async function generateEmbedding(text: string): Promise<number[]> {
  const model = genAI.getGenerativeModel({ model: MODELS.EMBEDDING })

  const result = await model.embedContent(text)
  return result.embedding.values
}

/**
 * Генерирует embeddings для массива текстов (батч)
 */
export async function generateEmbeddings(texts: string[]): Promise<number[][]> {
  return Promise.all(texts.map(text => generateEmbedding(text)))
}

/**
 * Вычисляет косинусное сходство между двумя векторами
 */
export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) {
    throw new Error('Vectors must have the same length')
  }

  let dotProduct = 0
  let normA = 0
  let normB = 0

  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i]
    normA += a[i] * a[i]
    normB += b[i] * b[i]
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB))
}

