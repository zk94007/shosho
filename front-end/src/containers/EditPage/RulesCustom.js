import CustomAdverbs from './customAdvers';
import CustomSimple from './simpleAlternatives';
import CustomBold from './customBold';

const re = new RegExp('\\b(' + CustomAdverbs.join('|') + ')\\b', 'gi');
const reSimple = new RegExp('\\b(' + CustomSimple.map(item => Object.keys(item).pop()).join('|') + ')\\b', 'gi');
const reBold = new RegExp('\\b(' + CustomBold.join('|') + ')\\b', 'gi');

export default {
  customadverbs: {
    fn: function (text) {
      let suggestions = [];
      let match = re.exec(text);
      while (match) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
          reason: `"${match[0]}" can weaken meaning`
        });
        match = re.exec(text)
      }
      return suggestions;
    }
  },
  customsimple: {
    fn: function (text) {
      let suggestions = [];
      let match = reSimple.exec(text);
      while (match) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
          reason: `"${match[0]}" unneeded`,
          replacements: CustomSimple.find(item => Object.keys(item).pop() === match[0])[match[0]].split(', ') //eslint-disable-line
        });
        match = reSimple.exec(text)
      }

      return suggestions;
    }
  },
  custombold: {
    fn: function (text) {
      let suggestions = [];
      let match = reBold.exec(text);
      while (match) {
        suggestions.push({
          index: match.index,
          offset: match[0].length,
          reason: `"${match[0]}" bold`
        });
        match = reBold.exec(text)
      }

      return suggestions;
    }
  }
} 
