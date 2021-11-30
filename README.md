# the-registry-backend
## The Registry Backend
This project serves as a simple backend designed to work "The Registry" application . This server receives "Registry" entries and Etsy API.

List of Dependencies
* Cors
* Dotenv
* Express
* Mongoose
* Morgan
* axios
* bcrypt | jws token | 

## Database
This project is configured to connect to a MongoDB database using Mongoose.


### Registry Model
Schema for Holiday and Wedding Items  | 
------------- | 
itemName: String  | 
itemDescription: String |
itemUrl: String |
username: String |

Schema for User  | 
------------- | 
username: String  | 
password: String |


### Route Order:
URL | HTTP Verb | Action | Notes
| :---: | :---: | :---: | :---: |
/hol-registry/ | GET | index | This route shows a list or index of all holiday items. |
/hol-registry/ | POST | new | a CREATE route. |
/hol-registry/:id | PUT | update | an UPDATE route |
/hol-registry/:id | DELETE | destroy | This routes deletes entries from Database. |
/wed-registry/ | GET | index | This route shows a list or index of all holiday items. |
/wed-registry/ | POST | new | a CREATE route. |
/wed-registry/:id | PUT | update | an UPDATE route |
/wed-registry/:id | DELETE | destroy | This routes deletes entries from Database. |
/signup/ | POST | new | a CREATE User Account route. |
/login/ | POST | new | a  Login User Account route. |

## Deployment
Requires the Heroku CLI client.
https://the-registry.herokuapp.com/


### Usage
[Front-End Git Hub](https://github.com/katiepestotnik/the-registry-frontend "Front-End GitHub") and 
[Live Link](https://the-registry.netlify.app/ "Deployed Project")

