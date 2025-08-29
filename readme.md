## question answered
1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?<br>

   Ans:- getElementById: search and select id from element.<br>
         getElementsByClassName: select all element which have same class name.<br>
         querySelector: select first element which match with css selector.<br>
         querySelectorAll: select all element which match with css selector as node list.
    ---
2. How do you **create and insert a new element into the DOM**?<br>

   Ans: first will create a new element using(document.createElement"") and then  will and text after that (document.parent.appendchild())
   ---
        
3. What is **Event Bubbling** and how does it work?<br>

   Ans: if any event happens like click it bubble from the inner child which is clickd child>parent>parent>parent.
   ---

4. What is **Event Delegation** in JavaScript? Why is it useful?<br>

Ans: Event Delegation is  giving event in the  parent element
of child instant of giving separate event in multiple child element.
---
5. What is the difference between **preventDefault() and stopPropagation()** methods?<br>
   Ans: preventDefault(): it stops the default behavior<br>
        stopPropagation() it stops the event bubbling.
          ---