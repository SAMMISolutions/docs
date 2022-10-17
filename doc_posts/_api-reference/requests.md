---
title: Requests
num: 2
---

#### Get Variable
Request a variable and return its value.\
Method: `GET`\
Request: `getVariable`

| Parameter Name |  Required | Type | Description
|-------|--------|--------|
| name | yes | String | Name of the variable to retrieve 
| buttonID | no | String | Button ID. Defaults to global variable if none supplied.
{:class='table table-primary' }

**Example**\
Request URI: `localhost:9450/api?request=getVariable&name=Architecture`\
Response:
```
{
    "data": "x64"
}
```

#### Get Deck Status
Request a deck status.\
Method: `GET`\
Request: `getDeckStatus`

| Parameter Name |  Required | Type | Description
|-------|--------|--------|
| deckID | yes | String | ID of the deck (Deck name not supported)
{:class='table table-primary' }

**Example**\
Request URI: `localhost:9450/api?request=getDeckStatus&deckID=20221014032126860893584`\
Response:
```
{
    "data": true
}
```

#### Set Variable
Set a global or button variable.\
Method: `POST`\
Request: `setVariable`

| Parameter Name |  Required | Type | Description
|-------|--------|--------|
| name | yes | String | Name of the variable
| value | yes | Int/String/Array/Object | Value to set the variable to
| buttonID | no | String | Button ID. Defaults to global variable if none supplied.
{:class='table table-primary' }

**Example**\
Request URI: `localhost:9450/api`\
Request Body: 
```
{
"request": "setVariable",
"name": "myVariable",
"value": "Hello World",
"buttonID": "ID19"
}
```

#### Delete a variable
Deletes a variable.\
Method: `POST`\
Request: `deleteVariable`

| Parameter Name |  Required | Type | Description
|-------|--------|--------|
| name | yes | String | Variable name to delete
| buttonID | no | String | Button ID. Defaults to global variable if none supplied.
{:class='table table-primary' }

**Example**\
Request URI: `localhost:9450/api`\
Request Body:
```
{
    "request": "deleteVariable",
    "name": "myVariable",
    "buttonID": "ID19"
}
```

#### Insert an array value
Inserts a value into an existing array at a specified position.\
Method: `POST`\
Request: `insertArray`

| Parameter Name |  Required | Type | Description
|-------|--------|--------|
| name | yes | String | Name of the array
| index | yes | Int | Array index to insert the value to
| value | yes | Int/String/Object | The value to insert
| buttonID | no | String | Button ID. Defaults to global variable if none supplied.
{:class='table table-primary' }

**Example**\
Request URI: `localhost:9450/api`\
Request Body:
```
{
	"request": "insertArray",
	"name": "myArray",
	"index": 0,
	"buttonID": "ID19",
	"value": {
		"key": "Hello",
		"key2": "Hello World"
	}
}
```

#### Delete an array value
Deletes an array value at a specified position.\
Method: `POST`\
Request: `deleteArray`

| Parameter Name |  Required | Type | Description
|-------|--------|--------|
| name | yes | String | Name of the array
| index | yes | Int | Array index to delete the value at
| buttonID | no | String | Button ID. Defaults to global variable if none supplied.
{:class='table table-primary' }

**Example**\
Request URI: `localhost:9450/api`\
Request Body:
```
{
	"request": "deleteArray",
	"name": "myArray",
	"index": 0,
	"buttonID": "ID19"
}
```

#### Change deck status
Enable or disable a deck.\
Method: `POST`\
Request: `changeDeckStatus`

| Parameter Name |  Required | Type | Description
|-------|--------|--------|
| deckID | yes | String | ID of the deck (Deck name not supported)
| status | yes | Int | Status - 1 to enable, 0 to disable, 2 to toggle
{:class='table table-primary' }

**Example**\
Request URI: `localhost:9450/api`\
Request Body:
```
{
    "request": "changeDeckStatus",
    "deckID": "20211224163143633002232",
    "status": 1
}
```

#### Trigger a button
Trigger a deck button.\
Method: `POST`\
Request: `triggerButton`

| Parameter Name |  Required | Type | Description
|-------|--------|--------|
| buttonID | yes | String | Button ID to be triggered
{:class='table table-primary' }

**Example**\
Request URI: `localhost:9450/api`\
Request Body:
```
{
    "request": "triggerButton",
    "buttonID": "ID19"
}
```

#### Release a button
Release a deck button.\
Method: `POST`\
Request: `releaseButton`

| Parameter Name |  Required | Type | Description
|-------|--------|--------|
| buttonID | yes | String | Button ID to be released
{:class='table table-primary' }

**Example**\
Request URI: `localhost:9450/api`\
Request Body:
```
{
    "request": "releaseButton",
    "buttonID": "ID19"
}
```

#### Modify a button
Modify an existing button. Do not supply any parameters to reset the button to its original state.\
Method: `POST`\
Request: `modifyButton`

| Parameter Name |  Required | Type | Description
|-------|--------|--------|
| buttonID | yes | String | Button ID to be modified
| text | no | String | Button text
| color | no | Int | Decimal button color (BGR)
| image | no | String | Button image file name
| border | no | Int | 0-7 border size
{:class='table table-primary' }

**Example**\
Request URI: `localhost:9450/api`\
Request Body:
```
{
    "request": "modifyButton",
    "buttonID": "ID19",
    "text": "Hello World",
    "color": 16744576 ,
    "image": "myimage.png",
    "border": 2
}
```

#### Popup message
Display a popup message.\
Method: `POST`\
Request: `popupMessage`

| Parameter Name |  Required | Type | Description
|-------|--------|--------|
| message | yes | String | Message to show
{:class='table table-primary' }

**Example**\
Request URI: `localhost:9450/api`\
Request Body:
```
{
    "request": "popupMessage",
    "message": "Hello World!"
}
```

#### Alert message
Display a yellow alert message.\
Method: `POST`\
Request: `alertMessage`

| Parameter Name |  Required | Type | Description
|-------|--------|--------|
| message | yes | String | Message to show
{:class='table table-primary' }

**Example**\
Request URI: `localhost:9450/api`\
Request Body:
```
{
    "request": "alertMessage",
    "message": "Hello World!"
}
```

#### Notification message
Display a bubble notification message.\
Method: `POST`\
Request: `notificationMessage`

| Parameter Name |  Required | Type | Description
|-------|--------|--------|
| title | yes | String | Title to show
| message | yes | String | Message to show
{:class='table table-primary' }

**Example**\
Request URI: `localhost:9450/api`\
Request Body:
```
{
    "request": "notificationMessage",
    "message": "Hello World!"
}
```