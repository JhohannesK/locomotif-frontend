import { z } from 'zod'
import { schema } from './schema/validation'

export type Schema = z.infer<typeof schema>
