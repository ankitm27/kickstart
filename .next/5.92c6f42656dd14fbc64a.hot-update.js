webpackHotUpdate(5,{

/***/ 764:
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

var _Layout = __webpack_require__(765);

var _Layout2 = _interopRequireDefault(_Layout);

var _campaign = __webpack_require__(1055);

var _campaign2 = _interopRequireDefault(_campaign);

var _semanticUiReact = __webpack_require__(491);

var _assert = __webpack_require__(1235);

var _web = __webpack_require__(702);

var _web2 = _interopRequireDefault(_web);

var _ContributeForm = __webpack_require__(1239);

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ankitmalhotra/react-public/kickstart/pages/campaigns/show.js?entry";


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: "renderCard",
        value: function renderCard() {
            var _props = this.props,
                balance = _props.balance,
                manager = _props.manager,
                mimimumContribution = _props.mimimumContribution,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount;

            var items = [{
                header: manager,
                meta: "address of manager",
                description: "check1111",
                style: { overflowWrap: 'break-word' }
            }, {
                header: mimimumContribution,
                meta: "contribution in (wei)",
                description: "minimun contribution"
            }, {
                header: requestsCount,
                meta: "requests",
                description: "request of project"
            }, {
                header: approversCount,
                meta: "approvers",
                description: "approvers"
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'balance(ether)',
                description: "balance"
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react2.default.createElement(_Layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 63
                }
            }, "check1212", this.renderCard(), _react2.default.createElement(_ContributeForm2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }));
        }
    }], [{
        key: "getInitialProps",
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var campaign, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                campaign = (0, _campaign2.default)(props.query.address);
                                _context.next = 3;
                                return campaign.methods.getSummary().call();

                            case 3:
                                summary = _context.sent;

                                console.log("summary", summary);
                                return _context.abrupt("return", {
                                    mimimumContribution: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NhbXBhaWducy9zaG93LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiTGF5b3V0IiwiQ2FtcGFpZ24iLCJDYXJkIiwiR3JpZCIsInRocm93cyIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwiYmFsYW5jZSIsIm1hbmFnZXIiLCJtaW1pbXVtQ29udHJpYnV0aW9uIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwiZGVzY3JpcHRpb24iLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsInV0aWxzIiwiZnJvbVdlaSIsInJlbmRlckNhcmQiLCJjYW1wYWlnbiIsInF1ZXJ5IiwiYWRkcmVzcyIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBRWhCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBUyxBQUFNOztBQUNmLEFBQVM7O0FBQ1QsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBb0I7Ozs7Ozs7OztJLEFBR3JCOzs7Ozs7Ozs7OztxQ0FjVTt5QkFPSixLQVBJLEFBT0M7Z0JBUEQsQUFFSixpQkFGSSxBQUVKO2dCQUZJLEFBR0osaUJBSEksQUFHSjtnQkFISSxBQUlKLDZCQUpJLEFBSUo7Z0JBSkksQUFLSix1QkFMSSxBQUtKO2dCQUxJLEFBTUosd0JBTkksQUFNSixBQUVKOztnQkFBTTt3QkFDRixBQUNXLEFBQ1A7c0JBRkosQUFFUyxBQUNMOzZCQUhKLEFBR2dCLEFBQ1o7dUJBQU0sRUFBQyxjQUxELEFBQ1YsQUFJVSxBQUFjO0FBSnhCLEFBQ0ksYUFGTTt3QkFNUixBQUNTLEFBQ1A7c0JBRkYsQUFFTyxBQUNMOzZCQVRNLEFBTVIsQUFHYztBQUhkLEFBQ0U7d0JBR0YsQUFDUyxBQUNQO3NCQUZGLEFBRU8sQUFDTDs2QkFiTSxBQVVSLEFBR2M7QUFIZCxBQUNFO3dCQUdGLEFBQ1MsQUFDUDtzQkFGRixBQUVPLEFBQ0w7NkJBakJNLEFBY1IsQUFHYztBQUhkLEFBQ0U7d0JBSU8sY0FBQSxBQUFLLE1BQUwsQUFBVyxRQUFYLEFBQW1CLFNBRDVCLEFBQ1MsQUFBMkIsQUFDbEM7c0JBRkYsQUFFTyxBQUNMOzZCQXJCUixBQUFjLEFBa0JSLEFBR2MsQUFJcEI7QUFQTSxBQUNFO2lEQU1ELEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFFVjtBQUZVO2FBQUE7Ozs7aUNBR0gsQUFDSjttQ0FDSSxBQUFDOzs4QkFBRDtnQ0FBQTtBQUFBO0FBQUEsYUFBQSxFQUVLLGtCQUZMLEFBRUssQUFBSyxBQUNOLDhCQUFBLEFBQUM7OzhCQUFEO2dDQUpSLEFBQ0ksQUFHSSxBQUdYO0FBSFc7QUFBQTs7Ozs7aUgsQUF0RGlCOzs7OztpQ0FDbkI7QSwyQ0FBVyx3QkFBUyxNQUFBLEFBQU0sTUFBZixBQUFxQixBOzt1Q0FDaEIsU0FBQSxBQUFTLFFBQVQsQUFBaUIsYSxBQUFqQixBQUE4Qjs7aUNBQTlDO0EsbURBQ047O3dDQUFBLEFBQVEsSUFBUixBQUFZLFdBQVosQUFBc0I7O3lEQUVFLFFBRGpCLEFBQ2lCLEFBQVEsQUFDNUI7NkNBQVEsUUFGTCxBQUVLLEFBQVEsQUFDaEI7bURBQWMsUUFIWCxBQUdXLEFBQVEsQUFDdEI7b0RBQWUsUUFKWixBQUlZLEFBQVEsQUFDdkI7NkNBQVEsUUFMTCxBQUtLLEFBQVEsQTtBQUxiLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFOZSxBLEFBNkQzQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJzaG93LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9hbmtpdG1hbGhvdHJhL3JlYWN0LXB1YmxpYy9raWNrc3RhcnQifQ==

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/ankitmalhotra/react-public/kickstart/pages/campaigns/show.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/ankitmalhotra/react-public/kickstart/pages/campaigns/show.js"); } } })();
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/campaigns/show")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS45MmM2ZjQyNjU2ZGQxNGZiYzY0YS5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/MjFmODMwZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4vLi4vLi4vZXRoZXJldW0vY2FtcGFpZ24uanNcIjsgXG5pbXBvcnQgeyBDYXJkICxHcmlkfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcbmltcG9ydCB7IHRocm93cyB9IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQgd2ViMyBmcm9tIFwiLi8uLi8uLi9ldGhlcmV1bS93ZWIzLmpzXCI7XG5pbXBvcnQgQ29udHJpYnV0ZUZvcm0gZnJvbSBcIi4vLi4vLi4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qc1wiO1xuXG5cbmNsYXNzIENhbXBhaWduU2hvdyBleHRlbmRzIENvbXBvbmVudHtcbiAgICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKHByb3BzKXtcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbihwcm9wcy5xdWVyeS5hZGRyZXNzKTtcbiAgICAgICAgY29uc3Qgc3VtbWFyeSA9IGF3YWl0IGNhbXBhaWduLm1ldGhvZHMuZ2V0U3VtbWFyeSgpLmNhbGwoKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJzdW1tYXJ5XCIsc3VtbWFyeSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtaW1pbXVtQ29udHJpYnV0aW9uOnN1bW1hcnlbMF0sXG4gICAgICAgICAgICBiYWxhbmNlOnN1bW1hcnlbMV0sXG4gICAgICAgICAgICByZXF1ZXN0c0NvdW50OnN1bW1hcnlbMl0sXG4gICAgICAgICAgICBhcHByb3ZlcnNDb3VudDpzdW1tYXJ5WzNdLFxuICAgICAgICAgICAgbWFuYWdlcjpzdW1tYXJ5WzRdXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgcmVuZGVyQ2FyZCgpe1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICBiYWxhbmNlLFxuICAgICAgICAgICAgbWFuYWdlcixcbiAgICAgICAgICAgIG1pbWltdW1Db250cmlidXRpb24sXG4gICAgICAgICAgICByZXF1ZXN0c0NvdW50LFxuICAgICAgICAgICAgYXBwcm92ZXJzQ291bnRcbiAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGhlYWRlcjptYW5hZ2VyLFxuICAgICAgICAgICAgICAgIG1ldGE6XCJhZGRyZXNzIG9mIG1hbmFnZXJcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcImNoZWNrMTExMVwiLFxuICAgICAgICAgICAgICAgIHN0eWxlOntvdmVyZmxvd1dyYXA6J2JyZWFrLXdvcmQnfVxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgaGVhZGVyOm1pbWltdW1Db250cmlidXRpb24sXG4gICAgICAgICAgICAgICAgbWV0YTpcImNvbnRyaWJ1dGlvbiBpbiAod2VpKVwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlwibWluaW11biBjb250cmlidXRpb25cIlxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgaGVhZGVyOnJlcXVlc3RzQ291bnQsXG4gICAgICAgICAgICAgICAgbWV0YTpcInJlcXVlc3RzXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246XCJyZXF1ZXN0IG9mIHByb2plY3RcIlxuICAgICAgICAgICAgfSx7XG4gICAgICAgICAgICAgICAgaGVhZGVyOmFwcHJvdmVyc0NvdW50LFxuICAgICAgICAgICAgICAgIG1ldGE6XCJhcHByb3ZlcnNcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjpcImFwcHJvdmVyc1wiXG4gICAgICAgICAgICB9LHtcbiAgICAgICAgICAgICAgICBoZWFkZXI6d2ViMy51dGlscy5mcm9tV2VpKGJhbGFuY2UsJ2V0aGVyJyksXG4gICAgICAgICAgICAgICAgbWV0YTonYmFsYW5jZShldGhlciknLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOlwiYmFsYW5jZVwiXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgXVxuICAgICAgICByZXR1cm4gPENhcmQuR3JvdXAgaXRlbXM9e2l0ZW1zfT48L0NhcmQuR3JvdXA+XG5cbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgICAgIGNoZWNrMTIxMlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckNhcmQoKX1cbiAgICAgICAgICAgICAgICA8Q29udHJpYnV0ZUZvcm0gLz5cbiAgICAgICAgICAgIDwvTGF5b3V0PlxuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDYW1wYWlnblNob3c7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvY2FtcGFpZ25zL3Nob3cuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFPQTtBQUxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQU1BO0FBQ0E7QUFBQTtBQUZBO0FBS0E7QUFDQTtBQUFBO0FBRkE7QUFLQTtBQUNBO0FBQUE7QUFGQTtBQUlBO0FBRUE7QUFJQTtBQU5BO0FBTUE7QUFBQTtBQUVBO0FBRkE7QUFBQTs7OztBQUlBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBR0E7QUFHQTtBQUhBO0FBQUE7Ozs7Ozs7Ozs7QUFyREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=