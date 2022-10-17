---
title: Errors
num: 3
---

If there's any issue with your request, SAMMI will reply with the appropriate HTTP status, error code and description. 

Error response format:

```
{
    Error: {Short Error Code}, 
    Description: {More detailed information about the error}
}
```

{% include alert.html text="This is not an exhaustive list of all possible response messages." type="warning" %} 

**400 Bad Request**

| Error  | Description | 
|-------|--------|
|Malformed request body | Malformed request body. The provided JSON string is invalid.
|Request is missing.| No request key in the request body was found.
|Required parameter is missing.| Request body is missing the following required parameters: {requiredParams}
|Incorrect parameter type. |Request body supplied an incorrect parameter type for {requestType}
{:class='table table-primary' }

**401 Unauthorized**

| Error | Description | 
|-------|--------|
Authorization failed. | No authorization header was found or wrong value was provided. Please verify your Authorization header matches your API Password in SAMMI Settings.
{:class='table table-primary' }


**404 Not Found**

| Error | Description | 
|-------|--------|
Endpoint not found. |Hello from SAMMI! Endpoint {endpoint} was not found :( Available endpoints: {endpoints}.
Unsupported request. |Not found. Method {reqMethod} only supports the following requests: {requests}
Button ID not found. |You're trying to trigger a button that does not exist, or is not persistent.
Variable not found. |Variable with the name {varName} does not exist.
{:class='table table-primary'}


**405 Method Not Allowed**

| Error | Description | 
|-------|--------|
Method not supported.| Hello from SAMMI! Endpoint {endpoint} accepts only the following methods: {methods}
{:class='table table-primary' }