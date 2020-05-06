# nativeQuery
Typeorm Relacional Model Query

Use example: 

```ts
  import { nativeQuery } from 'nativeQuery';

  const user = await nativeQuery(`
    select 
        name,
        password
    from user 
    where name = $1  and age = $2`
  ,[name, age]);
  return user
```

To filter multiple use: 

```sql
name = ANY($1)

equal 

name in ('eduardo','example')
```
