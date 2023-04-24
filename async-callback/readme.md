## Asynchronous programming

### Callback function: 
 Callback is a function that is passed as an argument to another function that executes the callback based on the result. They are basically functions that are executed only after a result is produced. Callbacks help us develop asynchronous JavaScript code. Callbacks make sure that a function won’t run before a prerequisite task is completed. In this example, message is an example of a callback function. When called, it writes, “This message is shown after 3 seconds” to the console. There is a built-in method in JavaScript called “setTimeout”, which waits a specified time in milliseconds before performing an action. In this example, the message gets passed into the setTimeout function. So, after waiting 3 seconds, setTimeout writes “message” to the console. Usually, these asynchronous callbacks, or async for short, are used for accessing values from databases, downloading images, reading files, and so on. 
 
 Often, these resources are provided by other services outside of the application that needs them. Callback functions wait for a response, and when the response is sent, then they execute. For example, say you are making a cake. These are the steps: 

- Purchase cake ingredients.
- Combine ingredients. 
- Bake the cake. 
- Decorate the cake.
- Serve the cake. 


These steps cannot be completed at the same time. In other words, these steps cannot be completed asynchronously. The following step can only be started after the previous step is complete. When using callbacks to make something occur sequentially, functions need to be nested one within another. The pseudocode for our cake example might end up looking something like this, where each subsequent function becomes the argument passed to the next function.

## Callback Hell:

Every callback depends on and waits for the previous callback, thereby making a pyramid structure that affects the readability and maintainability of the code. This nesting of callback functions is often referred to as “Callback Hell” and is essentially nested callbacks stacked below one another, forming a pyramid structure. This structure is also sometimes referred to as “The Pyramid of Doom.”

## Inversion of Control:

 Another issue with callbacks is inversion of control, also called IoC. Inversion of control happens when the flow of control, such as the execution of instructions, is external to your code. Many times, callbacks hand the control over to a third party. But issues and errors with that third-party code can be difficult to catch. You are forced to trust the third-party code, or you must write additional code that ensures the third-party code does not:
 -  Get called too many times or too few times 
 -  Get called too early or too late, Lose context
 -  Pass back incorrect arguments.

 For example, say the third-party code has a bug where it gets called multiple times when the user mistakenly clicks a button more than once. You may try to solve this issue with a boolean flag. When the flag is false, and the button is clicked, the card gets charged and the flag is turned to true. So now, when the flag is true, and the button gets clicked again, the branching logic doesn’t charge the customer’s card another time. But then what if the callback never gets called at all? That flag remains false, and now there is yet another use case you have to account for. To catch these sorts of errors, your code becomes riddled with extraneous code to ensure third-party code doesn’t fail. 
 
 There are a number of ways to mitigate callback hell and trust issues: 
 - You can write comments
 - split functions into smaller functions
 -  use Promises, or you can use async/await.