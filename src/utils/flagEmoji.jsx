// Convert flag emoji to country code and return an img element
// This fixes Windows not displaying flag emojis properly

export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

export function getFlagUrl(emoji) {
  // Convert emoji to country code
  const countryCode = emojiToCountryCode(emoji);
  if (!countryCode) return null;
  
  // Use flagcdn.com for flag images
  return `https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`;
}

function emojiToCountryCode(emoji) {
  // Handle case where emoji is undefined or null
  if (!emoji) return null;
  
  // Handle case where emoji might already be a country code (2 letters)
  if (/^[A-Z]{2}$/i.test(emoji)) {
    return emoji.toUpperCase();
  }
  
  // Convert flag emoji to country code
  // Flag emojis are made of regional indicator symbols
  const codePoints = [...emoji].map((char) => char.codePointAt(0));
  
  // Regional indicator symbols range from 127462 (🇦) to 127487 (🇿)
  // We subtract 127397 to get the ASCII code of the letter
  const countryCode = codePoints
    .filter((cp) => cp >= 127462 && cp <= 127487)
    .map((cp) => String.fromCharCode(cp - 127397))
    .join("");
  
  return countryCode.length === 2 ? countryCode : null;
}

// React component for displaying flags
export function FlagImg({ emoji, className }) {
  const flagUrl = getFlagUrl(emoji);
  const countryCode = emojiToCountryCode(emoji);
  
  if (!flagUrl) {
    return <span className={className}>{emoji}</span>;
  }
  
  return (
    <img
      src={flagUrl}
      srcSet={`https://flagcdn.com/48x36/${countryCode.toLowerCase()}.png 2x`}
      alt={`Flag of ${countryCode}`}
      className={className}
    />
  );
}

