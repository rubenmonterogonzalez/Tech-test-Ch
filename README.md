This is a JavaScript task.
File structure is set up and don't need to be touched. By loading index.html directly in the browser you can see if your results are correct.
You only need to work in main.js file, inside of the function outputDate();

Please set up timer. And afterwards specify how much time it took you to finish the task.

After the tasks are finished, create either gist on github of main.js and send the link or archive all files and send them back to us.#




# EXPLANATION

## Guidelines

    1. Year, month and date for each array as a string.
    2. If one data is 0, doesnt display it.
    3. Examples:
        - '16 years, total 5844 days'
        -'1 year, 3 months, total 458 days'
    4. Return function.
    5. outputDate(dates)

## Approach

    1.1 Tranform dates in readable strings.
        As I have never worked with dates, I read documentation and other things that I realized while I was working on it.
    
    2.1 Create a function to pass the transform dates and calculate difference between them.
        Here, the tricky part was the exact days and methods to round numbers.

    3.1 Return messages depending on difference reveived.
        Think about all the possible outputs and create a statement to filter them.
        I went for an IF but SWITCH might be cleaner.

## Conclusions

    I spent around 4:30 hours. Where I spent more of the time was trying to make a function to count leapyears until I realized that I could "play" with numbers more easily. 