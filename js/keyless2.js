function checkage(age)
{
    if (age <18)
    {
        console.log("Sorry, you are too young to drive this car. Powering off")
    }
    else if (age >18)
    {
        console.log("Powering On. Enjoy the ride!")

    }
    else{
        console.log("Congratulations on your first year of driving. Enjoy the ride!")
    }
}

var checkage2 = function (age)
{
    if (age <18)
    {
        console.log("Sorry, you are too young to drive this car. Powering off")
    }
    else if (age >18)
    {
        console.log("Powering On. Enjoy the ride!")

    }
    else{
        console.log("Congratulations on your first year of driving. Enjoy the ride!")
    }
}

checkage(readline())
checkage2(readline())
