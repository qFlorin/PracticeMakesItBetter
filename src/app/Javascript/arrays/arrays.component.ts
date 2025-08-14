import { Component, OnInit } from '@angular/core';
4;
@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css'],
})
export class ArraysComponent implements OnInit {
  ngOnInit() {
    this.isValidIP('1.2.3.4\n');
  }

  isValidIP(str: string) {
    // Check for any whitespace or newline in the input
    if (
      !str ||
      str.trim() !== str ||
      str.includes('\n') ||
      str.includes('\r')
    ) {
      return false;
    }
    const parts = str.split('.');
    if (parts.length !== 4) return false;
    for (const part of parts) {
      // Check if part is empty, not a number, has leading zeros, or out of range
      if (
        !/^\d+$/.test(part) ||
        (part.length > 1 && part.startsWith('0')) ||
        Number(part) < 0 ||
        Number(part) > 255
      ) {
        return false;
      }
    }
    return true;
  }
}

// describe('Sample tests', () => {
//   it('Examples', () => {
//     assert.strictEqual(isValidIP('0.0.0.0'), true);
//     assert.strictEqual(isValidIP('12.255.56.1'), true);
//     assert.strictEqual(isValidIP('137.255.156.100'), true);
//     assert.strictEqual(isValidIP(''), false);
//     assert.strictEqual(isValidIP('abc.def.ghi.jkl'), false);
//     assert.strictEqual(isValidIP('123.456.789.0'), false);
//     assert.strictEqual(isValidIP('12.34.56'), false);
//     assert.strictEqual(isValidIP('01.02.03.04'), false);
//     assert.strictEqual(isValidIP('256.1.2.3'), false);
//     assert.strictEqual(isValidIP('1.2.3.4.5'), false);
//     assert.strictEqual(isValidIP('123,45,67,89'), false);
//     assert.strictEqual(isValidIP('1e0.1e1.1e2.2e2'), false);
//     assert.strictEqual(isValidIP(' 1.2.3.4'), false);
//     assert.strictEqual(isValidIP('1.2.3.4 '), false);
//     assert.strictEqual(isValidIP('12.34.56.-7'), false);
//     assert.strictEqual(isValidIP('1.2.3.4\n'), false);
//     assert.strictEqual(isValidIP('\n1.2.3.4'), false);
//   });
// });
