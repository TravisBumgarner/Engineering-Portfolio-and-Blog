import content from './content.json'
import { z } from 'zod'
console.log('ruda', content)

const linkSchema = z.object({
  label: z.string(),
  src: z.string()
})

const imageSchema = z.object({
  label: z.string(),
  src: z.string()
})

const projectSchema = z.object({
  title: z.string(),
  id: z.string(),
  description: z.string(),
  lastMeaningfulUpdate: z.string().regex(/^\d{4}-\d{2}$/),
  images: z.array(imageSchema),
  links: z.array(linkSchema),
  previewImage: imageSchema
})

const projectsSchema = z.record(z.string(), projectSchema)

const parsedContent = projectsSchema.parse(content)

export default parsedContent
