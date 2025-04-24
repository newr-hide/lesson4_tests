import {calculateTotal} from '../calculate.js';
test('basic test', () => {
    let result = 4;
    expect(result).toBe(4);
} );

test('calculateTotal sum withcout discount', () => {
    const list = [
        {
            id: 456,
            name: 'ass',
            count: 3,
            price: 500
        }, {
            id: 46,
            name: 'fuck',
            count: 1,
            price: 1500
        }
    ];
    const result = calculateTotal(list);
    expect(result).toBe(3000);
});

// test('calculateTotal sum with discount', () => {
//     const list = [
//         {
//             id: 456,
//             name: 'ass',
//             count: 3,
//             price: 500
//         }, {
//             id: 46,
//             name: 'fuck',
//             count: 1,
//             price: 1500
//         }
//     ];
//     const result = calculateTotal(list, true);
//     expect(result).toBe(1500);
// });