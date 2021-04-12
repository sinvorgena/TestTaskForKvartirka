(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{178:function(t,e,a){},179:function(t,e,a){},3:function(t,e,a){t.exports={DangerousAsteroidBakcground:"Asteroids_DangerousAsteroidBakcground__hEL1v",SaftiAsteroidBakcground:"Asteroids_SaftiAsteroidBakcground__1f9YZ",AsteroidBox:"Asteroids_AsteroidBox__wL8Wu",asteroidInfo:"Asteroids_asteroidInfo__1mioG",destroyedBox:"Asteroids_destroyedBox__CLoEQ",imageBox:"Asteroids_imageBox__6m_Ox",btnToDestroyAsteroid:"Asteroids_btnToDestroyAsteroid__v7RdO",testBorder:"Asteroids_testBorder__Poh0Y",test2:"Asteroids_test2__2tbyz",test1:"Asteroids_test1__hcWVA",test3:"Asteroids_test3__1BHGB",toogleSortByDistanceBtn:"Asteroids_toogleSortByDistanceBtn__3UbNs",active:"Asteroids_active__iOmkM",sortByDistanse:"Asteroids_sortByDistanse__hGk6j",sortByDistanseBox:"Asteroids_sortByDistanseBox__2Whw4"}},572:function(t,e,a){"use strict";a.r(e);var s=a(2),o=a.n(s),r=a(12),n=a.n(r),i=(a(178),a(179),a(164).create({baseURL:"https://api.nasa.gov/neo/rest/v1/"})),d={Asteroid:{getAsteroid:function(t,e){return i.get("feed?api_key=q7EZGNZYBD9g3jNUvz7PsIHX2U9gGtGgRgSL4ziQ&start_date=".concat(t,"&end_date=").concat(e))}}};window.Api=d,window.token="";var c=a(165),m=a(166),l=a(174),u=a(173),g=a(39),h=a(34),j=a(28),_=(a(201),"SET_ASTEROID_DATA"),p="TOOGLE_API_IS_PENDING",D="TOOGLE_STATUS_OF_LOADING_DATA",A="SET_EMPTY_DANGEROUS_DATA_COUNT",b={asteroidData:[],dangerousAsteroidData:[],maxToMinSizeSort:!1,requestIsPending:!1,statusOfLoadingData:!1,emptyDangerousDataCount:0},O=function(t,e,a){return{type:_,asteroidData:t,dangerousAsteroidData:e}},x=function(t){return{type:p,bollean:t}},B=function(t){return{type:A,bollean:t}};window.AsteroidsDefaulState=b;var y=a(3),f=a.n(y),S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAwCAYAAABE1blzAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAP2SURBVHgB1Vr/ddowEP7a1/9LJ4g6Qdkg6gRNJ4g3SDaATkA2MBskG5ANSCeATgCdoNU9657OQkKSY0B8792zLUtCp/upM8D1ozG0NvTP0MZQa0jxyw+4DmhL39AtfmLbJ+JeYmvop6E3VA5laIVOOjHaGZoZujF0i06KLM1JzRJU6Jij697Qi6FXe7+3ff7iUEok0bUd94iK8QwnCSXa77znEB7s2GdUCgWngkq038GpZcj2qK0xtIDbnCoRk4BGeOHE2Bwd4z0b/YQ6oezVt69XQ1/gbJAwRbcRcsxbZHw1YM/5I9GvgZMaOZZbXAnY1U8D70gdlaEnOFVsRTvZKdkgSbVKL0oL5YVPAu82OIyDawTsz1D7EfWBpUb2s8/oP7FjJmLc1t7va3Qy9/YachDE8Fd0DH2GcyxbS3/sMycI1TkZjnN+/CuBglPXKSoBxzFmboZy+LHw4lmMRhfQSZ2kg1gUzEFMkdRbb44VwpnOScGLeUbY49GicuMYzbMJzEHe9B5nRiyNomfaeZLiDcqwEPNs7HPu5owKCrSSMT67vXcxMwy31VFAUltimPrlgI9SD7gAFFyNZHeiRfD8Z1dLmUrR9RRxSCGeyh1g7EymtQvYGvoOlzK9B7RJdKqgLOY3nJdcIi+VGw1zOLVUGAayVT8Osr35pHFGKPHDQ+MQqRt7XO3NTd6SGJWxj/oWm8AS8XrHMfAPt167Rpk0F5F5JMixyIJU9lrnGJboNghXv4ByqWo46UjIDVS2X0jayYmHBE/+8RATMuPQSCN02J3jeOE3KwzxIncoQ4N0eY6ZXCMPvBaNTmIyCZfpGd+n6ja9M9gKZTgmPUbMecQQSsRZSgrOsShkSk/uUskZqkFaegze/dRRSOHwhPHuZGGNvuvN9Uo87j6jb4O0d5T91hjxPOfrdWqXCaWlBa5UpxjMUfli8EIbcT8/0l+hbDNk/9mRfo8YENtyIL3WDH2J0k5O7SKJ5nBOIGchU/SdRoxBJfqNKj3AMbWyzw3C5QDf+FVi3kfkxawp4pnQKFA4zDiorUG/ILRD3sGVpPqEfvwKlfH8StqojsUH7/agBFZAoy99kkiDcBIhvTdtwsmrYEvkOZkQNMLf0lv000AtxpzEY6bgp0OpDKVBnzEuKrFdL7x5V2L8xeoqpK5Szdj2WkFSvSRjrGbMNG+QTNe4jWPjCheAQseIZDTmTSVjDGZGJsK+t5YnB40LgmsirHoP9vmYUwjlnqGkW/5ZoMqPlTFohD2nz7j/QZPuFa4ELK0b0aYRZryBYzT33HhxxIqzIcYJSrybYSSc8gsv1yyf0K9fsu2+IF7X1IZ+oXL4oaSESksnUfwHfPnm1vazqFcAAAAASUVORK5CYII=",N=a.p+"static/media/1476.d95253fd.png",v=a.p+"static/media/cosmos-background.4a06c329.jpg",T=a(71),w=a.n(T),M=a(1),E=Object(g.b)((function(t){return{requestIsPending:t.Asteroids.requestIsPending}}),{})((function(t){return Object(M.jsx)(M.Fragment,{children:t.requestIsPending?Object(M.jsxs)("div",{className:w.a.PreloaderBox,children:[Object(M.jsx)("div",{className:w.a.PreloaderBackground}),Object(M.jsx)("div",{className:w.a.PreloaderImgBox,style:{backgroundImage:"url(".concat(v,")")},children:Object(M.jsx)("img",{src:N,alt:""})})]}):""})})),k=function(t){Object(l.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(c.a)(this,a);for(var s=arguments.length,o=new Array(s),r=0;r<s;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).getAsteroids=function(){t.addDayToDate(1),t.startWith=t.getCurrentFormatDate(),t.endWith=t.getCurrentFormatDate(),t.props.setHouseData(t.startWith,t.endWith)},t.getAsteroidsByScroll=function(){window.scrollY>=document.documentElement.scrollHeight-window.visualViewport.height-50&&(t.countOfScroll++,t.countOfScroll%8!=0||t.props.requestIsPending||(t.props.toogleApiIsPending(!0),console.log("fsdffs"),t.getAsteroids()))},t.asteroidComponentMapOnDataSortByDistanseToEarth=function(t){return Object(M.jsx)("div",{className:t.is_potentially_hazardous_asteroid?f.a.DangerousAsteroidBakcground:f.a.SaftiAsteroidBakcground,children:Object(M.jsxs)("div",{className:f.a.AsteroidBox,id:t.id,style:{backgroundSize:"".concat((t.estimated_diameter.meters.estimated_diameter_max+t.estimated_diameter.meters.estimated_diameter_min)/2/75*10,"%")},children:[Object(M.jsx)("div",{className:f.a.imageBox,children:Object(M.jsx)("img",{src:S,alt:""})}),Object(M.jsxs)("div",{className:f.a.asteroidInfo,children:[Object(M.jsx)("p",{children:t.name.slice(t.name.indexOf("(")+1,t.name.length-1)}),Object(M.jsxs)("p",{className:f.a.testBorder,children:[Object(M.jsx)("span",{className:f.a.test1,children:"\u0414\u0430\u0442\u0430"}),Object(M.jsx)("span",{className:f.a.test2}),Object(M.jsx)("span",{className:f.a.test3,children:t.close_approach_data[0].close_approach_date})]}),Object(M.jsxs)("p",{className:f.a.testBorder,children:[Object(M.jsx)("span",{className:f.a.test1,children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"}),Object(M.jsx)("span",{className:f.a.test2}),Object(M.jsxs)("span",{className:f.a.test3,children:[new Intl.NumberFormat("ru-RU").format(Math.ceil(t.close_approach_data[0].miss_distance.kilometers))," \u043a\u043c \u0434\u043e \u0437\u0435\u043c\u043b\u0438"]})]}),Object(M.jsxs)("p",{className:f.a.testBorder,children:[Object(M.jsx)("span",{className:f.a.test1,children:"\u0420\u0430\u0437\u043c\u0435\u0440"}),Object(M.jsx)("span",{className:f.a.test2}),Object(M.jsxs)("span",{className:f.a.test3,children:[Math.ceil((t.estimated_diameter.meters.estimated_diameter_max+t.estimated_diameter.meters.estimated_diameter_min)/2)," \u043c"]})]})]}),Object(M.jsxs)("div",{className:f.a.destroyedBox,children:[Object(M.jsxs)("p",{children:["\u041e\u0446\u0435\u043d\u043a\u0430:",Object(M.jsx)("p",{style:{fontWeight:700},children:t.is_potentially_hazardous_asteroid?"\u043e\u043f\u0430\u0441\u0435\u043d":"\u043d\u0435 \u043e\u043f\u0430\u0441\u0435\u043d"})]}),Object(M.jsx)("button",{className:f.a.btnToDestroyAsteroid,children:"\u041d\u0430 \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u0435"})]})]})})},t.asteroidComponentMapOnDataSortByDistanseToMoon=function(t){return Object(M.jsx)("div",{className:t.is_potentially_hazardous_asteroid?f.a.DangerousAsteroidBakcground:f.a.SaftiAsteroidBakcground,children:Object(M.jsxs)("div",{className:f.a.AsteroidBox,id:t.id,style:{backgroundSize:"".concat((t.estimated_diameter.meters.estimated_diameter_max+t.estimated_diameter.meters.estimated_diameter_min)/2/75*10,"%")},children:[Object(M.jsx)("div",{className:f.a.imageBox,children:Object(M.jsx)("img",{src:S,alt:""})}),Object(M.jsxs)("div",{className:f.a.asteroidInfo,children:[Object(M.jsx)("p",{children:t.name.slice(t.name.indexOf("(")+1,t.name.length-1)}),Object(M.jsxs)("p",{className:f.a.testBorder,children:[Object(M.jsx)("span",{className:f.a.test1,children:"\u0414\u0430\u0442\u0430"}),Object(M.jsx)("span",{className:f.a.test2}),Object(M.jsx)("span",{className:f.a.test3,children:t.close_approach_data[0].close_approach_date})]}),Object(M.jsxs)("p",{className:f.a.testBorder,children:[Object(M.jsx)("span",{className:f.a.test1,children:"\u0420\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u0435"}),Object(M.jsx)("span",{className:f.a.test2}),Object(M.jsxs)("span",{className:f.a.test3,children:[new Intl.NumberFormat("ru-RU").format(Math.ceil(t.close_approach_data[0].miss_distance.lunar))," \u043a\u043c \u0434\u043e \u043b\u0443\u043d\u044b"]})]}),Object(M.jsxs)("p",{className:f.a.testBorder,children:[Object(M.jsx)("span",{className:f.a.test1,children:"\u0420\u0430\u0437\u043c\u0435\u0440"}),Object(M.jsx)("span",{className:f.a.test2}),Object(M.jsxs)("span",{className:f.a.test3,children:[Math.ceil((t.estimated_diameter.meters.estimated_diameter_max+t.estimated_diameter.meters.estimated_diameter_min)/2)," \u043c"]})]})]}),Object(M.jsxs)("div",{className:f.a.destroyedBox,children:[Object(M.jsxs)("p",{children:["\u041e\u0446\u0435\u043d\u043a\u0430:",Object(M.jsx)("p",{style:{fontWeight:700},children:t.is_potentially_hazardous_asteroid?"\u043e\u043f\u0430\u0441\u0435\u043d":"\u043d\u0435 \u043e\u043f\u0430\u0441\u0435\u043d"})]}),Object(M.jsx)("button",{className:f.a.btnToDestroyAsteroid,children:"\u041d\u0430 \u0443\u043d\u0438\u0447\u0442\u043e\u0436\u0435\u043d\u0438\u0435"})]})]})})},t.now=new Date,t.startWith=0,t.endWith=0,t.getCurrentFormatDate=function(){return"".concat(t.now.getFullYear(),"-").concat(t.now.getMonth()<9?"0"+(t.now.getMonth()+1):t.now.getMonth()+1,"-").concat(t.now.getDate()<10?"0"+t.now.getDate():t.now.getDate())},t.addDayToDate=function(e){t.now.getDate(t.now.setDate(t.now.getDate()+e))},t.state={asteroidField:t.props.asteroidData.map((function(e){return t.asteroidComponentMapOnDataSortByDistanseToEarth(e)})),dangerousAsteroidField:t.props.dangerousAsteroidData.map((function(e){return t.asteroidComponentMapOnDataSortByDistanseToEarth(e)})),dangerousSort:null,sortByDistanseToEarth:!0,sortByDistanseToMoon:!1},t.countOfScroll=0,t}return Object(m.a)(a,[{key:"componentDidMount",value:function(){this.startWith=this.getCurrentFormatDate(),console.log(this.startWith),this.endWith=this.getCurrentFormatDate(),console.log(this.endWith),this.props.setHouseData(this.startWith,this.endWith)}},{key:"componentDidUpdate",value:function(t,e,a){var s=this;this.props.asteroidData.length&&this.props.dangerousAsteroidData.length-t.dangerousAsteroidData.length<2&&this.props.emptyDangerousDataCount&&(this.props.toogleApiIsPending(!0),this.getAsteroids(),this.props.setEmptyDangerousDataCount(!1)),(this.props.asteroidData.length&&(e.asteroidField.length!=this.props.asteroidData.length||t.asteroidData[t.asteroidData.length-1].id!=this.props.asteroidData[this.props.asteroidData.length-1].id||e.dangerousSort!=this.state.dangerousSort)||e.sortByDistanseToMoon!=this.state.sortByDistanseToMoon)&&this.setState({asteroidField:this.props.asteroidData.sort((function(t,e){return t.estimated_diameter.meters.estimated_diameter_max+t.estimated_diameter.meters.estimated_diameter_min>e.estimated_diameter.meters.estimated_diameter_max+e.estimated_diameter.meters.estimated_diameter_min?1:t.estimated_diameter.meters.estimated_diameter_max+t.estimated_diameter.meters.estimated_diameter_min<e.estimated_diameter.meters.estimated_diameter_max+e.estimated_diameter.meters.estimated_diameter_min?-1:0})).map((function(t){return s.state.sortByDistanseToEarth?s.asteroidComponentMapOnDataSortByDistanseToEarth(t):s.asteroidComponentMapOnDataSortByDistanseToMoon(t)})),dangerousAsteroidField:this.props.dangerousAsteroidData.sort((function(t,e){return t.estimated_diameter.meters.estimated_diameter_max+t.estimated_diameter.meters.estimated_diameter_min>e.estimated_diameter.meters.estimated_diameter_max+e.estimated_diameter.meters.estimated_diameter_min?1:t.estimated_diameter.meters.estimated_diameter_max+t.estimated_diameter.meters.estimated_diameter_min<e.estimated_diameter.meters.estimated_diameter_max+e.estimated_diameter.meters.estimated_diameter_min?-1:0})).map((function(t){return s.state.sortByDistanseToEarth?s.asteroidComponentMapOnDataSortByDistanseToEarth(t):s.asteroidComponentMapOnDataSortByDistanseToMoon(t)}))}),console.log(e),console.log(this.props)}},{key:"render",value:function(){var t=this;return window.addEventListener("scroll",this.getAsteroidsByScroll),console.log(this.state.asteroidField),Object(M.jsxs)("div",{children:[Object(M.jsx)(E,{}),Object(M.jsxs)("div",{children:[Object(M.jsx)("input",{type:"checkbox",onChange:function(){null==t.state.dangerousSort?t.setState({dangerousSort:!0}):!0===t.state.dangerousSort?t.setState({dangerousSort:!1}):t.setState({dangerousSort:!0})}}),"Sort by dangerous",Object(M.jsxs)("div",{className:f.a.sortByDistanseBox,children:[Object(M.jsx)("input",{className:f.a.sortByDistanse,checked:!!this.state.sortByDistanseToEarth,onChange:function(){t.state.sortByDistanseToEarth?t.setState({sortByDistanseToEarth:!1,sortByDistanseToMoon:!0}):t.setState({sortByDistanseToEarth:!0,sortByDistanseToMoon:!1})},type:"radio",name:"sortByDistanse",id:"forEarth"}),Object(M.jsx)("label",{htmlFor:"forEarth",children:"\u0414\u043e \u0437\u0435\u043c\u043b\u0438"})]}),Object(M.jsxs)("div",{className:f.a.sortByDistanseBox,children:[Object(M.jsx)("input",{className:f.a.sortByDistanse,checked:!!this.state.sortByDistanseToMoon,onChange:function(){t.state.sortByDistanseToMoon?t.setState({sortByDistanseToMoon:!1,sortByDistanseToEarth:!0}):t.setState({sortByDistanseToMoon:!0,sortByDistanseToEarth:!1})},type:"radio",name:"sortByDistanse",id:"forMoon"}),Object(M.jsx)("label",{htmlFor:"forMoon",children:"\u0414\u043e \u043b\u0443\u043d\u044b"})]})]}),this.state.dangerousSort?this.state.dangerousAsteroidField:this.props.asteroidData.length?this.state.asteroidField:"None"]})}}]),a}(o.a.Component);window.Asteroids=k;var I=Object(g.b)((function(t){return{asteroidData:t.Asteroids.asteroidData,now:t.Asteroids.now,maxToMinSizeSort:t.Asteroids.maxToMinSizeSort,dangerousSort:t.Asteroids.dangerousSort,dangerousAsteroidData:t.Asteroids.dangerousAsteroidData,requestIsPending:t.Asteroids.requestIsPending,statusOfLoadingData:t.Asteroids.statusOfLoadingData,emptyDangerousDataCount:t.Asteroids.emptyDangerousDataCount}}),{setHouseData:function(t,e,a){return function(a){a(x(!0)),d.Asteroid.getAsteroid(t,e).then((function(t){var e=[];for(var s in t.data.near_earth_objects)e=[].concat(Object(h.a)(e),Object(h.a)(t.data.near_earth_objects[s].map((function(t){return t}))));var o=e.filter((function(t){if(t.is_potentially_hazardous_asteroid)return t}));window.store.getState().Asteroids.dangerousAsteroidData.length<5?(a(B(!0)),a(O(e,o))):a(O(e,o)),a(x(!1)),console.log(e),console.log(o),console.log(b.emptyDangerousDataCount)}))}},toogleStatusOfLoadingData:function(t){return{type:D,bollean:t}},setEmptyDangerousDataCount:B,toogleApiIsPending:x})(k);var P=function(){return Object(M.jsx)("div",{className:"App",children:Object(M.jsx)(I,{})})},C=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,575)).then((function(e){var a=e.getCLS,s=e.getFID,o=e.getFCP,r=e.getLCP,n=e.getTTFB;a(t),s(t),o(t),r(t),n(t)}))},F=a(40),U=a(170),G=a(574),L=Object(F.c)({Asteroids:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case _:return t=Object(j.a)(Object(j.a)({},e),{},{asteroidData:[].concat(Object(h.a)(e.asteroidData),Object(h.a)(a.asteroidData)),dangerousAsteroidData:[].concat(Object(h.a)(e.dangerousAsteroidData),Object(h.a)(a.dangerousAsteroidData))});case p:return t=Object(j.a)(Object(j.a)({},e),{},{requestIsPending:a.bollean});case D:return t=Object(j.a)(Object(j.a)({},e),{},{statusOfLoadingData:a.bollean});case A:return t=Object(j.a)({},e),a.bollean?t.emptyDangerousDataCount++:t.emptyDangerousDataCount--,t;default:return e}},form:G.a}),z=Object(F.d)(L,Object(F.a)(U.a));window.store=z;var R=z;n.a.render(Object(M.jsx)(o.a.StrictMode,{children:Object(M.jsx)(g.a,{store:R,children:Object(M.jsx)(P,{})})}),document.getElementById("root")),C()},71:function(t,e,a){t.exports={PreloaderBox:"Preloader_PreloaderBox__16edD",PreloaderBackground:"Preloader_PreloaderBackground__D4Kw_",PreloaderImgBox:"Preloader_PreloaderImgBox__24jKv"}}},[[572,1,2]]]);
//# sourceMappingURL=main.bc33041e.chunk.js.map