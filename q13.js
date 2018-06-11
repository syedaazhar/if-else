let ans1 = "Hello";
let ans2 = "Is UIT open today?";
let ans3 = "What are the timings of today's class?";
let ans4 = "Where will the class be conducted?";

if (ans1 == ans4 && ans3 == ans2)
{
    console.log('Thank you for calling TechKaro Customer Service. How may I help you?')
}
else if (ans2 == ans4)
{
    console.log('Yes')
}
else if (ans3 == ans3)
{
    console.log('1:30 - 5:3')
}
else if (ans4 == ans1)
{
    console.log("At CL-1, Usman Institute")
}
else
{
    console.log("Sorry, I do not understand your question.")
}
