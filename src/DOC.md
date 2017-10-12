Problem I use fetch in my reducer to get the number of coments associated with a post. And although the data in the store is correct I am not able to see them in my component

Attempt dispatch a action a use fetch in the reducer
12:53 pm
hey how may i help, you should use action you can call from your component to get the comments
create a get_comments_by_id(id) action that you can call from the components lifecycle method
then a reducer to store comments by parentId