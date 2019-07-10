webpackHotUpdate(5,{

/***/ 1239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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

var _semanticUiReact = __webpack_require__(452);

var _campaign = __webpack_require__(1055);

var _campaign2 = _interopRequireDefault(_campaign);

var _web = __webpack_require__(702);

var _web2 = _interopRequireDefault(_web);

var _routes = __webpack_require__(1040);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/ankitmalhotra/react-public/kickstart/components/ContributeForm.js";


var contributeForm = function (_Component) {
    (0, _inherits3.default)(contributeForm, _Component);

    function contributeForm() {
        var _ref,
            _this2 = this;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, contributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = contributeForm.__proto__ || (0, _getPrototypeOf2.default)(contributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: "",
            errorMessage: "",
            loading: ""
        }, _this.onSubmit = function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(event) {
                var campaign, accounts;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log("check");
                                event.preventDefault();
                                campaign = (0, _campaign2.default)(_this.props.address);

                                console.log("campaign", campaign);
                                _this.setState({ loading: true });
                                _context.prev = 5;
                                _context.next = 8;
                                return _web2.default.eth.getAccounts();

                            case 8:
                                accounts = _context.sent;

                                console.log("accounts", accounts);
                                _context.next = 12;
                                return campaign.methods.contribute().send({
                                    from: accounts[0],
                                    value: _web2.default.utils.toWei(_this.state.value, 'ether')
                                });

                            case 12:
                                _routes.Router.replaceRoute("/campaigns/" + _this.props.address);
                                _context.next = 18;
                                break;

                            case 15:
                                _context.prev = 15;
                                _context.t0 = _context["catch"](5);

                                _this.setState({ errorMessage: _context.t0.message });

                            case 18:
                                _this.setState({ loading: false, value: "" });

                            case 19:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, _this2, [[5, 15]]);
            }));

            return function (_x) {
                return _ref2.apply(this, arguments);
            };
        }(), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(contributeForm, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(_semanticUiReact.Form, { onSubmit: this.onSubmit, error: !!this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement("label", {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, "Amount"), _react2.default.createElement(_semanticUiReact.Input, {
                label: "ether",
                labelPosition: "right",
                value: this.state.value,
                onChange: function onChange(event) {
                    return _this3.setState({ value: event.target.value });
                }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: "oops", content: this.state.errorMessage, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 48
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { primary: true, loading: this.state.loading, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 49
                }
            }, "contribute"));
        }
    }]);

    return contributeForm;
}(_react.Component);

