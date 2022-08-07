---
title: "File: Object to INI"
num: 10
---

Converts a properly formatted Object into an INI file. The Object needs to be a nested object, with each object inside being a section of the INI file.

| Box Name | Type | Description | 
|-------|--------|--------
|Object Name|String|Nested object to convert into the INI file.
|File Path|String|File to save the object content. Can use relative or absolute path.
{:class='table table-primary'}

{% include alert.html text="The only way to create a nested object is with the command [Parse Array/Object]({{ "/commands/object#parsearrayobject" | relative_url }}) or with [File: INI to File](#fileinitoobject)." type="warning" %} 

<table class="table table-secondary w-auto table-hover align-middle">
   <thead>
      <tr>
         <th>File</th>
         <th>Object Returned</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <code>
               <pre>
{
  names: {
    follower1:"Christinna",
    follower2:"Roadie"
  },
  Points: {
    follower1:20,
    follower2:12
  }
}
       </pre>
            </code>
         </td>
         <td>
            <code>
               <pre>
[names]
follower1="Christinna"
follower2="Roadie"
[Points]
follower1="20.000000"
follower2="12.000000"
       </pre>
            </code>
         </td>
      </tr>
   </tbody>
</table>
