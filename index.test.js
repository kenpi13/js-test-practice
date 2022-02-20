const fizzBuzz = require('./index');

describe('数値を文字列に展開する',()=>{
  test("1を渡すと文字列1を返す",()=>{
    expect(fizzBuzz(1)).toBe("1");
  })
  
  test("2を渡すと文字列2を返す",() => {
    expect(fizzBuzz(2)).toBe("2");
  })
})

describe('3の倍数を渡すと、文字列Fizzを返す',()=>{
  expect(fizzBuzz(3)).toBe("Fizz");
})

describe('5の倍数を渡すと、文字列Buzzを返す',()=>{
  expect(fizzBuzz(5)).toBe("Buzz");
})








// const add = require('./index')

// test('1と2を渡したとき、3を返す',() =>{
//   expect(add(1,2)).toBe(3);
// })

// const fizzBuzz = require('./index')

// test('1を渡すと文字列1を返す', () =>{
//   // 準備(Arrange)
//   // 実行(Act)
//   // 検証(Assertion)
//   expect(fizzBuzz(1)).toBe('1');
// })

// test('2を渡すと文字列2を返す',()=>{
//   expect(fizzBuzz(2)).toBe('2');
// })

// test('3を渡すと文字列Fizzを返す',()=>{
//   expect(fizzBuzz(3)).toBe('Fizz');
// })

// test('5を渡すと文字列Buzzを返す',()=>{
//   expect(fizzBuzz(5)).toBe('Buzz');
// })