exports.default = contributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvQ29udHJpYnV0ZUZvcm0uanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiSW5wdXQiLCJNZXNzYWdlIiwiQnV0dG9uIiwiQ2FtcGFpZ24iLCJ3ZWIzIiwiUm91dGVyIiwiY29udHJpYnV0ZUZvcm0iLCJzdGF0ZSIsInZhbHVlIiwiZXJyb3JNZXNzYWdlIiwibG9hZGluZyIsIm9uU3VibWl0IiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwicHJldmVudERlZmF1bHQiLCJjYW1wYWlnbiIsInByb3BzIiwiYWRkcmVzcyIsInNldFN0YXRlIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsIm1ldGhvZHMiLCJjb250cmlidXRlIiwic2VuZCIsImZyb20iLCJ1dGlscyIsInRvV2VpIiwicmVwbGFjZVJvdXRlIiwibWVzc2FnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBTSxBQUFROztBQUU3QixBQUFPLEFBQWM7Ozs7QUFDckIsQUFBTyxBQUFVOzs7O0FBRWpCLEFBQVMsQUFBYzs7Ozs7OztJQUVqQixBOzs7Ozs7Ozs7Ozs7Ozs7Z08sQUFDRjttQkFBUSxBQUNFLEFBQ047MEJBRkksQUFFUyxBQUNiO3FCLEFBSEksQUFHSTtBQUhKLEFBQ0osaUJBSUosQTtpR0FBVyxpQkFBQSxBQUFNLE9BQU47OEJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBQ1A7d0NBQUEsQUFBUSxJQUFSLEFBQVksQUFDWjtzQ0FBQSxBQUFNLEFBQ0E7QUFIQywyQ0FHVSx3QkFBUyxNQUFBLEFBQUssTUFIeEIsQUFHVSxBQUFvQixBQUNyQzs7d0NBQUEsQUFBUSxJQUFSLEFBQVksWUFBWixBQUF1QixBQUN2QjtzQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQUxSLEFBS1AsQUFBYyxBQUFTO2dEQUxoQjtnREFBQTt1Q0FPb0IsY0FBQSxBQUFLLElBUHpCLEFBT29CLEFBQVM7O2lDQUExQjtBQVBILG9EQVFIOzt3Q0FBQSxBQUFRLElBQVIsQUFBWSxZQVJULEFBUUgsQUFBdUI7Z0RBUnBCO2dEQVNHLEFBQVMsUUFBVCxBQUFpQixhQUFqQixBQUE4QjswQ0FDM0IsU0FEZ0MsQUFDaEMsQUFBUyxBQUNkOzJDQUFNLGNBQUEsQUFBSyxNQUFMLEFBQVcsTUFBTSxNQUFBLEFBQUssTUFBdEIsQUFBNEIsT0FYbkMsQUFTRyxBQUFtQyxBQUUvQixBQUFrQztBQUZILEFBQ3JDLGlDQURFOztpQ0FJTjsrQ0FBQSxBQUFPLDZCQUEyQixNQUFBLEFBQUssTUFicEMsQUFhSCxBQUE2QztnREFiMUM7QUFBQTs7aUNBQUE7Z0RBQUE7Z0VBZUg7O3NDQUFBLEFBQUssU0FBUyxFQUFDLGNBQWEsWUFmekIsQUFlSCxBQUFjLEFBQWtCOztpQ0FFcEM7c0NBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE9BQU0sT0FqQnRCLEFBaUJQLEFBQWMsQUFBcUI7O2lDQWpCNUI7aUNBQUE7Z0RBQUE7O0FBQUE7eUNBQUE7QTs7Ozs7Ozs7OztpQ0FtQkg7eUJBQ0o7O21DQUNJLEFBQUMsdUNBQUssVUFBVSxLQUFoQixBQUFxQixVQUFVLE9BQU8sQ0FBQyxDQUFDLEtBQUEsQUFBSyxNQUE3QyxBQUFtRDs4QkFBbkQ7Z0NBQUEsQUFDSTtBQURKO2FBQUEsa0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFESixBQUNJLEFBR0EsMkJBQUEsQUFBQzt1QkFBRCxBQUNNLEFBQ047K0JBRkEsQUFFYyxBQUNkO3VCQUFPLEtBQUEsQUFBSyxNQUhaLEFBR2tCLEFBQ2xCOzBCQUFVLHlCQUFBOzJCQUFTLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTSxNQUFBLEFBQU0sT0FBcEMsQUFBUyxBQUFjLEFBQW9CO0FBSnJEOzhCQUFBO2dDQUxSLEFBQ0ksQUFJSSxBQU9KO0FBUEk7QUFDQSxpQ0FNSixBQUFDLDBDQUFRLE9BQVQsTUFBZSxRQUFmLEFBQXNCLFFBQU8sU0FBUyxLQUFBLEFBQUssTUFBM0MsQUFBaUQ7OEJBQWpEO2dDQVpKLEFBWUksQUFDQTtBQURBO2dDQUNBLEFBQUMseUNBQU8sU0FBUixNQUFnQixTQUFTLEtBQUEsQUFBSyxNQUE5QixBQUFvQzs4QkFBcEM7Z0NBQUE7QUFBQTtlQWRSLEFBQ0ksQUFhSSxBQUtYOzs7OztBQTdDd0IsQSxBQWdEN0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2Fua2l0bWFsaG90cmEvcmVhY3QtcHVibGljL2tpY2tzdGFydCJ9

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "/Users/ankitmalhotra/react-public/kickstart/components/ContributeForm.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/ankitmalhotra/react-public/kickstart/components/ContributeForm.js"); } } })();

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lMWI5ZjViNTIwODIyMWYxYjkzMy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcz82NzMyNDY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb3JtLCBJbnB1dCxNZXNzYWdlLEJ1dHRvbiB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xuXG5pbXBvcnQgQ2FtcGFpZ24gZnJvbSBcIi4vLi4vZXRoZXJldW0vY2FtcGFpZ24uanNcIjtcbmltcG9ydCB3ZWIzIGZyb20gXCIuLy4uL2V0aGVyZXVtL3dlYjMuanNcIjtcblxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIi4vLi4vcm91dGVzLmpzXCI7XG5cbmNsYXNzIGNvbnRyaWJ1dGVGb3JtIGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIHN0YXRlID0ge1xuICAgICAgICB2YWx1ZTpcIlwiLFxuICAgICAgICBlcnJvck1lc3NhZ2U6XCJcIixcbiAgICAgICAgbG9hZGluZzpcIlwiXG4gICAgfVxuICAgIG9uU3VibWl0ID0gYXN5bmMoZXZlbnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja1wiKTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgY2FtcGFpZ24gPSBDYW1wYWlnbih0aGlzLnByb3BzLmFkZHJlc3MpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImNhbXBhaWduXCIsY2FtcGFpZ24pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOnRydWV9KVxuICAgICAgICB0cnl7XG4gICAgICAgICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdlYjMuZXRoLmdldEFjY291bnRzKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFjY291bnRzXCIsYWNjb3VudHMpO1xuICAgICAgICAgICAgYXdhaXQgY2FtcGFpZ24ubWV0aG9kcy5jb250cmlidXRlKCkuc2VuZCh7XG4gICAgICAgICAgICAgICAgZnJvbTphY2NvdW50c1swXSxcbiAgICAgICAgICAgICAgICB2YWx1ZTp3ZWIzLnV0aWxzLnRvV2VpKHRoaXMuc3RhdGUudmFsdWUsJ2V0aGVyJylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBSb3V0ZXIucmVwbGFjZVJvdXRlKGAvY2FtcGFpZ25zLyR7dGhpcy5wcm9wcy5hZGRyZXNzfWApICAgIFxuICAgICAgICB9Y2F0Y2goZXJyKXtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2Vycm9yTWVzc2FnZTplcnIubWVzc2FnZX0pOyAgICBcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtsb2FkaW5nOmZhbHNlLHZhbHVlOlwiXCJ9KTtcbiAgICB9XG4gICAgcmVuZGVyKCl7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Rm9ybSBvblN1Ym1pdD17dGhpcy5vblN1Ym1pdH0gZXJyb3I9eyEhdGhpcy5zdGF0ZS5lcnJvck1lc3NhZ2V9PlxuICAgICAgICAgICAgICAgIDxGb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICBBbW91bnRcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IFxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV0aGVyXCIgXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiIFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PiB0aGlzLnNldFN0YXRlKHt2YWx1ZTpldmVudC50YXJnZXQudmFsdWV9KX0+XG4gICAgICAgICAgICAgICAgICAgIDwvSW5wdXQ+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkZpZWxkPlxuICAgICAgICAgICAgICAgIDxNZXNzYWdlIGVycm9yIGhlYWRlcj1cIm9vcHNcIiBjb250ZW50PXt0aGlzLnN0YXRlLmVycm9yTWVzc2FnZX0+PC9NZXNzYWdlPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gcHJpbWFyeSBsb2FkaW5nPXt0aGlzLnN0YXRlLmxvYWRpbmcgfT5cbiAgICAgICAgICAgICAgICAgICAgIGNvbnRyaWJ1dGVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udHJpYnV0ZUZvcm07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Db250cmlidXRlRm9ybS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSUE7QUFDQTs7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFIQTtBQUNBO0FBR0E7QUFDQTtBQUxBO0FBQUE7QUFPQTtBQUNBO0FBREE7QUFQQTtBQUNBO0FBT0E7QUFSQTtBQVNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUFBO0FBYkE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQWVBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBbEJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQW1CQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUpBO0FBQUE7QUFPQTtBQVBBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUtBOzs7Ozs7O0FBR0E7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==