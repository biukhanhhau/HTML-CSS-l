// Closures is a inner function can rremember and access
// outer function's variable even the outer one finished
// Same as create a class and obj in JV

function counterCreator(){
    count = 0;

    function increment(){
        count++;
        console.log(`The current count is ${count}`);
    }

    return {increment};
}

const countt = counterCreator();
countt.increment();
countt.increment();
countt.increment();


function pointManager(){
    point = 0;
    function addPoint(a){
        point += a;
        console.log(`Just added ${a} points`);
    }

    
    function subtractPoint(a){
        point -= a;
        console.log(`Just subtracted ${a} points`);
    }

    function showPoint(){
        console.log(point);
    }

    return {addPoint, subtractPoint, showPoint};
}

const pointt = pointManager();
pointt.addPoint(5);
pointt.addPoint(5);
pointt.subtractPoint(3);
pointt.showPoint();