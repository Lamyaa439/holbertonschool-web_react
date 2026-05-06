/**
 * Branded Interfaces
 */
export interface MajorCredits {
  credits: number;
  _majorBrand: 'major'; // This is the brand
}

export interface MinorCredits {
  credits: number;
  _minorBrand: 'minor'; // This is the brand
}

/**
 * Sum Functions
 */

// Sums two MajorCredits and returns a branded MajorCredits object
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MajorCredits;
}

// Sums two MinorCredits and returns a branded MinorCredits object
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
  } as MinorCredits;
}
