import { reset, seed } from 'drizzle-seed'
import { db, sql } from './connection.ts'
import { schema } from './schema/index.ts'

await reset(db, schema)
await seed(db, schema).refine((f) => {
  return {
    rooms: {
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
      count: 5,
    },
    questions: {
      count: 20,
    },
  }
})
await sql.end()
