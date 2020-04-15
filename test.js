function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/1FXHpDR4SGdxXAcJfN4QU2vPsCZ9UUszZEcR4bdbAT9U/pubhtml',
callback: function(data, tabletop) {
console.log(data)
},
simpleSheet: true } )
}
window.addEventListener('DOMContentLoaded', init)
