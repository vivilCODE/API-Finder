import check from '../images/check.png'
import cross from '../images/cross.png'

export const evaluateHTTPS = https =>
https ? (
  <img src={check} alt="Green checkmark" />
) : (
  <img src={cross} alt="Red cross" />
);

export const evaluateCors = cors => {
if (cors === 'unknown') {
  return 'N/A';
}
return cors === 'yes' ? (
  <img src={check} alt="Green checkmark" />
) : (
  <img src={cross} alt="Red cross" />
);
};

