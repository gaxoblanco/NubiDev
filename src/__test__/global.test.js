
const text = 'Hola mundo';
const fruits = ['manzana', 'melon', 'banana', 'frutilla'];


test('Debe contener un texto', ()=>{
    expect(text).toMatch(/mundo/);
});

test ('Tenemos una banana?', ()=>{
    expect(fruits).toContain('banana');
});
test ('Mayor que', ()=>{
    expect(10).toBeGreaterThan(9);
});
test ('Es un Booleano', ()=>{
    expect(true).toBeTruthy();
});

//callback function
const reversString = (str, callback) =>{
    callback(str.split("").reverse().join(""))
};

test('Probar un Callback', ()=>{
    reversString('Hola', (str)=>{
        expect(str).toBe('aloH')
    });
});

//promesas
const reversString2 = str =>{
    return new Promise((resolve, reject)=>{
        if(!str){
            reject(Error('Error'))
        }
        resolve(str.split('').reverse().join(''))
    })
};

test('Probar una promesa', ()=>{
    return reversString2('Hola')
    .then(string=>{
        expect(string).toBe('aloH')
    });
});

test('Probar async/await', async ()=>{
    const string = await reversString2('Hola');

    expect(string).toBe('aloH')
})