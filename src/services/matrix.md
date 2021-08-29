# Matrix

Documentation for the Matrix Service.

This service is interfaced by:
- [Matrix Application](../apps/matrix.md) - A front-end application written in Svelte.
- [Matrix CLI](../cli/matrix.md) - A CLI for quick management of the Matrix database. 

## API

### Collections

Quering collections can be done with:

```graphql
{
    collections(limit: 10) {
        name
        label
    }
}
```

You can also query a single collection.

```graphql
{
    collection(name: "std") {
        label
    }
}
```

### Types

Quering types can be done with:

```graphql
{
    type(name: "std.Person") {
        label
        image
    }
}
```

### Instances

Querying instance data can be done with.

```graphql
{
    instance(ref: "std.Person#00001") {
        
    }
}
```

GraphQL requests will look something like this:

```graphql
{
    types {
        name
        fields {
            name
            type
        }
        instances {
            id
        }
    }
}
```

Will return:

```json
{
    "types": [
        {
            "name": "std.Person",
            "fields": [
                {
                    "name": "surname",
                    "type": "String"
                },
                ...
            ],
            "instances": [
                {
                    "id": "0000001"
                }
            ]
        }
    ]
}
```
