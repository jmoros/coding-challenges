/**
 * Returns the adidas three stripes logo using `@` characters.
 * @param {number} width - Width of a stripe.
 * @returns {string} adidas logo.
 */

const STRIPES = 3;

module.exports = (width) => {
  if (width < 2) {
    throw new Error('Error, minimun width is 2');
  }

  const separation = Math.round(Math.sqrt(width));
  const logoChars = '@'.repeat(width);
  const spaces = ' '.repeat(separation);
  const logo = [];

  for (let i = 1; i <= STRIPES; i++) {
    const paddingLength = (STRIPES - i) * width;

    for (let j = 0; j < separation; j++) {
      const leftPadding = ' '.repeat(paddingLength + j);
      const logoPart = Array(i).fill(logoChars).join(spaces);

      logo.push(`${leftPadding}${logoPart}`);
    }
  }

  return logo.join('\n');
};
