# Frontend Engineer Assignment

###This repository contains all the code of this assignment.
##Task: Based on the code below answer the following queries:
* Ques1. Explain what the simple List component does.
* Ques2. What problems / warnings are there with code?
* Ques3. Please fix, optimize, and/or modify the component as much as you think is necessary.

##Solutions:
Ans1. The Simple List Component is the memoized list WrappedListComponent which is taking only one prop item that is available in the array of object where each object must have a text property containing the type of its value as a string, Also it contains a state as selectedState for storing the index of item that was selected.

It contains 4 parameters: text, onClickhandler, index, isSelected

SingleListItem is memoized list item WrappedSingleListItem, contains background Red by default but after selected it turns into Green.
Only one list can be selected at a time.

Ans2. 
* ProtoTypes.shapeOf is not a function
* We cannot call Protypes validators directly as its not supported by prop-types.
* Cannot read properties of null, In useEffect we are passing selectedIndex value null but we cannot traverse it without checking if its null or not.
* setSelectedIndex is not a function, as the position of state is wrong.
* Every Item should contains a unique key.
* The value we are getting for WrappedSingleListItem prop isSlected is type of boolean and on the other hand selectedIndex is type of number.

Ans3. 

![1](https://user-images.githubusercontent.com/80885005/192575497-5d2fb5a9-22ce-4be8-bf5a-fba3c06e2824.png)
![2](https://user-images.githubusercontent.com/80885005/192575569-df3e9cec-e2ae-43d8-83a2-4d9d492d3957.png)
![3](https://user-images.githubusercontent.com/80885005/192575580-b3faa081-8bfb-42f0-aefd-0e02bbda0d9c.png)
![4](https://user-images.githubusercontent.com/80885005/192575594-28ebc77b-d453-4116-ac52-466fde5994e9.png)


##Passed array of items into WrappedListComponent.defaultProps with text and id
