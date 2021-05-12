# Burgers-Api
![image](https://user-images.githubusercontent.com/64815326/118039762-14538580-b347-11eb-9b64-d3d9716188d8.png)

https://secret-castle-04661.herokuapp.com

| methood| route |
| ------------- | ------------- |
| `/burgers`  | all burgers  |
| `/:name`  | specific burger |
| `/:ingredient`  | burgers by ingredient |

example:
`/Bacon Double Cheeseburger`

```
"burger": {
   "ingredients": [
       "bacon",
       "American cheese",
       "pickles",
       "yellow mustard",
       "ketchup"
   ],
   "_id": "609b66ca3a294b2ef48555f2",
   "name": "Bacon Double Cheeseburger",
   "image": "https://cdn.sanity.io/images/czqk28jt/prod_bk_us/3dc8729db35e4905f577ba9af065662299415970-1333x1333.png?w=320&q=40&fit=max&auto=format",
   "calories": 404,
   "size": "medium",
   "type": "beef",
   "__v": 0
    }
```
