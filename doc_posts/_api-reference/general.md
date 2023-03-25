---
title: General
num: 1
---

The default URI is `localhost:9450/api` for all `GET` and `POST` requests.\
You must pass an `Authorization` header supplying the password if it's enabled in the SAMMI Settings.\
For `GET` requests supply parameters in the URL query, for `POST` requests supply parameters in the request body.

{% include alert.html text="Using C#? <code>System.Net.ServicePointManager.Expect100Continue</code> must be set to <code>false</code> to stop the header “Expect: 100-Continue” from being sent with the request as SAMMI will not handle it properly." type="warning" %} 

#### Available requests

| Request | Method | Description
|-------|--------|--------|
| getVariable| GET | Get a global or button variable
| getDeckStatus | GET | Get the current deck status
| setVariable| POST| Set a global or button variable
| deleteVariable| POST| Delete a variable
| insertArray| POST| Insert a value into an existing array
| deleteArray| POST| Delete a value in an existing array
| changeDeckStatus| POST| Enable, disable or toggle Deck status
| triggerButton| POST| Trigger a button
| releaseButton| POST| Release a button
| modifyButton| POST| Modify button's text, color, border or image
| alertMessage| POST| Send a yellow alert message
| popupMessage| POST| Send a popup message
| notificationMessage| POST| Send a bubble notification message
{:class='table table-primary'}

#### Request formats
Every request must supply `request` parameter either in the URL query for `GET` methods or JSON body for `POST` methods.

**Example getVariable request**:\
URI: `localhost:9450/api?request=getVariable&name=Architecture`

**Example setVariable  request**:\
URI: `localhost:9450/api`\
Request body: 
```
{
    "request": "setVariable",
    "name": "myVariable",
    "value": "Hello World",
    "buttonID": "ID19"
}
```

#### Successful response formats
For successful GET requests, SAMMI replies with: 
```
{
    "data": {REQUESTED DATA}
}
```
For successful POST requests, SAMMI replies with: 
```
{
    "data": "Ok."
}
```

#### Error response formats
If anything goes wrong, SAMMI repplies with the appropriate HTTP status and the following message:
```
{
    "Error": {Short Error Code}, 
    "Description": {More detailed information about the error}
}
```
