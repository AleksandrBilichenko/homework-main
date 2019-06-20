//Задание 1
//Напилить код функции modificator, такой, чтобы в результате работы кода:
//в консоли было:
//sampleFunc: test | sample

function sampleFunc () {
    console.log ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
}

function modificator ( func ) {
    return func.bind(null, 'test', 'sample')
}

testFunc = modificator( sampleFunc )

testFunc()

//Задание 2
//Напилить код функции modificator, такой, чтобы в результате работы кода:
//в консоль было выведено число символов в коде функции sampleFunc, т.е.:
//Symbols in my code: 93

function sampleFunc () {
    console.info ( `Symbols in my code: ${arguments.callee + 0}` )
}
    
function modificator ( func ) {
    func.valueOf = function () {
    return String(func).length
    }
}  

modificator( sampleFunc )

sampleFunc()

//Задание 3
//Напилите код функции generateError, такой, чтобы в результате работы кода:
//в консоли было сообщение от ошибке:
//► Application: Invalid arguments
//Function needs 3 arguments, but only 1 present

function testArguments () {
    function generateError ( numArgs ) {
        throw({
			name: "Application",
			message: 'Invalid arguments',
			stack: `Function needs 3 arguments, but only ${arguments.length} present`
        })
    }
    try {
        arguments.length >= 3 ? null : generateError ( arguments.length )
    } 
    catch ( err ) {
        console.error ( `${err.name}: ${err.message}\n${err.stack}` )
    }
}

testArguments ( "Google" )


