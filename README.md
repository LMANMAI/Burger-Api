# Burgers-Api
![image](https://user-images.githubusercontent.com/64815326/118039762-14538580-b347-11eb-9b64-d3d9716188d8.png)

#### api-key validation

| End Point| action |
| ------------- | ------------- |
| `/`  | all burgers  |
| `/:burgerID`  | specific burger |
| `/ingredient/:ingredient`  | specific burger with that ingredient |

example:

```
{
    "ingredients": [
        "tomatoes",
        "lettuce",
        "mayonnaise",
        "ketchup",
        "pickles",
        "onions"
    ],
    "_id": "609b5f2c3a294b2ef48555ea",
    "name": "Whopper",
    "image": "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/84743a96a55cb36ef603c512d5b97c9141c40a33-1333x1333.png?w=320&q=40&fit=max&auto=format",
    "calories": 687,
    "size": "big",
    "type": "beef",
    "__v": 0
}
```
