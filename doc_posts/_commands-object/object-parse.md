---
title: "Parse Array/Object"
num: 8
---

Turns a JSON string into an array/object. Must be properly formatted (SAMMI will give you a warning if it finds any formatting errors).\
This way you can easily create a prepopulated object/array, as it supports nesting.\
Read more about JSON syntax at [w3schools.com](https://www.w3schools.com/js/js_json_syntax.asp).

{% include alert.html text="Parsing an array that's directly within another array is not supported." type="warning" %}

| Box Name | Type | Description |
|-------|--------|--------
|Array/Object Name	| String | Name of the variable to save the parsed array/object into
|String Array/JSON	| JSON String | JSON string to parse
{:class='table table-primary'}

<table class="table table-secondary w-auto table-hover align-middle">
   <thead>
      <tr>
         <th>JSON string before conversion</th>
         <th>Result saved in the variable</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>
            <span class="user-select-all">
               <code>
                  <pre>
{
   "Lioran":"blue",
   "Melonax":"orange",
   "Sebas":"red"
}
    </pre>
               </code>
            </span>
         </td>
         <td><img src="/docs/assets/images/commands-object/object-parse2.png" class="img-fluid rounded w-100" alt="Parsed JSON string"></td>
      </tr>
      <tr>
         <td>
            <code>
               <pre>
{
   "Names":{
      "Lioran":"blue",
      "Melonax":"orange",
      "Sebas":"red"
   },
   "randomNumbers":[
      1,
      8,
      9,
      15
   ],
   "singleValue":"Hello World"
}
       </pre>
            </code>
         </td>
         <td>
            <span class="embed-responsive mb-3">
               <video onclick="this.paused ? this.play() : this.pause()" controls="true" class="embed-responsive-item video" width="100%" src="/docs/assets/videos/commands-object/object-parse.mp4" title="Parsed JSON string" frameborder="0" allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></video>
            </span>
         </td>
      </tr>
   </tbody>
</table>
