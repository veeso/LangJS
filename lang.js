/**
  LangJS - Instant language manager for your Webpage
  Developed by Christian Visintin
MIT License
Copyright (c) 2018 Christian Visintin
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
**/

var currentLanguage = null;
var languagePath = '/lang/';
var currentLanguageDict = null;

/**
 * Load language JSON and set all element with translate attribute to the correct text
 * @param {string} lang 
 */

function setLanguage(lang) {
  currentLanguage = lang;
  var jsonFile = languagePath + currentLanguage + ".json";
  //Load language JSON
  $.getJSON(jsonFile, function (langData) {
    //Set currentLanguageDict
    currentLanguageDict = langData;
    //Iterate over all elements which has translate attribute
    $("[translate]").each(function () {
      var translationAttr = $(this).attr('translate');
      //Get all key parts
      var keyPathTokens = translationAttr.split('.');
      var currObjectValue = langData;
      //For each token get next value in object path
      keyPathTokens.forEach(key => {
        if (currObjectValue !== null) {
          currObjectValue = (key in currObjectValue) ? currObjectValue[key] : null;
        }
      });
      //Set text to currObjectValue
      if (currObjectValue !== null) {
        $(this).text(currObjectValue);
      } else {
        console.log('Could not find', translationAttr, 'in language ', currentLanguage);
        //Put attribute value to make the error visible
        $(this).text(translationAttr);
      }
    });
  });
}

/**
 * Get instant translation for a key in dictionary
 * NOTE: setLanguage must have been called at least once for currentLanguage
 * @param {string} dictKey
 * @returns {string} value associated to key in dictionary, null if not found
 */

function getInstantTranslation(dictKey) {

  var assocValue = currentLanguageDict;
  var translationAttr = dictKey;
  //Get all key parts
  var keyPathTokens = translationAttr.split('.');
  //For each token get next value in object path
  keyPathTokens.forEach(key => {
    if (assocValue !== null) {
      assocValue = (key in assocValue) ? assocValue[key] : null;
    }
  });
  return assocValue;
}