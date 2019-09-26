import { expect } from 'chai';
import sortWithExclusions from '../src';

describe('Sort with exclusions', () => {
  it('should sort array normally', () => {
    const array = [3, 2, 1];

    const result = sortWithExclusions(array, () => false);

    expect(result).to.deep.equal([1, 2, 3]);
  });

  it('should handle empty array', () => {
    const array = [];

    const result = sortWithExclusions(array, () => false);

    expect(result).to.deep.equal([]);
  });

  it('should sort array with single exclusion', () => {
    const array = [3, 2, 1];

    const result = sortWithExclusions(array, v => v === 1);

    expect(result).to.deep.equal([2, 3, 1]);
  });

  it('should sort array with two exclusions', () => {
    const array = [3, 2, 1];

    const result = sortWithExclusions(array, v => v > 1);

    expect(result).to.deep.equal([3, 2, 1]);
  });

  it('should sort array with all exclusions', () => {
    const array = [3, 2, 1];

    const result = sortWithExclusions(array, () => true);

    expect(result).to.deep.equal([3, 2, 1]);
  });

  it('should sort using comparison function', () => {
    const array = [
      {
        value: 3
      },
      {
        value: 2
      },
      {
        value: 1
      }
    ];

    const result = sortWithExclusions(
      array,
      () => false,
      (a, b) => a.value - b.value
    );

    expect(result).to.deep.equal([
      {
        value: 1
      },
      {
        value: 2
      },
      {
        value: 3
      }
    ]);
  });

  it('should sort using comparison function and exclusion', () => {
    const array = [
      {
        value: 3,
        exclude: true
      },
      {
        value: 2
      },
      {
        value: 1
      }
    ];

    const result = sortWithExclusions(
      array,
      obj => obj.exclude,
      (a, b) => a.value - b.value
    );

    expect(result).to.deep.equal([
      {
        value: 3,
        exclude: true
      },
      {
        value: 1
      },
      {
        value: 2
      }
    ]);
  });
});
