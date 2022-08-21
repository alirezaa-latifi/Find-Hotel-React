# Find Hotel (JS Version)

It's an assignment for a job interview, bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


#### Business requirements :
- must be able to Add and delete rooms.
- Inside each room, must be able to specify the number of adults and children.
- By adding each child, a select box must show up for determining the child's age.
- Must display the number of guests and rooms on the search button.
- By pressing the search button, a serialized string must be logged on the console which contains user-entered data.

The rules for the output format are the following:
- Rooms are separated by pipe `|`
- Adults and children are separated by colon `:`
- Children ages are separated by comma `,`
For example `"1:4,6|3"` means Two rooms, one with one adult and two children ages four and six and the other with three adults and no
children.

#### Functional Requirements: 
- Up to eight rooms can be added
- Each room has at least one adult and up to a maximum of five.
- Each room has zero or more children up to a maximum of three.
- Each child needs to have their age supplied, so we know what kind of bed or cot to provide and what to charge for the room.
- Each room has a maximum occupancy of five. This is, adults plus children per room.


## Screenshots
![find-hotel1](https://user-images.githubusercontent.com/92823582/185799165-b0c10b64-e899-4ef7-8c0b-e9aa49cfd4e2.png)



## Lessons Learned
I've learned a lot throughout this project, First I started with the wrong approach and got stuck in an infinite loop because of **duplicating data in states of different components**. after studying for a whole day and gaining a better understanding of **component lifecycle**, **re-rendering**, **useState**, and **useEffect**, I eventually improved the approach and finished the project.

In the end, I changed JS codes to TS and did my first experience working with **TypeScript**.

## Demo
https://alirezaa-latifi.github.io/Find-Hotel-React/

## Contact Me

l.alirezalatifi@gmail.com

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/alirezalatifi/)
