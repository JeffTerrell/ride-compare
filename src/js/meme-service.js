export default class MemeService {
  static getMemeRandom() {
    return fetch (`https://meme-api.herokuapp.com/gimme/okbuddyretard`)
      .then (function(response) {
        if (!response.ok) {
          throw Error (response.statusText);
        }
        return response.json();  
      })
      .catch (function(error) {
        return Error(error);
      }); 
  }
}
//   static getTheOfficeSearch(input) {
//     return fetch (`https://officeapi.dev/api/quotes/${input}`)
//       .then (function(response) {
//         if (!response.ok) {
//           throw Error (response.statusText);
//         }
//         return response.json();  
//       })
//       .catch (function(error) {
//         return Error(error);
//       }); 
//   }
// }