webpackHotUpdate(5,{

/***/ 759:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(85);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(86);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _factory = __webpack_require__(760);

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = __webpack_require__(944);

var _Layout = __webpack_require__(1218);

var _Layout2 = _interopRequireDefault(_Layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ankitmalhotra/react-public/kickstart/pages/index.js?entry";


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: "renderCampaigns",
        value: function renderCampaigns() {
            var items = this.props.campaigns.map(function (address) {
                return {
                    header: address,
                    description: _react2.default.createElement("a", {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    }, "view campaigns"),
                    fluid: true
                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                }
            }, _react2.default.createElement("div", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 27
                }
            }, _react2.default.createElement("h3", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 29
                }
            }, "open campaign"), _react2.default.createElement(_semanticUiReact.Button, { floated: "right", content: "create campaign", icon: "add circle", primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }), this.renderCampaigns(), _react2.default.createElement("link", { rel: "stylesheet", href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css", __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            })));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;

                                console.log("campaigns", campaigns);
                                return _context.abrupt("return", { campaigns: campaigns });

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiZmFjdG9yeSIsIkNhcmQiLCJCdXR0b24iLCJMYXlvdXQiLCJDYW1wYWlnbkluZGV4IiwiaXRlbXMiLCJwcm9wcyIsImNhbXBhaWducyIsIm1hcCIsImhlYWRlciIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImZsdWlkIiwicmVuZGVyQ2FtcGFpZ25zIiwibWV0aG9kcyIsImdldERlcGxveWVkQ2FtcGFpZ25zIiwiY2FsbCIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQU87Ozs7QUFDZCxBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBUyxBQUFLOztBQUVkLEFBQU8sQUFBWTs7Ozs7Ozs7O0ksQUFHYjs7Ozs7Ozs7Ozs7MENBTWUsQUFDYjtnQkFBTSxhQUFRLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxtQkFBVyxBQUM5Qzs7NEJBQU8sQUFDSSxBQUNQO2lEQUFZLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSxxQkFBQSxFQUZULEFBRVMsQUFDWjsyQkFISixBQUFPLEFBR0csQUFFYjtBQUxVLEFBQ0g7QUFGUixBQUFjLEFBT2QsYUFQYztpREFPUCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUVILEFBQ0o7bUNBQ0ksQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDQTtBQURBO0FBQUEsYUFBQSxrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUVHO0FBRkg7QUFBQSwrQkFFRyxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFGSCxBQUVHLEFBQ0Esa0NBQUEsQUFBQyx5Q0FBTyxTQUFSLEFBQWdCLFNBQVEsU0FBeEIsQUFBZ0MsbUJBQWtCLE1BQWxELEFBQXVELGNBQWEsU0FBcEU7OEJBQUE7Z0NBSEgsQUFHRyxBQUVDO0FBRkQ7cUJBSEgsQUFLSSxBQUFLLEFBQ04sMkRBQU0sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7OEJBQTVCO2dDQVJQLEFBQ0ksQUFDQSxBQU1HLEFBT1Y7QUFQVTs7Ozs7Ozs7Ozs7Ozt1Q0F2QmlCLGtCQUFBLEFBQVEsUUFBUixBQUFnQix1QkFBaEIsQSxBQUF1Qzs7aUNBQXpEO0EscURBQ047O3dDQUFBLEFBQVEsSUFBUixBQUFZLGFBQVosQUFBd0I7aUVBQ2pCLEVBQUMsV0FBRCxBQUFXLEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKRSxBLEFBbUM1Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvYW5raXRtYWxob3RyYS9yZWFjdC1wdWJsaWMva2lja3N0YXJ0In0=

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/ankitmalhotra/react-public/kickstart/pages/index.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/ankitmalhotra/react-public/kickstart/pages/index.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(83)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS4wOTRiMjljZGNiZGQ5YzZjOWY3Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXM/NGIxNGNkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGZhY3RvcnkgZnJvbSBcIi4uL2V0aGVyZXVtL2ZhY3RvcnkuanNcIjtcbmltcG9ydCB7IENhcmQsQnV0dG9uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XG5cbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvTGF5b3V0LmpzXCI7XG5cblxuY2xhc3MgQ2FtcGFpZ25JbmRleCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpe1xuICAgICAgICBjb25zdCBjYW1wYWlnbnMgPSBhd2FpdCBmYWN0b3J5Lm1ldGhvZHMuZ2V0RGVwbG95ZWRDYW1wYWlnbnMoKS5jYWxsKClcbiAgICAgICAgY29uc29sZS5sb2coXCJjYW1wYWlnbnNcIixjYW1wYWlnbnMpOyBcbiAgICAgICAgcmV0dXJuIHtjYW1wYWlnbnM6Y2FtcGFpZ25zfVxuICAgIH1cbiAgICByZW5kZXJDYW1wYWlnbnMoKXtcbiAgICAgICAgY29uc3QgaXRlbXMgPSB0aGlzLnByb3BzLmNhbXBhaWducy5tYXAoYWRkcmVzcyA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhlYWRlcjphZGRyZXNzLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOjxhPnZpZXcgY2FtcGFpZ25zPC9hPixcbiAgICAgICAgICAgICAgICBmbHVpZDp0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiA8Q2FyZC5Hcm91cCBpdGVtcz17aXRlbXN9IC8+O1xuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuKCBcbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgey8qIHt0aGlzLnByb3BzLmNhbXBhaWduc1swXX0gKi99XG4gICAgICAgICAgICAgICA8aDM+b3BlbiBjYW1wYWlnbjwvaDM+XG4gICAgICAgICAgICAgICA8QnV0dG9uIGZsb2F0ZWQ9XCJyaWdodFwiIGNvbnRlbnQ9XCJjcmVhdGUgY2FtcGFpZ25cIiBpY29uPVwiYWRkIGNpcmNsZVwiIHByaW1hcnk+XG4gICAgICAgICAgICAgICA8L0J1dHRvbj4gXG4gICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJDYW1wYWlnbnMoKX1cbiAgICAgICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIiAvPiBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MYXlvdXQ+XG4gICAgICAgICkgICAgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnbkluZGV4O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzP2VudHJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQTtBQUFBOztBQUdBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUpBO0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBR0E7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUVBO0FBRkE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQUdBO0FBQUE7QUFPQTtBQVBBOzs7Ozs7Ozs7Ozs7O0FBdkJBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=