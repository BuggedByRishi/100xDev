function log1()
{
    console.log("Hello World");
}

function log2()
{
    console.log("Hello World 2");
}

function logWhatsPresent(fn)
{
    fn();
}

logWhatsPresent(log1);