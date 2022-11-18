---
title: "INI: INI to Object"
num: 9
---

Converts an INI file into an Object. The Object will have each key as the section name and each value as an object with the keys from the INI file.

| Box Name | Type | Description | 
|-------|--------|--------
|Object Name|String|Object to save the INI content.
|File Path|String|File to save into the object. Accepts both relative and absolute path.
{:class='table table-primary'}

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
[names]
follower1="Christinna"
follower2="Roadie"
[Points]
follower1="20.000000"
follower2="12.000000"
       </pre>
            </code>
         </td>
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
      </tr>
   </tbody>
</table>
